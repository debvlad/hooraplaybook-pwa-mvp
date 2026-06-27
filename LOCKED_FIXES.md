# HooraPlaybook Locked Fixes

These fixes must never be reverted:

- Game detail pages use only one header.
- Game detail header must show: circular image back button, logo mark, text HooraPlaybook wordmark, iOS share icon.
- Share button copies/shares only the URL, not the description.
- Filter icon must use assets/filter.png.
- Sort icon must use assets/sort.png.
- Games screen must not show the redundant category chip section.
- Category filtering belongs on the Filter page.
- Game cards must open the game detail page at the top.
- My Plans must support save, name, view, rename, delete, and clickable games.
- Admin > Users must show Grant 30 Days and Disable without horizontal scrolling.
- Add Game must use Categories, not Purpose.
- Standard categories:
  - Quick and simple
  - Wet-n-Wild
  - Team-building
  - Teams
  - Circle
  - Icebreakers
  - Adventure
  - Tag
  - Sport-n-fitness
  - Theatrical
  - Relays
- No visible full-screen display mode entry points.
- No Untested or Not Recommended tags.
- All app headers must use `assets/back_button.png` for the back button image.
- Header back chevron must return to the actual previous in-app page, not hard-code `#/app/find`.

- Header HooraPlaybook wordmark must be live text, not a wordmark image. Use purple for “Hoora” and navy for “Playbook”.
- Do not show a second filter button beside the search field when the header already has the filter icon.
- Game detail, reviews, rating, and notes pages must never be wrapped by the global `renderAppShell()` because those pages already render their own header/frame.
- Game detail, reviews, rating, and notes pages must never show double headers or double footers/bottom navigation.
- All `/app/games/:id...` routes must bypass the outer app shell using `isStandaloneGameRoute()` before `renderAppShell(renderAppRoute())` is called.
- Raw text chevrons such as `‹` must not be used in app headers; header back buttons must render the image asset `assets/back_button.png`.


- Game pages must not show a “Download / Print PDF” button or section.
- Game detail sticky actions must show: Rate This Game, Add Notes, and Add to Plan.
- Add to Plan must open a choice between existing plans and Create New Plan.
- Plan page Available materials must be a navigation button, not a text input.
- Plan materials selector must show a tappable cloud of materials with “No Materials” first.
- `CODING_INSTRUCTIONS.MD` must not describe full-screen display mode functionality.