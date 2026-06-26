import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  const { quantity = 1, campaignName = '', expiresAt = null } = await req.json().catch(() => ({}));
  const qty = Math.max(1, Math.min(100, Number(quantity)));
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const coupons = Array.from({ length: qty }, () => ({ display_code: generateCode(), code_hash: crypto.randomUUID(), campaign_name: campaignName, expires_at: expiresAt }));
  const { data, error } = await supabase.from('coupons').insert(coupons).select('display_code,campaign_name,expires_at');
  if (error) return json({ error: error.message }, 500);
  return json({ coupons: data });
});

function generateCode() { const bytes = new Uint8Array(16); crypto.getRandomValues(bytes); return [...bytes].map(b => ALPHABET[b % ALPHABET.length]).join(''); }
function json(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }); }
