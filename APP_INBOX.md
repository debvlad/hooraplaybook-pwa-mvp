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
