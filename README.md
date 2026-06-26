# HooraPlaybook PWA MVP

HooraPlaybook is a mobile-first progressive web app prototype for a smart game-planning assistant for youth leaders, teachers, children’s workers, camp leaders, and facilitators.

This generated MVP includes:

- Mobile-first PWA shell
- App install manifest and service worker
- Login/signup demo flow
- Smart Finder with fit scoring
- Game list, filters, sort modal, and mobile cards
- Game detail pages with sticky actions
- Reviews and 5-star rating flow
- Private leader notes
- Favorites with free-plan limit
- PRO-only session builder
- User game submission flow
- Batch Markdown upload for multiple `.md` game files
- Admin dashboard
- Admin user management
- Admin coupon generation and redemption
- Staff/admin submission publishing
- Projector mode
- Supabase database schema
- Supabase Edge Function starter files for Stripe Checkout, Stripe webhook, coupon generation, coupon redemption, and batch Markdown import

## Important Production Note

The current `index.html + app.js` version is a working local/static prototype. It uses `localStorage` and demo passwords so you can test the UX immediately without a backend.

For production, replace local demo auth/data with Supabase Auth, Supabase tables, RLS policies, and Edge Functions. The included `database/schema.sql` and `supabase/functions/*` files are the starting point for that production implementation.

## Run locally

From this folder:

```bash
npm install
npm run start
```

Open:

```txt
http://localhost:4173
```

You can also run any static server from this folder.

## Demo accounts

```txt
Admin: admin@hooraplaybook.app / admin123
Staff: staff@hooraplaybook.app / staff123
PRO:   pro@hooraplaybook.app / pro123
Free:  free@hooraplaybook.app / free123
```

## Key routes

```txt
/                     Landing page
/login                Login
/signup               Signup
/pricing              Pricing
/app/find             Smart Finder and game library
/filter               Full filter screen
/app/games/:id        Game detail
/app/games/:id/rate   Rate game
/app/games/:id/reviews Reviews
/app/plan             Session builder
/app/favorites        Favorites
/app/submit           Submit game
/app/account          Account and coupon redemption
/admin                Admin dashboard
/admin/users          User management
/admin/coupons        Coupon generation
/admin/submissions    Submission moderation
/admin/games          Game management
/projector/:id        Projector mode
```


## Batch Markdown Upload

Go to `/app/submit` and use **Batch Upload .MD Games** to select multiple Markdown files. Each file should contain one game and can be named like `cup_stack_relay.md`, `silent_builder.md`, or `rainy_day_backup.md`.

The parser supports common headings and labels such as:

```md
# Game Name

## One-sentence description
A short summary of the game.

## How to play
- Step one
- Step two

## Duration
10–15 minutes

## Group size
8–30

## Ages
12–18

## Materials needed
cups, paper

## Categories
Teamwork, Indoor, Low Prep

## Safety rating
Low Risk

## Safety notes
Use clear boundaries and active supervision.
```

Regular users can batch-upload games into moderation. Staff and admins can also check **publish valid Markdown files immediately** to import valid files straight into the local demo library. In production, keep the raw Markdown, parsed payload, source filename, and import batch metadata in Supabase for auditability.

## Stripe launch path

The app is designed for the launch path described in `STRIPE_PAID_ACCESS_INTEGRATION.md`:

1. Fast launch: Stripe Payment Link + manual or webhook-assisted access.
2. Production: authenticated Stripe Checkout Session + Stripe webhook + Supabase `subscriptions` table.
3. Never unlock paid access from the success page alone. The Stripe webhook should be the source of truth.

## Coupon system

Admin-generated demo coupons are exactly 16 characters and use this readability-safe alphabet:

```txt
ABCDEFGHJKLMNPQRSTUVWXYZ23456789
```

In the production Edge Function, coupon codes are hashed before storage.

## Production migration checklist

- [ ] Create Supabase project.
- [ ] Run `database/schema.sql`.
- [ ] Configure Supabase Auth email/password.
- [ ] Replace localStorage auth with Supabase Auth.
- [ ] Replace local game arrays with Supabase queries.
- [ ] Deploy `create-checkout-session` Edge Function.
- [ ] Deploy `stripe-webhook` Edge Function.
- [ ] Deploy `generate-coupons` and `redeem-coupon` Edge Functions.
- [ ] Set Stripe webhook events: `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`.
- [ ] Replace demo upgrade button with Stripe Checkout.
- [ ] Enforce favorite limit and access gates server-side.
- [ ] Add real storage buckets for game media, rating images, staff PDFs/slides, and optional raw Markdown import archives.
- [ ] Revalidate Markdown batch imports server-side before publishing.

## Files

```txt
index.html
styles.css
app.js
manifest.webmanifest
sw.js
offline.html
assets/icon-192.png
assets/icon-512.png
assets/icon-maskable-512.png
database/schema.sql
supabase/functions/create-checkout-session/index.ts
supabase/functions/stripe-webhook/index.ts
supabase/functions/generate-coupons/index.ts
supabase/functions/redeem-coupon/index.ts
supabase/functions/batch-import-games/index.ts
CODING_INSTRUCTIONS.MD
```
