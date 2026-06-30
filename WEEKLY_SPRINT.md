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

## 2026-06-29 Sprint Update — P0 Mobile Plan Creation Fixed

### Completed
- P0 — Fix Mobile Create New Plan from `+ Plan` Dialog
  - Commit: `5b9bd23`
  - Verified mobile `+ Plan` now works.
  - Verified mobile `Account > My Plans > Create a New Plan` now works.
  - Verified plans persist.
  - Verified desktop still works.
  - Verified red X remove still works.

### Newly Captured Low-Priority Issues
- P3 — Replace Find Game Controller Icon with Magnifying Glass Icon
- P3 — Account Page Should Open at Top

### Recommended Next Focus
- P1 — Fix Mobile Modify Plan Reorder / Swipe Behavior

### Do Not Touch
- Do not break mobile plan creation.
- Do not break desktop red X remove.
- Do not bring back plan game card timings.
- Do not break grey/green `+ Plan` state.
- Do not remove `My Plans` from Account.


## 2026-06-29 Sprint Update — P1 Mobile Modify Plan Reorder Fixed

### Completed
- P1 — Fix Mobile Modify Plan Reorder / Swipe Behavior
  - Commit: `631e5d5`
  - Verified mobile drag reorder works.
  - Verified card follows finger with placeholder.
  - Verified order persists after going back and reopening.
  - Verified order persists after refresh.
  - Verified swipe-left reveals only the red X circle icon.
  - Verified red X remove works.
  - Verified no up/down buttons are shown.

### Remaining Low-Priority Polish
- P3 — Replace Find Game Controller Icon with Magnifying Glass Icon
- P3 — Account Page Should Open at Top

### Recommended Next Focus
- P3 — Replace Find Game Controller Icon with Magnifying Glass Icon

### Do Not Touch
- Do not break mobile plan creation.
- Do not break My Plans red X remove.
- Do not break Modify Plan red X remove.
- Do not break mobile drag reorder.
- Do not break order persistence after reopening or refresh.
- Do not bring back up/down reorder buttons.
- Do not bring back plan game card timings.
- Do not break grey/green `+ Plan` state.
- Do not remove `My Plans` from Account.


## 2026-06-29 Sprint Detail Update — Game Page Redesign

### Next Focus
- P1 — Redesign Game Page Layout and Functionality

### Source of Truth for This Ticket
- Use `GAME_PAGE_CODING_INSTRUCTIONS.md`.
- Use the attached `APP. Game Page.png` as the visual direction.
- Use `Universal footer.png` for the footer visual identity.

### Scope Boundary
- Only update the individual Game Page.
- Do not redesign Find Games again.
- Do not change unrelated plan screens.
- Do not change unrelated Account/Favorites/Icebreakers pages.
- Preserve all locked plan creation, remove, reorder, and Find Games behaviors.


## 2026-06-30 Sprint Update — Hide My Plans Drag Handles V2 Verified

### Completed Locally
- P3 — Hide Drag Handles on Main My Plans Page
  - V1 failed and should not be committed.
  - V1 broke My Plans card layout on desktop and mobile.
  - V2 restored My Plans layout on desktop.
  - V2 restored My Plans layout on mobile.
  - V2 hides drag handles on main My Plans page.
  - V2 keeps Modify Plan drag handles working.
  - V2 keeps Modify Plan drag sorting working.
  - V2 keeps red X remove behavior working.
  - V2 preserves Find Games redesign.
  - V2 preserves Game Page redesign.
  - V2 preserves universal light footer.
  - V2 preserves desktop width consistency.

### Recommended Next Focus
- P3 — Replace Find Game Controller Icon with Magnifying Glass Icon

### Do Not Touch
- Do not reintroduce My Plans drag handles on the main My Plans page.
- Do not collapse or squeeze My Plans game rows.
- Do not let red X remove overlap text unreadably.
- Do not break Modify Plan drag handles.
- Do not break Modify Plan drag sorting.
- Do not break red X remove behavior.
- Do not break Find Games redesign.
- Do not break Game Page redesign.
- Do not break universal light footer.
- Do not break desktop width consistency.


## 2026-06-30 Sprint Update — Review Flow After Vote Locally Verified

### Completed Locally
- P1 — Open Leave Review Page After Thumbs Up/Down Vote
  - Verified thumbs up opens Leave a Review page.
  - Verified thumbs down cancels thumbs up and opens Leave a Review page.
  - Verified review page header has only back button and HooraPlaybook logo.
  - Verified game title appears below header.
  - Verified `Your rating` appears.
  - Verified five grey stars appear and selection fills correctly.
  - Verified public average/count updates immediately.
  - Verified review text box appears.
  - Verified `Add images or Video` opens media picker.
  - Verified Submit Review works.
  - Verified success message appears.
  - Verified app returns to game page.
  - Verified Game Page redesign still works.
  - Verified Find Games redesign still works.
  - Verified My Plans layout still works.
  - Verified Modify Plan drag sorting still works.
  - Verified red X remove behavior still works.

### Current Deployment Plan
- Do not deploy yet unless user decides to push the current batch live.
- Continue local revisions and deploy as a stable batch later.

### Recommended Next Focus
- P3 — Replace Find Game Controller Icon with Magnifying Glass Icon

### Do Not Touch
- Do not break thumbs up/down review flow.
- Do not break review page header.
- Do not break rating star selection.
- Do not break public average/count update.
- Do not break media picker.
- Do not break Submit Review.
- Do not break return-to-game-page behavior.
- Do not break Game Page redesign.
- Do not break Find Games redesign.
- Do not break My Plans layout.
- Do not break Modify Plan drag sorting.
- Do not break red X remove behavior.
