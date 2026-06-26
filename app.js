const APP_NAME = 'HooraPlaybook';
const APP_LOGO = '<span class="plan">Hoora</span><span class="leaf">Playbook</span>';
const APP_KEY = 'hooraplaybook_pwa_state_v2';
const COUPON_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const DEFAULT_GAMES = [
  {
    id: 'cup-stack-relay', slug: 'cup-stack-relay', title: 'Cup Stack Relay', accessLevel: 'free', featured: true, tested: true,
    shortDescription: 'Teams race to build and rebuild cup towers while communicating under pressure.',
    description: 'A fast, easy indoor team challenge that turns simple cups into a cooperation relay.',
    purpose: ['Fun', 'Teamwork', 'Competition', 'Icebreaker'], tags: ['All Play', 'Teams', 'Cups', 'Relay Race', 'Indoor', 'Low Prep'],
    bestAgeMin: 10, bestAgeMax: 18, minRecommendedAge: 8, groupSizeMin: 8, groupSizeMax: 30, timeMin: 10, timeMax: 18,
    indoorOutdoor: 'both', space: 'Large room / gym / field', materials: ['cups'], energy: 'High', prep: 4, leaderDifficulty: 'Easy', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'High', ministry: 'Low', thumb: 'cups',
    setup: 'Give each team a stack of cups. Mark a start line and a build zone. Show the tower pattern before starting.',
    howToPlay: ['Divide the group into teams of 4–6.', 'One player at a time runs to the build zone and adds or moves one cup.', 'The team must complete the tower pattern before the next team.', 'Run another round with a new pattern or with silent communication only.'],
    leaderScript: 'Your goal is not just to be fast. Your goal is to communicate clearly under pressure. Decide your plan before the countdown starts.',
    winCondition: 'First team to correctly build the assigned cup structure wins the round.',
    safetyNotes: 'Use plastic cups only. Mark clear running lanes. If space is tight, make it a walking relay.',
    avoidWith: 'Very small rooms or groups that become aggressive in relays.', requires: 'Clear lanes and leader supervision.',
    variations: 'Silent round, one-handed round, reverse build, blind architect who explains without touching.',
    easier: 'Use fewer cups and allow everyone to talk.', harder: 'Use a more complex tower and require silent communication.',
    debriefQuestions: ['What helped your team move faster?', 'Who became the communicator?', 'What happens when everyone talks at once?'],
    bibleBridge: 'Use as a bridge to 1 Corinthians 12: every part of the body matters and each person contributes.',
    scripture: ['1 Corinthians 12:12–27'], creator: 'HooraPlaybook Team', averageRating: 4.8, ratingCount: 18, reviewCount: 6, views: 220
  },
  {
    id: 'silent-builder', slug: 'silent-builder', title: 'Silent Builder', accessLevel: 'free', featured: true, tested: true,
    shortDescription: 'A quiet communication game where teams build a structure without speaking.',
    description: 'A medium-energy teamwork activity that quickly reveals communication habits.',
    purpose: ['Teamwork', 'Communication', 'Leadership'], tags: ['Teams', 'Communication', 'Cups', 'Paper', 'Indoor', 'Debrief'],
    bestAgeMin: 12, bestAgeMax: 18, minRecommendedAge: 10, groupSizeMin: 6, groupSizeMax: 24, timeMin: 15, timeMax: 25,
    indoorOutdoor: 'indoor', space: 'Tables or floor space', materials: ['cups', 'paper'], energy: 'Medium', prep: 5, leaderDifficulty: 'Moderate', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'Low', ministry: 'Low', thumb: 'team',
    setup: 'Prepare identical supplies for each team. Create or display a simple target structure.',
    howToPlay: ['Divide players into teams.', 'Show the target structure for 20 seconds.', 'Teams rebuild it without speaking.', 'After the round, let teams discuss what they learned and try again.'],
    leaderScript: 'You cannot talk during the build. Pay attention to what your team communicates without words.',
    winCondition: 'The most accurate structure after the time limit wins.',
    safetyNotes: 'Low physical risk. Watch that quieter players are not ignored by dominant teammates.',
    avoidWith: 'Groups that are too young to handle silence or frustration.', requires: 'A visible example structure and equal supplies.',
    variations: 'Assign one observer per team. Let only one person see the target and communicate silently.',
    easier: 'Allow whispering for younger groups.', harder: 'Shorten the viewing time or add more pieces.',
    debriefQuestions: ['How did your team decide what to do?', 'What made communication hard?', 'Who did you listen to and why?'],
    bibleBridge: 'Use as a bridge to James 1:19 about being quick to hear and slow to speak.',
    scripture: ['James 1:19'], creator: 'HooraPlaybook Team', averageRating: 4.7, ratingCount: 12, reviewCount: 4, views: 184
  },
  {
    id: 'pass-the-pattern', slug: 'pass-the-pattern', title: 'Pass the Pattern', accessLevel: 'free', featured: false, tested: true,
    shortDescription: 'Players pass a rhythm or motion pattern around a circle without breaking the flow.',
    description: 'A no-material focus game that works as a quick warm-up or concentration challenge.',
    purpose: ['Fun', 'Icebreaker', 'Calm Down'], tags: ['All Play', 'No Materials', 'Circle', 'No Prep', 'Focus'],
    bestAgeMin: 9, bestAgeMax: 16, minRecommendedAge: 7, groupSizeMin: 8, groupSizeMax: 35, timeMin: 6, timeMax: 12,
    indoorOutdoor: 'both', space: 'Flexible', materials: [], energy: 'Medium', prep: 0, leaderDifficulty: 'Easy', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'Medium', ministry: 'Low', thumb: 'calm',
    setup: 'Have everyone stand or sit in a circle.',
    howToPlay: ['The leader starts a simple pattern such as clap-snap-stomp.', 'The next person repeats it and adds one motion.', 'Continue around the circle.', 'Restart as a team challenge when the pattern breaks.'],
    leaderScript: 'This is a group challenge. If someone misses it, we restart together and try to beat our record.',
    winCondition: 'Try to complete a full circle without breaking the pattern.',
    safetyNotes: 'Avoid making one player feel like the reason the group failed. Restart cheerfully.',
    avoidWith: 'Groups that mock mistakes.', requires: 'Positive leader framing.',
    variations: 'Use sounds, motions, Bible books, or camp theme words.', easier: 'Use only two motions.', harder: 'Speed up or add direction changes.',
    debriefQuestions: ['What helped you remember?', 'How did the group respond to mistakes?'], bibleBridge: 'A gentle bridge to Galatians 6:2 about carrying one another’s burdens.', scripture: ['Galatians 6:2'], creator: 'HooraPlaybook Team', averageRating: 4.3, ratingCount: 7, reviewCount: 2, views: 110
  },
  {
    id: 'four-corners-purpose', slug: 'four-corners-purpose', title: 'Four Corners Purpose', accessLevel: 'free', featured: false, tested: true,
    shortDescription: 'A movement icebreaker where corners of the room represent answers to simple questions.',
    description: 'A low-prep way to get a group moving and learning about each other.',
    purpose: ['Icebreaker', 'Fun', 'Classroom'], tags: ['All Play', 'Indoor', 'No Materials', 'Good for Newcomers', 'Low Prep'],
    bestAgeMin: 8, bestAgeMax: 18, minRecommendedAge: 6, groupSizeMin: 8, groupSizeMax: 60, timeMin: 8, timeMax: 16,
    indoorOutdoor: 'indoor', space: 'Large room', materials: [], energy: 'Medium', prep: 2, leaderDifficulty: 'Easy', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'Medium', ministry: 'Low', thumb: 'calm',
    setup: 'Assign four corners as A, B, C, and D.', howToPlay: ['Read a question with four answers.', 'Players move to the corner that matches their answer.', 'Ask one or two volunteers why they chose it.', 'Repeat with new questions.'],
    leaderScript: 'Move to the answer that fits you best. There are no wrong answers, and you can pass if you do not want to explain.',
    winCondition: 'No winner; the goal is connection.', safetyNotes: 'No running. Keep questions light for new groups.', avoidWith: 'Tiny rooms.', requires: 'Clear corners and no personal/embarrassing questions.',
    variations: 'Use lesson-theme questions or teamwork debrief questions.', easier: 'Use only two sides of the room.', harder: 'Ask teams to create questions.', debriefQuestions: ['What answer surprised you?', 'What did you learn about the group?'], bibleBridge: 'Can introduce how different people have different gifts and preferences.', scripture: ['Romans 12:4–6'], creator: 'HooraPlaybook Team', averageRating: 4.1, ratingCount: 9, reviewCount: 1, views: 147
  },
  {
    id: 'human-knot-lite', slug: 'human-knot-lite', title: 'Human Knot Lite', accessLevel: 'pro', featured: false, tested: true,
    shortDescription: 'A safer, leader-guided version of the classic human knot teamwork challenge.',
    description: 'A trust and communication activity with clear boundaries and opt-out adaptations.',
    purpose: ['Teamwork', 'Trust', 'Communication'], tags: ['Teams', 'Trust', 'Light Contact', 'Debrief', 'PRO'],
    bestAgeMin: 12, bestAgeMax: 18, minRecommendedAge: 10, groupSizeMin: 6, groupSizeMax: 14, timeMin: 10, timeMax: 18,
    indoorOutdoor: 'both', space: 'Open area', materials: [], energy: 'Medium', prep: 0, leaderDifficulty: 'Moderate', safety: 'Moderate Risk', contact: 'Light', embarrassment: 'Medium', noise: 'Medium', ministry: 'Medium', thumb: 'team',
    setup: 'Groups of 6–8 stand in circles. Explain boundaries and allow anyone to choose observer/coach role.',
    howToPlay: ['Players reach across and hold two different hands.', 'Without letting go, the group untangles into a circle.', 'No pulling, twisting, or forcing.', 'Leader stops immediately if anyone is uncomfortable.'],
    leaderScript: 'This game uses light hand contact. If you would rather coach from the outside, that is a valuable role too.',
    winCondition: 'Complete the untangle safely, or improve teamwork over two rounds.', safetyNotes: 'Require consent for hand contact. No pulling, pushing, or twisting. Use small groups only.',
    avoidWith: 'Groups with strong mixed-gender boundaries, first-time visitors, or high discomfort with touch.', requires: 'Consent, active supervision, and opt-out role.', variations: 'Use rope loops instead of hands.', easier: 'Use smaller groups.', harder: 'Add silent communication.', debriefQuestions: ['How did you decide who to follow?', 'What made the knot easier or harder?'], bibleBridge: 'A bridge to unity and patience in Ephesians 4:2–3.', scripture: ['Ephesians 4:2–3'], creator: 'HooraPlaybook Team', averageRating: 4.5, ratingCount: 11, reviewCount: 3, views: 190
  },
  {
    id: 'paper-tower-test', slug: 'paper-tower-test', title: 'Paper Tower Test', accessLevel: 'pro', featured: true, tested: true,
    shortDescription: 'Teams build the tallest free-standing tower using only paper and tape.',
    description: 'A classic leadership challenge with strong debrief potential for planning, testing, and communication.',
    purpose: ['Teamwork', 'Leadership', 'Communication', 'Classroom'], tags: ['Teams', 'Paper', 'Leadership', 'Debrief', 'Indoor', 'PRO'],
    bestAgeMin: 10, bestAgeMax: 18, minRecommendedAge: 8, groupSizeMin: 6, groupSizeMax: 36, timeMin: 20, timeMax: 35,
    indoorOutdoor: 'indoor', space: 'Tables or floor space', materials: ['paper', 'tape'], energy: 'Medium', prep: 5, leaderDifficulty: 'Easy', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'Medium', ministry: 'Low', thumb: 'lesson',
    setup: 'Give each team the same amount of paper and tape. Set a visible timer.', howToPlay: ['Teams have a fixed time to build the tallest free-standing tower.', 'No attaching the tower to furniture, walls, or people.', 'Measure towers only after hands are removed.', 'Debrief the planning process.'], leaderScript: 'You have limited supplies and limited time. Decide quickly, test early, and learn as you go.', winCondition: 'Tallest free-standing tower wins.', safetyNotes: 'No climbing on chairs or tables to build higher.', avoidWith: 'Groups without tables or floor space.', requires: 'Equal supplies, timer, measuring tape.', variations: 'Add a marshmallow or object that must sit on top.', easier: 'Give more tape.', harder: 'No talking for the first two minutes.', debriefQuestions: ['Did you plan first or start building?', 'What changed after testing?', 'Who helped the team learn?'], bibleBridge: 'A bridge to Luke 14:28 about counting the cost.', scripture: ['Luke 14:28'], creator: 'HooraPlaybook Team', averageRating: 4.9, ratingCount: 16, reviewCount: 7, views: 240
  },
  {
    id: 'scripture-bridge-race', slug: 'scripture-bridge-race', title: 'Scripture Bridge Race', accessLevel: 'pro', featured: false, tested: true,
    shortDescription: 'Teams connect game clues to Bible themes and explain the connection.',
    description: 'A ministry-friendly game that opens a lesson without forcing an awkward transition.',
    purpose: ['Bible Bridge', 'Lesson Bridge', 'Review'], tags: ['Bible Bridge', 'Teams', 'Lesson', 'Indoor', 'PRO'],
    bestAgeMin: 12, bestAgeMax: 18, minRecommendedAge: 10, groupSizeMin: 8, groupSizeMax: 30, timeMin: 12, timeMax: 22,
    indoorOutdoor: 'indoor', space: 'Any room', materials: ['paper'], energy: 'Medium', prep: 10, leaderDifficulty: 'Moderate', safety: 'Low Risk', contact: 'None', embarrassment: 'Low', noise: 'Medium', ministry: 'Low', thumb: 'lesson',
    setup: 'Prepare clue cards with themes such as trust, unity, forgiveness, perseverance, and wisdom.', howToPlay: ['Teams draw a clue card.', 'They pick one matching Bible idea or story.', 'They explain the connection in one sentence.', 'Award points for clear, thoughtful connections.'], leaderScript: 'Do not stretch the Bible to fit the game. Make a simple, honest connection.', winCondition: 'Most clear and responsible connections wins.', safetyNotes: 'Do not shame wrong answers. Keep doctrine simple and accurate.', avoidWith: 'Groups that do not know any Bible stories unless leaders provide hints.', requires: 'Prepared clue cards.', variations: 'Give each team Scripture references to choose from.', easier: 'Use multiple-choice verses.', harder: 'Require a real-life application.', debriefQuestions: ['What theme was easiest to connect?', 'What makes a Bible connection responsible?'], bibleBridge: 'Designed as the Bible bridge.', scripture: ['2 Timothy 3:16–17'], creator: 'HooraPlaybook Team', averageRating: 4.6, ratingCount: 5, reviewCount: 2, views: 98
  },
  {
    id: 'balloon-boundary-blitz', slug: 'balloon-boundary-blitz', title: 'Balloon Boundary Blitz', accessLevel: 'free', featured: false, tested: false,
    shortDescription: 'Teams keep balloons inside a boundary while following changing rules.',
    description: 'A high-energy game for camps or gyms that needs clear safety boundaries.',
    purpose: ['Fun', 'Competition', 'Camp'], tags: ['Outdoor', 'Gym', 'Balloons', 'High Energy', 'Needs Boundaries'],
    bestAgeMin: 8, bestAgeMax: 16, minRecommendedAge: 7, groupSizeMin: 10, groupSizeMax: 50, timeMin: 10, timeMax: 18,
    indoorOutdoor: 'both', space: 'Gym or outdoor field', materials: ['balloons'], energy: 'High', prep: 8, leaderDifficulty: 'Moderate', safety: 'Moderate Risk', contact: 'Light', embarrassment: 'Low', noise: 'High', ministry: 'Low', thumb: 'camp',
    setup: 'Inflate balloons and mark a clear boundary. Remove obstacles.', howToPlay: ['Teams try to keep their balloons in the air and inside their zone.', 'If a balloon touches the floor or leaves the zone, it is out.', 'Add rules each round such as elbows only or team must rotate.', 'Stop if play becomes too rough.'], leaderScript: 'Fast is fun, but safe is required. No diving, pushing, or sliding.', winCondition: 'Team with the most balloons remaining wins.', safetyNotes: 'No latex allergy participants unless using alternatives. No diving or pushing. Clear the floor.', avoidWith: 'Latex allergies, tiny rooms, highly aggressive groups.', requires: 'Open space and active supervision.', variations: 'Use beach balls instead of balloons.', easier: 'Use larger balloons and bigger zones.', harder: 'Add more balloons or movement constraints.', debriefQuestions: ['How did rules change your strategy?', 'How did your team recover from mistakes?'], bibleBridge: 'Optional bridge to self-control and boundaries.', scripture: ['Proverbs 25:28'], creator: 'HooraPlaybook Team', averageRating: 3.9, ratingCount: 8, reviewCount: 1, views: 102
  }
];

