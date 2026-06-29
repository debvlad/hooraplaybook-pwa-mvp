# LOCKED_FIXES.md

## Locked after live deployment revision `3fd5a76` — 2026-06-29

These behaviors were verified on the live Cloudflare deployment and must not break again:

- Plan game cards must not show confusing timing/duration labels.
- The `+ Plan` button must be grey before a game is added to a plan.
- The `+ Plan` button must turn green after the game is already added to a plan.
- The back arrow must continue to work as a return-to-previous-page control.
- `My Plans` must remain accessible under Account.
- The huge Remove button must not return to plan game cards.
- These locked behaviors must remain working on both desktop and mobile.

## Protection for Next Revision

When fixing the red X remove button:

- Do not bring back game timing labels.
- Do not change the working `+ Plan` grey/green state.
- Do not break the back arrow.
- Do not remove or hide `My Plans` from Account.
- Do not redesign unrelated screens.


## Locked after latest red X update test — 2026-06-29

- On desktop, the small red X remove button on plan game cards must continue working.
- The red X remove button must remain small and positioned on the plan game card, not displayed as a large image beside the card.
- Fixing mobile plan creation must not break the working desktop red X remove behavior.
\n\n<!-- MOBILE_PLAN_CREATE_REGRESSION_LOCK_2026_06_29:LOCKED_FIXES -->

## Locked Fix — Mobile Create New Plan Must Not Regress

- Date Locked: 2026-06-29
- Area: Mobile / Plans / Add to Plan
- Rule:
  - Mobile plan creation must remain functional from every supported entry point.
- Protected Entry Points:
  - `+ Plan`
  - Add tab / plan creation flow
  - `Account > My Plans > Create a New Plan`
- Required Behavior:
  - A newly created plan must appear in `My Plans` immediately.
  - A newly created plan must still appear after refreshing the mobile browser.
  - Desktop create-plan behavior must remain working.
  - The live Cloudflare behavior is the parity baseline when local behavior differs.
- Regression Test Required Before Any Plan-Related Commit:
  1. Start local server with `python3 -m http.server 8000 --bind 0.0.0.0`.
  2. Open the app on a phone using the Mac local IP.
  3. Create a plan from `+ Plan`.
  4. Confirm it appears in `Account > My Plans`.
  5. Refresh mobile browser.
  6. Confirm the plan still appears.
  7. Create a plan from `Account > My Plans > Create a New Plan`.
  8. Confirm it appears and persists after refresh.
  9. Confirm desktop create-plan behavior still works.
  10. Confirm red X remove behavior still works.
- Do Not:
  - Do not ship a success message unless the created plan actually appears in `My Plans`.
  - Do not create a second plan storage system that is not read by `My Plans`.
  - Do not use generic fallback patches unless they preserve the existing app plan model.
  - Do not remove or weaken this locked rule without explicit approval.\n

## Locked after commit `5b9bd23` — 2026-06-29

- Mobile `+ Plan` must allow creating a new plan from the dialog.
- Mobile `Account > My Plans > Create a New Plan` must create and save a plan.
- Newly created plans must persist.
- Plan creation must work when the user has zero existing plans.
- Plan creation must continue working when the user already has existing plans.
- Fixes to mobile plan creation must not break desktop plan creation.
- Desktop red X remove behavior must continue working.
- Existing red X remove behavior must not regress.


## Locked after commit `631e5d5` — 2026-06-29

- My Plans red X must remain visible.
- My Plans red X remove must continue working.
- Modify Plan must continue opening correctly.
- Modify Plan must not show up/down reorder buttons.
- Mobile drag reorder in Modify Plan must continue working.
- During mobile drag reorder, the card should follow the finger with a placeholder.
- Modified plan order must persist after going back and reopening.
- Modified plan order must persist after refresh.
- Swipe left must reveal only the red X circle icon.
- Red X remove must continue working after swipe reveal.
- Fixes to unrelated UI polish must not break plan creation, red X remove, drag reorder, or order persistence.
