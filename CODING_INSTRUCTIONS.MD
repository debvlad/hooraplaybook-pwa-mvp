# CODING_INSTRUCTIONS.MD

# HooraPlaybook PWA — Product, UI, Architecture, and Coding Instructions

**Product name:** HooraPlaybook  
**Product type:** Mobile-first Progressive Web App (PWA)  
**Core promise:** The fastest way to find or build a fun, safe, age-appropriate group game plan when a leader knows their group size, age, time, space, category, and materials.  
**Primary audience:** Youth leaders, children’s workers, camp leaders, teachers, homeschool co-op leaders, PE teachers, ministry leaders, and team-building facilitators.  
**Business model:** Freemium + PRO subscription + future team plan.  
**Primary stack:** React + Vite + TypeScript + Tailwind CSS + Supabase + Stripe + PWA service worker.

---

## 0. Non-Negotiable Product Direction

Do **not** build HooraPlaybook as a generic “database of games.” That is too broad, easy to copy, and not valuable enough.

Build HooraPlaybook as a **game-planning assistant**.

The core pain is not:

> “I cannot find any games.”

The real pain is:

> “I need the right game fast, for this exact group, with these exact constraints, and I do not want it to be awkward, unsafe, lame, hard to explain, or impossible with the materials I actually have.”

The app’s magic moment must happen within 30–60 seconds:

> “I have 14 teens, 20 minutes, indoors, only cups and paper. Give me 3 games that are not lame.”

Every feature, screen, database field, search filter, safety note, admin tool, and paid access rule should serve that moment.

---

## 1. Source Documents to Follow

The app must be coded according to these project source files:

- `LANDING_PAGE_TECHNICAL_BRIEF.md` — product positioning, audience architecture, visual tone, and app promise.
- `SAFETY.md` — safety-rating standard for every game, submission, and moderation workflow.
- `STRIPE_PAID_ACCESS_INTEGRATION.md` — Stripe paid-access flow, subscription structure, Supabase webhook model, and launch path.
- Character profile files — optional visual system for illustrations, onboarding, empty states, and original app artwork.

Use the attached screenshots as **UI/UX inspiration only**. Do not copy the Grow Games logo, brand, thumbnails, exact text, copyrighted content, or proprietary assets. Build an original HooraPlaybook interface that borrows the useful interaction patterns: mobile cards, dark header, large search, filter chips, rating flow, bottom navigation, sticky CTA bars, and simple leader-focused game detail pages.

---

## 2. MVP Feature Set

### 2.1 Smart Game Finder

The Smart Game Finder is the main product experience.

Users must be able to search and filter by:

- group size
- age range
- time available
- indoor / outdoor / both
- space type
- energy level
- materials available
- purpose
- safety level
- preparation time
- leader difficulty
- noise level
- contact level
- competition level
- ministry suitability
- no-prep / low-prep
- free / PRO availability

Category options should include exactly:

- Fun
- Icebreaker
- Teamwork
- Trust
- Communication
- Leadership
- Alignment
- Review
- Lesson Bridge
- Bible Bridge
- Calm Down
- Competition
- Party
- Camp
- Classroom
- PE
- No-Prep

The Smart Finder should support two entry modes:

1. **Guided mode:** user selects fields with buttons, sliders, chips, and checkboxes.
2. **Plain-language mode:** user types a prompt such as: “14 teens, 20 minutes, indoors, only cups, teamwork, not too embarrassing.” The app can initially parse this with simple keyword logic; later it can use AI.

### 2.2 Game Detail Page

Each game detail page must contain:

- title
- average star rating
- number of ratings
- “View Reviews” link
- favorite button
- played / unplayed marker
- quick summary
- “Works best for…” section
- materials needed
- preparation / setup instructions
- how to play
- leader script
- rules
- win condition or end condition
- safety notes
- “avoid with…” notes
- variations
- make it easier
- make it harder
- debrief questions
- optional Bible / lesson bridge
- tags / filters
- creator credit
- sticky bottom actions: Rate This Game, Add Notes, Add to Plan

### 2.3 Session Builder

The app must include a PRO-only session builder.

The session builder should support prompts such as:

- “Build me a 60-minute youth night.”
- “Give me a 30-minute indoor backup plan for 20 teens.”
- “Plan a 90-minute camp game session with teamwork and a Bible bridge.”

A generated session plan should include:

- warm-up game
- main game
- backup game
- transition notes
- discussion bridge
- optional Scripture bridge
- estimated timing
- materials list combined across all games
- safety notes summary
- leader script summary

### 2.4 Favorites and My Plans

Free users may save only **3 favorites**.

PRO users may save unlimited favorites and create unlimited My Plans.

Collection examples:

- Small Youth Group
- Rainy Day Indoor Games
- No-Prep Games
- Camp Games
- Trust-Building Games
- Bible Bridge Games
- High-Energy Relays
- Games for Shy Teens

### 2.5 Submission System

Users must be able to submit games through a structured form.

Submission must require:

- game title
- one-sentence description
- full description
- purpose
- best age range
- minimum recommended age
- tested-with group size
- ideal group size
- time required
- indoor/outdoor
- space required
- materials needed
- setup instructions
- rules / how to play
- win condition / end condition
- leader script
- safety notes
- variations
- debrief questions
- optional Bible bridge
- creator name / credit preference
- images / video / downloadable files if available

Submissions must not publish automatically. They must enter admin/staff moderation.

### 2.5.1 Batch Markdown Upload System

In addition to the one-game-at-a-time submission form, HooraPlaybook must support batch uploading multiple games through Markdown files.

Core requirement:

- user selects multiple `.md` or `.markdown` files
- each file represents exactly one game
- recommended file naming convention: `game_name.md`
- parser reads common game headings and turns each file into a structured game payload
- every parsed game is validated for required fields
- regular users send batch-uploaded games to moderation
- staff and admins may optionally publish valid uploads immediately, but this should still create an import/audit record
- invalid files should not block the whole batch; import valid files and show a clear error list for failed files
- raw Markdown must be stored with the parsed payload so staff can review what the user actually uploaded

Required parser inputs:

```md
# Game Name

## One-sentence description
Short summary.

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

## Possible Bible verse
1 Corinthians 12:12–27

## Variations
Optional adaptations.

## Tips
Leader notes.

## Safety rating
Low Risk

## Safety notes
Use clear boundaries and active supervision.
```

Parser must also support inline label formats such as:

```md
**Name of the game:** Cup Stack Relay
**Duration:** 10–15 minutes
**Group size:** 8–30
**Ages:** 12–18
**Materials needed:** cups, paper
```

Minimum validation for each uploaded file:

- title exists
- one-sentence description exists
- how-to-play instructions exist
- safety notes exist

Recommended parsed fields:

- title
- shortDescription
- description
- purpose
- tags/categories
- bestAgeMin / bestAgeMax
- groupSizeMin / groupSizeMax
- timeMin / timeMax
- indoorOutdoor
- space
- materials
- setup
- howToPlay
- leaderScript
- winCondition
- safety
- safetyNotes
- variations
- easier / harder
- debriefQuestions
- bibleBridge
- scripture
- sourceFilename
- rawMarkdown

Admin review screen must show source filename, parsed fields, raw Markdown, validation warnings, submitter, batch ID, and approve/reject actions.

### 2.6 Rating and Review System

Every game detail page must include a **Rate This Game** button.

When clicked, the user sees a mobile screen modeled after the supplied screenshot:

- dark top bar
- back arrow
- page title: `RATE THIS GAME`
- large white rounded rating card
- 5-star chooser
- review label
- textarea with placeholder `Write review`
- image upload block with plus button
- video upload block with plus button
- sticky dark bottom bar
- green primary submit button

A rating must include:

- 1–5 star value
- optional text review
- optional images
- optional videos

Rules:

