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
- No visible Projector Mode entry points.
- No Untested or Not Recommended tags.
- All app headers must use `assets/back_button.png` for the back button image.
- Header back chevron must return to the actual previous in-app page, not hard-code `#/app/find`.

- Header HooraPlaybook wordmark must be live text, not a wordmark image. Use purple for “Hoora” and navy for “Playbook”.
- Do not show a second filter button beside the search field when the header already has the filter icon.
