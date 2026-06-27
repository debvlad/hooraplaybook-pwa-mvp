# HooraPlaybook PWA MVP

HooraPlaybook is a mobile-first progressive web app prototype for a smart game-planning assistant for youth leaders, teachers, children’s workers, camp leaders, and facilitators.

This generated MVP includes:

- Mobile-first PWA shell
- App install manifest and service worker
- Login/signup demo flow
- Smart Finder with fit scoring
- Game list, category/no-prep filters, sort modal, and clickable mobile cards
- Game detail pages with sticky actions
- Reviews and 5-star rating flow
- Private leader notes
- Favorites with free-plan limit and My Plans management
- PRO-only My Plans session builder with save, view, rename, delete
- User game submission flow
- Batch Markdown upload for multiple `.md` game files
- Admin dashboard
- Admin user management with visible Grant 30 days and Disable controls
- Admin coupon generation and redemption
- Staff/admin submission publishing
- Saved plan view
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
/app/plan             My Plans builder and saved plans list
/app/plan/:id          Saved plan detail
/app/favorites        Favorites
/app/submit           Submit game
/app/account          Account and coupon redemption
/admin                Admin dashboard
/admin/users          User management
/admin/coupons        Coupon generation
/admin/submissions    Submission moderation
/admin/games          Game management

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


## Update: June 26, 2026 UI fixes

- Removed developer-facing Stripe implementation text from the pricing page.
- Fixed double-header rendering on game detail pages such as Pass the Pattern.
- Replaced the unclear filter glyph with a real filter icon asset at `assets/filter.png`.

## Latest Update

This build adds the standard HooraPlaybook category system:

- Quick and simple
- Wet-n-Wild
- Team-building
- Teams
- Circle
- Icebreakers
- Adventure
- Tag
- Sport-n-fitness
- Theatrical
- Relays

Manual game submission now requires one category. Batch `.md` upload reads `## Categories` / `Category:` and normalizes common aliases to the standard list.

`Untested` and `Not Recommended` have been removed as app tags/labels. Games are no longer hidden from regular user game lists because of a `Not Recommended` legacy value; imported `Not Recommended` safety text is normalized to `Use With Caution`.

The entire game card is explicitly clickable from the Games section and Smart Finder results.


## Latest corrections included

- Admin user management no longer requires horizontal scrolling; Grant 30 days and Disable are visible on the initial screen.
- Game cards open game detail pages and start at the top of the page.
- Search no longer loses focus after one character.
- Tags/filters at the bottom of game detail pages are clickable and open a filtered game list.
- Filter page includes the standard categories and a No Prep filter.
- Sort options are: Best Match, Most Liked, Most Reviewed, Highest Rated, Newest First, Alphabetical.
- “Collections” language has been replaced with My Plans.
- My Plans can be saved with a custom name, viewed, renamed, deleted, and include clickable games.
- Account settings include separate App Language and Game Content Language controls for English/Russian.
- Games are not duplicated by language; the same game record contains a `translations` object for Russian content.

## Latest UI Corrections — June 27, 2026

- Game detail pages render with one header only: back arrow, HooraPlaybook logo, and Apple-style share icon.
- Share actions copy/share only the canonical game URL, not the description text.
- Display typography has been reduced by roughly 30% in visual weight for a lighter Fredoka look.
- Game detail cards no longer show full-screen display actions.

## Latest visual refresh

This build uses the uploaded HooraPlaybook logo/wordmark assets, switches the UI typography to Poppins, and refreshes the app visual language toward the approved landing-page direction: white/cream surfaces, navy text, purple primary actions, pastel cards, and cleaner rounded controls.

Deployment remains static PWA deployment: sync the folder and deploy the folder directly. No production build step is required for the static prototype.

## Latest UI Corrections

- Added the HooraPlaybook logo mark to the app header and PWA icon assets.
- Updated all in-app back buttons to use a left-chevron “return to previous page” symbol inside a circular hover/tap area.
- Admin Users now renders as responsive cards instead of a horizontally scrolling table, keeping **Grant 30 days** and **Disable / Enable** visible on the initial screen.
- Reworked My Plans so PRO users can build a plan, name it, save it, view saved plans, rename plans, delete plans, and open each game in a saved plan.
- Replaced Purpose selection with standard Categories on Add Games, Smart Finder, filters, search, Markdown parsing, and production schema notes.
- Standard categories: Quick and simple, Wet-n-Wild, Team-building, Teams, Circle, Icebreakers, Adventure, Tag, Sport-n-fitness, Theatrical, Relays.


## Latest UI Icon Update

- Share actions use `assets/ios-share.svg`, the uploaded iOS-style share icon.
- Filter actions use `assets/filter.png`.
- Sort actions use `assets/sort.png`.
- Game category chips wrap instead of forcing a horizontal scrollbar.

## Latest UI Fixes

- Removed the redundant quick category chip strip from the Games screen. Categories now live in the Filter screen.
- Fixed game-card navigation so opening a game scrolls to the top of the detail page.
- Fixed the double-header behavior by preventing full-page routes from being wrapped in the app shell twice.
- Restored dedicated image assets for Filter, Sort, and iOS-style Share icons.
- Updated the Filter screen to use standard Categories and include No Prep / Low Prep.

## Current Locked Implementation Notes

This build preserves `LOCKED_FIXES.md` and applies new fixes as surgical patches only.

- App headers are light, not dark.
- Game detail pages use one header only.
- Game detail header includes circular back chevron, logo mark, wordmark, and iOS share icon.
- Add Game, Smart Finder, filtering, search, and My Plans use **Categories**, not a user-facing Purpose selector.
- Standard categories are: Quick and simple, Wet-n-Wild, Team-building, Teams, Circle, Icebreakers, Adventure, Tag, Sport-n-fitness, Theatrical, Relays.
- Full-screen display-mode entry points are removed.
- My Plans supports naming, saving, viewing, renaming, deleting, and clickable games.
- Admin > Users uses responsive cards with Grant 30 Days and Disable/Enable visible without horizontal scrolling.

## Latest locked patch

- All app headers use `assets/back_button.png` for the back chevron.
- Header back behavior uses the internal route stack so opening a game from My Plans returns to the current Plan page.
- Game/detail headers remain light and single-header only.
- Add Game, Smart Finder, and My Plans use Categories, not Purpose.
- Full-screen display-mode entry points remain removed.


## Locked UI Rules

- Game detail pages do not show Download / Print PDF.
- Game detail actions are Rate This Game, Add Notes, and Add to Plan.
- Plan Available materials is a navigation button to material chips, with No Materials first.

## Latest locked UI update

- Smart Finder now uses `Available Materials` as a navigation button, not a text input.
- Smart Finder no longer displays preview result cards under the `Find 3 Great Games` button.
- Header wordmark text is live text and reduced by about 20%.
- The Plan page now focuses on saved plans; the old plan creation form section is removed.
- Saved plan cards now include Modify, Rename, and Delete.
- Modify Plan supports drag reordering and iOS-style swipe-left Remove on plan games.
