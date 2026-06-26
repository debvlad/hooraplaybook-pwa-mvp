import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@14?target=denonext';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, { apiVersion: '2024-11-20' });
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return json({ error: 'Missing Authorization header' }, 401);

  const supabaseUserClient = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data, error } = await supabaseUserClient.auth.getUser();
  if (error || !data.user) return json({ error: 'Not authenticated' }, 401);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer_email: data.user.email ?? undefined,
    line_items: [{ price: Deno.env.get('STRIPE_PRICE_PRO_YEARLY')!, quantity: 1 }],
    success_url: `${Deno.env.get('APP_URL')}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${Deno.env.get('APP_URL')}/billing/cancelled`,
    client_reference_id: data.user.id,
    metadata: { supabase_user_id: data.user.id, app: 'HooraPlaybook' },
    subscription_data: { metadata: { supabase_user_id: data.user.id, app: 'HooraPlaybook' } },
    allow_promotion_codes: true,
  });

  return json({ url: session.url });
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}
