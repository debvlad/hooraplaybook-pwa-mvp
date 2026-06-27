# HooraPlaybook Version History

This file tracks delivered app updates, feature changes, bug fixes, UI reversions, locked rules, and regression protections. It must be updated automatically with every packaged update.

## Version 0.3.0 — 2026-06-27

### Added
- Added automatic version tracking through `APP_VERSION` in `app.js`.
- Added visible app version text at the bottom of the Account page.
- Added `VERSION_HISTORY.md` as the permanent update log.
- Added `assets/Remove.png` for plan-game removal controls.

### Changed
- Replaced visible text `Remove` buttons on plan game rows with a small red X circle image.
- Applied the red X remove control to both the general My Plans page and the Modify Plan page.
- Removed confusing timing labels from plan game rows/cards.
- Made the game-card `+ Plan` button grey by default and green when that game is already in a saved plan.
- Fixed header back-button sizing so the circular back image is not clipped or truncated.
- Simplified the Available Materials page by removing redundant nested header actions and duplicate bottom buttons.

### Preserved locked behavior
- No visible Projector functionality.
- No double headers or double footers on game pages.
- Headers use `assets/back_button.png`.
- HooraPlaybook wordmark is live styled text, not a wordmark image.
- Categories remain the user-facing replacement for Purpose.
- My Plans remains under Account, not in the footer.
- Game cards use `+ Plan` instead of an empty square.
