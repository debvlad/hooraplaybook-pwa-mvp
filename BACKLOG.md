# BACKLOG.md

## Ready

### P1 — Add Small Red X Remove Button to Plan Game Cards

- Type: Bug
- Area: Plans / My Plans / Modify Plan
- Status: Ready
- Description:
  Replace the broken large right-side `Remove.png` display with a small red X remove button in the top-right corner of each game card inside a plan. The button must work on both the main `My Plans` page and the `Modify Plan` page.
- Acceptance Criteria:
  - No huge Remove button appears on plan game cards.
  - No large screenshot/image appears beside plan game cards.
  - A small red X remove button appears in the top-right corner of each game card.
  - The red X appears on the main `My Plans` page.
  - The red X appears on the `Modify Plan` page.
  - Clicking/tapping the red X removes that game from the plan.
  - User can remove a game from a plan without opening `Modify Plan`.
  - Works on desktop.
  - Works on mobile.
  - No red console errors.
  - Does not affect `+ Plan` button behavior.
  - Does not bring back game timing labels on plan cards.
  - Does not break the back arrow.
  - Does not remove `My Plans` from Account.

## Inbox

### P1 — Fix Mobile Modify Plan Reorder / Swipe Behavior

- Type: Bug
- Area: Plans / Modify Plan / Mobile
- Status: Inbox
- Description:
  On mobile, the `Modify Plan` page does not currently allow the user to swipe to remove or reorder game cards.
- Acceptance Criteria:
  - User can reorder game cards on mobile Modify Plan.
  - Swipe behavior either works correctly or is intentionally replaced by a clearer mobile control.
  - Does not interfere with the red X remove button.
  - Works on desktop and mobile.
  - No red console errors.

## Done / Verified Live

### P1 — Remove Game Card Timing Labels from Plan Cards

- Type: UI/UX
- Area: Plans / Game Cards
- Status: Done
- Description:
  Confusing game timing labels were removed from game cards in plans.
- Acceptance Criteria:
  - Game card timings are not shown in plans.
  - Verified on live Cloudflare deployment revision `3fd5a76`.

### P1 — Fix `+ Plan` Button Visual State

- Type: UI/UX
- Area: Games / Plans
- Status: Done
- Description:
  `+ Plan` button now visually communicates whether a game has already been added to a plan.
- Acceptance Criteria:
  - `+ Plan` is grey before adding.
  - `+ Plan` turns green after the game is already added.
  - Verified on live Cloudflare deployment revision `3fd5a76`.

### P1 — Keep Back Arrow Working

- Type: UI/UX
- Area: Navigation
- Status: Done
- Description:
  Back arrow works as a return-to-previous-page control.
- Acceptance Criteria:
  - Back arrow works on the live deployed app.
  - Verified on live Cloudflare deployment revision `3fd5a76`.

### P1 — Keep `My Plans` Under Account

- Type: UI/UX
- Area: Account / Plans
- Status: Done
- Description:
  `My Plans` remains accessible under Account.
- Acceptance Criteria:
  - `My Plans` still appears under Account.
  - Verified on live Cloudflare deployment revision `3fd5a76`.


## Ready

### P0 — Fix Mobile Create New Plan from `+ Plan` Dialog

- Type: Bug
- Area: Mobile / Plans / `+ Plan` Dialog
- Status: Ready
- Steps to Reproduce:
  1. Open the app on mobile.
  2. Make sure there are no plans already created.
  3. Tap `+ Plan` on a game card.
  4. In the dialog, choose/create a new plan.
  5. Tap `Create a new plan`.
- Expected Result:
  - A new plan is created and saved.
  - The selected game is added to that new plan, or the new plan becomes available immediately so the game can be added.
  - User can open the new plan on mobile and see the game card.
- Actual Result:
  - The dialog opens, but `Create a new plan` does nothing.
  - No plan is saved.
  - Mobile user cannot create a plan from `+ Plan`.
