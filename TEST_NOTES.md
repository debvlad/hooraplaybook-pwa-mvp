# TEST_NOTES.md

## 2026-06-29 — Live Cloudflare Deployment Test — Revision `3fd5a76`

- Revision tested: `3fd5a76`
- Environment: Live Cloudflare deployment / online version
- Test type: First live revision test

### What worked
- Game card timings are gone.
- `+ Plan` is grey before adding.
- `+ Plan` turns green after a game is already added to a plan.
- Back arrow works.
- `My Plans` still appears under Account.
- No red console errors.

### What failed
- Red X / `Remove.png` behavior did not work correctly.
- The huge Remove button is gone, which is good.
- However, there is no small red X button in the top-right corner of each game card.
- Instead, a large image/screenshot appears on the right side of each game card.
- The remove control needs to work on both:
  - Main `My Plans` page
  - `Modify Plan` page
- User should be able to remove games directly from `My Plans` without opening Modify Plan.
- On mobile, inside Modify Plan, user is not able to swipe to remove or reorder game cards.

### Console errors
- No red console errors.

### Desktop result
- Tested on desktop.
- Most deployed updates worked.
- Remove X behavior failed.

### Mobile result
- Tested on mobile.
- Working deployed updates remained visible.
- Modify Plan page does not allow swipe-to-remove.
- Modify Plan page does not allow card reordering.
- Red X remove behavior still needs to be fixed.

### Decision
- Treat this as a partially successful first live revision.
- Lock the behaviors that worked on both desktop and mobile.
- Next revision should focus only on adding a working small red X remove button to plan game cards on both `My Plans` and `Modify Plan`.
- Keep mobile reorder/swipe behavior as a separate follow-up ticket.


## 2026-06-29 — Latest Update Test — Red X Remove Button / Mobile Create Plan Bug

### Revision tested
- Latest update after the small red X remove button revision.

### What worked
- On desktop, the small red X remove button on plan game cards is working perfectly.

### What failed
- On mobile, tapping `+ Plan` opens the dialog to create a new plan.
- In that dialog, the `Create a new plan` action does not save anything.
- When no plans already exist, this blocks the user from creating a plan.
- Because a new plan cannot be created on mobile, the user cannot add games to a new plan and cannot reliably test/remove games from plan cards on mobile.

### Console errors
- Not reported.

### Desktop result
- Desktop red X remove button works perfectly.

### Mobile result
- Mobile plan creation is broken.
- `+ Plan` opens the create-plan dialog, but `Create a new plan` does not save.

### Decision
- Lock the desktop red X remove button behavior.
- Treat mobile plan creation as the next immediate bug.
- Next ticket should focus only on fixing mobile `Create a new plan` from the `+ Plan` dialog.
\n\n<!-- MOBILE_PLAN_CREATE_REGRESSION_LOCK_2026_06_29:TEST_NOTES -->

## 2026-06-29 — Local Test: Mobile Create New Plan Regression

- Revision tested: P0 Mobile Create New Plan local patch attempt
- What worked:
  - Desktop create-plan behavior still works.
  - Red X remove button functionality and visual were previously confirmed working locally.
  - Live Cloudflare version creates new plans correctly on mobile.
- What failed:
  - Mobile local version does not create a usable saved plan from `+ Plan`.
  - Mobile local version shows `"Youth Night Plae" created.` after using `Account > My Plans > Create a New Plan`, but the plan does not appear in `My Plans`.
  - After returning to `Account > My Plans`, the screen still shows `No saved plans yet`.
- Console errors:
  - Not recorded in this test.
- Desktop result:
  - Passing / unchanged.
- Mobile result:
  - Failing.
- Decision:
  - Treat as a P0 regression.
  - Do not continue with generic mobile fallback patches.
  - Next coding step should compare/reuse the known-good live Cloudflare behavior and restore parity in the local project.
  - Add a locked rule so mobile plan creation must be tested before any plan-related commit.\n

## 2026-06-29 — P0 Mobile Create Plan Fix Verified — Commit `5b9bd23`

### Revision tested
- Commit: `5b9bd23`
- Revision: Fix mobile local plan creation IDs

### What worked
- Mobile `+ Plan` now works.
- Mobile `Account > My Plans > Create a New Plan` now works.
- Plans persist.
- Desktop still works.
- Red X remove still works.
- No obvious console errors reported.

### What failed
- No P0 failures reported.

### Remaining issues observed
- Bottom navigation Find icon is currently a game controller. User prefers a standard iOS-style magnifying glass/search icon. Low priority.
- Account page opens in the middle instead of at the top. Cosmetic issue, low priority.

### Decision
- Mark P0 mobile create-plan bug as fixed and verified.
- Lock mobile plan creation behavior so it does not break again.
- Add low-priority UI polish tickets for the Find icon and Account page scroll position.
