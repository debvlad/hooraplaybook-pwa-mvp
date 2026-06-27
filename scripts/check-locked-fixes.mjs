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
const coding = read('CODING_INSTRUCTIONS.MD');
const locked = read('LOCKED_FIXES.md');
const versionHistory = read('VERSION_HISTORY.md');
const code = `${app}\n${css}\n${html}`;

[
  'app.js', 'styles.css', 'index.html', 'LOCKED_FIXES.md', 'CODING_INSTRUCTIONS.MD', 'VERSION_HISTORY.md',
  'assets/back_button.png', 'assets/filter.png', 'assets/sort.png', 'assets/ios-share.svg', 'assets/Remove.png', 'assets/edit-246.svg'
].forEach(name => assert(exists(name), `Missing required file: ${name}`));

const categories = ['Quick and simple','Wet-n-Wild','Team-building','Teams','Circle','Icebreakers','Adventure','Tag','Sport-n-fitness','Theatrical','Relays'];
categories.forEach(category => assert(app.includes(category), `Missing standard category: ${category}`));

assert(/const APP_VERSION\s*=/.test(app), 'APP_VERSION constant is missing.');
assert(/Version \$\{APP_VERSION\}/.test(app), 'Account page must display small grey app version.');
assert(/## Version 0\.3\.0/.test(versionHistory), 'VERSION_HISTORY.md must include the latest version entry.');

assert(/assets\/back_button\.png|\/assets\/back_button\.png/.test(code), 'Headers must use assets/back_button.png.');
assert(!/back-arrow-previous-page-button\.jpg/.test(code), 'Old back-arrow asset returned. Use back_button.png.');
assert(/brand-hoora/.test(code) && /brand-playbook/.test(code), 'Header wordmark must be live styled text.');
assert(!/hooraplaybook-wordmark\.png/.test(code), 'Header wordmark image returned. Use live text.');
assert(/\/assets\/filter\.png|assets\/filter\.png/.test(code), 'Filter icon must use assets/filter.png.');
assert(/\/assets\/sort\.png|assets\/sort\.png/.test(code), 'Sort icon must use assets/sort.png.');
assert(/\/assets\/ios-share\.svg|assets\/ios-share\.svg/.test(code), 'Share icon must use assets/ios-share.svg.');
assert(/\/assets\/Remove\.png|assets\/Remove\.png/.test(code), 'Plan game removal must use assets/Remove.png.');

assert(!/title:\s*['"]Purpose['"]/.test(app), 'Filter section regressed to Purpose. Use Categories.');
assert(!/<span class="label">Purpose<\/span>/.test(app), 'A visible Purpose label returned. Use Category/Categories.');
assert(!/Search games, materials, purpose/i.test(app), 'Search placeholder regressed to purpose wording.');
assert(!/Projector/i.test(app), 'Projector functionality returned in app.js.');
assert(!/Projector/i.test(coding), 'Projector functionality returned in CODING_INSTRUCTIONS.MD.');
assert(!/Not Recommended/i.test(app), 'Visible Not Recommended returned.');
assert(!/Untested/i.test(app), 'Visible Untested returned.');
assert(!/data-go="\/app\/find"[^>]*aria-label="Back"/.test(app), 'Back button is hard-coded to /app/find.');
assert(/function goBack\(/.test(app), 'Previous-route back navigation function missing.');
assert(/data-back/.test(app), 'Headers should use data-back.');
assert(!/search-row[\s\S]{0,300}data-go="\/filter"/.test(app), 'Redundant filter button beside search field returned.');
assert(!/\['\/app\/plan'/.test(app), 'Footer must not include a Plan button.');
assert(/Open My Plans/.test(app) && /data-go="\/app\/plan"/.test(app), 'Account must include My Plans section/link.');
assert(/Create a New Plan/.test(app), 'My Plans page must include + Create a New Plan.');
assert(/Save Plan/.test(app) && /Rename/.test(app) && /Delete/.test(app), 'My Plans save/rename/delete controls missing.');
assert(/Modify/.test(app) && /edit-246\.svg/.test(app), 'Saved plans must include Modify with edit icon.');
assert(/data-go="\/app\/games\/\$\{gameId\}"/.test(app), 'Saved plan games must be clickable.');
assert(/plan-pill/.test(app) && /\.added/.test(css), '+ Plan button must support grey and green already-added states.');
assert(!/Remove<\/button>/.test(app), 'Visible text Remove button returned. Use Remove.png icon instead.');
assert(!/timeline-time/.test(app), 'Plan game timings returned. Remove timings from plan game cards.');
assert(/AVAILABLE MATERIALS/.test(app) && /No Materials/.test(app), 'Available Materials page must exist with No Materials first.');
assert(!/renderMaterialsSelector\(\)[\s\S]{0,500}headerActions\(/.test(app), 'Available Materials page must not show sort/filter header actions.');

if (failures.length) {
  console.error('\n❌ LOCKED FIXES CHECK FAILED\n');
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log('\n✅ LOCKED FIXES CHECK PASSED\n');