const DEFAULT_USERS = [
  { id: 'u-admin', email: 'admin@hooraplaybook.app', password: 'admin123', fullName: 'Admin Leader', role: 'admin', plan: 'pro', accessStatus: 'active', accessExpiresAt: addDaysISO(365), disabled: false },
  { id: 'u-staff', email: 'staff@hooraplaybook.app', password: 'staff123', fullName: 'Staff Editor', role: 'staff', plan: 'pro', accessStatus: 'active', accessExpiresAt: addDaysISO(365), disabled: false },
  { id: 'u-pro', email: 'pro@hooraplaybook.app', password: 'pro123', fullName: 'Pro User', role: 'user', plan: 'pro', accessStatus: 'active', accessExpiresAt: addDaysISO(365), disabled: false },
  { id: 'u-free', email: 'free@hooraplaybook.app', password: 'free123', fullName: 'Free User', role: 'user', plan: 'free', accessStatus: 'active', accessExpiresAt: null, disabled: false }
];

const FILTER_SECTIONS = [
  { title: 'My Activity', key: 'activity', options: ['Played', 'Unplayed', 'Favorites', 'User Created'] },
  { title: 'Plan Access', key: 'access', options: ['Free', 'PRO'] },
  { title: 'Purpose', key: 'purpose', options: ['Fun', 'Icebreaker', 'Teamwork', 'Trust', 'Communication', 'Leadership', 'Bible Bridge', 'Calm Down', 'Competition', 'Camp', 'Classroom'] },
  { title: 'Group', key: 'group', options: ['Children', 'Preteens', 'Teens', 'Youth', 'Adults', 'Mixed Ages'] },
  { title: 'Space', key: 'space', options: ['Small Room', 'Large Room', 'Gym', 'Outdoor Field', 'Stage', 'Flexible', 'Indoor', 'Outdoor'] },
  { title: 'Materials', key: 'materials', options: ['No Materials', 'Cups', 'Paper', 'Balls', 'Chairs', 'Rope', 'Balloons', 'Cones', 'Tape'] },
  { title: 'Safety', key: 'safety', options: ['Low Risk', 'Moderate Risk', 'No Contact', 'Low Embarrassment', 'Shy-Friendly', 'Good for Newcomers'] },
  { title: 'Energy', key: 'energy', options: ['Low', 'Medium', 'High'] },
  { title: 'Time', key: 'time', options: ['Under 5 min', '5–10 min', '10–20 min', '20–40 min', '40+ min'] }
];

const SORT_OPTIONS = ['Best Match', 'Most Viewed', 'Most Reviewed', 'Highest Rated', 'Newest First', 'Alphabetical', 'Shortest First', 'Lowest Prep'];

let state = loadState();
let route = parseRoute();
let toastTimer;

window.addEventListener('hashchange', () => { route = parseRoute(); render(); });
window.addEventListener('online', render);
window.addEventListener('offline', render);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(console.warn));
}

render();

