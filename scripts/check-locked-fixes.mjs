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
assert(!/Projector Mode/i.test(app), 'Visible Projector Mode returned.');
assert(!/Not Recommended/i.test(app), 'Visible Not Recommended returned.');
assert(!/Untested/i.test(app), 'Visible Untested returned.');
assert(!/data-go="\/app\/find"[^>]*aria-label="Back"/.test(app), 'Back button is hard-coded to /app/find.');
assert(/function goBack\(/.test(app), 'Previous-route back navigation function missing.');
assert(/data-back/.test(app), 'Headers should use data-back.');
assert(!/search-row[\s\S]{0,300}data-go="\/filter"/.test(app), 'Redundant filter button beside search field returned.');
assert(/Save Plan/.test(app) && /Rename/.test(app) && /Delete/.test(app), 'My Plans save/rename/delete controls missing.');
assert(/data-go="\/app\/games\/\$\{item\.gameId\}"/.test(app), 'Saved plan games must be clickable.');

if (failures.length) {
  console.error('\n❌ LOCKED FIXES CHECK FAILED\n');
  failures.forEach(f => console.error(`- ${f}`));
  process.exit(1);
}
console.log('\n✅ LOCKED FIXES CHECK PASSED\n');
