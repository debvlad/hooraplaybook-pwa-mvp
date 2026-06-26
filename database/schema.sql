-- HooraPlaybook PWA MVP Supabase schema
-- Run in Supabase SQL editor after enabling Auth.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('admin','staff','user')),
  plan text not null default 'free' check (plan in ('free','pro')),
  access_status text not null default 'inactive',
  access_expires_at timestamptz,
  disabled boolean not null default false,
  organization_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  price_id text,
  plan text not null default 'pro',
  status text not null default 'inactive',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  founding_member boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code_hash text not null unique,
  display_code text unique,
  benefit_type text not null default 'one_free_month_pro',
  duration_days integer not null default 30,
  starts_at timestamptz,
  expires_at timestamptz,
  redeemed_at timestamptz,
  redeemed_by uuid references auth.users(id),
  disabled boolean not null default false,
  campaign_name text,
  notes text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  grant_type text not null,
  plan text not null default 'pro',
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  source text,
  coupon_id uuid references public.coupons(id),
  notes text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.games (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  short_description text not null,
  description text,
  access_level text not null default 'free' check (access_level in ('free','pro')),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  featured boolean not null default false,
  tested boolean not null default false,
  purpose text[] not null default '{}',
  best_age_min integer,
  best_age_max integer,
  min_recommended_age integer,
  group_size_min integer,
  group_size_max integer,
  ideal_group_size text,
  time_min_minutes integer,
  time_max_minutes integer,
  indoor_outdoor text not null default 'both',
  space_required text,
  materials_summary text,
  prep_time_minutes integer,
  leader_difficulty text,
  setup_instructions text,
  how_to_play text,
  leader_script text,
  rules text,
  win_condition text,
  safety_notes text,
  avoid_with text,
  requires text,
  variations text,
  make_it_easier text,
  make_it_harder text,
  debrief_questions text[],
  bible_bridge text,
  scripture_references text[],
  creator_name text,
  source_url text,
  view_count integer not null default 0,
  average_rating numeric(3,2) not null default 0,
  rating_count integer not null default 0,
  review_count integer not null default 0,
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.game_safety_profiles (
  game_id uuid primary key references public.games(id) on delete cascade,
  physical_risk text,
  emotional_risk text,
  social_risk text,
  developmental_risk text,
  ministry_risk text,
  logistical_risk text,
  liability_risk text,
  overall_safety_rating text,
  developmental_fit text[],
  contact_level text,
  embarrassment_risk text,
  competition_level text,
  noise_level text,
  energy_level text,
  food_allergy_risk boolean not null default false,
  mess_level text,
  setup_complexity text,
  supervision_required text,
  safety_tags text[] not null default '{}',
  reviewer_notes text,
  publish_status text not null default 'needs_edits',
  updated_at timestamptz not null default now()
);

create table if not exists public.materials (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  normalized_name text not null unique,
  icon text,
  created_at timestamptz not null default now()
);

create table if not exists public.game_materials (
  game_id uuid references public.games(id) on delete cascade,
  material_id uuid references public.materials(id) on delete cascade,
  quantity text,
  optional boolean not null default false,
  primary key (game_id, material_id)
);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  category text not null default 'general',
  created_at timestamptz not null default now()
);

create table if not exists public.game_tags (
  game_id uuid references public.games(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (game_id, tag_id)
);

create table if not exists public.game_media (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references public.games(id) on delete cascade,
  media_type text not null,
  storage_path text not null,
  thumbnail_path text,
  title text,
  alt_text text,
  sort_order integer not null default 0,
  access_level text not null default 'free',
  approved boolean not null default true,
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.favorites (
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, game_id)
);

create table if not exists public.collections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  organization_id uuid,
  name text not null,
  description text,
  visibility text not null default 'private',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.collection_games (
  collection_id uuid references public.collections(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  sort_order integer not null default 0,
  added_at timestamptz not null default now(),
  primary key (collection_id, game_id)
);

create table if not exists public.ratings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  review_text text,
  review_status text not null default 'published',
  media_status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, game_id)
);

create table if not exists public.rating_media (
  id uuid primary key default gen_random_uuid(),
  rating_id uuid references public.ratings(id) on delete cascade,
  media_type text not null,
  storage_path text not null,
  thumbnail_path text,
  moderation_status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.game_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  note_text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, game_id)
);

create table if not exists public.played_games (
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  played_at timestamptz not null default now(),
  notes text,
  primary key (user_id, game_id, played_at)
);

