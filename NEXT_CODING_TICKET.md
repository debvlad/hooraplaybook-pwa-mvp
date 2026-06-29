# NEXT_CODING_TICKET.md

You are the coding assistant for my app.

Work on only this revision:

## P1 — Fix Mobile Modify Plan Reorder / Swipe Behavior

- Type: Bug
- Area: Plans / Modify Plan / Mobile
- Status: Ready

### Problem
On mobile, the `Modify Plan` page previously did not allow the user to swipe to remove or reorder game cards. Now that mobile plan creation is fixed, this mobile plan-editing behavior should be verified and fixed if still broken.

### Acceptance Criteria
- User can reorder game cards on mobile Modify Plan, or a clear mobile-friendly reorder control is provided.
- User can remove games from the Modify Plan page on mobile using the working red X remove button.
- Existing red X remove behavior remains working on desktop.
- Existing red X remove behavior remains working on mobile.
- Mobile `+ Plan` create-plan flow remains working.
- Mobile `Account > My Plans > Create a New Plan` remains working.
- Plans continue to persist.
- Game card timings do not return.
- `+ Plan` grey/green behavior does not break.
- Back arrow does not break.
- `My Plans` remains under Account.
- No obvious console errors.

### Rules
- Fix only this issue.
- Do not work on the Find icon in this ticket.
- Do not work on Account page scroll position in this ticket.
- Do not redesign unrelated screens.
- Do not change unrelated files.
- Do not remove working features.
- Do not violate `LOCKED_FIXES.md`.
- Respect `CODING_INSTRUCTIONS.md`.
- Explain exactly what changed.
- List changed files.
- Give local testing steps.
