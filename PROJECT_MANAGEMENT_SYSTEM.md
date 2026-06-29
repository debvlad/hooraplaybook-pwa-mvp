# PROJECT_MANAGEMENT_SYSTEM.md

## Main Rule
Work on one revision ticket at a time.

## Workflow
Pick one ticket → Code → Test → Update notes → Commit → Next ticket → Deploy stable batch.

## File Roles
- `APP_INBOX.md` — quick capture for bugs, ideas, confusing behavior, and testing observations.
- `TEST_NOTES.md` — testing diary for each revision.
- `BACKLOG.md` — organized ticket list.
- `WEEKLY_SPRINT.md` — this week’s selected work.
- `ROADMAP.md` — bigger-picture direction.
- `LOCKED_FIXES.md` — rules that must not break again.
- `RELEASE_NOTES.md` — record of live deployments.
- `NEXT_CODING_TICKET.md` — ready-to-use single ticket for the coding chat.

## Priority Rules
- `P0` — urgent / broken now.
- `P1` — next release.
- `P2` — do later.
- `P3` — nice to have.
- `Parking Lot` — raw ideas.

## Definition of Done
A ticket is done only when:
1. Code is implemented.
2. App is tested.
3. Works on desktop.
4. Works on mobile.
5. No obvious console errors.
6. No locked fixes were broken.
7. `TEST_NOTES.md` is updated.
8. `BACKLOG.md` is updated.
9. Code is committed to Git.

## Deployment Rule
Do not deploy every single ticket unless it is P0.

Normal rhythm:
Fix → Test → Commit → Repeat → Full local test → Deploy stable batch → Test live → Update release notes.
