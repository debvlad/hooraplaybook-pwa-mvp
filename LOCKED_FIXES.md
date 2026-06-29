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