function addDaysISO(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

function loadState() {
  const saved = localStorage.getItem(APP_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (_) {}
  }
  const initial = {
    users: DEFAULT_USERS,
    currentUserId: null,
    games: DEFAULT_GAMES,
    favorites: { 'u-free': ['cup-stack-relay'], 'u-pro': ['cup-stack-relay', 'paper-tower-test'] },
    notes: {},
    ratings: seedRatings(),
    submissions: [],
    importBatches: [],
    coupons: [],
    sessions: [],
    played: {},
    filters: [],
    sort: 'Best Match',
    search: '',
    finder: { groupSize: 14, ageMin: 12, ageMax: 18, time: 20, space: 'indoor', materials: 'cups, paper', purpose: 'Teamwork', safety: 'Low Risk', avoid: 'not embarrassing' }
  };
  saveState(initial);
  return initial;
}

function seedRatings() {
  return [
    { id: 'r1', userId: 'u-pro', gameId: 'cup-stack-relay', rating: 5, reviewText: 'Easy to explain and worked perfectly with our youth group.', createdAt: addDaysISO(-22), reviewStatus: 'published', mediaStatus: 'approved' },
    { id: 'r2', userId: 'u-free', gameId: 'cup-stack-relay', rating: 5, reviewText: 'The silent round made it even better.', createdAt: addDaysISO(-7), reviewStatus: 'published', mediaStatus: 'approved' },
    { id: 'r3', userId: 'u-pro', gameId: 'paper-tower-test', rating: 5, reviewText: 'Strong debrief. Great for leadership night.', createdAt: addDaysISO(-3), reviewStatus: 'published', mediaStatus: 'approved' },
    { id: 'r4', userId: 'u-free', gameId: 'balloon-boundary-blitz', rating: 3, reviewText: 'Fun, but you really need enough space.', createdAt: addDaysISO(-14), reviewStatus: 'published', mediaStatus: 'approved' }
  ];
}

function saveState(next = state) { localStorage.setItem(APP_KEY, JSON.stringify(next)); }
function currentUser() { return state.users.find(u => u.id === state.currentUserId) || null; }
function isExpired(date) { return !!date && new Date(date).getTime() < Date.now(); }
function hasProAccess(user = currentUser()) {
  if (!user || user.disabled) return false;
  if (user.role === 'admin' || user.role === 'staff') return true;
  if (user.plan === 'pro' && user.accessStatus === 'active' && (!user.accessExpiresAt || !isExpired(user.accessExpiresAt))) return true;
  return false;
}
function isAdmin(user = currentUser()) { return !!user && user.role === 'admin' && !user.disabled; }
function isStaff(user = currentUser()) { return !!user && ['admin','staff'].includes(user.role) && !user.disabled; }
function canViewGame(game, user = currentUser()) { return game.accessLevel === 'free' || hasProAccess(user); }
function escapeHTML(value = '') { return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
function slugify(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
function byId(id) { return document.getElementById(id); }
function appRoot() { return byId('app'); }
function go(path) { window.location.hash = path; }

function parseRoute() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const parts = raw.split('/').filter(Boolean);
  return { raw, parts };
}

function render() {
  const user = currentUser();
  const publicRoutes = ['/', '/login', '/signup', '/pricing', '/subscribe', '/thank-you', '/billing/success', '/billing/cancelled'];
  if (!navigator.onLine) {}
  if (!user && !publicRoutes.includes(route.raw)) return go('/login');
  if (user?.disabled && route.raw !== '/login') {
    state.currentUserId = null; saveState(); return go('/login');
  }
  const root = appRoot();
  if (publicRoutes.includes(route.raw)) root.innerHTML = renderPublicRoute();
  else root.innerHTML = renderPrivateRoute();
  bindEvents();
}

function renderPublicRoute() {
  const p = route.raw;
  if (p === '/pricing' || p === '/subscribe') return publicShell(renderPricing());
  if (p === '/thank-you') return publicShell(`<div class="card" style="padding:28px;color:var(--gp-text)"><h1>Thank you!</h1><p>Your founding member payment or signup was received. Access will unlock after Stripe webhook confirmation in production.</p><button class="btn btn-primary" data-go="/login">Log in</button></div>`);
  if (p === '/billing/success') return publicShell(renderBillingSuccess());
  if (p === '/billing/cancelled') return publicShell(`<div class="card" style="padding:28px;color:var(--gp-text)"><h1>Checkout cancelled</h1><p>You can upgrade anytime.</p><button class="btn btn-primary" data-go="/pricing">Back to pricing</button></div>`);
  if (p === '/signup') return publicShell(renderSignup());
  if (p === '/login') return publicShell(renderLogin());
  return publicShell(renderLanding());
}

function publicShell(inner) {
  return `<div class="public-shell"><div class="public-frame">${inner}</div></div>`;
}

function renderLanding() {
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:36px">
      <div class="logo" style="text-align:left">${APP_LOGO}</div>
      <div style="display:flex;gap:10px"><button class="btn btn-secondary" data-go="/login">Log in</button><button class="btn btn-primary" data-go="/signup">Start free</button></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px;align-items:center">
      <div>
        <div class="pro-badge" style="background:rgba(184,215,122,.2);color:#d7f49a;margin-bottom:14px">PWA MVP</div>
        <h1 style="font-size:clamp(42px,7vw,76px);line-height:.92;margin:0 0 18px;letter-spacing:-.07em">Find the right group game in 30 seconds.</h1>
        <p style="font-size:20px;line-height:1.45;color:#d8dde2;max-width:620px">Tell HooraPlaybook your group size, age, time, space, purpose, and materials. Get safe, ready-to-lead games that fit the moment.</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:26px"><button class="btn btn-primary" data-go="/signup">Create account</button><button class="btn btn-secondary" data-go="/pricing">View pricing</button></div>
      </div>
      <div class="hero-card" style="color:var(--gp-text);padding:24px">
        <div class="magic-row"><span class="magic-chip">14 teens</span><span class="magic-chip">20 min</span><span class="magic-chip">Indoor</span><span class="magic-chip">Cups + paper</span><span class="magic-chip">Teamwork</span></div>
        <h1>3 games that are not lame</h1>
        ${DEFAULT_GAMES.slice(0,3).map(g => miniResult(g)).join('')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:34px">
      ${['Group Leaders','Team Builders','Ministry Leaders'].map((t,i)=>`<div class="card" style="padding:20px;color:var(--gp-text)"><h3 style="margin:0 0 8px">${t}</h3><p style="margin:0;color:var(--gp-muted)">${['Games that fit your people, place, time, and supplies.','Purposeful activities for trust, communication, and leadership.','Games with optional Scripture bridges and discussion prompts.'][i]}</p></div>`).join('')}
    </div>`;
}
function miniResult(g) { return `<div style="padding:12px 0;border-top:1px solid var(--gp-border)"><strong>${g.title}</strong><div style="color:var(--gp-muted);font-size:14px">${g.timeMin}–${g.timeMax} min · ${g.groupSizeMin}–${g.groupSizeMax} players · ${g.safety}</div></div>`; }

function renderLogin() {
  return `<div style="max-width:460px;margin:28px auto"><div class="logo" style="margin-bottom:24px">${APP_LOGO}</div><div class="card" style="padding:26px;color:var(--gp-text)"><h1>Log in</h1><p class="help">Demo accounts: admin@hooraplaybook.app / admin123, staff@hooraplaybook.app / staff123, pro@hooraplaybook.app / pro123, free@hooraplaybook.app / free123.</p><form id="login-form" class="form-grid"><label><span class="label">Email</span><input class="input" name="email" type="email" value="admin@hooraplaybook.app" required></label><label><span class="label">Password</span><input class="input" name="password" type="password" value="admin123" required></label><button class="btn btn-primary full">Log in</button><button type="button" class="btn btn-secondary full" data-go="/signup">Create account</button></form></div></div>`;
}
function renderSignup() {
  return `<div style="max-width:460px;margin:28px auto"><div class="logo" style="margin-bottom:24px">${APP_LOGO}</div><div class="card" style="padding:26px;color:var(--gp-text)"><h1>Create account</h1><form id="signup-form" class="form-grid"><label><span class="label">Full name</span><input class="input" name="fullName" required></label><label><span class="label">Email</span><input class="input" name="email" type="email" required></label><label><span class="label">Password</span><input class="input" name="password" type="password" minlength="6" required></label><button class="btn btn-primary full">Start free</button><button type="button" class="btn btn-secondary full" data-go="/login">I already have an account</button></form></div></div>`;
}
function renderPricing() {
  return `<div style="margin:24px auto;max-width:900px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px"><div class="logo">${APP_LOGO}</div><button class="btn btn-secondary" data-go="/app/find">Open app</button></div><h1 style="font-size:48px;line-height:1;margin:0 0 12px">Choose your plan</h1><p style="font-size:19px;color:#d8dde2">Launch-ready PWA flow: Stripe Payment Link now, authenticated Checkout + webhook in production.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-top:26px">${pricingCard('Free','$0','50 free games, basic search, 3 favorites',['Basic search','Rate games','Submit games'],false)}${pricingCard('PRO','$50/year','Full library, advanced filters, unlimited favorites, session builder',['Advanced filters','Session builder','PDF and projector mode','All future games'],true)}${pricingCard('Team','$149/year','Up to 5 seats, shared collections, private library',['Shared collections','Private tags','Admin controls'],false)}</div></div>`;
}
function pricingCard(name, price, sub, items, featured) { return `<div class="card" style="padding:22px;color:var(--gp-text);border:${featured?'2px solid var(--gp-lime)':'0'}"><div class="pro-badge">${name}</div><h2 style="font-size:36px;margin:14px 0 4px">${price}</h2><p style="color:var(--gp-muted)">${sub}</p><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul><button class="btn ${featured?'btn-primary':'btn-secondary'} full" data-upgrade="${name}">${featured?'Upgrade to PRO':'Get started'}</button></div>`; }
function renderBillingSuccess() { return `<div class="card" style="padding:28px;color:var(--gp-text);max-width:560px;margin:auto"><h1>Thank you!</h1><p>Your payment was received. In production, HooraPlaybook polls Supabase subscription status and unlocks after the Stripe webhook updates access.</p><button class="btn btn-primary" data-go="/app/find">Open HooraPlaybook</button></div>`; }

function renderPrivateRoute() {
  const main = route.parts[0];
  if (main === 'admin') return renderAdminRoute();
  if (main === 'staff') return renderStaffRoute();
  if (main === 'filter') return renderFilterScreen();
  if (main === 'projector') return renderProjector();
  return renderAppShell(renderAppRoute());
}

function renderAppShell(inner, opts = {}) {
  const title = opts.title || '';
  const back = opts.back;
  return `<div class="app-frame">${!navigator.onLine ? '<div class="offline-banner">Offline mode: payments, uploads, and submissions are disabled.</div>' : ''}<header class="topbar"><button class="icon-btn" ${back ? `data-go="${back}"` : 'data-back'} aria-label="Back">‹</button><div class="${title ? 'topbar-title' : 'logo'}">${title || APP_LOGO}</div><div class="header-actions"><button class="icon-btn" data-open-sort title="Sort">≡</button><button class="icon-btn" data-go="/filter" title="Filter">⌯</button></div></header>${inner}${renderBottomNav()}</div>`;
}

function renderBottomNav() {
  const active = route.raw;
  const items = [
    ['/app/find','🎮','Find'], ['/app/plan','🪄','Plan'], ['/app/favorites','♡','Favorites'], ['/app/submit','＋','Add'], ['/app/account','♙','Account']
  ];
  return `<nav class="bottom-nav">${items.map(([path,icon,label])=>`<button class="nav-item ${active.startsWith(path)?'active':''}" data-go="${path}"><span class="nav-icon">${icon}</span><span>${label}</span></button>`).join('')}</nav>`;
}

function renderAppRoute() {
  const p = route.parts;
  if (p[0] !== 'app') return `<main class="content"><button class="btn btn-primary" data-go="/app/find">Open HooraPlaybook</button></main>`;
  if (p[1] === 'games' && p[2] && p[3] === 'rate') return renderRateScreen(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'reviews') return renderReviewsScreen(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'notes') return renderNotesScreen(p[2]);
  if (p[1] === 'games' && p[2]) return renderGameDetail(p[2]);
  if (p[1] === 'favorites') return renderFavorites();
  if (p[1] === 'submit') return renderSubmit();
  if (p[1] === 'plan') return renderPlan();
  if (p[1] === 'tools') return renderTools();
  if (p[1] === 'account') return renderAccount();
  return renderFind();
}

function renderFind() {
  const games = getFilteredGames();
  const user = currentUser();
  return `<main class="content"><div class="search-row"><div class="search-box"><span class="search-icon">⌕</span><input id="search-input" value="${escapeHTML(state.search)}" placeholder="Search games, materials, purpose…"></div><button class="icon-btn" style="background:white;color:var(--gp-text);border-radius:16px;height:64px;width:50px" data-go="/filter">⌯</button></div><div class="chip-scroll">${['All Play','Teamwork','Icebreakers','Indoor','Outdoor','No Prep','Bible Bridge','Cups','High Energy'].map(c=>`<button class="chip quick-chip ${state.filters.includes(c)?'active':''}" data-filter-chip="${c}">${c}</button>`).join('')}</div>${renderMagicFinder()}<div class="section-title"><h2>Explore… ${games.length} games</h2><span>${hasProAccess(user)?'PRO access':'Free plan'}</span></div><div class="sort-row"><strong style="font-size:20px;color:var(--gp-muted);font-style:italic">SORT GAMES BY:</strong><button class="sort-trigger" data-open-sort>${state.sort}<span>⌄</span></button></div><div class="game-list">${games.map(renderGameCard).join('') || renderNoResults()}</div></main>${renderSortModalIfNeeded()}`;
}

function renderMagicFinder() {
  const f = state.finder;
  const results = scoreGames().slice(0,3);
  return `<section class="hero-card"><h1>Tell us what you have.</h1><p>Smart Finder recommends games by age, group size, time, space, purpose, materials, and safety.</p><form id="finder-form" class="form-grid"><div class="two-col"><label><span class="label">Group size</span><input class="input" name="groupSize" type="number" value="${f.groupSize}"></label><label><span class="label">Minutes</span><input class="input" name="time" type="number" value="${f.time}"></label></div><div class="two-col"><label><span class="label">Ages from</span><input class="input" name="ageMin" type="number" value="${f.ageMin}"></label><label><span class="label">Ages to</span><input class="input" name="ageMax" type="number" value="${f.ageMax}"></label></div><label><span class="label">Materials</span><input class="input" name="materials" value="${escapeHTML(f.materials)}" placeholder="cups, paper, balls..."></label><div class="two-col"><label><span class="label">Space</span><select class="input" name="space"><option ${f.space==='indoor'?'selected':''}>indoor</option><option ${f.space==='outdoor'?'selected':''}>outdoor</option><option ${f.space==='both'?'selected':''}>both</option></select></label><label><span class="label">Purpose</span><select class="input" name="purpose">${['Fun','Icebreaker','Teamwork','Trust','Communication','Bible Bridge','Calm Down','Competition','Camp','Classroom'].map(x=>`<option ${f.purpose===x?'selected':''}>${x}</option>`).join('')}</select></label></div><button class="btn btn-primary full">Find 3 Great Games</button></form><div style="margin-top:16px">${results.map(r=>`<div style="padding:12px;border-radius:14px;background:#f6f8f2;margin-top:8px"><strong>${r.game.title}</strong><div class="help">Fit score ${r.score}/100 · ${r.reason}</div></div>`).join('')}</div></section>`;
}

function renderGameCard(game) {
  const user = currentUser();
  const locked = game.accessLevel === 'pro' && !hasProAccess(user);
  const fav = isFavorite(game.id);
  return `<article class="game-card" data-game-card="${game.id}"><div class="game-card-top"><div class="thumb ${game.thumb}"><span>${game.title}</span></div><div><div style="display:flex;justify-content:space-between;gap:8px;align-items:start"><h3 class="game-title">${game.title}</h3>${game.accessLevel==='pro'?'<span class="pro-badge">PRO</span>':''}</div><div class="game-desc">${game.shortDescription}</div></div></div><div class="tag-list">${fitTags(game).map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="card-divider"></div><div class="rating-row"><div>${stars(game.averageRating)} <span>${game.averageRating.toFixed(1)} (${game.ratingCount} Ratings)</span></div><div class="inline-actions"><button class="icon-btn heart ${fav?'active':''}" data-toggle-favorite="${game.id}" aria-label="Favorite">♥</button><button class="icon-btn check" data-add-session="${game.id}" aria-label="Add to session">□</button></div></div>${locked?`<div class="lock-card" style="margin-top:12px"><strong>PRO preview</strong><div class="help">Upgrade to unlock full instructions, PDF, and projector mode.</div></div>`:''}</article>`;
}
function fitTags(g) { return [`Ages ${g.bestAgeMin}–${g.bestAgeMax}`, `${g.groupSizeMin}–${g.groupSizeMax} players`, `${g.timeMin}–${g.timeMax} min`, g.materials.length ? g.materials.join(', ') : 'No materials', g.safety].slice(0,5); }
function stars(rating, small=false) { const full = Math.round(rating); return `<span class="stars ${small?'small':''}">${[1,2,3,4,5].map(i=>`<span class="${i<=full?'':'star-empty'}">★</span>`).join('')}</span>`; }
function renderNoResults() { return `<div class="card" style="padding:24px"><h2>No perfect matches yet.</h2><p class="help">Try removing one filter, allowing substitute materials, or choosing a wider time range.</p><button class="btn btn-primary" data-clear-filters>Clear filters</button></div>`; }

function getFilteredGames() {
  const q = state.search.trim().toLowerCase();
  let games = state.games.filter(g => g.status !== 'archived');
  if (q) games = games.filter(g => [g.title,g.shortDescription,g.description,g.materials.join(' '),g.tags.join(' '),g.purpose.join(' ')].join(' ').toLowerCase().includes(q));
  const filters = state.filters;
  filters.forEach(f => {
    const n = f.toLowerCase();
    if (f === 'PRO') games = games.filter(g => g.accessLevel === 'pro');
    else if (f === 'Free') games = games.filter(g => g.accessLevel === 'free');
    else if (f === 'Favorites') games = games.filter(g => isFavorite(g.id));
    else if (f === 'Played') games = games.filter(g => (state.played[currentUser()?.id] || []).includes(g.id));
    else if (f === 'Unplayed') games = games.filter(g => !(state.played[currentUser()?.id] || []).includes(g.id));
    else if (f === 'No Materials') games = games.filter(g => g.materials.length === 0);
    else if (['Low','Medium','High'].includes(f)) games = games.filter(g => g.energy === f);
    else if (['Indoor','Outdoor'].includes(f)) games = games.filter(g => g.indoorOutdoor === f.toLowerCase() || g.indoorOutdoor === 'both');
    else if (f === 'Low Risk') games = games.filter(g => g.safety === 'Low Risk');
    else if (f === 'Moderate Risk') games = games.filter(g => g.safety === 'Moderate Risk');
    else games = games.filter(g => g.tags.map(x=>x.toLowerCase()).includes(n) || g.purpose.map(x=>x.toLowerCase()).includes(n) || g.materials.map(x=>x.toLowerCase()).includes(n));
  });
  return sortGames(games);
}

function sortGames(games) {
  const arr = [...games];
  switch(state.sort) {
    case 'Most Viewed': return arr.sort((a,b)=>b.views-a.views);
    case 'Most Reviewed': return arr.sort((a,b)=>b.reviewCount-a.reviewCount);
    case 'Highest Rated': return arr.sort((a,b)=>b.averageRating-a.averageRating);
    case 'Newest First': return arr.reverse();
    case 'Alphabetical': return arr.sort((a,b)=>a.title.localeCompare(b.title));
    case 'Shortest First': return arr.sort((a,b)=>a.timeMin-b.timeMin);
    case 'Lowest Prep': return arr.sort((a,b)=>a.prep-b.prep);
    default: return scoreGames(arr).map(x=>x.game);
  }
}

function scoreGames(games = state.games) {
  const f = state.finder;
  const materials = f.materials.toLowerCase().split(/[, ]+/).filter(Boolean);
  return games.map(game => {
    let score = 0; const reasons = [];
    if (f.ageMin >= game.bestAgeMin - 2 && f.ageMax <= game.bestAgeMax + 2) { score += 15; reasons.push('age fit'); } else score -= 10;
    if (f.groupSize >= game.groupSizeMin && f.groupSize <= game.groupSizeMax) { score += 15; reasons.push('group size fits'); } else score -= 10;
    if (f.time >= game.timeMin || game.timeMax <= f.time + 5) { score += 15; reasons.push('fits your time'); } else score -= 8;
    const required = game.materials.map(m=>m.toLowerCase());
    if (required.length === 0) { score += 10; reasons.push('no materials'); }
    else if (required.every(m => materials.includes(m))) { score += 15; reasons.push('materials match'); }
    else score -= 20;
    if (f.space === 'both' || game.indoorOutdoor === 'both' || game.indoorOutdoor === f.space) { score += 10; reasons.push('space match'); } else score -= 15;
    if (game.purpose.includes(f.purpose)) { score += 10; reasons.push('purpose match'); }
    if (game.safety === 'Low Risk' || f.safety !== 'Low Risk') score += 10;
    score += Math.min(5, Math.round(game.averageRating));
    if (f.avoid.toLowerCase().includes('not embarrassing') && game.embarrassment === 'Low') score += 5;
    return { game, score: Math.max(0, Math.min(100, score)), reason: reasons.slice(0,4).join(', ') || 'closest available match' };
  }).sort((a,b)=>b.score-a.score);
}

function renderFilterScreen() {
  return `<div class="app-frame fullscreen-page"><header class="topbar"><button class="icon-btn" data-go="/app/find">‹</button><div class="topbar-title">FILTER BY</div><div></div></header><main class="filter-body">${FILTER_SECTIONS.map(sec=>`<section class="filter-group"><h2>${sec.title}</h2><div class="filter-chip-grid">${sec.options.map(o=>`<button class="filter-chip ${state.filters.includes(o)?'active':''}" data-filter-chip="${o}">${o}</button>`).join('')}</div></section>`).join('')}</main><div class="filter-bottom"><button class="btn btn-primary" data-clear-filters>Clear</button><button class="btn btn-secondary" data-go="/app/find">Apply</button></div></div>`;
}

function renderSortModalIfNeeded() { return window.__sortOpen ? `<div class="modal-backdrop" data-close-sort><div class="bottom-sheet" onclick="event.stopPropagation()"><h2>Sort by</h2>${SORT_OPTIONS.map(o=>`<label class="radio-row ${state.sort===o?'active':''}" data-set-sort="${o}"><span class="radio-circle"></span><span>${o}</span></label>`).join('')}<button class="btn btn-primary full" data-close-sort>Apply</button><button class="btn btn-secondary full" style="margin-top:12px" data-close-sort>Cancel</button></div></div>` : ''; }

function renderGameDetail(id) {
  const game = state.games.find(g => g.id === id);
  if (!game) return renderAppShell(`<main class="content"><h1>Game not found</h1></main>`);
  game.views += 1; saveState();
  const locked = !canViewGame(game);
  return `<div class="app-frame"><header class="topbar"><button class="icon-btn" data-go="/app/find">‹</button><div class="logo">${APP_LOGO}</div><div class="header-actions"><button class="icon-btn" data-share-game="${game.id}">⇧</button></div></header><div class="detail-title-block"><h1>${game.title}</h1><div class="rating-row" style="justify-content:flex-start;gap:12px">${stars(game.averageRating)} <span>${game.averageRating.toFixed(1)} (${game.ratingCount} Ratings)</span><button class="icon-btn heart ${isFavorite(game.id)?'active':''}" data-toggle-favorite="${game.id}">♥</button></div><p><a class="link" data-go="/app/games/${game.id}/reviews">View Reviews</a></p></div><main class="content" style="padding-top:0;padding-bottom:116px"><div class="media-hero thumb ${game.thumb}"><span>${game.title}</span>${game.title.includes('Video')?'<span class="play">▶</span>':''}</div><div class="dots"><span class="dot"></span><span class="dot active"></span><span class="dot"></span></div><section class="content-section"><h2>Description:</h2><p>${game.description}</p></section><section class="content-section"><h2>Quick Facts:</h2><div class="quick-facts">${quickFacts(game).map(([k,v])=>`<div class="fact"><strong>${k}</strong><span>${v}</span></div>`).join('')}</div></section>${locked ? renderLockedGame(game) : renderFullGameDetails(game)}<section class="content-section"><h2>Filters:</h2><div class="tag-list">${game.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></section><section class="content-section"><h2>Creators:</h2><p>${game.creator}</p></section></main><div class="sticky-actions"><button class="btn btn-primary" data-go="/app/games/${game.id}/rate">Rate This Game</button><button class="btn btn-secondary" data-go="/app/games/${game.id}/notes">Add Notes</button></div></div>`;
}
function quickFacts(g) { return [['Ages', `${g.bestAgeMin}–${g.bestAgeMax}`], ['Players', `${g.groupSizeMin}–${g.groupSizeMax}`], ['Time', `${g.timeMin}–${g.timeMax} min`], ['Space', g.space], ['Energy', g.energy], ['Materials', g.materials.length?g.materials.join(', '):'None'], ['Safety', g.safety], ['Prep', `${g.prep} min`]]; }
function renderLockedGame(game) { return `<section class="content-section lock-card"><h2>Unlock this PRO game</h2><p>Free users can preview the title, summary, quick facts, rating, and tags. Upgrade to PRO for full instructions, PDF download, projector mode, and session builder.</p><button class="btn btn-primary full" data-go="/pricing">Upgrade to PRO</button></section>`; }
function renderFullGameDetails(game) { return `${section('What to Get:', game.materials.length ? [`Gather: ${game.materials.join(', ')}`] : ['No materials needed.'])}${section('What to Prep:', [game.setup])}${section('How to Play:', game.howToPlay)}${section('Leader Script:', [game.leaderScript])}${section('Safety Notes:', [game.safetyNotes, `Avoid with: ${game.avoidWith}`, `Requires: ${game.requires}`])}${section('Variations:', [game.variations])}${section('Make It Easier:', [game.easier])}${section('Make It Harder:', [game.harder])}${section('Debrief Questions:', game.debriefQuestions)}${section('Bible Bridge:', [game.bibleBridge, `References: ${game.scripture.join(', ')}`])}<section class="content-section"><div class="two-col"><button class="btn btn-primary" data-print-game="${game.id}">Download / Print PDF</button><button class="btn btn-secondary" data-go="/projector/${game.id}">Projector Mode</button></div></section>`; }
function section(title, items) { return `<section class="content-section"><h2>${title}</h2><ul>${items.filter(Boolean).map(i=>`<li>${escapeHTML(i)}</li>`).join('')}</ul></section>`; }

function renderReviewsScreen(id) {
  const g = state.games.find(x=>x.id===id); if (!g) return '';
  const reviews = state.ratings.filter(r=>r.gameId===id && r.reviewStatus==='published');
  return `<div class="app-frame"><header class="topbar"><button class="icon-btn" data-go="/app/games/${id}">‹</button><div class="topbar-title">REVIEWS</div><div></div></header><main class="content"><div class="card review-summary"><div class="review-score">${g.averageRating.toFixed(1)}</div><div>${stars(g.averageRating)}<div class="review-meta">${g.ratingCount} ratings and ${reviews.filter(r=>r.reviewText).length} reviews</div></div></div><button class="btn btn-primary full" style="margin:18px 0" data-go="/app/games/${id}/rate">Rate This Game</button><section><h2 style="text-transform:uppercase">Reviews:</h2>${reviews.map(renderReviewRow).join('') || '<p class="help">No written reviews yet.</p>'}</section></main>${renderBottomNav()}</div>`;
}
function renderReviewRow(r) { const u = state.users.find(x=>x.id===r.userId) || {fullName:'HooraPlaybook User'}; return `<div class="review-row"><div class="avatar">${initials(u.fullName)}</div><div><div class="review-name">${u.fullName}</div><div>${stars(r.rating,true)} <span class="review-meta">${new Date(r.createdAt).toLocaleString()}</span></div>${r.reviewText?`<p class="help" style="font-size:15px">${escapeHTML(r.reviewText)}</p>`:''}</div></div>`; }
function initials(name='User') { return name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase(); }

function renderRateScreen(id) {
  const game = state.games.find(g=>g.id===id); if (!game) return '';
  const existing = state.ratings.find(r=>r.gameId===id && r.userId===currentUser().id) || {};
  return `<div class="app-frame fullscreen-page"><header class="topbar"><button class="icon-btn" data-go="/app/games/${id}">‹</button><div class="topbar-title">RATE THIS GAME</div><div></div></header><main class="content no-bottom-nav"><form id="rate-form" data-game-id="${id}"><input type="hidden" name="rating" value="${existing.rating||0}"><div class="rate-card star-picker">${[1,2,3,4,5].map(i=>`<button type="button" class="${(existing.rating||0)>=i?'active':''}" data-star="${i}">☆</button>`).join('')}</div><label><span class="label">Review</span><textarea name="reviewText" placeholder="Write review">${escapeHTML(existing.reviewText||'')}</textarea></label><h2>IMAGES</h2><label class="upload-tile">+<input name="images" type="file" accept="image/*" multiple hidden></label><h2>VIDEOS</h2><label class="upload-tile">+<input name="videos" type="file" accept="video/*" multiple hidden></label></form></main><div class="sticky-actions" style="grid-template-columns:1fr"><button class="btn btn-primary full" form="rate-form">Submit</button></div></div>`;
}

function renderNotesScreen(id) {
  const game = state.games.find(g=>g.id===id); const key = `${currentUser().id}:${id}`; const note = state.notes[key] || '';
  return `<div class="app-frame"><header class="topbar"><button class="icon-btn" data-go="/app/games/${id}">‹</button><div class="topbar-title">ADD NOTES</div><div></div></header><main class="content no-bottom-nav"><div class="card" style="padding:18px"><h2>${game.title}</h2><form id="notes-form" data-game-id="${id}" class="form-grid"><textarea name="note" placeholder="Private leader notes...">${escapeHTML(note)}</textarea><button class="btn btn-primary full">Save Notes</button></form></div></main></div>`;
}

function renderFavorites() {
  const favIds = state.favorites[currentUser().id] || [];
  const games = state.games.filter(g=>favIds.includes(g.id));
  return `<main class="content"><section class="hero-card"><h1>Favorites</h1><p>Free users can save 3 favorites. PRO users get unlimited favorites and collections.</p>${!hasProAccess()?'<div class="help">Free favorites used: '+favIds.length+'/3</div>':''}</section><div class="game-list">${games.map(renderGameCard).join('') || '<div class="card" style="padding:22px"><h2>No favorites yet.</h2><p class="help">Save games from the Find screen.</p></div>'}</div></main>`;
}

function renderPlan() {
  if (!hasProAccess()) return `<main class="content"><div class="lock-card"><h1>Session Builder is PRO</h1><p>Build a full youth night with warm-up game, main game, Bible bridge, backup game, materials list, and printable plan.</p><button class="btn btn-primary full" data-go="/pricing">Upgrade to PRO</button></div></main>`;
  const latest = state.sessions.filter(s=>s.userId===currentUser().id).slice(-1)[0];
  return `<main class="content"><section class="hero-card"><h1>Build me a session plan</h1><p>Choose your constraints. HooraPlaybook will assemble a ready-to-lead flow.</p><form id="session-form" class="form-grid"><label><span class="label">Session type</span><select class="input" name="type"><option>Youth Night</option><option>Camp Session</option><option>Classroom Activity</option><option>Team Building</option><option>Children’s Ministry</option></select></label><div class="two-col"><label><span class="label">Total minutes</span><input class="input" name="minutes" type="number" value="60"></label><label><span class="label">Group size</span><input class="input" name="groupSize" type="number" value="18"></label></div><label><span class="label">Available materials</span><input class="input" name="materials" value="cups, paper"></label><label><span class="label">Purpose</span><select class="input" name="purpose"><option>Teamwork</option><option>Fun</option><option>Icebreaker</option><option>Bible Bridge</option><option>Communication</option></select></label><button class="btn btn-primary full">Build My Plan</button></form></section>${latest?renderSessionPlan(latest):''}</main>`;
}
function renderSessionPlan(plan) { return `<section class="card plan-output" style="padding:18px"><h2>${plan.title}</h2><p class="help">Combined materials: ${plan.materials.join(', ') || 'none'}</p>${plan.items.map(item=>`<div class="timeline-item"><div class="timeline-time">${item.start} · ${item.duration} min</div><div class="timeline-title">${item.type}: ${item.title}</div><p class="help">${item.notes}</p></div>`).join('')}<div class="two-col"><button class="btn btn-primary" data-print-session>Download / Print</button><button class="btn btn-secondary" data-projector-session>Projector Mode</button></div></section>`; }

function renderSubmit() {
  const staffPublishControl = isStaff()
    ? '<label class="check-row"><input type="checkbox" name="publishNow"> <span>Staff option: publish valid Markdown files immediately instead of sending to moderation.</span></label>'
    : '<p class="help">Batch uploads from users are sent to moderation. Staff can approve and publish them in the admin panel.</p>';

  return `<main class="content"><section class="hero-card"><h1>Add Games</h1><p>Add one game manually or batch-upload many games from Markdown files. Each Markdown file should describe one game.</p></section>
  <section class="card" style="padding:18px;margin-bottom:18px"><h2>Batch Upload .MD Games</h2><p class="help">Select multiple <strong>game_name.md</strong> files. HooraPlaybook will parse each file, create one submission per file, and preserve the original Markdown for admin review.</p><form id="batch-upload-form" class="form-grid"><label><span class="label">Markdown files</span><input class="input file-input" name="mdFiles" type="file" accept=".md,.markdown,text/markdown,text/plain" multiple required></label>${staffPublishControl}<details class="format-example"><summary>Expected Markdown format</summary><pre># Game Name

## One-sentence description
Short summary here.

## How to play
- Step one
- Step two

## Duration
10–15 minutes

## Group size
8–30

## Ages
12–18

## Materials needed
cups, paper

## Categories
Teamwork, Indoor, Low Prep

## Safety rating
Low Risk

## Safety notes
Use clear boundaries.</pre></details><button class="btn btn-primary full">Upload Markdown Games</button></form></section>
  <form id="submit-game-form" class="form-grid"><div class="card" style="padding:18px"><h2>Add One Game</h2><p class="help">Use this form for a single game. It will be reviewed before publication.</p><label><span class="label">Game title</span><input class="input" name="title" required></label><label><span class="label">One-sentence description</span><input class="input" name="shortDescription" required></label></div><div class="card" style="padding:18px"><h2>2. Group Fit</h2><div class="two-col"><label><span class="label">Age min</span><input class="input" name="ageMin" type="number" required></label><label><span class="label">Age max</span><input class="input" name="ageMax" type="number" required></label></div><div class="two-col"><label><span class="label">Group min</span><input class="input" name="groupMin" type="number" required></label><label><span class="label">Group max</span><input class="input" name="groupMax" type="number" required></label></div></div><div class="card" style="padding:18px"><h2>3. Materials & Setup</h2><label><span class="label">Materials needed</span><input class="input" name="materials" placeholder="cups, paper, balls"></label><label><span class="label">Setup instructions</span><textarea name="setup" required></textarea></label></div><div class="card" style="padding:18px"><h2>4. How to Play</h2><label><span class="label">Rules / how to play</span><textarea name="howToPlay" required></textarea></label><label><span class="label">Win or end condition</span><textarea name="winCondition" required></textarea></label></div><div class="card" style="padding:18px"><h2>5. Safety</h2><label><span class="label">Safety notes</span><textarea name="safetyNotes" required></textarea></label><label><span class="label">Overall safety rating</span><select class="input" name="safety"><option>Low Risk</option><option>Moderate Risk</option><option>Use With Caution</option><option>Not Recommended</option></select></label></div><button class="btn btn-primary full">Submit for Review</button></form></main>`;
}

function renderTools() { return `<main class="content"><section class="hero-card"><h1>Icebreaker</h1><p id="icebreaker-prompt">Which animal gives birth to the biggest babies in the world? The blue whale.</p><button class="btn btn-primary full" data-random-icebreaker>Break The Ice</button></section></main>`; }

function renderAccount() {
  const u = currentUser();
  const myBatches = (state.importBatches || []).filter(b => b.uploadedBy === u.id).slice(-3).reverse();
  const batchCard = myBatches.length ? `<div class="card" style="padding:18px"><h2>Recent Batch Uploads</h2>${myBatches.map(b=>`<p class="help"><strong>${b.importedCount}/${b.fileCount}</strong> imported · ${b.publishMode === 'publish_now' ? 'published' : 'queued for moderation'}${b.failedCount ? ` · ${b.failedCount} failed` : ''}</p>`).join('')}</div>` : '';
  return `<main class="content"><section class="hero-card"><h1>Account</h1><p>${u.fullName} · ${u.email}</p><div class="magic-row"><span class="magic-chip">Role: ${u.role}</span><span class="magic-chip">Plan: ${u.plan}</span><span class="magic-chip">Access: ${hasProAccess(u)?'PRO active':'Free'}</span></div></section><div class="game-list"><div class="card" style="padding:18px"><h2>Redeem Coupon</h2><form id="redeem-form" class="form-grid"><input class="input" name="code" maxlength="16" placeholder="16-character code"><button class="btn btn-primary full">Redeem one free month</button></form></div>${batchCard}<button class="btn btn-secondary full" data-go="/pricing">Upgrade / Manage Billing</button>${isStaff(u)?'<button class="btn btn-dark full" data-go="/admin">Admin Panel</button>':''}<button class="btn btn-danger full" data-logout>Log out</button></div></main>`;
}

function renderAdminRoute() {
  if (!isStaff()) return renderAppShell(`<main class="content"><h1>Not authorized</h1></main>`);
  const tab = route.parts[1] || 'dashboard';
  const title = tab === 'dashboard' ? 'ADMIN' : tab.toUpperCase();
  const inner = tab === 'users' ? renderAdminUsers() : tab === 'coupons' ? renderAdminCoupons() : tab === 'submissions' ? renderAdminSubmissions() : tab === 'games' ? renderAdminGames() : renderAdminDashboard();
  return `<div class="app-frame"><header class="topbar"><button class="icon-btn" data-go="/app/account">‹</button><div class="topbar-title">${title}</div><div></div></header><main class="content"><div class="chip-scroll"><button class="chip quick-chip" data-go="/admin">Dashboard</button><button class="chip quick-chip" data-go="/admin/users">Users</button><button class="chip quick-chip" data-go="/admin/coupons">Coupons</button><button class="chip quick-chip" data-go="/admin/submissions">Submissions</button><button class="chip quick-chip" data-go="/admin/games">Games</button></div>${inner}</main>${renderBottomNav()}</div>`;
}
function renderStaffRoute() { return renderAdminRoute(); }
function renderAdminDashboard() { const pro = state.users.filter(u=>u.plan==='pro').length; return `<div class="admin-grid"><div class="stat-card"><span>Total users</span><strong>${state.users.length}</strong></div><div class="stat-card"><span>PRO users</span><strong>${pro}</strong></div><div class="stat-card"><span>Pending submissions</span><strong>${state.submissions.filter(s=>s.status==='submitted').length}</strong></div><div class="stat-card"><span>Coupons</span><strong>${state.coupons.length}</strong></div><div class="stat-card"><span>Total games</span><strong>${state.games.length}</strong></div><div class="stat-card"><span>Batch imports</span><strong>${(state.importBatches||[]).length}</strong></div><div class="stat-card"><span>Avg rating</span><strong>${avg(state.games.map(g=>g.averageRating)).toFixed(1)}</strong></div></div>`; }
function avg(nums) { return nums.length ? nums.reduce((a,b)=>a+b,0)/nums.length : 0; }
function renderAdminUsers() { if (!isAdmin()) return `<div class="lock-card">Only administrators can manage users and access.</div>`; return `<div class="card" style="padding:18px;margin-bottom:16px"><h2>Create user</h2><form id="admin-create-user" class="form-grid"><input class="input" name="fullName" placeholder="Full name"><input class="input" name="email" type="email" placeholder="Email" required><input class="input" name="password" placeholder="Temporary password" value="changeme123"><div class="two-col"><select class="input" name="role"><option>user</option><option>staff</option><option>admin</option></select><select class="input" name="plan"><option>free</option><option>pro</option></select></div><button class="btn btn-primary">Create User</button></form></div><div class="table-card"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Plan</th><th>Expires</th><th>Disabled</th><th>Actions</th></tr></thead><tbody>${state.users.map(u=>`<tr><td>${u.fullName}</td><td>${u.email}</td><td><select data-user-field="role" data-user-id="${u.id}">${['user','staff','admin'].map(r=>`<option ${u.role===r?'selected':''}>${r}</option>`).join('')}</select></td><td><select data-user-field="plan" data-user-id="${u.id}">${['free','pro'].map(p=>`<option ${u.plan===p?'selected':''}>${p}</option>`).join('')}</select></td><td><input type="date" data-user-field="accessExpiresAt" data-user-id="${u.id}" value="${u.accessExpiresAt?u.accessExpiresAt.slice(0,10):''}"></td><td><input type="checkbox" data-user-field="disabled" data-user-id="${u.id}" ${u.disabled?'checked':''}></td><td><button class="btn btn-secondary" data-grant-pro="${u.id}">Grant 30d</button></td></tr>`).join('')}</tbody></table></div>`; }
function renderAdminCoupons() { if (!isAdmin()) return `<div class="lock-card">Only administrators can create coupons.</div>`; return `<div class="card" style="padding:18px;margin-bottom:16px"><h2>Batch Create Coupons</h2><form id="coupon-form" class="form-grid"><input class="input" name="campaign" placeholder="Campaign name"><input class="input" name="quantity" type="number" value="5" min="1" max="100"><input class="input" name="expires" type="date"><button class="btn btn-primary">Generate Coupons</button></form></div><div class="table-card"><table><thead><tr><th>Code</th><th>Campaign</th><th>Expires</th><th>Redeemed</th><th>Actions</th></tr></thead><tbody>${state.coupons.map(c=>`<tr><td><strong>${c.displayCode}</strong></td><td>${c.campaign||''}</td><td>${c.expiresAt?c.expiresAt.slice(0,10):'—'}</td><td>${c.redeemedBy?'Yes':'No'}</td><td><button class="btn btn-secondary" data-copy="${c.displayCode}">Copy</button></td></tr>`).join('')}</tbody></table></div>`; }
function renderAdminSubmissions() { return `<div class="game-list">${state.submissions.map(s=>`<div class="card" style="padding:18px"><div class="pro-badge">${s.status}</div><h2>${escapeHTML(s.payload.title||'Untitled')}</h2><p class="help">${escapeHTML(s.payload.shortDescription||'')}</p>${s.sourceFilename?`<p class="help"><strong>Source file:</strong> ${escapeHTML(s.sourceFilename)} · ${escapeHTML(s.source||'manual')}</p>`:''}<div class="two-col"><button class="btn btn-primary" data-approve-submission="${s.id}">Approve / Publish</button><button class="btn btn-secondary" data-reject-submission="${s.id}">Reject</button></div></div>`).join('') || '<div class="card" style="padding:22px"><h2>No submissions yet.</h2></div>'}</div>`; }
function renderAdminGames() { return `<div class="game-list">${state.games.map(g=>`<div class="card" style="padding:16px"><h2>${g.title}</h2><div class="magic-row"><span class="magic-chip">${g.accessLevel}</span><span class="magic-chip">${g.safety}</span><span class="magic-chip">${g.tested?'Tested':'Untested'}</span></div><div class="two-col"><button class="btn btn-secondary" data-toggle-game-access="${g.id}">Toggle Free/PRO</button><button class="btn btn-danger" data-delete-game="${g.id}">Delete</button></div></div>`).join('')}</div>`; }

function renderProjector() {
  const id = route.parts[1]; const game = state.games.find(g=>g.id===id);
  if (!game) return '';
  if (!hasProAccess()) return `<div class="app-frame"><main class="content"><div class="lock-card"><h1>Projector Mode is PRO</h1><button class="btn btn-primary" data-go="/pricing">Upgrade</button></div></main></div>`;
  return `<div style="min-height:100vh;background:#101317;color:white;padding:32px;font-family:Inter,system-ui"><button class="btn btn-secondary no-print" data-go="/app/games/${id}">Exit Projector</button><h1 style="font-size:clamp(48px,8vw,96px);line-height:.92;max-width:1000px">${game.title}</h1><p style="font-size:clamp(24px,4vw,46px);color:#d7dde3;max-width:1100px">${game.shortDescription}</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin:36px 0">${quickFacts(game).map(([k,v])=>`<div style="background:#1c2228;border-radius:22px;padding:22px"><div style="color:#9fa8b1;text-transform:uppercase;font-weight:900">${k}</div><div style="font-size:32px;font-weight:900">${v}</div></div>`).join('')}</div><h2 style="font-size:44px">How to play</h2><ol style="font-size:32px;line-height:1.45">${game.howToPlay.map(s=>`<li>${s}</li>`).join('')}</ol></div>`;
}

function bindEvents() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); go(el.dataset.go); }));
  document.querySelectorAll('[data-back]').forEach(el => el.addEventListener('click', () => history.length > 1 ? history.back() : go('/app/find')));
  document.querySelectorAll('[data-filter-chip]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); toggleFilter(el.dataset.filterChip); }));
  document.querySelectorAll('[data-clear-filters]').forEach(el => el.addEventListener('click', () => { state.filters = []; state.search = ''; saveState(); render(); }));
  document.querySelectorAll('[data-open-sort]').forEach(el => el.addEventListener('click', () => { window.__sortOpen = true; render(); }));
  document.querySelectorAll('[data-close-sort]').forEach(el => el.addEventListener('click', () => { window.__sortOpen = false; render(); }));
  document.querySelectorAll('[data-set-sort]').forEach(el => el.addEventListener('click', () => { state.sort = el.dataset.setSort; saveState(); render(); }));
  document.querySelectorAll('[data-game-card]').forEach(el => el.addEventListener('click', e => { if (e.target.closest('button')) return; go(`/app/games/${el.dataset.gameCard}`); }));
  document.querySelectorAll('[data-toggle-favorite]').forEach(el => el.addEventListener('click', e => { e.stopPropagation(); toggleFavorite(el.dataset.toggleFavorite); }));
  document.querySelectorAll('[data-add-session]').forEach(el => el.addEventListener('click', e => { e.stopPropagation(); toast('Added to the current session draft.'); }));
  const search = byId('search-input'); if (search) search.addEventListener('input', e => { state.search = e.target.value; saveState(); render(); });
  const login = byId('login-form'); if (login) login.addEventListener('submit', handleLogin);
  const signup = byId('signup-form'); if (signup) signup.addEventListener('submit', handleSignup);
  const finder = byId('finder-form'); if (finder) finder.addEventListener('submit', handleFinder);
  const rate = byId('rate-form'); if (rate) rate.addEventListener('submit', handleRate);
  document.querySelectorAll('[data-star]').forEach(el => el.addEventListener('click', () => setStars(Number(el.dataset.star))));
  const notes = byId('notes-form'); if (notes) notes.addEventListener('submit', handleNotes);
  const submitGame = byId('submit-game-form'); if (submitGame) submitGame.addEventListener('submit', handleSubmitGame);
  const batchUpload = byId('batch-upload-form'); if (batchUpload) batchUpload.addEventListener('submit', handleBatchUpload);
  const sessionForm = byId('session-form'); if (sessionForm) sessionForm.addEventListener('submit', handleSession);
  const redeem = byId('redeem-form'); if (redeem) redeem.addEventListener('submit', handleRedeem);
  const coupon = byId('coupon-form'); if (coupon) coupon.addEventListener('submit', handleCouponGeneration);
  const createUser = byId('admin-create-user'); if (createUser) createUser.addEventListener('submit', handleAdminCreateUser);
  document.querySelectorAll('[data-user-field]').forEach(el => el.addEventListener('change', handleUserField));
  document.querySelectorAll('[data-grant-pro]').forEach(el => el.addEventListener('click', () => grantPro(el.dataset.grantPro, 30)));
  document.querySelectorAll('[data-copy]').forEach(el => el.addEventListener('click', () => navigator.clipboard?.writeText(el.dataset.copy).then(()=>toast('Copied.'))));
  document.querySelectorAll('[data-approve-submission]').forEach(el => el.addEventListener('click', () => approveSubmission(el.dataset.approveSubmission)));
  document.querySelectorAll('[data-reject-submission]').forEach(el => el.addEventListener('click', () => rejectSubmission(el.dataset.rejectSubmission)));
  document.querySelectorAll('[data-toggle-game-access]').forEach(el => el.addEventListener('click', () => toggleGameAccess(el.dataset.toggleGameAccess)));
  document.querySelectorAll('[data-delete-game]').forEach(el => el.addEventListener('click', () => deleteGame(el.dataset.deleteGame)));
  document.querySelectorAll('[data-logout]').forEach(el => el.addEventListener('click', logout));
  document.querySelectorAll('[data-upgrade]').forEach(el => el.addEventListener('click', () => handleUpgrade(el.dataset.upgrade)));
  document.querySelectorAll('[data-print-game],[data-print-session]').forEach(el => el.addEventListener('click', () => window.print()));
  document.querySelectorAll('[data-share-game]').forEach(el => el.addEventListener('click', () => shareGame(el.dataset.shareGame)));
  document.querySelectorAll('[data-random-icebreaker]').forEach(el => el.addEventListener('click', randomIcebreaker));
}

