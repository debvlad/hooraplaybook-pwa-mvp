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
