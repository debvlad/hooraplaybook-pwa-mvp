# APP_INBOX.md

## 2026-06-29 — First Live Revision Feedback — Revision `3fd5a76`

### Bug — `Remove.png` appears incorrectly on plan game cards
- Source: Live Cloudflare deployment test.
- The huge Remove button is gone, which is good.
- However, there is no small red X button in the top-right corner of each game card.
- Instead, a large image/screenshot appears on the right side of each game card.
- Desired behavior:
  - A small red X should appear in the top-right corner of each game card.
  - It should use the intended red X / `Remove.png` icon behavior, not display a large image.
  - It should work on both the main `My Plans` page and the `Modify Plan` page.
  - User should be able to remove games directly from `My Plans` without opening Modify Plan.

### Bug — Mobile Modify Plan interactions not working
- Source: Live Cloudflare deployment test.
- On mobile, user cannot swipe to remove games from Modify Plan.
- On mobile, user cannot switch or reorder game cards from Modify Plan.
- Keep this as a separate issue unless directly required by the red X remove-button fix.


## 2026-06-29 — Mobile Plan Creation Bug

### Bug — Mobile `Create a new plan` from `+ Plan` dialog does not save
- Source: Latest update testing.
- Device context: Mobile.
- Steps observed:
  1. Start with no plans already created.
  2. Tap `+ Plan` on a game card.
  3. Dialog opens to create a new plan.
  4. Tap `Create a new plan`.
- Expected result:
  - A new plan should be created and saved.
  - The selected game should be added to the newly created plan, or the new plan should become available immediately.
  - The user should then be able to see plan game cards and test/remove games on mobile.
- Actual result:
  - `Create a new plan` does nothing.
  - No plan is saved.
  - User cannot proceed with mobile plan creation.
  - User cannot test the mobile red X remove button if no plans already exist.
- Severity:
  - High. This blocks plan creation on mobile.
\n\n<!-- MOBILE_PLAN_CREATE_REGRESSION_LOCK_2026_06_29:APP_INBOX -->

## 2026-06-29 — Regression: Mobile Create New Plan Broken Locally

- Type: Bug / Regression
- Priority: P0
- Area: Mobile / Plans / Add to Plan
- Status: Inbox
- Source: Mobile local testing
- Observation:
  - Live Cloudflare version works correctly on mobile for add-to-plan and creating new plans.
  - Local revision regressed mobile plan creation.
  - From `+ Plan`, creating a new plan visually does not change anything.
  - From `Account > My Plans > Create a New Plan`, mobile shows a created message, but `My Plans` still says `No saved plans yet`.
  - Desktop create-plan behavior still works.
- Important conclusion:
  - This is a regression against the live working behavior, not a new feature request.
- Action:
  - Restore the working mobile create-plan behavior from the live Cloudflare-compatible logic.
  - Do not replace working plan storage/rendering with a generic fallback unless it is proven to match the app’s real plan model.\n

## 2026-06-29 — Game Page Redesign Reference Added

### UI/UX — Detailed Game Page redesign instructions uploaded
- Source: User uploaded `GAME_PAGE_CODING_INSTRUCTIONS.md`, `APP. Game Page.png`, and `Universal footer.png`.
- Use these as the source of truth for the next single coding ticket:
  - P1 — Redesign Game Page Layout and Functionality
- The ticket should stay scoped only to the individual Game Page.


## 2026-06-30 — Regression Captured: Hide Drag Handles V1 Broke My Plans Layout

### Regression — Hide Drag Handles V1 broke My Plans card layout on desktop/mobile
- Source: Local testing of P3 — Hide Drag Handles on Main My Plans Page.
- V1 failed and should not be committed.
- Regression details:
  - My Plans page layout broke on desktop and mobile.
  - Game rows inside saved plan cards collapsed into a narrow text column.
  - Game titles and descriptions became squeezed and hard to read.
  - Red X remove button floated over the squeezed text area.
  - Plan cards no longer looked visually correct.
- Corrective fix:
  - V2 restored My Plans layout on desktop.
  - V2 restored My Plans layout on mobile.
  - V2 hides drag handles only on the main My Plans page.
  - V2 keeps Modify Plan drag handles visible and working.
  - V2 keeps red X remove controls visible and working.
