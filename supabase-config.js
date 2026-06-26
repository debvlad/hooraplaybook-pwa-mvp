window.HOORA_SUPABASE_URL = https://wgmqgmzncygmdttqnrdz.supabase.co;
window.HOORA_SUPABASE_ANON_KEY = sb_publishable_R3___2g-GAZdvEVRcrB9sA_fDQat-5H;

window.hooraSupabase = window.supabase.createClient(
  window.HOORA_SUPABASE_URL,
  window.HOORA_SUPABASE_ANON_KEY
);

console.log('HooraPlaybook Supabase client loaded');