- A user may submit only one rating per game.
- A user may edit their own rating later.
- Reviews with media should be visible only after moderation unless the reviewer is staff/admin.
- Average rating and rating count must update automatically.
- Game ranking should consider both relevance and ratings; ratings should not override fit.

### 2.7 Admin Panel

Admin panel must be web-responsive and usable on desktop and tablet.

Admin can:

- search users
- create new users
- edit user role
- edit plan / access level
- edit access expiration date
- disable access
- view subscription status
- view Stripe customer/subscription IDs
- create coupons
- batch-create coupons
- approve/reject/edit game submissions
- add games
- edit games
- delete games
- mark games as tested
- mark games as featured
- moderate reviews
- moderate uploaded media
- manage tags
- manage materials
- manage subscription access
- view audit logs

Staff can:

- add games
- edit games
- delete games
- review submissions
- mark games as tested
- feature games if allowed by admin setting

Staff cannot:

- manage users
- manage subscriptions
- create coupons
- change user roles
- disable access

---

## 3. User Roles, Plans, and Access Rules

### 3.1 Role Classes

There are three role classes:

1. `admin`
2. `staff`
3. `user`

Under `user`, there are two plan subclasses:

1. `free`
2. `pro`

Use separate fields for role and plan.

Example:

```ts
type UserRole = 'admin' | 'staff' | 'user';
type UserPlan = 'free' | 'pro';
type AccessStatus = 'active' | 'trialing' | 'past_due' | 'canceled' | 'expired' | 'disabled' | 'inactive';
```

### 3.2 Access Rules

Admins:

- full access to app
- full access to admin panel
- full content access regardless of subscription status

Staff:

- full game library access
- can add, edit, and delete games
- can moderate game submissions if allowed
- cannot manage billing or users

Free user:

- access to 50 free games
- basic search
- category browsing
- 3 saved favorites
- can submit games
- can rate games
- cannot use advanced filters
- cannot use session builder

PRO user:

- full game library
- advanced filters
- unlimited favorites
- My Plans
- session builder
- access to all future games while subscription is active

### 3.3 Access Expiration

Access must be checked server-side and client-side.

Paid access is valid only if:

- user is admin or staff, or
- user has active PRO subscription, or
- user has active coupon/manual access grant, and
- access expiration date is in the future, and
- account is not disabled.

Do not unlock paid access based only on frontend state.

---

## 4. Payment and Stripe Access Model

HooraPlaybook is a PWA, so use Stripe for direct payments.

### 4.1 Fast Launch Option

For the fastest launch, allow `STRIPE_PAYMENT_LINK_URL` as an environment variable and route CTA buttons to a Stripe Payment Link.

This is useful for early access / founding member sales.

But Payment Link unlock can be manual unless webhook automation is added.

### 4.2 Production Option

The production flow must use authenticated Stripe Checkout sessions and Stripe webhooks.

Flow:

1. User signs up or logs in.
2. User clicks `Upgrade to PRO` or `Become a Founding Member`.
3. Frontend calls Supabase Edge Function: `create-checkout-session`.
4. Backend creates a Stripe Checkout Session.
5. Checkout Session includes Supabase `user_id` in metadata.
6. User pays on Stripe Checkout.
7. Stripe sends webhook to `stripe-webhook` Edge Function.
8. Webhook updates `subscriptions` table.
9. App checks Supabase subscription state.
10. App unlocks PRO access.

Important rule:

> The success page must never be the source of truth for paid access. Stripe webhooks are the source of truth.

### 4.3 Subscription Plans

MVP paid plans:

```txt
Free: $0
PRO Monthly: $9/month
PRO Yearly: $50/year
Founding Member: $25/year, optional early-access campaign
Team Plan: $149/year, up to 5 seats — later phase
```

### 4.4 Billing Pages

Create these pages:

```txt
/pricing
/subscribe
/billing/success
/billing/cancelled
/account/billing
/admin/subscriptions
```

### 4.5 Billing Success Page

After Stripe redirects to `/billing/success`, show:

> Thank you! Your payment was received. Access usually unlocks in a few seconds.

Then poll the subscription status every 2 seconds for up to 20 seconds.

If still locked, show:

> Your payment may still be processing. Refresh the page in a moment or contact support.

### 4.6 Customer Portal

PRO users must have a `Manage Billing` button under Account.

This calls a backend function that creates a Stripe Customer Portal session.

---

## 5. Coupon / Discount System

Admin must be able to create one-time use coupons that grant **one free month of PRO access**.

### 5.1 Coupon Code Rules

Each coupon code must be:

- exactly 16 characters
- absolutely random
- alphanumeric
- uppercase for readability
- one-time use
- generated server-side only
- stored hashed if possible
- never predictable

Allowed characters:

```txt
ABCDEFGHJKLMNPQRSTUVWXYZ23456789
```

Avoid confusing characters such as `O`, `0`, `I`, `1`.

Example code format:

```txt
K7Q9M4T8XZ2P6B3R
```

### 5.2 Admin Coupon Creation

Admin can create:

- single coupon
- batch of coupons

Admin fields:

- quantity
- coupon type: `one_free_month_pro`
- starts at
- expires at
- notes
- internal campaign name

### 5.3 Coupon Redemption Flow

User enters coupon under:

```txt
/account/redeem
```

Flow:

1. User submits code.
2. Backend normalizes code to uppercase.
3. Backend checks code exists.
4. Backend checks not expired.
5. Backend checks not redeemed.
6. Backend creates `access_grant` for one month of PRO.
7. Backend marks coupon as redeemed.
8. User sees PRO unlocked until expiration date.

Coupon redemption must be transactional. Do not allow two users to redeem the same code simultaneously.

### 5.4 Coupon and Stripe Relationship

These free-month coupons are **in-app access coupons**, not necessarily Stripe promotion codes.

Stripe promotion codes can be added later for checkout discounts. For MVP, in-app coupons are simpler and better for admin-controlled free access.

---

## 6. UI Design System

### 6.1 General Feel

The app should feel:

- energetic
- leader-friendly
- polished
- mobile-native
- playful but not childish
- fast
- trustworthy
- safe
- practical

The app should feel less like Wikipedia and more like:

> “A youth leader’s game director in your pocket.”

### 6.2 Visual Direction From Screenshots

The attached screenshots show strong mobile patterns to model:

- dark top app bar
- centered logo/brand
- large rounded white search input
- horizontally scrollable category chips
- white rounded game cards with soft shadows
- small rounded green filter tags
- star ratings in yellow
- bottom tab navigation
- sticky bottom action bars
- filter screen with selectable pill chips
- sort modal as a bottom sheet
- rating page with star picker and media upload tiles
- reviews page with large rating summary card
- game detail pages with media carousel and large content sections
- large touch targets suitable for mobile

Do not copy the screenshots exactly. Use these as interaction references.

### 6.3 Recommended HooraPlaybook App Palette

Use the landing page’s energetic brand direction, but adapt it to an app UI inspired by the screenshots.

```css
--gp-ink: #15162C;
--gp-ink-2: #181D20;
--gp-cream: #FFF8E7;
--gp-surface: #FFFFFF;
--gp-page: #F4F5F3;
--gp-lime: #B8D77A;
--gp-lime-dark: #5C821A;
--gp-yellow: #FFD84D;
--gp-purple: #6C3BFF;
--gp-blue: #00B8FF;
--gp-coral: #FF5C7A;
--gp-mint: #42E6A4;
--gp-text: #20252B;
--gp-muted: #8A8F94;
--gp-border: #D9DEE2;
--gp-danger: #E5484D;
--gp-warning: #F59E0B;
--gp-success: #16A34A;
```

Primary app UI should use:

- dark header: `#181D20`
- primary action: lime `#B8D77A`
- text: `#20252B`
- muted text: `#8A8F94`
- page background: light warm gray `#F4F5F3`
- star rating: yellow `#FFD84D`

Use purple/blue/coral/mint as accents for session builder, onboarding, empty states, and paid-plan highlights.

### 6.4 Typography

