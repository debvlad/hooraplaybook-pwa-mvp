# WEEKLY_SPRINT.md

## Week of 2026-06-29

### Main Goal
Stabilize plan card behavior after the first live `3fd5a76` revision so users can clearly add and remove games from plans on both desktop and mobile.

### Must Finish
- P1 — Add Small Red X Remove Button to Plan Game Cards

### Should Finish
- P1 — Fix Mobile Modify Plan Reorder / Swipe Behavior

### Do Not Touch This Week
- Do not redesign unrelated plan screens.
- Do not change unrelated Account navigation.
- Do not change unrelated game card layout.
- Do not change `+ Plan` button logic except to preserve current working behavior.
- Do not bring back game timing labels on plan cards.
- Do not break the back arrow.
- Do not remove `My Plans` from Account.


## 2026-06-29 Sprint Priority Update

### Immediate Must Fix
- P0 — Fix Mobile Create New Plan from `+ Plan` Dialog

### Keep Protected
- Desktop small red X remove button on plan game cards is working and must not be broken.
- Game card timings must stay removed.
- `+ Plan` grey/green behavior must stay working.
- Back arrow must stay working.
- `My Plans` must stay under Account.

### Move After This
- Mobile red X verification should happen after mobile plan creation works.
- Mobile Modify Plan reorder/swipe remains separate unless required by this bug.
\n\n<!-- MOBILE_PLAN_CREATE_REGRESSION_LOCK_2026_06_29:WEEKLY_SPRINT -->

## Added 2026-06-29 — Sprint Update

### Must Finish

- P0 — Regression: Restore Mobile Create New Plan Behavior
  - Mobile plan creation must match the known-good live Cloudflare behavior.
  - Test both mobile entry points:
    - `+ Plan`
    - `Account > My Plans > Create a New Plan`

### Do Not Touch This Week

- Do not redesign unrelated plan screens.
- Do not change the confirmed working red X remove button unless directly broken by the fix.
- Do not replace working desktop create-plan behavior.
- Do not introduce a separate fallback plan store that diverges from the app’s real plan storage/rendering model.\n