function toggleFilter(f) { state.filters = state.filters.includes(f) ? state.filters.filter(x=>x!==f) : [...state.filters, f]; saveState(); render(); }
function isFavorite(gameId) { return (state.favorites[currentUser()?.id] || []).includes(gameId); }
function toggleFavorite(gameId) {
  const u = currentUser(); if (!u) return;
  const favs = state.favorites[u.id] || [];
  if (favs.includes(gameId)) state.favorites[u.id] = favs.filter(x=>x!==gameId);
  else {
    if (!hasProAccess(u) && favs.length >= 3) { toast('You’ve saved 3 favorites. Upgrade to PRO for unlimited favorites.'); return; }
    state.favorites[u.id] = [...favs, gameId];
  }
  saveState(); render();
}
function handleLogin(e) { e.preventDefault(); const fd = new FormData(e.target); const email = fd.get('email').toLowerCase().trim(); const password = fd.get('password'); const u = state.users.find(x=>x.email.toLowerCase()===email && x.password===password); if (!u) return toast('Invalid email or password.'); if (u.disabled) return toast('This account is disabled.'); state.currentUserId = u.id; saveState(); go('/app/find'); }
function handleSignup(e) { e.preventDefault(); const fd = new FormData(e.target); const email = fd.get('email').toLowerCase().trim(); if (state.users.some(u=>u.email.toLowerCase()===email)) return toast('An account with this email already exists.'); const user = { id: crypto.randomUUID(), email, password: fd.get('password'), fullName: fd.get('fullName') || email, role: 'user', plan: 'free', accessStatus: 'active', accessExpiresAt: null, disabled: false }; state.users.push(user); state.currentUserId = user.id; saveState(); go('/app/find'); }
function logout() { state.currentUserId = null; saveState(); go('/login'); }
function handleFinder(e) { e.preventDefault(); const fd = new FormData(e.target); state.finder = { groupSize: Number(fd.get('groupSize')), time: Number(fd.get('time')), ageMin: Number(fd.get('ageMin')), ageMax: Number(fd.get('ageMax')), materials: fd.get('materials'), space: fd.get('space'), purpose: fd.get('purpose'), safety: 'Low Risk', avoid: 'not embarrassing' }; saveState(); toast('Smart Finder updated your top matches.'); render(); }
function setStars(n) { const form = byId('rate-form'); form.rating.value = n; document.querySelectorAll('[data-star]').forEach(el => el.classList.toggle('active', Number(el.dataset.star) <= n)); }
function handleRate(e) { e.preventDefault(); const fd = new FormData(e.target); const rating = Number(fd.get('rating')); if (!rating) return toast('Choose a star rating first.'); const gameId = e.target.dataset.gameId; const userId = currentUser().id; const existing = state.ratings.find(r=>r.gameId===gameId && r.userId===userId); if (existing) { existing.rating = rating; existing.reviewText = fd.get('reviewText'); existing.updatedAt = new Date().toISOString(); } else state.ratings.push({ id: crypto.randomUUID(), userId, gameId, rating, reviewText: fd.get('reviewText'), reviewStatus: 'published', mediaStatus: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); recalcRating(gameId); saveState(); toast('Rating submitted.'); go(`/app/games/${gameId}/reviews`); }
function recalcRating(gameId) { const rs = state.ratings.filter(r=>r.gameId===gameId); const g = state.games.find(x=>x.id===gameId); g.ratingCount = rs.length; g.reviewCount = rs.filter(r=>r.reviewText).length; g.averageRating = rs.length ? Math.round((rs.reduce((a,r)=>a+r.rating,0)/rs.length)*10)/10 : 0; }
function handleNotes(e) { e.preventDefault(); const gameId = e.target.dataset.gameId; state.notes[`${currentUser().id}:${gameId}`] = new FormData(e.target).get('note'); saveState(); toast('Notes saved.'); go(`/app/games/${gameId}`); }
function handleSubmitGame(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  state.submissions.push({ id: crypto.randomUUID(), submittedBy: currentUser().id, status: 'submitted', source: 'manual', payload, createdAt: new Date().toISOString() });
  saveState();
  toast('Game submitted for review.');
  go('/app/account');
}

async function handleBatchUpload(e) {
  e.preventDefault();
  if (!navigator.onLine) return toast('Batch uploads require internet in production. Local demo can still read files while online.');
  const fd = new FormData(e.target);
  const files = [...fd.getAll('mdFiles')].filter(file => file && file.name && /\.m(?:d|arkdown)$/i.test(file.name));
  if (!files.length) return toast('Choose one or more .md files.');

  const publishNow = isStaff() && fd.get('publishNow') === 'on';
  const batch = { id: crypto.randomUUID(), uploadedBy: currentUser().id, fileCount: files.length, importedCount: 0, failedCount: 0, publishMode: publishNow ? 'publish_now' : 'moderation', errors: [], createdAt: new Date().toISOString() };
  state.importBatches = state.importBatches || [];
  state.importBatches.push(batch);

  for (const file of files) {
    try {
      const markdown = await file.text();
      const payload = parseGameMarkdown(markdown, file.name);
      const errors = validateGamePayload(payload);
      if (errors.length) throw new Error(errors.join('; '));

      if (publishNow) {
        const game = gameFromPayload(payload, { creator: currentUser().fullName, sourceFilename: file.name });
        state.games.push(game);
      } else {
        state.submissions.push({ id: crypto.randomUUID(), submittedBy: currentUser().id, status: 'submitted', source: 'batch_md', sourceFilename: file.name, importBatchId: batch.id, payload, createdAt: new Date().toISOString() });
      }
      batch.importedCount += 1;
    } catch (err) {
      batch.failedCount += 1;
      batch.errors.push({ fileName: file.name, message: err.message });
    }
  }

  batch.completedAt = new Date().toISOString();
  saveState();
  const destination = publishNow ? '/app/find' : (isStaff() ? '/admin/submissions' : '/app/account');
  toast(`${batch.importedCount} Markdown game(s) ${publishNow ? 'published' : 'queued for review'}${batch.failedCount ? `; ${batch.failedCount} failed` : ''}.`);
  go(destination);
}

function parseGameMarkdown(markdown, fileName = 'game.md') {
  const source = String(markdown || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const frontmatter = parseFrontmatter(source);
  const labelValues = parseInlineLabelValues(source);
  const sections = parseMarkdownSections(source);
  const value = (...aliases) => {
    for (const alias of aliases) {
      const key = normalizeKey(alias);
      if (frontmatter[key]) return frontmatter[key];
      if (labelValues[key]) return labelValues[key];
      if (sections[key]) return sections[key];
    }
    return '';
  };

  const firstHeading = (source.match(/^#\s+(.+)$/m) || [])[1];
  const title = cleanMarkdown(value('game title','name of the game','name','title') || firstHeading || fileName.replace(/\.(md|markdown)$/i, '').replace(/[-_]+/g, ' '));
  const shortDescription = cleanMarkdown(value('one sentence description','one-sentence description','short description','summary','description')) || `${title} game.`;
  const duration = parseNumberRange(value('duration','time required','time','length'), [10, 20]);
  const ages = parseNumberRange(value('ages','age range','best age range'), [10, 18]);
  const group = parseNumberRange(value('group size','players','group size fit','best group size'), [4, 30]);
  const materialsText = value('materials needed','materials','what to get','supplies');
  const tagsText = value('categories','tags','filters','purpose');
  const safety = normalizeSafety(value('safety rating','overall safety rating','safety','game safety profile'));

  return {
    title,
    shortDescription,
    description: cleanMarkdown(value('description')) || shortDescription,
    howToPlay: listFromMarkdown(value('how to play','rules','instructions','gameplay')),
    setup: cleanMarkdown(value('setup','what to prep','preparation','prep')) || 'No special setup listed.',
    winCondition: cleanMarkdown(value('win condition','end condition','winner')) || 'End when the leader decides the round is complete.',
    safety,
    safetyNotes: cleanMarkdown(value('safety notes','leader notes','tips')) || `${safety} — review before leading.`,
    variations: cleanMarkdown(value('variations')),
    debriefQuestions: listFromMarkdown(value('debrief questions','discussion questions')),
    bibleBridge: cleanMarkdown(value('possible bible verse','bible bridge','scripture bridge')),
    scripture: splitList(value('scripture','bible verse','possible bible verse','references')),
    materials: splitList(materialsText).map(x => x.toLowerCase()).filter(x => !['none','no materials','no supplies','n/a'].includes(x)),
    tags: splitList(tagsText),
    purpose: normalizePurpose(tagsText),
    bestAgeMin: ages[0], bestAgeMax: ages[1], minRecommendedAge: ages[0],
    groupSizeMin: group[0], groupSizeMax: group[1],
    timeMin: duration[0], timeMax: duration[1],
    leaderDifficulty: cleanMarkdown(value('difficulty','leader difficulty')) || 'Easy',
    indoorOutdoor: normalizeSpace(value('indoor outdoor','indoor/outdoor','location','space required','space')),
    space: cleanMarkdown(value('space required','space','location')) || 'Flexible',
    energy: normalizeEnergy(value('energy level','energy')),
    rawMarkdown: source,
    sourceFilename: fileName
  };
}

function parseFrontmatter(md) {
  const match = md.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(match[1].split('\n').map(line => line.match(/^([^:]+):\s*(.*)$/)).filter(Boolean).map(m => [normalizeKey(m[1]), cleanMarkdown(m[2])]));
}
function parseInlineLabelValues(md) {
  const out = {};
  md.split('\n').forEach(line => {
    const m = line.match(/^\s*(?:[-*]\s*)?(?:\*\*)?([A-Za-z][A-Za-z0-9 /_-]{1,60})(?:\*\*)?\s*:\s*(.+)$/);
    if (m) out[normalizeKey(m[1])] = cleanMarkdown(m[2]);
  });
  return out;
}
function parseMarkdownSections(md) {
  const out = {}; let current = null;
  md.split('\n').forEach(line => {
    const h = line.match(/^#{1,6}\s+(.+)$/);
    if (h) { current = normalizeKey(h[1]); out[current] = ''; return; }
    if (current) out[current] += `${line}\n`;
  });
  Object.keys(out).forEach(k => out[k] = out[k].trim());
  return out;
}
function normalizeKey(value='') { return String(value).toLowerCase().replace(/[^a-z0-9]+/g, ''); }
function cleanMarkdown(value='') { return String(value).replace(/^[-*]\s+/gm, '').replace(/\*\*/g, '').replace(/`/g, '').trim(); }
function listFromMarkdown(value='') {
  const raw = String(value || '').trim();
  if (!raw) return [];
  const bullets = raw.split('\n').map(line => cleanMarkdown(line)).filter(Boolean);
  return bullets.length > 1 ? bullets : raw.split(/(?:\n|;|\.\s+)/).map(cleanMarkdown).filter(Boolean);
}
function splitList(value='') { return String(value || '').split(/\n|,|;/).map(cleanMarkdown).filter(Boolean); }
function parseNumberRange(value='', fallback=[0,0]) {
  const nums = String(value).match(/\d+/g)?.map(Number) || [];
  if (!nums.length) return fallback;
  if (nums.length === 1) return [nums[0], nums[0]];
  return [Math.min(nums[0], nums[1]), Math.max(nums[0], nums[1])];
}
function normalizeSafety(value='') {
  const v = String(value).toLowerCase();
  if (v.includes('not recommended')) return 'Not Recommended';
  if (v.includes('caution') || v.includes('high')) return 'Use With Caution';
  if (v.includes('moderate') || v.includes('medium')) return 'Moderate Risk';
  return 'Low Risk';
}
function normalizeEnergy(value='') {
  const v = String(value).toLowerCase();
  if (v.includes('high')) return 'High';
  if (v.includes('low') || v.includes('calm')) return 'Low';
  return 'Medium';
}
function normalizeSpace(value='') {
  const v = String(value).toLowerCase();
  if (v.includes('outdoor') && !v.includes('indoor')) return 'outdoor';
  if (v.includes('indoor') && !v.includes('outdoor')) return 'indoor';
  return 'both';
}
function normalizePurpose(value='') {
  const known = ['Fun','Icebreaker','Teamwork','Trust','Communication','Leadership','Bible Bridge','Calm Down','Competition','Camp','Classroom','Lesson Bridge'];
  const text = String(value).toLowerCase();
  const picked = known.filter(k => text.includes(k.toLowerCase()));
  return picked.length ? picked : ['Fun'];
}
function validateGamePayload(p) {
  const errors = [];
  if (!p.title || p.title.length < 2) errors.push('Missing game title');
  if (!p.shortDescription) errors.push('Missing short description');
  if (!p.howToPlay || !p.howToPlay.length) errors.push('Missing how to play instructions');
  if (!p.safetyNotes) errors.push('Missing safety notes');
  return errors;
}
function uniqueGameId(title) {
  const base = slugify(title || 'game') || 'game';
  let candidate = base; let n = 2;
  while (state.games.some(g => g.id === candidate)) candidate = `${base}-${n++}`;
  return candidate;
}
function gameFromPayload(p, opts = {}) {
  const id = uniqueGameId(p.title);
  const howToPlay = Array.isArray(p.howToPlay) ? p.howToPlay : listFromMarkdown(p.howToPlay);
  const debriefQuestions = Array.isArray(p.debriefQuestions) ? p.debriefQuestions : listFromMarkdown(p.debriefQuestions);
  const materials = Array.isArray(p.materials) ? p.materials : splitList(p.materials).map(x=>x.toLowerCase());
  const tags = [...new Set([...(Array.isArray(p.tags)?p.tags:splitList(p.tags)), ...(p.purpose || []), ...(materials.length ? materials : ['No Materials']), p.indoorOutdoor === 'outdoor' ? 'Outdoor' : p.indoorOutdoor === 'indoor' ? 'Indoor' : 'Flexible'].filter(Boolean))];
  return { ...DEFAULT_GAMES[0], id, slug: id, title: p.title, shortDescription: p.shortDescription, description: p.description || p.shortDescription, accessLevel: 'free', featured: false, tested: false, status: 'published', tags, purpose: p.purpose || normalizePurpose(tags.join(',')), materials, bestAgeMin: Number(p.bestAgeMin || p.ageMin) || 10, bestAgeMax: Number(p.bestAgeMax || p.ageMax) || 18, minRecommendedAge: Number(p.minRecommendedAge) || Number(p.bestAgeMin || p.ageMin) || 8, groupSizeMin: Number(p.groupSizeMin || p.groupMin) || 4, groupSizeMax: Number(p.groupSizeMax || p.groupMax) || 30, timeMin: Number(p.timeMin) || 10, timeMax: Number(p.timeMax) || 20, indoorOutdoor: p.indoorOutdoor || 'both', space: p.space || 'Flexible', energy: p.energy || 'Medium', prep: Number(p.prep) || 0, leaderDifficulty: p.leaderDifficulty || 'Easy', safety: p.safety || 'Low Risk', contact: p.contact || 'None', embarrassment: p.embarrassment || 'Low', noise: p.noise || 'Medium', ministry: p.ministry || 'Low', thumb: 'camp', setup: p.setup || 'No special setup listed.', howToPlay: howToPlay.length ? howToPlay : ['Explain the game clearly.', 'Play one practice round.', 'Lead the group through the activity.'], leaderScript: p.leaderScript || 'Listen carefully, play safely, and encourage your group.', winCondition: p.winCondition || 'End when the leader decides the round is complete.', safetyNotes: p.safetyNotes || 'Review safety before leading.', avoidWith: p.avoidWith || 'Groups where this game does not fit the age, room, or maturity level.', requires: p.requires || 'Normal leader supervision.', variations: p.variations || '', easier: p.easier || 'Simplify the rules or reduce the time pressure.', harder: p.harder || 'Add a time limit or extra challenge.', debriefQuestions: debriefQuestions.length ? debriefQuestions : ['What worked well?', 'What would you change next time?'], bibleBridge: p.bibleBridge || '', scripture: Array.isArray(p.scripture) ? p.scripture : splitList(p.scripture), creator: opts.creator || currentUser()?.fullName || 'HooraPlaybook User', averageRating: 0, ratingCount: 0, reviewCount: 0, views: 0, sourceFilename: opts.sourceFilename || p.sourceFilename || '' };
}

function handleSession(e) { e.preventDefault(); const fd = new FormData(e.target); const materials = String(fd.get('materials')).split(/[, ]+/).filter(Boolean); const purpose = fd.get('purpose'); const pool = scoreGames(state.games.filter(g=>g.purpose.includes(purpose) || purpose==='Fun')).map(x=>x.game); const picks = [pool[0] || state.games[0], pool[1] || state.games[1], pool[2] || state.games[2]]; const plan = { id: crypto.randomUUID(), userId: currentUser().id, title: `${fd.get('minutes')}-Minute ${fd.get('type')} Plan`, materials: [...new Set(picks.flatMap(g=>g.materials))], items: [{type:'Warm-Up', title:picks[0].title, start:'0:00', duration:10, notes:picks[0].shortDescription},{type:'Main Game', title:picks[1].title, start:'0:10', duration:25, notes:picks[1].safetyNotes},{type:'Discussion Bridge', title:'Debrief Questions', start:'0:35', duration:10, notes:picks[1].debriefQuestions.join(' ')},{type:'Backup Game', title:picks[2].title, start:'0:45', duration:10, notes:'Use this if your first activity finishes early.'},{type:'Wrap-Up', title:'Close and transition', start:'0:55', duration:5, notes:'Summarize the point and thank the group.'}] }; state.sessions.push(plan); saveState(); toast('Session plan generated.'); render(); }
function handleRedeem(e) { e.preventDefault(); const code = new FormData(e.target).get('code').toUpperCase().trim(); const c = state.coupons.find(x=>x.displayCode===code); if (!c) return toast('Coupon not found.'); if (c.disabled) return toast('Coupon is disabled.'); if (c.redeemedBy) return toast('Coupon was already redeemed.'); if (c.expiresAt && isExpired(c.expiresAt)) return toast('Coupon expired.'); c.redeemedBy = currentUser().id; c.redeemedAt = new Date().toISOString(); grantPro(currentUser().id, c.durationDays || 30, false); saveState(); toast('PRO unlocked for one month.'); render(); }
function handleCouponGeneration(e) { e.preventDefault(); const fd = new FormData(e.target); const qty = Math.min(100, Math.max(1, Number(fd.get('quantity')))); for (let i=0;i<qty;i++) state.coupons.push({ id: crypto.randomUUID(), displayCode: generateCouponCode(), benefitType: 'one_free_month_pro', durationDays: 30, campaign: fd.get('campaign'), expiresAt: fd.get('expires') ? new Date(fd.get('expires')).toISOString() : null, redeemedBy: null, disabled: false, createdBy: currentUser().id, createdAt: new Date().toISOString() }); saveState(); toast(`${qty} coupon(s) created.`); render(); }
function generateCouponCode() { let code = ''; const bytes = new Uint8Array(16); crypto.getRandomValues(bytes); for (const b of bytes) code += COUPON_ALPHABET[b % COUPON_ALPHABET.length]; return code; }
function grantPro(userId, days=30, rerender=true) { const u = state.users.find(x=>x.id===userId); if (!u) return; u.plan='pro'; u.accessStatus='active'; const current = u.accessExpiresAt && new Date(u.accessExpiresAt) > new Date() ? new Date(u.accessExpiresAt) : new Date(); current.setDate(current.getDate()+days); u.accessExpiresAt = current.toISOString(); saveState(); if (rerender) { toast('PRO access granted.'); render(); } }
function handleAdminCreateUser(e) { e.preventDefault(); const fd = new FormData(e.target); const user = { id: crypto.randomUUID(), email: fd.get('email'), password: fd.get('password'), fullName: fd.get('fullName') || fd.get('email'), role: fd.get('role'), plan: fd.get('plan'), accessStatus: 'active', accessExpiresAt: fd.get('plan')==='pro' ? addDaysISO(365) : null, disabled: false }; state.users.push(user); saveState(); toast('User created.'); render(); }
function handleUserField(e) { const u = state.users.find(x=>x.id===e.target.dataset.userId); const field = e.target.dataset.userField; if (field === 'disabled') u.disabled = e.target.checked; else if (field === 'accessExpiresAt') u.accessExpiresAt = e.target.value ? new Date(e.target.value).toISOString() : null; else u[field] = e.target.value; saveState(); toast('User updated.'); }
function approveSubmission(id) { const s = state.submissions.find(x=>x.id===id); if (!s) return; const game = gameFromPayload(s.payload, { creator: currentUser().fullName, sourceFilename: s.sourceFilename }); state.games.push(game); s.status='published'; s.publishedGameId=game.id; if (s.importBatchId) { const batch = (state.importBatches||[]).find(b=>b.id===s.importBatchId); if (batch) batch.lastPublishedAt = new Date().toISOString(); } saveState(); toast('Submission published.'); render(); }
function rejectSubmission(id) { const s = state.submissions.find(x=>x.id===id); s.status='rejected'; saveState(); render(); }
function toggleGameAccess(id) { const g = state.games.find(x=>x.id===id); g.accessLevel = g.accessLevel==='free'?'pro':'free'; saveState(); render(); }
function deleteGame(id) { if (!confirm('Delete this game from the local demo?')) return; state.games = state.games.filter(g=>g.id!==id); saveState(); render(); }
function handleUpgrade(plan) { const user = currentUser(); if (user && plan !== 'Team') { grantPro(user.id, 365); toast('Demo upgrade: PRO access granted. In production this redirects to Stripe Checkout.'); } else go('/signup'); }
function shareGame(id) { const g = state.games.find(x=>x.id===id); if (navigator.share) navigator.share({title:g.title,text:g.shortDescription,url:location.href}); else navigator.clipboard?.writeText(location.href).then(()=>toast('Link copied.')); }
function randomIcebreaker() { const prompts = ['Would you rather lead a game with no materials or too many materials?', 'What is one game you loved as a kid?', 'Trivia: Which animal gives birth to the biggest babies? The blue whale.', 'Dad joke: Did you hear about the watermelon wedding? They cantaloupe.', 'Quick challenge: In 20 seconds, name five things you can use as game supplies.']; byId('icebreaker-prompt').textContent = prompts[Math.floor(Math.random()*prompts.length)]; }
function toast(message) { clearTimeout(toastTimer); let el = document.querySelector('.toast'); if (!el) { el = document.createElement('div'); el.className='toast'; document.body.appendChild(el); } el.textContent = message; toastTimer = setTimeout(()=>el.remove(), 3000); }
