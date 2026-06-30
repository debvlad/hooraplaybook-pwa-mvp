# NEXT_CODING_TICKET.md

You are the coding assistant for my app.

Work on only this revision:

## P1 — Redesign Game Page Layout and Functionality

- Type: UI/UX
- Area: Game Detail Page
- Status: Ready

### Source Files / Visual References
Use these as the source of truth for this ticket:

- `GAME_PAGE_CODING_INSTRUCTIONS.md`
- `APP. Game Page.png`
- `Universal footer.png`

### Problem
After the Find Games page redesign, the individual Game Page needs to be updated to match the polished HooraPlaybook iOS-style visual direction and support all key actions clearly.

### Scope
Update only the individual Game Page.

Do not redesign unrelated pages. Do not change unrelated plan screens, Account, Favorites, Icebreakers, or Find Games except where absolutely required to keep navigation working.

### Required Page Structure
Implement the Game Page using this vertical order:

1. Universal safe-area wrapper
2. Individual game page header
3. Game title
4. Rating / reviews / favorite section
5. Game image
6. `+ Add to Plan` primary button
7. Popularity vote buttons and `Add Notes` button
8. Four metadata cards: Age, Players, Time, Materials
9. Category section
10. How to Play section
11. Variations section
12. Possible Bible Verse Connections section
13. Tips section
14. Universal footer

### Header Requirements
- Left: circular back button with standard iOS-style left arrow / chevron.
- Center: centered HooraPlaybook logo lockup.
- Right: circular share button using standard iOS share icon.
- Do not show sort or filter icons on this page.
- Back button returns to previous screen, with Find Games fallback.
- Share button uses `navigator.share()` when available.
- Share fallback copies the current URL and shows confirmation.

### Main UI Requirements
- Game title is large, bold, dark navy, and left aligned.
- Rating row includes five stars, rating text, and favorite heart.
- `View reviews` link appears under the rating row.
- Favorite heart toggles favorite and does not navigate.
- Game image uses aspect ratio `1.55 / 1`.
- `+ Add to Plan` is full width, green, rounded, and stays on one line.
- `+ Add to Plan` opens the existing Pick a Plan / Create New Plan flow.
- Thumbs up/down are separate functional buttons and track user vote state.
- Add Notes opens user-specific notes for the current game.
- Metadata cards show Ages, Players, Time, Materials.
- Category section is static, not clickable, and has no right chevron.
- Category values must be limited to the approved category list from the instructions.
- How to Play section includes Game Setup and Rules.
- Variations section is included.
- Possible Bible Verse Connections section is included.
- Add `Suggest a Bible connection` button at the bottom of Bible Connections.
- Tips section is included.

### Footer Requirements
- Use the universal footer visual identity from `Universal footer.png`.
- Footer items must be exactly:
  1. Find
  2. Favorites
  3. Icebreakers
  4. Account
- On the Game Page, `Find` remains the active footer item.
- Do not show extra footer items.

### Functionality Requirements
- Back button works.
- Share button works with native share and clipboard fallback.
- Favorite heart works and persists.
- View Reviews opens reviews or shows a non-blocking placeholder if reviews are not ready.
- `+ Add to Plan` opens existing plan picker and does not break mobile plan creation.
- If game is already in a selected plan, avoid duplicate insertion.
- Thumbs up/down update popularity state and prevent unlimited repeated votes.
- Add Notes opens personal notes for the current game.

### Acceptance Criteria
- Game Page opens correctly from a game card.
- Game Page visually matches the uploaded mockup direction.
- Header has back button, centered HooraPlaybook logo, and share button.
- Sort/filter icons are not shown on the Game Page.
- Game title, rating, favorite, image, Add to Plan, vote buttons, notes, metadata, category, and content sections render correctly.
- Category card is static and has no chevron.
- Footer shows exactly Find, Favorites, Icebreakers, Account.
- Find remains active in the footer.
- Layout works on desktop.
- Layout works on mobile.
- Long titles do not break layout.
- Long materials text does not break metadata cards.
- Missing image fallback works.
- No ratings state works.
- No obvious console errors.

### Locked Fixes To Preserve
- Find Games page must continue opening successfully.
- Find Games search must filter without losing focus.
- Active filter chips must remain removable.
- Heart button on Find Games cards must toggle favorite and must not open the detail page.
- `+ Plan` button on Find Games cards must open the Add to Plan picker and must not open the detail page.
- `+ Plan` must stay on one line.
- Bottom nav must show exactly: Find, Favorites, Icebreakers, Account.
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
- Back arrow must continue working.
- `My Plans` must remain under Account.

### Rules
- Fix only this issue.
- Do not work on unrelated bottom navigation polish in this ticket.
- Do not work on Account page scroll position in this ticket.
- Do not work on hiding My Plans drag handles in this ticket.
- Do not redesign unrelated screens.
- Do not change unrelated files except where necessary for the Game Page.
- Do not remove working features.
- Do not violate `LOCKED_FIXES.md`.
- Respect `CODING_INSTRUCTIONS.md`.
- Explain exactly what changed.
- List changed files.
- Give local testing steps.