create table if not exists public.game_submissions (
  id uuid primary key default gen_random_uuid(),
  submitted_by uuid references auth.users(id) on delete set null,
  status text not null default 'draft',
  payload jsonb not null default '{}',
  admin_notes text,
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  published_game_id uuid references public.games(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.session_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  total_minutes integer,
  group_size integer,
  age_min integer,
  age_max integer,
  indoor_outdoor text,
  materials_available text[],
  purpose text[],
  include_bible_bridge boolean not null default false,
  plan_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.session_plan_items (
  id uuid primary key default gen_random_uuid(),
  session_plan_id uuid references public.session_plans(id) on delete cascade,
  game_id uuid references public.games(id),
  item_type text not null,
  title text not null,
  start_minute integer,
  duration_minutes integer,
  leader_notes text,
  sort_order integer not null default 0
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create or replace function public.user_has_pro_access(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = uid
      and p.disabled = false
      and (p.role in ('admin','staff') or (p.plan = 'pro' and p.access_status = 'active' and (p.access_expires_at is null or p.access_expires_at > now())))
  )
  or exists (
    select 1 from public.subscriptions s
    where s.user_id = uid and s.status in ('active','trialing') and (s.current_period_end is null or s.current_period_end > now())
  )
  or exists (
    select 1 from public.access_grants g
    where g.user_id = uid and g.plan = 'pro' and g.starts_at <= now() and g.expires_at > now()
  );
$$;

create or replace function public.recalculate_game_rating(game_uuid uuid)
returns void
language plpgsql
security definer
as $$
begin
  update public.games g
  set average_rating = coalesce((select round(avg(rating)::numeric, 2) from public.ratings where game_id = game_uuid), 0),
      rating_count = (select count(*) from public.ratings where game_id = game_uuid),
      review_count = (select count(*) from public.ratings where game_id = game_uuid and nullif(trim(review_text), '') is not null),
      updated_at = now()
  where g.id = game_uuid;
end;
$$;

create or replace function public.rating_after_change()
returns trigger
language plpgsql
security definer
as $$
begin
  perform public.recalculate_game_rating(coalesce(new.game_id, old.game_id));
  return coalesce(new, old);
end;
$$;

drop trigger if exists ratings_recalculate_after_insert_update_delete on public.ratings;
create trigger ratings_recalculate_after_insert_update_delete
after insert or update or delete on public.ratings
for each row execute procedure public.rating_after_change();

alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.games enable row level security;
alter table public.game_safety_profiles enable row level security;
alter table public.favorites enable row level security;
alter table public.collections enable row level security;
alter table public.collection_games enable row level security;
alter table public.ratings enable row level security;
alter table public.rating_media enable row level security;
alter table public.game_notes enable row level security;
alter table public.played_games enable row level security;
alter table public.game_submissions enable row level security;
alter table public.session_plans enable row level security;
alter table public.session_plan_items enable row level security;
alter table public.coupons enable row level security;
alter table public.access_grants enable row level security;
alter table public.audit_logs enable row level security;

create policy "read own profile" on public.profiles for select using (auth.uid() = id or public.user_has_pro_access(auth.uid()));
create policy "update own profile basic" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "read own subscription" on public.subscriptions for select using (auth.uid() = user_id);
create policy "read published free games" on public.games for select using (status = 'published' and access_level = 'free');
create policy "read published pro games with access" on public.games for select using (status = 'published' and access_level = 'pro' and public.user_has_pro_access(auth.uid()));
create policy "users manage own favorites" on public.favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage own ratings" on public.ratings for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage own notes" on public.game_notes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users manage own submissions" on public.game_submissions for all using (auth.uid() = submitted_by) with check (auth.uid() = submitted_by);
create policy "users manage own session plans" on public.session_plans for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Batch Markdown import support for HooraPlaybook.
alter table public.game_submissions
  add column if not exists source_type text not null default 'manual',
  add column if not exists source_filename text,
  add column if not exists import_batch_id uuid;

create table if not exists public.game_import_batches (
  id uuid primary key default gen_random_uuid(),
  uploaded_by uuid references auth.users(id) on delete set null,
  original_file_count integer not null default 0,
  imported_count integer not null default 0,
  failed_count integer not null default 0,
  publish_mode text not null default 'moderation' check (publish_mode in ('moderation','publish_now')),
  status text not null default 'processed' check (status in ('processing','processed','failed','partially_failed')),
  error_summary text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.game_import_items (
  id uuid primary key default gen_random_uuid(),
  import_batch_id uuid references public.game_import_batches(id) on delete cascade,
  submitted_by uuid references auth.users(id) on delete set null,
  source_filename text not null,
  raw_markdown text,
  parsed_payload jsonb not null default '{}',
  validation_errors text[] not null default '{}',
  status text not null default 'submitted' check (status in ('submitted','published','rejected','failed')),
  submission_id uuid references public.game_submissions(id),
  published_game_id uuid references public.games(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'game_submissions_import_batch_fk'
  ) then
    alter table public.game_submissions
      add constraint game_submissions_import_batch_fk
      foreign key (import_batch_id) references public.game_import_batches(id) on delete set null;
  end if;
end $$;

alter table public.game_import_batches enable row level security;
alter table public.game_import_items enable row level security;

create policy "users read own import batches" on public.game_import_batches for select using (auth.uid() = uploaded_by or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','staff') and p.disabled = false));
create policy "users create own import batches" on public.game_import_batches for insert with check (auth.uid() = uploaded_by);
create policy "users read own import items" on public.game_import_items for select using (auth.uid() = submitted_by or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role in ('admin','staff') and p.disabled = false));
create policy "users create own import items" on public.game_import_items for insert with check (auth.uid() = submitted_by);
