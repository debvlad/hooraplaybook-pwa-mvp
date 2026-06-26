import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  const authHeader = req.headers.get('Authorization');
  const userClient = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader! } } });
  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const { data: userData } = await userClient.auth.getUser();
  if (!userData.user) return json({ error: 'Not authenticated' }, 401);

  const { files = [] } = await req.json().catch(() => ({}));
  if (!Array.isArray(files) || files.length === 0) return json({ error: 'No files provided' }, 400);

  const { data: batch, error: batchError } = await admin.from('game_import_batches').insert({ uploaded_by: userData.user.id, original_file_count: files.length, status: 'processing' }).select('*').single();
  if (batchError) return json({ error: batchError.message }, 500);

  let imported = 0;
  let failed = 0;
  const errors: unknown[] = [];

  for (const file of files) {
    const sourceFilename = String(file.fileName || 'game.md');
    const rawMarkdown = String(file.markdown || '');
    const parsedPayload = parseBasicMarkdown(rawMarkdown, sourceFilename);
    const validationErrors = validate(parsedPayload);
    const status = validationErrors.length ? 'failed' : 'submitted';
    if (status === 'failed') { failed += 1; errors.push({ sourceFilename, validationErrors }); } else imported += 1;

    const { data: submission } = validationErrors.length ? { data: null } : await admin.from('game_submissions').insert({ submitted_by: userData.user.id, status: 'submitted', source_type: 'batch_md', source_filename: sourceFilename, import_batch_id: batch.id, payload: parsedPayload }).select('id').single();
    await admin.from('game_import_items').insert({ import_batch_id: batch.id, submitted_by: userData.user.id, source_filename: sourceFilename, raw_markdown: rawMarkdown, parsed_payload: parsedPayload, validation_errors: validationErrors, status, submission_id: submission?.id ?? null });
  }

  await admin.from('game_import_batches').update({ imported_count: imported, failed_count: failed, status: failed ? 'partially_failed' : 'processed', error_summary: errors.length ? JSON.stringify(errors) : null, completed_at: new Date().toISOString() }).eq('id', batch.id);
  return json({ batch_id: batch.id, imported, failed, errors });
});

function parseBasicMarkdown(markdown: string, fileName: string) {
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || fileName.replace(/\.(md|markdown)$/i, '').replace(/[-_]/g, ' ');
  const description = section(markdown, 'One-sentence description') || section(markdown, 'Short description') || section(markdown, 'Description') || `${title} game.`;
  return { title, shortDescription: description.trim(), howToPlay: section(markdown, 'How to play'), safetyNotes: section(markdown, 'Safety notes'), rawMarkdown: markdown, sourceFilename: fileName };
}
function section(md: string, name: string) {
  const escaped = escapeRegExp(name);
  const re = new RegExp(`^##\\s+${escaped}\\s*\\n([\\s\\S]*?)(?=\\n##\\s+|$)`, 'im');
  return md.match(re)?.[1]?.trim() || '';
}
function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function validate(payload: Record<string, unknown>) {
  const errors: string[] = [];
  if (!payload.title) errors.push('Missing title');
  if (!payload.shortDescription) errors.push('Missing one-sentence description');
  if (!payload.howToPlay) errors.push('Missing how to play');
  if (!payload.safetyNotes) errors.push('Missing safety notes');
  return errors;
}
function json(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }); }
