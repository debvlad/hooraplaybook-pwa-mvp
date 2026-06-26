import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  const authHeader = req.headers.get('Authorization');
  const { code } = await req.json();
  const userClient = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: authHeader! } } });
  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const { data: userData } = await userClient.auth.getUser();
  if (!userData.user) return json({ error: 'Not authenticated' }, 401);

  const { data: coupon, error } = await admin.from('coupons').select('*').eq('display_code', String(code).toUpperCase()).maybeSingle();
  if (error || !coupon) return json({ error: 'Coupon not found' }, 404);
  if (coupon.disabled || coupon.redeemed_by) return json({ error: 'Coupon is not available' }, 400);
  if (coupon.expires_at && new Date(coupon.expires_at) < new Date()) return json({ error: 'Coupon expired' }, 400);

  const expires = new Date(); expires.setDate(expires.getDate() + (coupon.duration_days || 30));
  await admin.from('coupons').update({ redeemed_by: userData.user.id, redeemed_at: new Date().toISOString() }).eq('id', coupon.id);
  await admin.from('access_grants').insert({ user_id: userData.user.id, grant_type: 'coupon', plan: 'pro', expires_at: expires.toISOString(), coupon_id: coupon.id, source: 'coupon' });
  return json({ ok: true, expires_at: expires.toISOString() });
});

function json(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }); }