Recommended:

- Headings: `Fredoka`, `Baloo 2`, or `Nunito Sans ExtraBold`
- Body: `Inter`
- Buttons: `Inter SemiBold`
- Game card titles: uppercase, bold, slightly italic optional

Important:

- Headers should be bold but not overly thick.
- Use large mobile-friendly sizes.
- Avoid tiny labels.

### 6.5 Spacing and Shape

Use:

- 16px page padding on mobile
- 24px page padding on tablet
- 16–24px border radius for cards
- 999px radius for chips
- 44px minimum touch target
- 72–84px bottom safe area for sticky bottom navigation
- `env(safe-area-inset-bottom)` for iPhone PWA support

### 6.6 Icons

Use `lucide-react` or a similar clean icon set.

Suggested bottom nav icons:

- Find: gamepad / search
- Plan: calendar / wand / sparkles
- Favorites: heart
- Add: plus circle
- Account: user
- Admin: shield / settings

---

## 7. App Shell and Navigation

### 7.1 Mobile App Shell

Every authenticated app screen should use a mobile-first app shell:

```txt
┌─────────────────────────┐
│ dark top header          │
│ logo/title/actions       │
├─────────────────────────┤
│ page content             │
│                         │
├─────────────────────────┤
│ dark bottom tab nav       │
└─────────────────────────┘
```

Use sticky/fixed bottom navigation for mobile.

### 7.2 Bottom Navigation

Recommended MVP tabs:

1. **Find** — smart finder and game library
2. **Plan** — session builder
3. **Favorites** — favorites and My Plans
4. **Add** — submit game
5. **Account** — profile, billing, settings

Admin/staff users also get:

- Admin link in Account
- Optional shield icon in top header

### 7.3 Route Structure

Public routes:

```txt
/
/login
/signup
/forgot-password
/pricing
/subscribe
/thank-you
/billing/success
/billing/cancelled
```

Authenticated user routes:

```txt
/app
/app/find
/app/find/quick
/app/games
/app/games/:gameId
/app/games/:gameId/reviews
/app/games/:gameId/rate
/app/games/:gameId/notes
/app/favorites
/app/My Plans
/app/My Plans/:collectionId
/app/plan
/app/plan/new
/app/plan/:sessionId
/app/submit
/app/account
/app/account/billing
/app/account/redeem
```

Staff routes:

```txt
/staff
/staff/games
/staff/games/new
/staff/games/:gameId/edit
/staff/submissions
/staff/submissions/:submissionId
/staff/reviews
```

Admin routes:

```txt
/admin
/admin/users
/admin/users/new
/admin/users/:userId
/admin/coupons
/admin/coupons/new
/admin/subscriptions
/admin/games
/admin/submissions
/admin/reviews
/admin/tags
/admin/materials
/admin/audit-log
```

---

## 8. Core User UI Screens

### 8.1 Find / Games List Screen

Model this after the screenshots with search bar, horizontal chips, sort, filter, and game cards.

Screen layout:

```txt
Dark header
- centered HooraPlaybook logo
- filter icon
- notification icon or sort icon

Main content
- large rounded search input
- horizontal quick chips
- magic finder card
- “Explore… 532 games in our library”
- sort dropdown
- game cards

Bottom nav
```

Required UI elements:

- Search input placeholder: `Search games, materials, category…`
- Quick chips:
  - All Play
  - Teamwork
  - Icebreakers
  - Indoor
  - Outdoor
  - No Prep
  - Bible Bridge
  - Cups
  - High Energy
- Sort dropdown:
  - Best Match
  - Highest Rated
  - Most Reviewed
  - Newest First
  - Most Liked
  - Alphabetical
  - Filter button opens full filter screen.

### 8.2 Game Card Component

Game card should include:

- thumbnail image or icon
- PRO badge if needed
- title
- one-sentence description
- tags
- divider
- star rating
- rating count
- favorite icon
- optional checkbox for adding to session

Card layout inspired by screenshots:

```txt
┌─────────────────────────────┐
│ thumbnail     GAME TITLE     │
│               Short desc     │
│ chip chip chip chip          │
│ ───────────────────────────  │
│ ★★★★☆ 4.5 (124)   ♡   □     │
└─────────────────────────────┘
```

Game card must show fit metadata when available:

- age range
- group size
- time
- materials
- space
- energy
- safety

For Smart Finder results, prioritize fit badges:

```txt
Great fit · 15–20 min · Indoor · Cups · Teamwork · Low Risk
```

### 8.3 Smart Finder Screen

This is the most important screen.

Screen title options:

- `Find a Game Fast`
- `Tell us what you have`
- `Build My Game Plan`

Sections:

1. Group size
2. Age range
3. Time available
4. Space
5. Materials
6. Energy level
7. Category
8. Safety comfort
9. “Anything to avoid?”

Primary CTA:

```txt
Find 3 Great Games
```

Results page should show:

- 3 best matches first
- why each game was selected
- missing materials warning if any
- backup suggestions
- “Make a session from these” button

Example result explanation:

```txt
Why this fits: works indoors, needs only cups, takes 15 minutes, low embarrassment risk, good for 10–20 teens, includes teamwork debrief.
```

### 8.4 Filter Screen

Model after the screenshot titled `FILTER BY`.

Use:

- light header with back arrow and title
- light background
- chip groups
- search within tags/materials
- sticky dark bottom bar with `Clear` and `Apply`

Filter sections:

- My Activity
  - Played
  - Unplayed
  - Favorites
  - User Created
- Plan Access
  - Free
  - PRO
- Categories
  - Fun
  - Icebreaker
  - Teamwork
  - Trust
  - Communication
  - Leadership
  - Bible Bridge
  - Calm Down
- Group
  - Children
  - Preteens
  - Teens
  - Youth
  - Adults
  - Mixed Ages
- Space
  - Small Room
  - Large Room
  - Gym
  - Outdoor Field
  - Stage
  - Flexible
- Materials
  - No Materials
  - Cups
  - Paper
  - Balls
  - Chairs
  - Rope
  - Balloons
  - Cones
- Safety
  - Low Risk
  - Moderate Risk
  - No Contact
  - Low Embarrassment
  - Shy-Friendly
  - Good for Newcomers
- Energy
  - Low
  - Medium
  - High
- Time
  - Under 5 min
  - 5–10 min
  - 10–20 min
  - 20–40 min
  - 40+ min

### 8.5 Sort Bottom Sheet

Model after the screenshot with radio options.

Open as bottom sheet / centered modal over dimmed background.

Options:

- Best Match
- Most Liked
- Most Reviewed
- Highest Rated
- Newest First
- Alphabetical

Buttons:

- Apply
- Cancel

### 8.6 Game Detail Screen

Model after screenshots with game title, rating, media carousel, and content sections.

Top area:

- dark header
- back arrow
- centered logo or page title
- share icon

Game title block:

- title in large uppercase display style
- star rating row
- rating count
- favorite icon
- add-to-session checkbox
- `View Reviews` link

Media carousel:

- images, videos, slide previews, or illustration
- page dots
- video play button overlay
- PRO lock overlay if downloadable slides are PRO-only

Content sections:

- Description
- Quick Facts
- Materials
- Setup
- Leader Script
- How to Play
- Safety Notes
- Variations
- Make It Easier
- Make It Harder
- Debrief Questions
- Bible Bridge
- Tags
- Creator

Sticky bottom action bar:

- `Rate This Game`
- `Add Notes`
- optional third action: `Add to Plan`

### 8.7 Quick Facts Panel

Game detail pages need a compact facts panel near the top.

Fields:

```txt
Ages: 12–18
Players: 8–30
Time: 15–20 min
Space: Indoor / large room
Energy: Medium
Materials: Cups, paper
Safety: Low Risk
Prep: 5 min
Leader Difficulty: Easy
```

### 8.8 Reviews Screen

Model after screenshot titled `REVIEWS`.

Layout:

