# NEXT_CODING_TICKET.md

You are the coding assistant for my app.

Work on only this revision:

## P3 — Replace Find Game Controller Icon with Magnifying Glass Icon

- Type: UI/UX
- Area: Bottom Navigation / Find
- Status: Ready

### Problem
The Find icon in the bottom navigation is currently a game controller. The user does not like it and prefers a simple standard search/find icon, like an iOS-style magnifying glass.

### Acceptance Criteria
- Bottom navigation Find icon uses a simple magnifying glass/search icon.
- Icon looks like a standard search/find icon.
- Icon still clearly represents the Find section.
- Bottom navigation layout does not change.
- No unrelated bottom navigation behavior changes.
- Works on desktop.
- Works on mobile.
- No obvious console errors.

### Locked Fixes To Preserve
- Mobile `+ Plan` must still allow creating and saving a new plan.
- Mobile `Account > My Plans > Create a New Plan` must still work.
- Newly created plans must persist.
- My Plans red X must remain visible and working.
- Modify Plan red X must remain working.
- Mobile drag reorder must remain working.
- Plan order must persist after going back/reopening.
- Plan order must persist after refresh.
- Swipe left must reveal only the red X circle icon.
- Game card timings must stay removed.
- `+ Plan` must stay grey before adding and green after already added.
- Back arrow must continue working.
- `My Plans` must remain under Account.

### Rules
- Fix only this issue.
- Do not work on Account page scroll position in this ticket.
- Do not redesign unrelated screens.
- Do not change unrelated files.
- Do not remove working features.
- Do not violate `LOCKED_FIXES.md`.
- Respect `CODING_INSTRUCTIONS.md`.
- Explain exactly what changed.
- List changed files.
- Give local testing steps.
