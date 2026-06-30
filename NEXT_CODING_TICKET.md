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
- Footer remains light and universal.
- Footer still shows exactly:
  - Find
  - Favorites
  - Icebreakers
  - Account
- No unrelated bottom navigation behavior changes.
- Works on desktop.
- Works on mobile.
- No obvious console errors.

### Locked Fixes To Preserve
- Thumbs up must open Leave a Review page.
- Thumbs down must cancel thumbs up and open Leave a Review page.
- Review page header must show only back button and HooraPlaybook logo.
- Rating star selection must work.
- Public average/count must update immediately.
- Review submission must work and return to game page.
- Game Page redesign must remain working.
- Find Games redesign must remain working.
- Main My Plans page must not show drag handles on game rows.
- Main My Plans game rows must not collapse or squeeze.
- My Plans game titles and descriptions must remain readable.
- Red X remove buttons must not overlap text unreadably.
- Modify Plan drag handles must remain available.
- Modify Plan drag sorting must remain working.
- Red X remove behavior must remain working.
- Universal light footer must remain working.
- Desktop width consistency must remain working.
- Mobile `+ Plan` must still allow creating and saving a new plan.
- Mobile `Account > My Plans > Create a New Plan` must still work.
- Newly created plans must persist.
- Game card timings must stay removed.
- `+ Plan` must stay grey before adding and green after already added.
- Back arrow must continue working.
- `My Plans` must remain under Account.

### Rules
- Fix only this issue.
- Do not work on Account page scroll position in this ticket.
- Do not work on footer height in this ticket.
- Do not redesign unrelated screens.
- Do not change unrelated files.
- Do not remove working features.
- Do not violate `LOCKED_FIXES.md`.
- Respect `CODING_INSTRUCTIONS.md`.
- Explain exactly what changed.
- List changed files.
- Give local testing steps.
