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