- light header with back arrow and title
- rating summary card
- large score number
- stars
- ratings count and reviews count
- `Rate This Game` button
- list of reviews

Review row:

- avatar or placeholder
- reviewer display name
- stars
- date/time
- review text if present
- media thumbnails if approved

### 8.9 Rate Game Screen

Model after screenshot titled `RATE THIS GAME`.

Validation:

- star rating required
- review text optional
- media optional
- submit disabled until star selected

After submit:

- update user rating
- show success toast
- return to reviews or game detail

### 8.10 Icebreaker / Quick Tool Screen

The screenshots show a simple random icebreaker card with a large circular icon and a button.

For HooraPlaybook, create a `Quick Tools` area:

- Icebreaker Generator
- Team Maker
- Timer
- Random Picker
- Name Picker
- Debrief Question Generator

Icebreaker tool screen:

- dark header title: `ICEBREAKERS`
- close/back button
- large circular icon
- category title
- prompt type: Trivia / Would You Rather / Question / Dad Joke / Quick Challenge
- prompt text
- Add to Favorite button
- Primary CTA: `Break The Ice`

Do not make this the main app. It is a useful secondary tool.

---

## 9. Session Builder UX

### 9.1 Session Builder Entry

Route:

```txt
/app/plan/new
```

Prompt:

```txt
What are you planning?
```

Options:

- Youth Night
- Camp Session
- Classroom Activity
- Children’s Ministry
- Team Building
- PE Class
- Retreat
- Custom

Fields:

- total session length
- group size
- age range
- indoor/outdoor
- available materials
- desired energy curve
- purpose
- include Bible bridge? yes/no
- include discussion? yes/no
- safety preference
- avoid list

CTA:

```txt
Build My Plan
```

### 9.2 Session Plan Output

Display:

```txt
60-Minute Youth Night Plan

0:00–0:10 Warm-Up: [Game]
0:10–0:35 Main Game: [Game]
0:35–0:45 Debrief / Discussion Bridge
0:45–0:55 Backup / Filler Game
0:55–1:00 Wrap-Up
```

Each session item should show:

- game title
- time estimate
- materials
- leader notes
- safety note
- one-tap replace button

PRO actions:

- Download PDF
- Save Plan
- Duplicate Plan
- Share Plan

---

## 10. Game Submission UX

Use a multi-step wizard instead of one overwhelming form.

Steps:

1. Basic Info
2. Group Fit
3. Materials and Setup
4. How to Play
5. Safety
6. Variations and Debrief
7. Media and Credit
8. Review and Submit

Each step must autosave draft submissions.

After submit:

```txt
Thanks! Your game was submitted for review. We’ll check clarity, safety, age fit, materials, and leader notes before publishing.
```

Submission status values:

- draft
- submitted
- needs_edits
- approved
- rejected
- published

### 10.1 Batch Markdown Upload UX

The `/app/submit` screen must have two entry paths:

1. **Batch Upload .MD Games** — for importing many prepared Markdown files at once.
2. **Add One Game** — for the structured one-game form.

Batch upload UI requirements:

- mobile-friendly card titled `Batch Upload .MD Games`
- file picker accepting `.md`, `.markdown`, `text/markdown`, and `text/plain`
- multiple file selection enabled
- short explanation: `Each Markdown file should contain one game.`
- collapsible `Expected Markdown format` example
- submit button: `Upload Markdown Games`
- progress/result toast or result panel after upload
- failed files listed with filename and error message
- valid files queued as submissions unless staff/admin chose immediate publish

Production behavior:

- upload files to server or Supabase Storage only if large file preservation is needed
- store `raw_markdown` in `game_import_items` or `game_submissions.payload.rawMarkdown`
- store parsed JSON payload for moderation
- never trust parsed data blindly; server must revalidate before publishing

---

## 11. Admin Panel UX

### 11.1 Admin Dashboard

Cards:

- total users
- active PRO users
- expiring soon
- disabled users
- pending submissions
- pending review media
- total games
- average rating
- coupons created
- coupons redeemed

### 11.2 Users Admin

Route:

```txt
/admin/users
```

Features:

- search by email, name, role, status
- filter by role
- filter by plan
- filter by access status
- filter by expiration
- create new user
- export CSV

User row:

- name
- email
- role
- plan
- access status
- expiration date
- Stripe status
- disabled flag
- actions

User detail:

- edit name
- edit role
- edit plan
- edit access expiration
- grant PRO access
- revoke PRO access
- disable account
- reset password flow
- view subscriptions
- view coupon redemptions
- view audit history

### 11.3 Coupon Admin

Route:

```txt
/admin/coupons
```

Actions:

- create single coupon
- batch create coupons
- copy coupon
- export CSV
- disable coupon
- view redeemed by

Batch creation form:

```txt
Campaign name
Quantity
Benefit: One free month PRO
Starts at
Expires at
Notes
[Generate Coupons]
```

After generation, show table and copy/export buttons.

### 11.4 Submission Moderation

Route:

```txt
/admin/submissions
```

Submission review screen must show:

- submitted content
- submitter info
- completeness checklist
- safety profile fields
- admin notes
- approve / needs edits / reject buttons
- convert to game button

### 11.5 Game Editor

Staff/admin game editor must be more powerful than user submission form.

Editor fields:

- status: draft / published / archived
- access level: free / pro
- featured
- tested
- source / creator
- all content fields
- all metadata fields
- all safety fields
- media manager
- tags and materials
- SEO slug

### 11.6 Review Moderation

Admin/staff can:

- hide review
- approve media
- reject media
- remove inappropriate review text
- flag user

Do not allow public display of unmoderated review media by default.

---

## 12. Database Model

Use Supabase Postgres.

### 12.1 Core Tables

#### `profiles`

