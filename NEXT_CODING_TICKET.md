# NEXT_CODING_TICKET.md

You are the coding assistant for my app.

Work on only this revision:

## P0 — Fix Mobile Create New Plan from `+ Plan` Dialog

- Type: Bug
- Area: Mobile / Plans / `+ Plan` Dialog
- Status: Ready

### Problem
On mobile, tapping `+ Plan` opens the dialog to create a new plan, but tapping `Create a new plan` does nothing. No plan is saved. This blocks mobile users from creating a plan, especially when they have no plans already created.

### Steps to Reproduce
1. Open the app on mobile.
2. Make sure there are no plans already created.
3. Tap `+ Plan` on a game card.
4. In the dialog, try to create a new plan.
5. Tap `Create a new plan`.

### Expected Result
- A new plan is created and saved.
- The selected game is added to that new plan, or the new plan becomes available immediately so the user can add the game.
- User can then open the plan on mobile and see the game card.

### Actual Result
- The dialog opens.
- `Create a new plan` does nothing.
- No plan is saved.
- User cannot proceed with mobile plan creation.

### Acceptance Criteria
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
- Does not break the back arrow.
- Does not remove `My Plans` from Account.

### Locked Fixes To Preserve
- Desktop small red X remove button on plan game cards works and must not break.
- Plan game card timings must stay removed.
- `+ Plan` must remain grey before adding.
- `+ Plan` must turn green after a game is already added.
- Back arrow must continue working.
- `My Plans` must remain under Account.

### Rules
- Fix only this issue.
- Do not redesign unrelated screens.
- Do not change unrelated files.
- Do not remove working features.
- Do not violate `LOCKED_FIXES.md`.
- Respect `CODING_INSTRUCTIONS.md`.
- Explain exactly what changed.
- List changed files.
- Give local testing steps.
