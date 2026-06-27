import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];
const file = name => path.join(root, name);
const read = name => fs.existsSync(file(name)) ? fs.readFileSync(file(name), 'utf8') : '';
const exists = name => fs.existsSync(file(name));
const assert = (ok, msg) => { if (!ok) failures.push(msg); };

const app = read('app.js');
const css = read('styles.css');
const html = read('index.html');
const coding = read('CODING_INSTRUCTIONS.MD');
const locked = read('LOCKED_FIXES.md');
const code = `${app}\n${css}\n${html}`;

[
  'app.js', 'styles.css', 'index.html', 'LOCKED_FIXES.md', 'CODING_INSTRUCTIONS.MD',
  'assets/back_button.png', 'assets/filter.png', 'assets/sort.png', 'assets/ios-share.svg', 'assets/edit-246.svg'
].forEach(name => assert(exists(name), `Missing required file: ${name}`));

const categories = ['Quick and simple','Wet-n-Wild','Team-building','Teams','Circle','Icebreakers','Adventure','Tag','Sport-n-fitness','Theatrical','Relays'];
categories.forEach(category => assert(app.includes(category), `Missing standard category: ${category}`));

assert(/assets\/back_button\.png|\/assets\/back_button\.png/.test(code), 'Headers must use assets/back_button.png.');
assert(!/back-arrow-previous-page-button\.jpg/.test(code), 'Old back-arrow asset returned. Use back_button.png.');
assert(/brand-hoora/.test(code) && /brand-playbook/.test(code), 'Header wordmark must be live styled text.');
assert(!/hooraplaybook-wordmark\.png/.test(code), 'Header wordmark image returned. Use live text.');
assert(/font-size:\s*24px\s*!important/.test(css) || /font-size:\s*2[0-5]px/.test(css), 'Header HooraPlaybook text must be about 20% smaller.');
assert(/\/assets\/filter\.png|assets\/filter\.png/.test(code), 'Filter icon must use assets/filter.png.');
assert(/\/assets\/sort\.png|assets\/sort\.png/.test(code), 'Sort icon must use assets/sort.png.');
assert(/\/assets\/ios-share\.svg|assets\/ios-share\.svg/.test(code), 'Share icon must use assets/ios-share.svg.');

assert(!/title:\s*['"]Purpose['"]/.test(app), 'Filter section regressed to Purpose. Use Categories.');
assert(!/<span class="label">Purpose<\/span>/.test(app), 'A visible Purpose label returned. Use Category/Categories.');
assert(!/Search games, materials, purpose/i.test(app), 'Search placeholder regressed to purpose wording.');
assert(!/Projector/i.test(app + coding), 'Projector functionality must not be mentioned in app.js or CODING_INSTRUCTIONS.MD.');
assert(!/Download \/ Print PDF|Download \/ Print/.test(app), 'Game or plan print/download controls returned.');
assert(!/Not Recommended/i.test(app), 'Visible Not Recommended returned.');
assert(!/Untested/i.test(app), 'Visible Untested returned.');
assert(!/data-go="\/app\/find"[^>]*aria-label="Back"/.test(app), 'Back button is hard-coded to /app/find.');
assert(/function goBack\(/.test(app), 'Previous-route back navigation function missing.');
assert(/data-back/.test(app), 'Headers should use data-back.');
assert(!/search-row[\s\S]{0,350}data-go="\/filter"/.test(app), 'Redundant filter button beside search field returned.');
assert(/isStandaloneGameRoute/.test(app) && /game-page-frame/.test(app), 'Standalone game route/double-header protection missing.');

assert(/Available Materials/.test(app), 'Available Materials label missing.');
assert(/data-go="\/app\/materials\/finder"/.test(app), 'Finder Available Materials must be a navigation button.');
assert(!/<span class="label">Materials<\/span>\s*<input/.test(app), 'Finder materials regressed to text input.');
assert(!/Fit score/.test(app), 'Smart Finder preview results under Find 3 Great Games returned.');

assert(/Add to Plan/.test(app) && /Create New Plan/.test(app), 'Add to Plan existing/create-new flow missing.');
assert(/Rename/.test(app) && /Delete/.test(app) && /Modify/.test(app), 'My Plans Modify/Rename/Delete controls missing.');
assert(/data-go="\/app\/games\/\$\{item\.gameId\}"/.test(app), 'Saved plan games must be clickable.');
assert(!/Build me a session plan|Plan name|Save Plan/.test(app), 'Plan creation form section returned to Plan page.');
assert(/swipe-item/.test(app) && /swipe-action/.test(app) && /Remove/.test(app), 'Swipe-left Remove interaction missing.');
assert(/pointerdown/.test(app) && /pointermove/.test(app) && /pointerup/.test(app), 'Pointer Events swipe logic missing.');
assert(/dragstart/.test(app) && /drop/.test(app), 'Drag reorder logic missing.');
assert(/edit-246\.svg/.test(app + css), 'Modify button must use edit-246.svg.');

assert(/Game detail pages use only one header/.test(locked), 'LOCKED_FIXES must include double-header protection.');
assert(/Available Materials/.test(locked + coding), 'Instruction files must include Available Materials rule.');
assert(/swipe left/i.test(locked + coding), 'Instruction files must include swipe-left remove rule.');

if (failures.length) {
  console.error('\n❌ LOCKED FIXES CHECK FAILED\n');
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log('\n✅ LOCKED FIXES CHECK PASSED\n');
