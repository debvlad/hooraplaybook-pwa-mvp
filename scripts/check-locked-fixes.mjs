import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const file = name => path.join(root, name);
const read = name => fs.existsSync(file(name)) ? fs.readFileSync(file(name), 'utf8') : '';
const exists = name => fs.existsSync(file(name));
const fail = msg => failures.push(msg);
const assert = (ok, msg) => { if (!ok) fail(msg); };

const app = read('app.js');
const css = read('styles.css');
const html = read('index.html');
const code = `${app}\n${css}\n${html}`;

[
  'app.js', 'styles.css', 'index.html', 'LOCKED_FIXES.md', 'CODING_INSTRUCTIONS.MD',
  'assets/back_button.png', 'assets/filter.png', 'assets/sort.png', 'assets/ios-share.svg'
].forEach(name => assert(exists(name), `Missing required file: ${name}`));

const categories = ['Quick and simple','Wet-n-Wild','Team-building','Teams','Circle','Icebreakers','Adventure','Tag','Sport-n-fitness','Theatrical','Relays'];
categories.forEach(category => assert(app.includes(category), `Missing standard category: ${category}`));

assert(/assets\/back_button\.png|\/assets\/back_button\.png/.test(code), 'Headers must use assets/back_button.png.');
assert(!/back-arrow-previous-page-button\.jpg/.test(code), 'Old back-arrow asset returned. Use back_button.png.');
assert(/brand-hoora/.test(code) && /brand-playbook/.test(code), 'Header wordmark must be live styled text.');
assert(!/hooraplaybook-wordmark\.png/.test(code), 'Header wordmark image returned. Use live text.');
assert(/\/assets\/filter\.png|assets\/filter\.png/.test(code), 'Filter icon must use assets/filter.png.');
assert(/\/assets\/sort\.png|assets\/sort\.png/.test(code), 'Sort icon must use assets/sort.png.');
assert(/\/assets\/ios-share\.svg|assets\/ios-share\.svg/.test(code), 'Share icon must use assets/ios-share.svg.');

assert(!/title:\s*['"]Purpose['"]/.test(app), 'Filter section regressed to Purpose. Use Categories.');
assert(!/<span class="label">Purpose<\/span>/.test(app), 'A visible Purpose label returned. Use Category/Categories.');
assert(!/Search games, materials, purpose/i.test(app), 'Search placeholder regressed to purpose wording.');
assert(!(new RegExp('Pro'+'jector Mode|Pre'+'sentation view|Exit Pre'+'sentation|renderPre'+'sentation|data-print-game|Download \\/ Print PDF','i')).test(app), 'Removed display/export functionality returned to app.js.');
assert(!/Not Recommended/i.test(app), 'Visible Not Recommended returned.');
assert(!/Untested/i.test(app), 'Visible Untested returned.');
assert(!/data-go="\/app\/find"[^>]*aria-label="Back"/.test(app), 'Back button is hard-coded to /app/find.');
assert(/function goBack\(/.test(app), 'Previous-route back navigation function missing.');
assert(/data-back/.test(app), 'Headers should use data-back.');
assert(!/>‹<\/button>/.test(app), 'Header regression: raw chevron button returned. Use assets/back_button.png.');

assert(!/search-row[\s\S]{0,300}data-go="\/filter"/.test(app), 'Redundant filter button beside search field returned.');
assert(/Save Plan/.test(app) && /Rename/.test(app) && /Delete/.test(app), 'My Plans save/rename/delete controls missing.');
assert(/data-go="\/app\/games\/\$\{item\.gameId\}"/.test(app), 'Saved plan games must be clickable.');


assert(/must never show double headers or double footers/i.test(read('LOCKED_FIXES.md')), 'LOCKED_FIXES.md must include the double header/footer rule.');
assert(/Locked Game Page Shell Rule/i.test(read('CODING_INSTRUCTIONS.MD')), 'CODING_INSTRUCTIONS.MD must include the game page shell rule.');
assert(/function isStandaloneGameRoute\(/.test(app), 'Double-header regression: isStandaloneGameRoute() is missing.');
assert(/if \(isStandaloneGameRoute\(\)\) return renderAppRoute\(\);[\s\S]{0,160}return renderAppShell\(renderAppRoute\(\)\)/.test(app), 'Double-header regression: game routes must bypass renderAppShell before the global app shell is applied.');
assert(/game-page-frame/.test(app), 'Double-header regression: game pages should use a dedicated game-page-frame marker.');
assert(!/function renderGameDetail[\s\S]{0,600}renderAppShell\(/.test(app), 'Double-header regression: renderGameDetail must not call renderAppShell.');

assert(!(new RegExp('Pro'+'jector|Pre'+'sentation view|pre'+'sentation-friendly|pre'+'sentation mode|pre'+'sentation route','i')).test(read('CODING_INSTRUCTIONS.MD')), 'CODING_INSTRUCTIONS.MD must not describe removed display functionality.');
assert(!/Download \/ Print PDF|data-print-game/i.test(app), 'Game page PDF button/section returned.');
assert(/data-open-add-to-plan/.test(app) && /data-add-game-to-existing-plan/.test(app) && /data-create-plan-from-game/.test(app), 'Add to Plan menu behavior missing.');
assert(/function renderPlanMaterials\(/.test(app) && /MATERIAL_OPTIONS/.test(app) && /'No Materials'/.test(app), 'Plan materials cloud missing or No Materials is not configured.');
assert(!/<span class="label">Available materials<\/span><input/i.test(app), 'Plan Available materials regressed to a text input.');
assert(/data-go="\/app\/plan\/materials"/.test(app), 'Plan Available materials must navigate to material selector.');


if (failures.length) {
  console.error('\n❌ LOCKED FIXES CHECK FAILED\n');
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log('\n✅ LOCKED FIXES CHECK PASSED\n');