- Acceptance Criteria:
  - On mobile, tapping `+ Plan` opens the plan dialog.
  - User can create a new plan from that dialog.
  - New plan saves successfully.
  - The selected game is added to the new plan, or the new plan is immediately available for selection.
  - Works when the user has zero existing plans.
  - Works when the user already has existing plans.
  - Works on desktop and does not break the desktop flow.
  - No red console errors.
  - Does not break the small red X remove button on desktop.
  - Does not bring back game timing labels.
  - Does not break the grey/green `+ Plan` state.
  - Does not remove `My Plans` from Account.
\n\n<!-- MOBILE_PLAN_CREATE_REGRESSION_LOCK_2026_06_29:BACKLOG -->

### P0 — Regression: Restore Mobile Create New Plan Behavior

- Type: Bug
- Area: Mobile / Plans / Add to Plan
- Status: Ready
- Steps to Reproduce:
  1. Open local app on mobile through the local network URL.
  2. Use `+ Plan` to create a new plan.
  3. Observe that visually nothing changes.
  4. Go to `Account > My Plans > Create a New Plan`.
  5. Enter a plan name and create it.
  6. Observe the created message.
  7. Return to `Account > My Plans`.
- Expected Result:
  - The new plan appears in `My Plans`.
  - The new plan persists after refresh.
  - `+ Plan` creation behaves the same on mobile as the live Cloudflare version.
- Actual Result:
  - `+ Plan` mobile create action does not visibly create a saved plan.
  - `Account > My Plans > Create a New Plan` shows a success message, but `My Plans` still shows `No saved plans yet`.
- Regression Note:
  - The live Cloudflare version currently works correctly on mobile, so local code has regressed from known-good behavior.
- Acceptance Criteria:
  - Mobile `+ Plan` creates a saved plan.
  - Mobile `Account > My Plans > Create a New Plan` creates a saved plan.
  - Created plans appear in `My Plans` immediately.
  - Created plans still appear after mobile refresh.
  - Desktop create-plan behavior remains working.
  - Red X remove behavior remains working.
  - No generic fallback storage system is used unless it matches the app’s existing plan data model.
  - No unrelated screens are redesigned or refactored.\n

## Done / Verified

### P0 — Fix Mobile Create New Plan from `+ Plan` Dialog

- Type: Bug
- Area: Mobile / Plans / `+ Plan` Dialog
- Status: Done
- Commit: `5b9bd23`
- Description:
  Mobile plan creation from the `+ Plan` dialog was broken. Tapping `Create a new plan` did not save anything, especially when no plans already existed.
- Verified Result:
  - Mobile `+ Plan` now works.
  - Mobile `Account > My Plans > Create a New Plan` now works.
  - Plans persist.
  - Desktop still works.
  - Red X remove still works.
  - No obvious console errors reported.
- Acceptance Criteria:
  - On mobile, tapping `+ Plan` opens the plan dialog.
  - User can create a new plan from that dialog.
  - New plan saves successfully.
  - Works when the user has zero existing plans.
  - Works when the user already has existing plans.
  - Works on desktop and does not break the desktop flow.
  - No obvious console errors.
  - Does not break the small red X remove button.
  - Does not bring back game timing labels.
  - Does not break the grey/green `+ Plan` state.
  - Does not remove `My Plans` from Account.

## Low Priority / UI Polish

### P3 — Replace Find Game Controller Icon with Magnifying Glass Icon

- Type: UI/UX
- Area: Bottom Navigation / Find
- Status: Inbox
- Description:
  The Find icon in the bottom navigation is currently a game controller. User does not like it and prefers a simple standard search/find icon, like an iOS-style magnifying glass.
- Acceptance Criteria:
  - Bottom navigation Find icon uses a simple magnifying glass/search icon.
  - Icon is visually clear and standard.
  - Icon still clearly labels the Find section.
  - Does not change unrelated bottom navigation behavior.
  - Works on desktop and mobile.
  - No obvious console errors.

### P3 — Account Page Should Open at Top

- Type: UI/UX
- Area: Account Page / Mobile
- Status: Inbox
- Description:
  When opening the Account page, the page appears to open in the middle instead of at the top. This is cosmetic and low priority.
- Acceptance Criteria:
  - Opening Account starts at the top of the Account page.
  - Does not interfere with bottom navigation.
  - Does not change unrelated Account page content.
  - Works on mobile.
  - No obvious console errors.