```sql
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  role text not null default 'user',
  plan text not null default 'free',
  access_status text not null default 'inactive',
  access_expires_at timestamptz,
  disabled boolean not null default false,
  organization_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

#### `subscriptions`

Use the Stripe integration source as the primary model.

```sql
create table public.subscriptions (
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
```

#### `access_grants`

For manual access and free-month coupons.

```sql
create table public.access_grants (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  grant_type text not null,
  plan text not null default 'pro',
  starts_at timestamptz not null default now(),
  expires_at timestamptz not null,
  source text,
  coupon_id uuid,
  notes text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);
```

#### `coupons`

```sql
create table public.coupons (
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
```

#### `games`

```sql
create table public.games (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  short_description text not null,
  description text,
  access_level text not null default 'free', -- free/pro
  status text not null default 'draft', -- draft/published/archived
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
```

#### `game_safety_profiles`

```sql
create table public.game_safety_profiles (
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
```

#### `materials`

```sql
create table public.materials (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  normalized_name text not null unique,
  icon text,
  created_at timestamptz not null default now()
);
```

#### `game_materials`

```sql
create table public.game_materials (
  game_id uuid references public.games(id) on delete cascade,
  material_id uuid references public.materials(id) on delete cascade,
  quantity text,
  optional boolean not null default false,
  primary key (game_id, material_id)
);
```

#### `tags`

```sql
create table public.tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  category text not null default 'general',
  created_at timestamptz not null default now()
);
```

#### `game_tags`

```sql
create table public.game_tags (
  game_id uuid references public.games(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (game_id, tag_id)
);
```

#### `game_media`

```sql
create table public.game_media (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references public.games(id) on delete cascade,
  media_type text not null, -- image/video/pdf/slide
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
```

#### `favorites`

```sql
create table public.favorites (
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, game_id)
);
```

#### `My Plans`

```sql
create table public.My Plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  organization_id uuid,
  name text not null,
  description text,
  visibility text not null default 'private',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

#### `collection_games`

```sql
create table public.collection_games (
  collection_id uuid references public.My Plans(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  sort_order integer not null default 0,
  added_at timestamptz not null default now(),
  primary key (collection_id, game_id)
);
```

#### `ratings`

```sql
create table public.ratings (
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
```

#### `rating_media`

```sql
create table public.rating_media (
  id uuid primary key default gen_random_uuid(),
  rating_id uuid references public.ratings(id) on delete cascade,
  media_type text not null,
  storage_path text not null,
  thumbnail_path text,
  moderation_status text not null default 'pending',
  created_at timestamptz not null default now()
);
```

#### `game_notes`

```sql
create table public.game_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  note_text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, game_id)
);
```

#### `played_games`

```sql
create table public.played_games (
  user_id uuid references auth.users(id) on delete cascade,
  game_id uuid references public.games(id) on delete cascade,
  played_at timestamptz not null default now(),
  notes text,
  primary key (user_id, game_id, played_at)
);
```

#### `game_submissions`

```sql
create table public.game_submissions (
  id uuid primary key default gen_random_uuid(),
  submitted_by uuid references auth.users(id) on delete set null,
  status text not null default 'draft',
  source_type text not null default 'manual', -- manual / batch_md / api
  source_filename text,
  import_batch_id uuid references public.game_import_batches(id) on delete set null,
  payload jsonb not null default '{}',
  admin_notes text,
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  published_game_id uuid references public.games(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

#### `game_import_batches`

```sql
create table public.game_import_batches (
  id uuid primary key default gen_random_uuid(),
  uploaded_by uuid references auth.users(id) on delete set null,
  original_file_count integer not null default 0,
  imported_count integer not null default 0,
  failed_count integer not null default 0,
  publish_mode text not null default 'moderation',
  status text not null default 'processed',
  error_summary text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
```

#### `game_import_items`

```sql
create table public.game_import_items (
  id uuid primary key default gen_random_uuid(),
  import_batch_id uuid references public.game_import_batches(id) on delete cascade,
  submitted_by uuid references auth.users(id) on delete set null,
  source_filename text not null,
  raw_markdown text,
  parsed_payload jsonb not null default '{}',
  validation_errors text[] not null default '{}',
  status text not null default 'submitted',
  submission_id uuid references public.game_submissions(id),
  published_game_id uuid references public.games(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

#### `session_plans`

```sql
create table public.session_plans (
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
```

#### `session_plan_items`

```sql
create table public.session_plan_items (
  id uuid primary key default gen_random_uuid(),
  session_plan_id uuid references public.session_plans(id) on delete cascade,
  game_id uuid references public.games(id),
  item_type text not null, -- warmup/main/backup/discussion/wrapup
  title text not null,
  start_minute integer,
  duration_minutes integer,
  leader_notes text,
  sort_order integer not null default 0
);
```

#### `audit_logs`

```sql
create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);
```

---

## 13. Access Helper Logic

Create a single server-backed helper for access control.

Pseudo-logic:

```ts
function userHasProAccess(user) {
  if (!user) return false;
  if (user.disabled) return false;
  if (user.role === 'admin') return true;
  if (user.role === 'staff') return true;

  const hasActiveSubscription = subscription.status in ['active', 'trialing']
    && subscription.current_period_end > now;

  const hasActiveGrant = access_grant.plan === 'pro'
    && access_grant.starts_at <= now
    && access_grant.expires_at > now;

  return hasActiveSubscription || hasActiveGrant;
}
```

Use this in:

- route guards
- API queries
- session builder
- advanced filters
- favorite count enforcement
- admin controls

---

## 14. RLS and Security Rules

### 14.1 General Rules

- All users must be authenticated by email/password before accessing the app.
- Use Supabase Auth.
- Enable RLS on every table.
- Do not expose service role key to frontend.
- Do not expose Stripe secret key to frontend.
- Use Supabase Edge Functions for privileged operations.
- Use server-side role checks for admin/staff actions.

### 14.2 Public Game Visibility

Authenticated free users can read:

- published games where `access_level = 'free'`

PRO/staff/admin users can read:

- all published free and PRO games

Staff/admin can read drafts and archived content.

### 14.3 Favorites Limit

Free users may save only 3 favorites.

Enforce this in a server function, not just frontend.

### 14.4 Upload Security

Uploads must:

- require authentication
- check file type
- check file size
- store in user-scoped paths
- never execute uploaded content
- put review media into moderation before public display

Recommended upload limits:

```txt
Images: 10 MB max
Videos: 100 MB max for MVP, or disable video upload until storage costs are controlled
```

---

## 15. Search and Recommendation Logic

### 15.1 Search Philosophy

HooraPlaybook should not simply list matching games. It should recommend the best games for the leader’s situation.

Ranking priority:

1. safety and fit
2. group size match
3. age match
4. time match
5. materials match
6. space match
7. category match
8. energy match
9. leader difficulty / prep match
10. rating and review quality
11. popularity
12. newness / featured status

Ratings should help the best games rise, but a highly rated game should not outrank a better-fit game for the user’s actual constraints.

### 15.2 Fit Score

Create a scoring function from 0–100.

Suggested weights:

```txt
Age fit: 15
Group size fit: 15
Time fit: 15
Materials fit: 15
Space fit: 10
Category fit: 10
Energy fit: 5
Safety fit: 10
Rating quality: 5
```

Add penalties:

```txt
Missing required material: -20
Age outside recommended range: -25
Group size outside range: -20
Time exceeds available time by >25%: -15
Safety level above user preference: -20
Indoor/outdoor mismatch: -25
PRO game shown to free user: hide or locked preview
```

### 15.3 Material Matching

Materials have three categories:

- required
- optional
- substitute

If user says they have “cups and paper,” prioritize games whose required materials are a subset of those materials.

If game requires no materials, it should match every material query but not always outrank material-specific games.

### 15.4 “Not Lame” Heuristic

When a user asks for “not lame,” prefer games with:

- average rating >= 4.0
- at least 3 ratings, when available
- age fit for teens
- low embarrassment risk
- clear leader script
- medium/high energy if appropriate
- tested flag
- good review comments

---

## 16. Safety System

Every published game must have a safety profile.

Required safety categories:

- physical risk
- emotional risk
- social risk
- developmental risk
- ministry risk
- logistical risk
- liability risk
- overall safety rating

Overall safety options:

- Low Risk
- Moderate Risk
- Use With Caution

Practical tags:

- no-contact
- light-contact
- physical-contact
- running
- throwing
- blindfold
- food
- allergy-risk
- messy
- loud
- quiet-game
- small-room
- large-room
- outdoor-only
- needs-boundaries
- needs-extra-leaders
- not-for-newcomers
- good-for-newcomers
- shy-friendly
- high-competition
- low-competition
- no-elimination
- elimination
- teamwork
- trust-building
- church-safe
- ministry-caution
- not-ministry-safe

Safety must appear in three places:

1. search filters
2. game detail page
3. admin/staff moderation workflow

For every medium/high risk, require a practical leader note.

Example:

```txt
Use soft balls only. Mark clear boundaries. Stop the game immediately if pushing or aggressive play begins.
```

---


### 17.1 Removed Game Export and Display Controls

Game detail pages must not include Download / Print PDF controls or full-screen display controls. Keep the game page focused on leader actions: Rate This Game, Add Notes, and Add to Plan.

## 18. PWA Requirements

The app must work as a PWA installable on phones.

Required:

- `manifest.webmanifest`
- app name: `HooraPlaybook`
- short name: `HooraPlaybook`
- app icons: 192x192, 512x512, maskable
- theme color: dark ink
- background color: light page color
- display: `standalone`
- service worker
- offline fallback screen
- install prompt handling
- responsive mobile-first layout
- iOS safe-area support

Caching:

- cache app shell
- cache icons and static assets
- do not cache private user data insecurely
- optional: cache recently viewed free games for offline use

Offline behavior:

- show cached games if available
- disable rating/submission/payment while offline
- queue notes and favorites only if implemented safely

---

## 19. Frontend Architecture

### 19.1 Recommended Folder Structure

```txt
src/
  app/
    App.tsx
    router.tsx
    providers.tsx
  components/
    layout/
      AppShell.tsx
      TopBar.tsx
      BottomNav.tsx
      StickyActionBar.tsx
    ui/
      Button.tsx
      Card.tsx
      Chip.tsx
      Modal.tsx
      BottomSheet.tsx
      Stars.tsx
      Badge.tsx
      EmptyState.tsx
      LoadingState.tsx
    games/
      GameCard.tsx
      GameDetailHeader.tsx
      GameMediaCarousel.tsx
      GameQuickFacts.tsx
      GameSafetyPanel.tsx
      GameTagList.tsx
      GameReviewList.tsx
      RateGameForm.tsx
    finder/
      SmartFinderForm.tsx
      MaterialsPicker.tsx
      CategoryPicker.tsx
      FitScoreBadge.tsx
      FinderResults.tsx
    sessions/
      SessionBuilderForm.tsx
      SessionPlanView.tsx
      SessionItemCard.tsx
    admin/
      AdminLayout.tsx
      UserTable.tsx
      CouponTable.tsx
      GameEditor.tsx
      SubmissionReview.tsx
  features/
    auth/
    access/
    billing/
    games/
    ratings/
    favorites/
    submissions/
    sessions/
    admin/
  lib/
    supabaseClient.ts
    access.ts
    stripe.ts
    search.ts
    scoring.ts
    validators.ts
    storage.ts
    date.ts
  pages/
    public/
    app/
    staff/
    admin/
  styles/
    globals.css
```

### 19.2 Recommended Libraries

Use:

- React
- Vite
- TypeScript
- Tailwind CSS
- Supabase JS
- TanStack Query
- React Hook Form
- Zod
- Lucide React
- date-fns
- Vite PWA plugin

Optional later:

- Fuse.js for client-side search on small datasets
- jsPDF or server-side PDF generation
- browser image compression

### 19.3 State Management

Use TanStack Query for server state.

Use local component state for UI forms and modals.

Do not add Redux unless the app becomes significantly more complex.

---

## 20. Backend / Edge Functions

Use Supabase Edge Functions for:

- creating Stripe Checkout sessions
- Stripe webhooks
- customer portal sessions
- coupon generation
- coupon redemption
- admin user creation
- favorite limit enforcement if needed
- PDF generation if client-side PDF is insufficient
- media moderation actions

Functions:

```txt
create-checkout-session
stripe-webhook
create-portal-session
generate-coupons
redeem-coupon
admin-create-user
admin-update-user-access
submit-rating
recalculate-game-rating
```

---

## 21. Environment Variables

Frontend:

```env
VITE_APP_NAME=HooraPlaybook
VITE_APP_URL=https://your-domain.com
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PAYMENT_LINK_URL=https://buy.stripe.com/your_link_here
VITE_USE_PAYMENT_LINK=false
```

Supabase Edge Function secrets:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET_KEY=sk_live_or_test_xxx
STRIPE_WEBHOOK_SIGNING_SECRET=whsec_xxx
STRIPE_PRICE_PRO_MONTHLY=price_xxx
STRIPE_PRICE_PRO_YEARLY=price_xxx
STRIPE_PRICE_FOUNDING_MEMBER=price_xxx
APP_URL=https://your-domain.com
```

Never expose service role or Stripe secret keys in frontend code.

---

## 22. Content and Data Quality Rules

A game should not be published merely because it is fun.

A published game must be:

- clear
- useful
- age-appropriate
- leader-friendly
- safe enough for the intended setting
- adaptable
- respectful of participants
- worth the time it takes to explain and play

Every game must answer:

- Who is this best for?
- How many people does it work with?
- How long does it take?
- What materials are needed?
- What space is required?
- How do I explain it quickly?
- What could go wrong?
- How can I adapt it?
- How can I debrief it?

---

## 23. Empty States and Upgrade States

### 23.1 Free User Hits Favorite Limit

Show:

```txt
You’ve saved 3 favorites.
Upgrade to PRO to save unlimited games and build My Plans.
```

Buttons:

- Upgrade to PRO
- Manage Favorites

### 23.2 Free User Opens PRO Game

Show locked preview:

- title
- short description
- tags
- quick facts
- rating

Hide full instructions and show:

```txt
Unlock the full game library with PRO.
```

Buttons:

- Upgrade to PRO
- Back to Free Games

### 23.3 No Search Results

Show:

```txt
No perfect matches yet.
Try removing one filter, allowing substitute materials, or choosing a wider time range.
```

Offer:

- show closest matches
- clear filters
- submit a game request

### 23.4 No Materials

If user says they have no materials, prioritize no-prep games.

---

## 24. Accessibility Requirements

- Every button must have accessible label.
- Star rating must be keyboard accessible.
- Color cannot be the only indicator of selection.
- Touch targets must be at least 44px.
- Use semantic headings.
- Use alt text for media.
- Use aria labels for icon-only buttons.
- Support reduced motion.
- Maintain readable contrast.

---

## 25. Analytics Events

Track:

- signup started
- signup completed
- login
- smart finder started
- smart finder completed
- game viewed
- game favorited
- favorite limit hit
- rating submitted
- review submitted
- game submitted
- session builder started
- session plan generated
- upgrade clicked
- checkout started
- checkout completed
- coupon redeemed
- admin user updated
- game approved

Avoid tracking sensitive review text or private notes.

---

## 26. Testing Checklist

### 26.1 Auth and Access

- [ ] Email/password signup works.
- [ ] Login works.
- [ ] Logout works.
- [ ] Disabled users cannot access app.
- [ ] Free users can see free games.
- [ ] Free users cannot see full PRO instructions.
- [ ] PRO users can see full library.
- [ ] Staff users can access staff tools.
- [ ] Admin users can access admin panel.

### 26.2 Favorites

- [ ] Free user can save 3 favorites.
- [ ] Free user cannot save 4th favorite.
- [ ] PRO user can save unlimited favorites.
- [ ] Removing a favorite frees a slot.

### 26.3 Search and Filters

- [ ] Search by title works.
- [ ] Search by material works.
- [ ] Search by category works.
- [ ] Age filter works.
- [ ] Group size filter works.
- [ ] Time filter works.
- [ ] Indoor/outdoor filter works.
- [ ] Safety filter works.
- [ ] Sort modal works.
- [ ] Clear filters works.

### 26.4 Game Detail

- [ ] Game detail loads.
- [ ] Media carousel works.
- [ ] Review link works.
- [ ] Sticky action bar works.
- [ ] Add notes works.
- [ ] Tags are displayed.

### 26.5 Ratings

- [ ] User can select 1–5 stars.
- [ ] User can submit review text.
- [ ] User can upload image.
- [ ] User can upload video if enabled.
- [ ] Rating updates average.
- [ ] User cannot create duplicate rating.
- [ ] User can edit rating.
- [ ] Admin can moderate review media.

### 26.6 Submissions

- [ ] User can save draft.
- [ ] User can submit completed game.
- [ ] User can batch-upload multiple `.md` game files.
- [ ] Each Markdown file creates one parsed submission.
- [ ] Batch upload preserves source filename and raw Markdown for admin review.
- [ ] Incomplete submission is blocked.
- [ ] Staff can review submission.
- [ ] Admin can approve submission.
- [ ] Approved submission can become published game.

### 26.7 Admin

- [ ] Admin can search users.
- [ ] Admin can create user.
- [ ] Admin can edit role.
- [ ] Admin can edit access expiration.
- [ ] Admin can disable access.
- [ ] Admin can generate one coupon.
- [ ] Admin can batch-generate coupons.
- [ ] Coupon codes are 16 random alphanumeric characters.
- [ ] Coupon can be redeemed only once.

### 26.8 Stripe

- [ ] Checkout session function works.
- [ ] Stripe webhook signature verification works.
- [ ] `checkout.session.completed` unlocks access.
- [ ] `invoice.paid` keeps access active.
- [ ] `invoice.payment_failed` updates access status.
- [ ] `customer.subscription.deleted` removes paid access.
- [ ] Success page does not unlock access by itself.
- [ ] Customer portal opens.

### 26.9 PWA

- [ ] App installs on iPhone Safari.
- [ ] App installs on Android Chrome.
- [ ] Standalone display works.
- [ ] Bottom nav respects safe area.
- [ ] Offline fallback works.
- [ ] Icons render correctly.

---

## 27. Build Order

### Phase 1 — Foundation

1. Create Vite React TypeScript app.
2. Add Tailwind CSS.
3. Add routing.
4. Add Supabase client.
5. Add auth screens.
6. Add app shell and bottom navigation.
7. Add profiles table and role system.
8. Add seed games.

### Phase 2 — Game Library

1. Create games table.
2. Create game cards.
3. Create game list.
4. Create game detail page.
5. Add tags/materials.
6. Add search.
7. Add filter screen.
8. Add sort modal.

### Phase 3 — Access Control

1. Add free/PRO access levels.
2. Add favorite limit.
3. Add locked PRO preview.
4. Add subscriptions table.
5. Add access helper.

### Phase 4 — Ratings and Notes

1. Add rating table.
2. Add rate game screen.
3. Add reviews screen.
4. Add rating recalculation.
5. Add private notes.
6. Add review media upload and moderation.

### Phase 5 — Submissions and Staff Tools

1. Add submission wizard.
2. Add staff submission review.
3. Add game editor.
4. Add safety profile editor.
5. Add publish workflow.

### Phase 6 — Payments

1. Add Stripe Checkout session Edge Function.
2. Add Stripe webhook Edge Function.
3. Add billing success/cancel pages.
4. Add customer portal.
5. Test subscription state changes.

### Phase 7 — Admin Panel

1. Add admin dashboard.
2. Add user search.
3. Add user creation.
4. Add access editing.
5. Add coupon generation.
6. Add coupon redemption.
7. Add audit logs.

### Phase 8 — Session Builder

1. Add session builder form.
2. Add recommendation scoring.
3. Add session plan output.
4. Add save plan.

### Phase 9 — PWA Polish

1. Add manifest.
2. Add service worker.
3. Add install prompt.
4. Add offline fallback.
5. Test mobile safe areas.
6. Optimize performance.

---

## 28. Definition of Done for MVP

MVP is done when:

- users can create accounts and log in
- free users can browse free games
- PRO access is gated correctly
- admins can manage users and access
- admins can create one-time free-month coupons
- users can search/filter games by real planning constraints
- game detail pages are clear and leader-ready
- users can rate and review games
- users can submit games for moderation
- staff/admin can approve or edit games
- Stripe paid access works through webhook-based subscription state
- PWA installs on mobile
- the interface feels mobile-native, fast, fun, and trustworthy

---

## 29. Most Important Product Rule

When making product decisions, always ask:

> Does this help a real leader quickly choose a fun, safe, age-appropriate game that fits their group, space, time, materials, and purpose?

If yes, build it.

If no, postpone it.


---

# Implementation Amendment — June 26, 2026 UI Fixes

## Pricing Page Copy

The pricing page must not display implementation/developer copy such as:


Pricing pages should show user-facing value, plan benefits, price, access terms, and refund/support information only.

## Game Detail Header Rule

Game detail-style pages must not be wrapped inside the default `AppShell` when they already render their own page header.

Affected routes:

- `/app/games/:gameId`
- `/app/games/:gameId/reviews`
- `/app/games/:gameId/rate`
- `/app/games/:gameId/notes`

These pages should render exactly one dark top header. The app must never show a stacked/double header on a game detail page.

## Filter Icon Asset

Use a true funnel/filter icon for filter actions, not abstract glyphs or unclear symbols.

Current asset path:

```txt
assets/filter.png
```

Display rules:

- In the dark top bar, invert the icon to white.
- In white filter buttons, show the icon in its normal black form.
- Add `aria-label="Filter games"` to icon-only filter buttons.

---

## Latest Product Rules — Categories and Admin-Only Labels

### Standard Game Categories

Every game in HooraPlaybook must use at least one standard category from this list:

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

The Add Games screen must require a submitter to choose one category when manually submitting a game. Batch Markdown import must parse `## Categories` or `Category:` and normalize common aliases into the standard list. Examples: `Teamwork` becomes `Team-building`, `Relay Race` becomes `Relays`, `No Prep` becomes `Quick and simple`, and `Sports` becomes `Sport-n-fitness`.

Categories are part of the public filtering/search system. Users must be able to search and filter by these standard categories, and categories should appear on game cards and game detail pages as normal user-facing tags.

### Removed Labels

The app must not use `Untested` or `Not Recommended` as user-facing or admin-facing game tags.

Rules:

- Do not show `Untested` as a tag, filter, quick fact, badge, or card label anywhere in the app.
- Do not show `Not Recommended` as a tag, filter, quick fact, badge, or card label anywhere in the app.
- Do not hide games merely because an imported file or legacy record used the words `Not Recommended`.
- If imported Markdown says `Not Recommended`, normalize the safety value to `Use With Caution` and keep the game visible unless its publish status is archived or rejected by an admin.
- The internal `tested` field may still exist for future QA workflows, but it must not create an `Untested` badge or tag.

### Game Card Navigation

In the Games section, the entire game card should be clickable and should open the game detail page. Favorite and session-add buttons inside a card must stop event propagation so they perform their own actions without opening the game.


---

# Latest Implementation Corrections

## Admin user management
The Admin > Users screen must never require horizontal scrolling for core actions. Each user should render as a responsive card or stacked row. The following controls must be visible on the initial screen for every user:

- role selector
- plan selector
- access expiration date
- **Grant 30 days** button
- **Disable / Enable** button

## Standard categories
Every game must use one or more of these standard categories:

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

The Add Games form must require at least one category. Markdown batch import should normalize category aliases into this standard list. The Filter page must include these categories, and search must search category names.

## Clickable filters
On game detail pages, every filter/tag chip in the Filters section must be clickable. Clicking a chip should navigate to the Games screen and show only games matching that chip. This includes category chips and tags such as No Prep.

## Search behavior
The search bar must not re-render the whole page on each keystroke. It should update the game list and count without stealing input focus.

## My Plans
Use **My Plans** language instead of Collections. Users should be able to:

- build a new plan
- give the plan a custom name
- save the plan
- view saved plans
- open a saved plan
- rename a saved plan
- delete a saved plan
- click any game inside a saved plan to open the game detail page

## Sorting
The only Sort By options should be:

- Best Match
- Most Liked
- Most Reviewed
- Highest Rated
- Newest First
- Alphabetical

## Icon tooltips
Interactive icons must have tooltips or at least clear `title` and `aria-label` attributes. Minimum examples:

- heart icon: Like / favorite
- checkbox/use icon: Use in plan
- filter icon: Filter
- share icon: Share

## Share icon
Use an Apple-style share icon: a square/tray with an upward arrow.

## Language and translations
The Account page must allow every user to choose:

- App Language: English / Russian
- Game Content Language: English / Russian

Do not create duplicate games for each language. Store one game record and attach translations to it:

```ts
type GameTranslations = {
  ru?: {
    title?: string;
    shortDescription?: string;
    description?: string;
    setup?: string;
    howToPlay?: string[];
    tags?: string[];
    safetyNotes?: string;
    debriefQuestions?: string[];
    bibleBridge?: string;
  }
}
```

When creating Markdown game files with ChatGPT, include optional Russian translation sections such as:

```md
## RU Title
Название игры

## RU Short Description
Короткое описание игры.

## RU How to Play
- Первый шаг.
- Второй шаг.

## RU Tags
Без подготовки, Командная игра, В помещении
```

The app should display translated fields when available and fall back to English when a translation is missing.

---

## Latest Implementation Corrections — June 27, 2026

- Detail routes for individual games must not be wrapped inside the default app shell. They render their own header with the back arrow, HooraPlaybook logo, and Apple-style share icon.
- The game share handler must share/copy only the canonical URL: `/app/games/:gameId`. Do not include title, description, or extra text in the copied share payload.
- Display typography should use lighter Fredoka weights. Treat former `900/950` display weights as `600` and former heavy UI weights as `700`.

## Latest Visual Direction Update

The app UI should use the official HooraPlaybook logo and wordmark assets:

- `assets/hooraplaybook-logo.png`
- `assets/hooraplaybook-wordmark.png`
- `assets/icon-192.png`
- `assets/icon-512.png`

Typography should use `font-family: 'Poppins', sans-serif` with Medium 500 or SemiBold 600 weights. Avoid heavy 800/900 display typography for app headers, game titles, and navigation.

The app should follow the landing-page visual system: white/cream backgrounds, navy/black text, purple primary CTAs, blue/mint/coral/yellow accents, rounded white cards, subtle borders, and soft shadows.

Game detail pages must show only one header: back arrow, HooraPlaybook wordmark, and the standard Apple-style share icon. Share/copy should copy only the game URL, not the description.

Full-screen display entry points are removed from game cards and game detail cards for now.

## Latest Product/UI Requirements Added

### Header and Branding
Use the official HooraPlaybook logo mark plus wordmark in app headers. Back navigation must be represented as a clear “return to previous page” left-chevron inside a circular tap/hover area.

### Categories Replace Purpose in User Workflows
For user-facing Add Games, Smart Finder, filtering, searching, and plan building, use standard game categories instead of a generic Purpose selector:

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

Games should keep a single game record and contain `categories: string[]`; tags may still exist for secondary metadata, but categories are the primary user-facing taxonomy.

### My Plans
My Plans must let a PRO user build a plan, name it, save it, view saved plans, rename saved plans, delete saved plans, and click any game inside a saved plan to open that game detail page.

### Admin Users
The Admin > Users screen must not require horizontal scrolling to see access controls. Use responsive user cards with role, plan, expiration, Grant 30 days, and Disable / Enable visible on initial screen.


## Latest UI Icon Update

- Share actions use `assets/ios-share.svg`, the uploaded iOS-style share icon.
- Filter actions use `assets/filter.png`.
- Sort actions use `assets/sort.png`.
- Game category chips wrap instead of forcing a horizontal scrollbar.

## Latest Correction Notes

- The Games list must not render a horizontal quick-category chip strip below the search bar. Use the Filter screen for category selection.
- Game detail routes must render as full app frames and must never be wrapped in the default app shell again. This prevents the recurring double-header bug.
- Navigation into a game detail page must scroll the window, app frame, and main content containers to the top after render.
- Use these assets for icon buttons:
  - Share: `assets/ios-share.svg`
  - Filter: `assets/filter.png`
  - Sort: `assets/sort.png`
- Filter screen categories must use the standard category list and include `No Prep` as a filter option.

---

# Current Locked Fixes / Non-Regression Rules

These rules are active in the current implementation and must be preserved in every future patch:

- Patch the latest working code only. Do not regenerate from an older build.
- App headers must be light, not dark.
- Game detail pages must use one header only.
- Game detail header must show a circular back chevron, logo mark, wordmark, and iOS share icon.
- Share must copy/share only the URL.
- Filter icon must use `assets/filter.png`.
- Sort icon must use `assets/sort.png`.
- Games screen must not show the redundant category chip section.
- Category filtering belongs on the Filter page.
- Add Game must use Categories, not Purpose.
- Smart Finder and My Plans must use Categories, not Purpose.
- Standard categories are: Quick and simple, Wet-n-Wild, Team-building, Teams, Circle, Icebreakers, Adventure, Tag, Sport-n-fitness, Theatrical, Relays.
- My Plans must support save, name, view, rename, delete, and clickable games.
- Admin > Users must show Grant 30 Days and Disable/Enable without horizontal scrolling.
- Do not show Untested or Not Recommended tags.

## Locked implementation notes — back navigation and headers

- Do not hard-code game detail back buttons to `#/app/find`.
- Use `backButton()` in every app header.
- `backButton()` must render `assets/back_button.png`.
- Header back must call `goBack()` so it returns to the previous in-app route, including My Plans → Game Detail → back to My Plans.
- Use Categories everywhere in the user-facing app instead of Purpose.


## Locked Header and Navigation Rules

- Every app header back button must display `assets/back_button.png`.
- The HooraPlaybook wordmark in headers must be live text, not a wordmark image. Use the selected app font, purple for “Hoora”, and navy for “Playbook”.
- Header back buttons must return to the previous in-app route, not hard-code `#/app/find`.
- Since the header already has the filter icon, do not place another filter icon beside the search field.
- Preserve `LOCKED_FIXES.md` before every code change and run the regression check before packaging.

## Locked Game Page Shell Rule

Game detail routes are standalone app-frame routes. This includes:

- `/app/games/:id`
- `/app/games/:id/reviews`
- `/app/games/:id/rate`
- `/app/games/:id/notes`

These routes must never be wrapped in the global `renderAppShell()` because each page renders its own header/frame. Wrapping them creates double headers and double footers.

Required implementation:

```js
if (isStandaloneGameRoute()) return renderAppRoute();
return renderAppShell(renderAppRoute());
```

Every future change must preserve this route order and must pass the locked fixes regression check before packaging.
- Raw text chevrons such as `‹` are forbidden in app headers. Header back buttons must render `assets/back_button.png`.


## Locked Game Detail and Plan Rules

- Game detail pages must not show a Download / Print PDF button or section.
- Game detail sticky actions must include Rate This Game, Add Notes, and Add to Plan.
- Add to Plan must let the user choose an existing saved plan or create a new plan.
- The Plan page Available materials control must be a navigation button with a right arrow, not a text input.
- The Plan materials selector must use a cloud of tappable material chips.
- “No Materials” must be the first material option.
- Full-screen display-mode functionality must not be described or added back to the product specification.

# Locked Update: Materials, Plan Page, and Swipe Removal

These rules are permanent and must be preserved in every future code update.

## Smart Finder Materials

- The Smart Finder materials control must be labeled `Available Materials`.
- It must not be a free-text input.
- It must be a navigation-style button with a right arrow.
- Tapping it opens a material selector with a cloud of material choices.
- The first material choice must be `No Materials`.
- The Smart Finder must not show preview/result cards directly under the `Find 3 Great Games` button.

## Plan Page

- The Plan page must not show the old plan creation form section.
- Do not show Plan name, session type, total minutes, group size, category, or a Save Plan button as a large creation form on the Plan page.
- The Plan page should focus on saved plans.
- Saved plan games must remain clickable.
- Saved plan cards must include `Modify`, `Rename`, and `Delete` actions.
- The `Modify` button must use `assets/edit-246.svg` and appear to the left of `Rename`.

## Modify Plan Interaction

- The Modify Plan screen must list all games in the selected plan.
- Users must be able to change the order by dragging games up or down.
- Users must be able to remove a game with an iOS-style swipe left interaction.
- Swipe left should reveal a red removal ribbon behind the card on the right.
- The ribbon must say `Remove` in white.
- Do not remove the game when the swipe starts.
- Remove the game only after the user swipes past the threshold and releases.
- If the user releases before the threshold, the card must snap back.
- Use Pointer Events for touch and mouse support.
- Keep vertical scrolling working.
- Only removable list cards should use swipe behavior.
- Include an accessible visible `Remove` control for keyboard and screen reader users.
- Do not use browser `confirm()` popups for this interaction.

## Header Text Size Rule

The HooraPlaybook header wordmark must be live styled text, not a wordmark image. It must remain approximately 20% smaller than the previous oversized version while preserving the purple `Hoora` and navy `Playbook` styling.

## Search Row Filter Rule

Do not place a second filter button beside the search field when the header already contains the filter icon.
