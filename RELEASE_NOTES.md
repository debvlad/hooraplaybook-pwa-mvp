# RELEASE_NOTES.md

## 2026-06-29 — First Live Cloudflare Revision — Revision `3fd5a76`

### Changes deployed
- Removed confusing game card timing labels from plan cards.
- Updated `+ Plan` button state:
  - Grey before adding a game to a plan.
  - Green after the game is already added.
- Back arrow works as a return-to-previous-page control.
- `My Plans` remains available under Account.
- Removed the previous huge Remove button from plan game cards.

### Tested areas
- Game cards in plans.
- `+ Plan` button state.
- Back arrow navigation.
- Account navigation.
- Main `My Plans` page.
- `Modify Plan` page.
- Desktop live deployment.
- Mobile live deployment.
- Browser console.

### Live cloud test result
Partially successful.

The live Cloudflare deployment is online and the main intended updates mostly worked. No red console errors were found. However, the remove-game control did not work correctly.

### Known issues
- The intended small red X remove button does not appear in the top-right corner of plan game cards.
- A large image/screenshot appears on the right side of each game card instead of the small red X.
- Remove behavior needs to work on both:
  - Main `My Plans` page
  - `Modify Plan` page
- User should be able to remove games directly from `My Plans` without opening Modify Plan.
- On mobile, Modify Plan does not allow swipe-to-remove.
- On mobile, Modify Plan does not allow card reordering.

### Decision
- Keep this deployment as a partially successful first live release.
- Lock the working behavior from this deployment.
- Next revision should focus only on the small red X remove button.
- Mobile reorder/swipe behavior should remain a separate follow-up ticket.


## 2026-06-29 — Latest Update Test Note

### Verified
- Desktop small red X remove button on plan game cards works correctly.

### Known issue
- On mobile, `+ Plan` opens the create-plan dialog, but `Create a new plan` does not save anything.
- This blocks mobile plan creation when the user has no existing plans.
- Because of this, mobile red X remove behavior cannot be fully verified when starting from zero plans.

### Decision
- Fix mobile plan creation immediately.
- Preserve the working desktop red X remove button behavior.
