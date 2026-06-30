const APP_NAME = 'HooraPlaybook';
const APP_VERSION = '0.3.0';
const APP_LOGO = '<span class="brand-hoora">Hoora</span><span class="brand-playbook">Playbook</span>';
const STANDARD_CATEGORIES = ['Quick and simple','Wet-n-Wild','Team-building','Teams','Circle','Icebreakers','Adventure','Tag','Sport-n-fitness','Theatrical','Relays'];
const AVAILABLE_MATERIALS = ['No Materials','Cups','Paper','Balls','Chairs','Rope','Balloons','Cones','Tape'];
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
  { title: 'Categories', key: 'categories', options: STANDARD_CATEGORIES },
  { title: 'Group', key: 'group', options: ['Children', 'Preteens', 'Teens', 'Youth', 'Adults', 'Mixed Ages'] },
  { title: 'Space', key: 'space', options: ['Small Room', 'Large Room', 'Gym', 'Outdoor Field', 'Stage', 'Flexible', 'Indoor', 'Outdoor'] },
  { title: 'Materials', key: 'materials', options: AVAILABLE_MATERIALS },
  { title: 'Safety', key: 'safety', options: ['Low Risk', 'Moderate Risk', 'No Contact', 'Low Embarrassment', 'Shy-Friendly', 'Good for Newcomers'] },
  { title: 'Energy', key: 'energy', options: ['Low', 'Medium', 'High'] },
  { title: 'Time', key: 'time', options: ['Under 5 min', '5–10 min', '10–20 min', '20–40 min', '40+ min'] }
];

const SORT_OPTIONS = ['Best Match', 'Most Viewed', 'Most Reviewed', 'Highest Rated', 'Newest First', 'Alphabetical', 'Shortest First', 'Lowest Prep'];

let state = loadState();
ensureStateShape();
let route = parseRoute();
let toastTimer;
let navStack = [];
let searchTimer;

window.addEventListener('hashchange', () => { route = parseRoute(); render(); });
window.addEventListener('online', render);
window.addEventListener('offline', render);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(console.warn));
}

render();

/* HOORAPLAYBOOK_SAFE_ID_FALLBACK_V1
   Use this instead of direct crypto.randomUUID().
   Reason: mobile local testing through http://<Mac-IP> is not always a secure context,
   so crypto.randomUUID() may be unavailable even though Cloudflare HTTPS works.
*/
function makeId(prefix = 'id') {
  try {
    if (globalThis.crypto && typeof globalThis.crypto.randomUUID === 'function') {
      return globalThis.crypto.randomUUID();
    }
  } catch (_) {}

  const time = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 10);
  return `${prefix}-${time}-${random}`;
}

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
    finder: { groupSize: 14, ageMin: 12, ageMax: 18, time: 20, space: 'indoor', materials: 'cups, paper', category: 'Team-building', safety: 'Low Risk', avoid: 'not embarrassing' },
    planMaterials: ['No Materials']
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


function ensureStateShape() {
  state.sessions = Array.isArray(state.sessions) ? state.sessions : [];
  state.planMaterials = Array.isArray(state.planMaterials) ? state.planMaterials : ['No Materials'];
  state.finder = state.finder || { groupSize: 14, ageMin: 12, ageMax: 18, time: 20, space: 'indoor', materials: 'No Materials', category: 'Team-building', safety: 'Low Risk', avoid: 'not embarrassing' };
  if (!state.finder.category) state.finder.category = normalizeCategory(state.finder.purpose || 'Team-building');
  if (!state.finder.materials) state.finder.materials = 'No Materials';
  state.sessions.forEach(plan => {
    plan.userId = plan.userId || currentUser()?.id || 'u-pro';
    plan.items = (plan.items || []).map(item => normalizePlanItem(item));
    plan.materials = [...new Set((plan.items || []).flatMap(item => {
      const g = gameByPlanItem(item);
      return g ? g.materials : [];
    }))];
  });
  saveState(state);
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
function go(path) {
  if (!path || path === route.raw) { render(); return; }
  navStack.push(route.raw);
  window.location.hash = path;
}
function goBack() {
  const target = navStack.pop();
  if (target && target !== route.raw) { window.location.hash = target; return; }
  if (history.length > 1) history.back(); else go('/app/find');
}
function headerBackButton() { return `<button class="icon-btn back-btn" data-back aria-label="Back"><img class="back-icon" src="/assets/back_button.png" alt=""></button>`; }
function headerBrand() { return `<div class="logo header-brand"><img class="brand-mark" src="/assets/hooraplaybook-logo.png" alt=""><span class="brand-text">${APP_LOGO}</span></div>`; }
function headerActions() { return `<div class="header-actions"><button class="icon-btn icon-image-btn" data-go="/filter" title="Filter" aria-label="Open filters">${typeof hpIcon === 'function' ? hpIcon('filter') : '<img src="/assets/filter.png" alt="">'}</button><button class="icon-btn icon-image-btn" data-open-sort title="Sort" aria-label="Sort games">${typeof hpIcon === 'function' ? hpIcon('sort') : '<img src="/assets/sort.png" alt="">'}</button></div>`; }

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
        <p style="font-size:20px;line-height:1.45;color:#d8dde2;max-width:620px">Tell HooraPlaybook your group size, age, time, space, categories, and materials. Get safe, ready-to-lead games that fit the moment.</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:26px"><button class="btn btn-primary" data-go="/signup">Create account</button><button class="btn btn-secondary" data-go="/pricing">View pricing</button></div>
      </div>
      <div class="hero-card" style="color:var(--gp-text);padding:24px">
        <div class="magic-row"><span class="magic-chip">14 teens</span><span class="magic-chip">20 min</span><span class="magic-chip">Indoor</span><span class="magic-chip">Cups + paper</span><span class="magic-chip">Teamwork</span></div>
        <h1>3 games that are not lame</h1>
        ${DEFAULT_GAMES.slice(0,3).map(g => miniResult(g)).join('')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:34px">
      ${['Group Leaders','Team Builders','Ministry Leaders'].map((t,i)=>`<div class="card" style="padding:20px;color:var(--gp-text)"><h3 style="margin:0 0 8px">${t}</h3><p style="margin:0;color:var(--gp-muted)">${['Games that fit your people, place, time, and supplies.','Intentional activities for trust, communication, and leadership.','Games with optional Scripture bridges and discussion prompts.'][i]}</p></div>`).join('')}
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
  return `<div style="margin:24px auto;max-width:900px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px"><div class="logo">${APP_LOGO}</div><button class="btn btn-secondary" data-go="/app/find">Open app</button></div><h1 style="font-size:48px;line-height:1;margin:0 0 12px">Choose your plan</h1><p style="font-size:19px;color:#d8dde2">Launch-ready PWA flow: Stripe Payment Link now, authenticated Checkout + webhook in production.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-top:26px">${pricingCard('Free','$0','50 free games, basic search, 3 favorites',['Basic search','Rate games','Submit games'],false)}${pricingCard('PRO','$50/year','Full library, advanced filters, unlimited favorites, session builder',['Advanced filters','Session builder','planning tools','All future games'],true)}${pricingCard('Team','$149/year','Up to 5 seats, shared collections, private library',['Shared collections','Private tags','Admin controls'],false)}</div></div>`;
}
function pricingCard(name, price, sub, items, featured) { return `<div class="card" style="padding:22px;color:var(--gp-text);border:${featured?'2px solid var(--gp-lime)':'0'}"><div class="pro-badge">${name}</div><h2 style="font-size:36px;margin:14px 0 4px">${price}</h2><p style="color:var(--gp-muted)">${sub}</p><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul><button class="btn ${featured?'btn-primary':'btn-secondary'} full" data-upgrade="${name}">${featured?'Upgrade to PRO':'Get started'}</button></div>`; }
function renderBillingSuccess() { return `<div class="card" style="padding:28px;color:var(--gp-text);max-width:560px;margin:auto"><h1>Thank you!</h1><p>Your payment was received. In production, HooraPlaybook polls Supabase subscription status and unlocks after the Stripe webhook updates access.</p><button class="btn btn-primary" data-go="/app/find">Open HooraPlaybook</button></div>`; }

function renderPrivateRoute() {
  const main = route.parts[0];
  if (main === 'admin') return renderAdminRoute();
  if (main === 'staff') return renderStaffRoute();
  if (main === 'filter') return renderFilterScreen();
  if (isStandaloneGameRoute() || route.raw === '/app/materials') return renderAppRoute() + renderAddToPlanModalIfNeeded();
  return renderAppShell(renderAppRoute()) + renderAddToPlanModalIfNeeded();
}

function isStandaloneGameRoute() {
  return route.parts[0] === 'app' && route.parts[1] === 'games' && !!route.parts[2];
}

function renderAppShell(inner, opts = {}) {
  const title = opts.title || '';
  const shellClass = route.raw === '/app/find' || route.raw === '/app' ? 'app-frame find-shell' : 'app-frame';
  return `<div class="${shellClass}">${!navigator.onLine ? '<div class="offline-banner">Offline mode: payments, uploads, and submissions are disabled.</div>' : ''}<header class="topbar light-header">${headerBackButton()}${title ? `<div class="topbar-title">${title}</div>` : headerBrand()}${headerActions()}</header>${inner}${renderBottomNav()}</div>`;
}

function renderBottomNav() {
  const active = route.raw;
  const findActive = active.startsWith('/app/find') || active.startsWith('/app/games');
  const items = [
    ['/app/find', gameDetailIcon('search'), 'Find', findActive],
    ['/app/favorites', gameDetailIcon('heart'), 'Favorites', active.startsWith('/app/favorites')],
    ['/app/tools', gameDetailIcon('smile'), 'Icebreakers', active.startsWith('/app/tools')],
    ['/app/account', gameDetailIcon('account'), 'Account', active.startsWith('/app/account')]
  ];
  return `<nav class="bottom-nav bottom-nav-4 hp-universal-footer" aria-label="Primary navigation">${items.map(([path,icon,label,isActive])=>`<button class="nav-item ${isActive?'active':''}" data-go="${path}"><span class="nav-icon">${icon}</span><span>${label}</span></button>`).join('')}</nav>`;
}

function renderAppRoute() {
  const p = route.parts;
  if (p[0] !== 'app') return `<main class="content"><button class="btn btn-primary" data-go="/app/find">Open HooraPlaybook</button></main>`;
  if (p[1] === 'materials') return renderMaterialsSelector();
  if (p[1] === 'games' && p[2] && p[3] === 'rate') return renderRateScreen(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'leave-review') return renderLeaveReviewPage(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'reviews') return renderReviewsScreen(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'notes') return renderNotesScreen(p[2]);
  if (p[1] === 'games' && p[2] && p[3] === 'suggest-bible') return renderSuggestBibleConnection(p[2]);
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
  return `<main class="content find-page"><section class="find-title-block"><h1>Find Games</h1></section><section class="find-search-wrap"><label class="sr-only" for="search-input">Search games</label><div class="find-search-field"><span class="find-search-icon">${hpIcon('search')}</span><input id="search-input" type="search" value="${escapeHTML(state.search)}" placeholder="Search games, categories, or themes" autocomplete="off"></div></section>${renderFindActiveChips()}<section class="find-games-list" aria-label="Games">${games.map(renderFindGameCard).join('') || renderFindNoResults()}</section></main>${renderSortModalIfNeeded()}`;
}

function renderMagicFinder() {
  const f = state.finder;
  const materialsText = selectedMaterialsText();
  const category = normalizeCategory(f.category || f.purpose || 'Team-building');
  return `<section class="hero-card"><h1>Tell us what you have.</h1><p>Smart Finder recommends games by age, group size, time, space, categories, materials, and safety.</p><form id="finder-form" class="form-grid"><div class="two-col"><label><span class="label">Group size</span><input class="input" name="groupSize" type="number" value="${f.groupSize}"></label><label><span class="label">Minutes</span><input class="input" name="time" type="number" value="${f.time}"></label></div><div class="two-col"><label><span class="label">Ages from</span><input class="input" name="ageMin" type="number" value="${f.ageMin}"></label><label><span class="label">Ages to</span><input class="input" name="ageMax" type="number" value="${f.ageMax}"></label></div><label><span class="label">Available Materials</span><button type="button" class="selector-row" data-go="/app/materials"><span>${escapeHTML(materialsText)}</span><strong>›</strong></button><input type="hidden" name="materials" value="${escapeHTML(materialsText)}"></label><div class="two-col"><label><span class="label">Space</span><select class="input" name="space"><option ${f.space==='indoor'?'selected':''}>indoor</option><option ${f.space==='outdoor'?'selected':''}>outdoor</option><option ${f.space==='both'?'selected':''}>both</option></select></label><label><span class="label">Category</span><select class="input" name="category">${STANDARD_CATEGORIES.map(x=>`<option ${category===x?'selected':''}>${x}</option>`).join('')}</select></label></div><button class="btn btn-primary full">Find 3 Great Games</button></form></section>`;
}

// HOORAPLAYBOOK_FIND_GAMES_REDESIGN_V1_START
function renderFindActiveChips() {
  const chips = [];
  const f = state.finder || {};

  if (Number.isFinite(Number(f.ageMin)) && Number.isFinite(Number(f.ageMax)) && Number(f.ageMin) > 0 && Number(f.ageMax) < 99) {
    chips.push({ key: 'age', icon: hpIcon('users'), label: `Ages ${f.ageMin}–${f.ageMax}` });
  }

  if (Number.isFinite(Number(f.groupSize)) && Number(f.groupSize) > 0) {
    chips.push({ key: 'group', icon: hpIcon('users'), label: `${f.groupSize} players` });
  }

  if (Number.isFinite(Number(f.time)) && Number(f.time) > 0) {
    chips.push({ key: 'time', icon: hpIcon('clock'), label: `${f.time} min` });
  }

  if (f.space && f.space !== 'both') {
    chips.push({ key: 'space', icon: hpIcon('home'), label: String(f.space).charAt(0).toUpperCase() + String(f.space).slice(1) });
  }

  (state.filters || []).forEach(filter => {
    chips.push({ key: `filter:${filter}`, icon: hpIcon('tag'), label: filter });
  });

  if (!chips.length) return '';

  return `<section class="active-filters" aria-label="Active filters">${chips.map(chip => `<button class="filter-chip" data-remove-find-chip="${escapeHTML(chip.key)}" aria-label="Remove ${escapeHTML(chip.label)} filter"><span class="chip-icon">${chip.icon}</span><span>${escapeHTML(chip.label)}</span><span class="chip-x" aria-hidden="true">×</span></button>`).join('')}</section>`;
}

function removeFindChip(kind) {
  state.finder = state.finder || {};
  if (kind === 'age') {
    state.finder.ageMin = 0;
    state.finder.ageMax = 99;
  } else if (kind === 'group') {
    state.finder.groupSize = 0;
  } else if (kind === 'time') {
    state.finder.time = 0;
  } else if (kind === 'space') {
    state.finder.space = 'both';
  } else if (String(kind).startsWith('filter:')) {
    const filter = String(kind).slice('filter:'.length);
    state.filters = (state.filters || []).filter(item => item !== filter);
  }
  saveState();
  render();
}

function renderFindGameCard(game) {
  const user = currentUser();
  const locked = game.accessLevel === 'pro' && !hasProAccess(user);
  const fav = isFavorite(game.id);
  const inPlan = isGameInAnyPlan(game.id);

  return `<article class="hp-find-game-card" data-game-card="${game.id}"><div class="hp-card-media-row"><div class="hp-game-image-wrap">${renderFindGameVisual(game)}</div><div class="hp-card-actions"><button class="hp-favorite-button ${fav?'active':''}" data-toggle-favorite="${game.id}" aria-label="${fav ? 'Remove' : 'Add'} ${escapeHTML(game.title)} ${fav ? 'from' : 'to'} favorites">${fav ? hpIcon('heartFilled') : hpIcon('heart')}</button><button class="hp-plan-button ${inPlan?'added':''}" data-add-to-plan="${game.id}" aria-label="Add ${escapeHTML(game.title)} to Plan"><span>+</span> Plan</button></div></div><div class="hp-card-body"><h2 class="hp-game-title">${escapeHTML(game.title)}</h2><div class="hp-meta-grid">${renderFindGameMeta(game)}</div></div>${locked?`<div class="hp-lock-note"><strong>PRO</strong> Upgrade to unlock full instructions.</div>`:''}</article>`;
}

function renderFindGameVisual(game) {
  return `<div class="hp-game-image hp-thumb-${escapeHTML(game.thumb || 'camp')}"><span>${escapeHTML(game.title)}</span></div>`;
}

function renderFindGameMeta(game) {
  const items = [
    [hpIcon('users'), `${game.groupSizeMin}–${game.groupSizeMax} players`],
    [hpIcon('user'), `Ages ${game.bestAgeMin}–${game.bestAgeMax}`],
    [hpIcon('clock'), game.timeMin === game.timeMax ? `${game.timeMin} min` : `${game.timeMin}–${game.timeMax} min`],
    [hpIcon('book'), hpPrimaryCategory(game)],
    [hpIcon('box'), hpMaterialLabel(game)]
  ];

  return items.map(([icon, label]) => `<span class="hp-meta-item">${icon}<span>${escapeHTML(label)}</span></span>`).join('');
}

function hpPrimaryCategory(game) {
  const candidates = [...(game.purpose || []), ...(game.tags || [])].filter(Boolean);
  const preferred = candidates.find(item => !/pro|indoor|outdoor|low prep|no prep|cups|paper|balls|chairs|rope|balloons|cones|tape/i.test(item));
  return preferred || candidates[0] || 'Game';
}

function hpMaterialLabel(game) {
  const materials = game.materials || [];
  if (!materials.length) return 'No Materials';
  return materials.map(item => String(item).replace(/\b\w/g, ch => ch.toUpperCase())).join(' & ');
}

function renderFindNoResults() {
  return `<div class="hp-empty-card"><h2>No perfect matches yet.</h2><p>Try removing one filter, allowing substitute materials, or choosing a wider time range.</p><div class="hp-empty-actions"><button class="btn btn-primary" data-clear-filters>Clear Filters</button><button class="btn btn-secondary" data-go="/filter">Adjust Filters</button></div></div>`;
}

function hpIcon(name) {
  const common = 'width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';
  const icons = {
    search: `<svg ${common}><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.2-3.2"></path></svg>`,
    heart: `<svg ${common}><path d="M20.8 4.6a5.2 5.2 0 0 0-7.4 0L12 6l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 20.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"></path></svg>`,
    heartFilled: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.8 4.6a5.2 5.2 0 0 0-7.4 0L12 6l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 20.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"></path></svg>`,
    users: `<svg ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    user: `<svg ${common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    clock: `<svg ${common}><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
    book: `<svg ${common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>`,
    box: `<svg ${common}><path d="M21 8 12 3 3 8l9 5 9-5Z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path></svg>`,
    filter: `<svg ${common}><path d="M4 6h10"></path><path d="M18 6h2"></path><circle cx="16" cy="6" r="2"></circle><path d="M4 12h3"></path><path d="M11 12h9"></path><circle cx="9" cy="12" r="2"></circle><path d="M4 18h12"></path><path d="M20 18h0"></path><circle cx="18" cy="18" r="2"></circle></svg>`,
    sort: `<svg ${common}><path d="M8 4v16"></path><path d="m4 8 4-4 4 4"></path><path d="M16 20V4"></path><path d="m12 16 4 4 4-4"></path></svg>`,
    smile: `<svg ${common}><circle cx="12" cy="12" r="9"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>`,
    account: `<svg ${common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    home: `<svg ${common}><path d="m3 10 9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>`,
    tag: `<svg ${common}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r=".5"></circle></svg>`
  };
  return icons[name] || '';
}
// HOORAPLAYBOOK_FIND_GAMES_REDESIGN_V1_END

function renderGameCard(game) {
  const user = currentUser();
  const locked = game.accessLevel === 'pro' && !hasProAccess(user);
  const fav = isFavorite(game.id);
  const inPlan = isGameInAnyPlan(game.id);
  return `<article class="game-card" data-game-card="${game.id}"><div class="game-card-top"><div class="thumb ${game.thumb}"><span>${game.title}</span></div><div><div style="display:flex;justify-content:space-between;gap:8px;align-items:start"><h3 class="game-title">${game.title}</h3>${game.accessLevel==='pro'?'<span class="pro-badge">PRO</span>':''}</div><div class="game-desc">${game.shortDescription}</div></div></div><div class="tag-list">${fitTags(game).map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="card-divider"></div><div class="rating-row"><div>${stars(game.averageRating)} <span>${game.averageRating.toFixed(1)} (${game.ratingCount} Ratings)</span></div><div class="inline-actions"><button class="icon-btn heart ${fav?'active':''}" data-toggle-favorite="${game.id}" aria-label="Favorite">♥</button><button class="plan-pill ${inPlan?'added':''}" data-add-to-plan="${game.id}" aria-label="Add ${escapeHTML(game.title)} to plan"><span>+</span> Plan</button></div></div>${locked?`<div class="lock-card" style="margin-top:12px"><strong>PRO preview</strong><div class="help">Upgrade to unlock full instructions and planning tools.</div></div>`:''}</article>`;
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
  const materials = String(f.materials || selectedMaterialsText()).toLowerCase().split(/[, ]+/).filter(Boolean);
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
    if (normalizeCategory(game.tags.join(' ')) === normalizeCategory(f.category || '')) { score += 10; reasons.push('category match'); }
    if (game.safety === 'Low Risk' || f.safety !== 'Low Risk') score += 10;
    score += Math.min(5, Math.round(game.averageRating));
    if (f.avoid.toLowerCase().includes('not embarrassing') && game.embarrassment === 'Low') score += 5;
    return { game, score: Math.max(0, Math.min(100, score)), reason: reasons.slice(0,4).join(', ') || 'closest available match' };
  }).sort((a,b)=>b.score-a.score);
}

function renderFilterScreen() {
  return `<div class="app-frame fullscreen-page"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">FILTER BY</div><div></div></header><main class="filter-body">${FILTER_SECTIONS.map(sec=>`<section class="filter-group"><h2>${sec.title}</h2><div class="filter-chip-grid">${sec.options.map(o=>`<button class="filter-chip ${state.filters.includes(o)?'active':''}" data-filter-chip="${o}">${o}</button>`).join('')}</div></section>`).join('')}</main><div class="filter-bottom"><button class="btn btn-primary" data-clear-filters>Clear</button><button class="btn btn-secondary" data-back>Apply</button></div></div>`;
}

function renderMaterialsSelector() {
  const selected = selectedMaterials();
  return `<div class="app-frame fullscreen-page"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">AVAILABLE MATERIALS</div><div></div></header><main class="filter-body"><section class="filter-group"><h2>CHOOSE WHAT YOU HAVE</h2><div class="filter-chip-grid material-cloud">${AVAILABLE_MATERIALS.map(m=>`<button class="filter-chip ${selected.includes(m)?'active':''}" data-material-chip="${m}">${m}</button>`).join('')}</div></section></main><div class="filter-bottom one-button"><button class="btn btn-secondary full" data-back>Done</button></div></div>`;
}

function renderSortModalIfNeeded() { return window.__sortOpen ? `<div class="modal-backdrop" data-close-sort><div class="bottom-sheet" onclick="event.stopPropagation()"><h2>Sort by</h2>${SORT_OPTIONS.map(o=>`<label class="radio-row ${state.sort===o?'active':''}" data-set-sort="${o}"><span class="radio-circle"></span><span>${o}</span></label>`).join('')}<button class="btn btn-primary full" data-close-sort>Apply</button><button class="btn btn-secondary full" style="margin-top:12px" data-close-sort>Cancel</button></div></div>` : ''; }

function renderGameDetail(id) {
  const game = state.games.find(g => g.id === id);
  if (!game) return renderAppShell(`<main class="content"><h1>Game not found</h1></main>`);
  game.views += 1;
  saveState();

  const locked = !canViewGame(game);
  const vote = currentGameVote(game.id);
  const favorite = isFavorite(game.id);
  const materials = gameDetailMaterials(game);
  const primaryCategory = gameDetailCategory(game);

  return `<div class="app-frame hp-game-detail-frame"><main class="hp-game-page" aria-label="${escapeHTML(game.title)} detail page"><header class="hp-game-header"><button class="icon-btn hp-game-header-btn" data-back aria-label="Back"><img class="back-icon" src="/assets/back_button.png" alt=""></button>${headerBrand()}<button class="icon-btn hp-game-header-btn" data-share-game="${game.id}" aria-label="Share ${escapeHTML(game.title)}"><img src="/assets/ios-share.svg" alt=""></button></header><section class="hp-game-title-section"><h1>${escapeHTML(game.title)}</h1><section class="hp-rating-section" aria-label="Game rating"><div class="hp-rating-row"><div class="hp-detail-stars" aria-label="${game.averageRating || 0} out of 5 stars">${gameDetailStars(game.averageRating || 0)}</div><span class="hp-rating-text">${gameDetailRatingText(game)}</span><button class="hp-detail-favorite ${favorite ? 'is-active' : ''}" data-toggle-favorite="${game.id}" aria-label="${favorite ? 'Remove from' : 'Add to'} favorites">${favorite ? gameDetailIcon('heartFilled') : gameDetailIcon('heart')}</button></div><button class="hp-reviews-link" data-go="/app/games/${game.id}/reviews">View reviews</button></section></section><section class="hp-game-image-wrap">${gameDetailImage(game)}</section><button class="hp-add-to-plan-button" data-add-to-plan="${game.id}" aria-label="Add ${escapeHTML(game.title)} to Plan"><span class="hp-button-plus">+</span><span>Add to Plan</span></button><section class="hp-game-actions-row"><div class="hp-vote-control" role="group" aria-label="Vote on this game"><button class="hp-vote-button ${vote === 'up' ? 'is-up-selected' : ''}" data-game-vote="${game.id}:up" aria-label="Thumbs up ${escapeHTML(game.title)}">${gameDetailIcon('thumbUp')}</button><span class="hp-vote-divider" aria-hidden="true"></span><button class="hp-vote-button ${vote === 'down' ? 'is-down-selected' : ''}" data-game-vote="${game.id}:down" aria-label="Thumbs down ${escapeHTML(game.title)}">${gameDetailIcon('thumbDown')}</button></div><button class="hp-notes-button" data-go="/app/games/${game.id}/notes">${gameDetailIcon('edit')}<span>Add Notes</span></button></section><section class="hp-game-meta-grid" aria-label="Game facts"><article class="hp-meta-card hp-meta-card--ages">${gameDetailIcon('user')}<div class="hp-meta-label">Ages</div><div class="hp-meta-value">${game.bestAgeMin}–${game.bestAgeMax}</div></article><article class="hp-meta-card hp-meta-card--players">${gameDetailIcon('users')}<div class="hp-meta-label">Players</div><div class="hp-meta-value">${game.groupSizeMin}–${game.groupSizeMax}</div></article><article class="hp-meta-card hp-meta-card--time">${gameDetailIcon('clock')}<div class="hp-meta-label">Time</div><div class="hp-meta-value">${gameDetailTime(game)}</div></article><article class="hp-meta-card hp-meta-card--materials">${gameDetailIcon('box')}<div class="hp-meta-label">Materials</div><div class="hp-meta-value">${escapeHTML(materials)}</div></article></section><section class="hp-category-card" aria-label="Game category"><div class="hp-category-icon">${gameDetailIcon('book')}</div><div class="hp-category-content"><div class="hp-category-label">Category</div><div class="hp-category-value"><span>${escapeHTML(primaryCategory)}</span></div></div></section>${locked ? renderLockedGameDetailCard(game) : renderUnlockedGameDetailCards(game)}</main>${renderBottomNav()}${renderAddToPlanModalIfNeeded()}</div>`;
}

function quickFacts(g) { return [['Ages', `${g.bestAgeMin}–${g.bestAgeMax}`], ['Players', `${g.groupSizeMin}–${g.groupSizeMax}`], ['Time', `${g.timeMin}–${g.timeMax} min`], ['Space', g.space], ['Energy', g.energy], ['Materials', g.materials.length?g.materials.join(', '):'None'], ['Safety', g.safety], ['Prep', `${g.prep} min`]]; }
function renderLockedGame(game) { return `<section class="content-section lock-card"><h2>Unlock this PRO game</h2><p>Free users can preview the title, summary, quick facts, rating, and tags. Upgrade to PRO for full instructions and planning tools.</p><button class="btn btn-primary full" data-go="/pricing">Upgrade to PRO</button></section>`; }
function renderFullGameDetails(game) { return `${section('What to Get:', game.materials.length ? [`Gather: ${game.materials.join(', ')}`] : ['No materials needed.'])}${section('What to Prep:', [game.setup])}${section('How to Play:', game.howToPlay)}${section('Leader Script:', [game.leaderScript])}${section('Safety Notes:', [game.safetyNotes, `Avoid with: ${game.avoidWith}`, `Requires: ${game.requires}`])}${section('Variations:', [game.variations])}${section('Make It Easier:', [game.easier])}${section('Make It Harder:', [game.harder])}${section('Debrief Questions:', game.debriefQuestions)}${section('Bible Bridge:', [game.bibleBridge, `References: ${game.scripture.join(', ')}`])}`; }
function section(title, items) { return `<section class="content-section"><h2>${title}</h2><ul>${items.filter(Boolean).map(i=>`<li>${escapeHTML(i)}</li>`).join('')}</ul></section>`; }

// HOORAPLAYBOOK_GAME_PAGE_REDESIGN_V1_START
function renderUnlockedGameDetailCards(game) {
  return `${renderHowToPlayCard(game)}${renderVariationsCard(game)}${renderBibleConnectionsCard(game)}${renderTipsCard(game)}`;
}

function renderLockedGameDetailCard(game) {
  return `<section class="hp-detail-section-card"><div class="hp-detail-section-icon">${gameDetailIcon('lock')}</div><div class="hp-detail-section-content"><h2>Unlock this PRO game</h2><p>Upgrade to PRO to see full instructions, variations, Bible connections, and leader tips.</p><button class="btn btn-primary full" data-go="/pricing">Upgrade to PRO</button></div></section>`;
}

function renderHowToPlayCard(game) {
  const rules = Array.isArray(game.howToPlay) && game.howToPlay.length ? game.howToPlay : ['Explain the game clearly.', 'Play one practice round.', 'Lead the group through the activity.'];
  return `<section class="hp-detail-section-card hp-how-to-play-section"><div class="hp-detail-section-icon">${gameDetailIcon('lightbulb')}</div><div class="hp-detail-section-content"><h2>How to Play</h2><h3>Game Setup</h3><p>${escapeHTML(game.setup || 'Prepare the play area and explain the boundaries before the game begins.')}</p><h3>Rules</h3><ol>${rules.map(rule => `<li>${escapeHTML(rule)}</li>`).join('')}</ol></div></section>`;
}

function renderVariationsCard(game) {
  const different = game.variations || 'Try a relay version, silent challenge, team tournament, or shorter round.';
  return `<section class="hp-detail-section-card hp-variations-section"><div class="hp-detail-section-icon hp-detail-section-icon--purple">${gameDetailIcon('sparkles')}</div><div class="hp-detail-section-content"><h2>Variations</h2><h3>Easier</h3><p>${escapeHTML(game.easier || 'Simplify the rules, reduce the time pressure, or use fewer pieces.')}</p><h3>Harder</h3><p>${escapeHTML(game.harder || 'Add a timer, extra challenge, or communication limit.')}</p><h3>Different</h3><p>${escapeHTML(different)}</p></div></section>`;
}

function renderBibleConnectionsCard(game) {
  const references = Array.isArray(game.scripture) && game.scripture.length ? game.scripture : [];
  const bridge = game.bibleBridge || 'Use this game as a starting point for a short discussion about teamwork, wisdom, perseverance, or listening to God’s Word.';
  const items = references.length ? references.map(ref => `<article class="hp-bible-connection"><h3>${escapeHTML(ref)}</h3><p>${escapeHTML(bridge)}</p></article>`).join('') : `<article class="hp-bible-connection"><h3>Suggested connection</h3><p>${escapeHTML(bridge)}</p></article>`;
  return `<section class="hp-detail-section-card hp-bible-section"><div class="hp-detail-section-icon hp-detail-section-icon--blue">${gameDetailIcon('book')}</div><div class="hp-detail-section-content"><h2>Possible Bible Verse Connections</h2>${items}<button class="hp-suggest-bible-button" data-go="/app/games/${game.id}/suggest-bible">Suggest a Bible connection</button></div></section>`;
}

function renderTipsCard(game) {
  const tips = [
    game.safetyNotes,
    game.requires ? `Requires: ${game.requires}` : '',
    game.avoidWith ? `Avoid with: ${game.avoidWith}` : '',
    game.leaderScript ? `Leader cue: ${game.leaderScript}` : ''
  ].filter(Boolean);
  const safeTips = tips.length ? tips : ['Prepare materials before the session starts.', 'Demonstrate one full round before beginning.', 'Use clear boundaries and stop play if the group becomes unsafe.'];
  return `<section class="hp-detail-section-card hp-tips-section"><div class="hp-detail-section-icon hp-detail-section-icon--orange">${gameDetailIcon('checklist')}</div><div class="hp-detail-section-content"><h2>Tips</h2><ul>${safeTips.map(tip => `<li>${escapeHTML(tip)}</li>`).join('')}</ul></div></section>`;
}

function renderSuggestBibleConnection(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return renderAppShell(`<main class="content"><h1>Game not found</h1></main>`);
  return `<div class="app-frame game-page-frame hp-suggest-bible-frame"><header class="topbar light-header">${headerBackButton()}${headerBrand()}<div></div></header><main class="content no-bottom-nav"><section class="hero-card"><h1>Suggest a Bible connection</h1><p>${escapeHTML(game.title)}</p></section><form id="bible-suggestion-form" data-game-id="${game.id}" class="form-grid"><label><span class="label">Bible reference</span><input class="input" name="reference" placeholder="Psalm 119:105" required></label><label><span class="label">Connection theme</span><input class="input" name="theme" placeholder="God’s Word Guides Us" required></label><label><span class="label">Explanation</span><textarea name="description" placeholder="How does this game connect to the passage?" required></textarea></label><button class="btn btn-primary full">Submit Bible Connection</button></form></main></div>`;
}

function handleBibleSuggestion(e) {
  e.preventDefault();
  const gameId = e.target.dataset.gameId;
  const fd = new FormData(e.target);
  state.bibleSuggestions = Array.isArray(state.bibleSuggestions) ? state.bibleSuggestions : [];
  state.bibleSuggestions.push({
    id: makeId('id'),
    gameId,
    userId: currentUser()?.id || '',
    reference: String(fd.get('reference') || '').trim(),
    theme: String(fd.get('theme') || '').trim(),
    description: String(fd.get('description') || '').trim(),
    status: 'submitted',
    createdAt: new Date().toISOString()
  });
  saveState();
  toast('Bible connection submitted.');
  go(`/app/games/${gameId}`);
}

function currentGameVote(gameId) {
  const userId = currentUser()?.id || 'guest';
  state.gameVotes = state.gameVotes || {};
  return state.gameVotes[`${userId}:${gameId}`] || null;
}

function toggleGameVote(payload) {
  const [gameId, nextVote] = String(payload).split(':');
  if (!['up', 'down'].includes(nextVote)) return;
  const userId = currentUser()?.id || 'guest';
  const key = `${userId}:${gameId}`;
  state.gameVotes = state.gameVotes || {};
  const previousVote = state.gameVotes[key] || null;
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;
  game.popularity = game.popularity || { upVotes: 0, downVotes: 0, score: 0 };
  if (previousVote === nextVote) {
    if (nextVote === 'up') game.popularity.upVotes = Math.max(0, (game.popularity.upVotes || 0) - 1);
    if (nextVote === 'down') game.popularity.downVotes = Math.max(0, (game.popularity.downVotes || 0) - 1);
    delete state.gameVotes[key];
  } else {
    if (previousVote === 'up') game.popularity.upVotes = Math.max(0, (game.popularity.upVotes || 0) - 1);
    if (previousVote === 'down') game.popularity.downVotes = Math.max(0, (game.popularity.downVotes || 0) - 1);
    if (nextVote === 'up') game.popularity.upVotes = (game.popularity.upVotes || 0) + 1;
    if (nextVote === 'down') game.popularity.downVotes = (game.popularity.downVotes || 0) + 1;
    state.gameVotes[key] = nextVote;
  }
  game.popularity.score = (game.popularity.upVotes || 0) - (game.popularity.downVotes || 0);
  saveState();
  render();
}

function gameDetailStars(rating = 0) {
  const rounded = Math.round(Number(rating) || 0);
  return [1,2,3,4,5].map(i => `<span class="${i <= rounded ? 'is-filled' : 'is-empty'}">★</span>`).join('');
}

function gameDetailRatingText(game) {
  const count = Number(game.ratingCount || 0);
  if (!count) return 'No ratings yet';
  const word = count === 1 ? 'rating' : 'ratings';
  return `${Number(game.averageRating || 0).toFixed(1)} (${count} ${word})`;
}

function gameDetailTime(game) {
  if (Number(game.timeMin) === Number(game.timeMax)) return `${game.timeMin} min`;
  return `${game.timeMin}–${game.timeMax} min`;
}

function gameDetailMaterials(game) {
  const materials = game.materials || [];
  if (!materials.length) return 'None';
  return materials.map(item => String(item).replace(/\b\w/g, ch => ch.toUpperCase())).join(', ');
}

function gameDetailCategory(game) {
  const allowed = ['Quick and simple','Wet-n-Wild','Team-building','Teams','Circle','Icebreakers','Adventure','Tag','Sport-n-fitness','Theatrical','Relays'];
  const candidates = [...(game.categories || []), ...(game.tags || []), ...(game.purpose || [])].filter(Boolean);
  const exact = candidates.find(item => allowed.includes(item));
  if (exact) return exact;
  if (typeof normalizeCategory === 'function') {
    const mapped = normalizeCategory(candidates.join(' '));
    if (allowed.includes(mapped)) return mapped;
  }
  return 'Quick and simple';
}

function gameDetailImage(game) {
  const title = escapeHTML(game.title || 'Game');
  if (game.imageUrl) return `<img class="hp-game-image" src="${escapeHTML(game.imageUrl)}" alt="${title} game illustration">`;
  return `<div class="hp-game-image hp-detail-thumb hp-detail-thumb-${escapeHTML(game.thumb || 'camp')}" role="img" aria-label="${title} game illustration"><span>${title}</span></div>`;
}

function gameDetailIcon(name) {
  const common = 'width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';
  const icons = {
    search: `<svg ${common}><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.2-3.2"></path></svg>`,
    heart: `<svg ${common}><path d="M20.8 4.6a5.2 5.2 0 0 0-7.4 0L12 6l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 20.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"></path></svg>`,
    heartFilled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.8 4.6a5.2 5.2 0 0 0-7.4 0L12 6l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 20.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"></path></svg>`,
    smile: `<svg ${common}><circle cx="12" cy="12" r="9"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>`,
    account: `<svg ${common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    user: `<svg ${common}><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    users: `<svg ${common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    clock: `<svg ${common}><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>`,
    box: `<svg ${common}><path d="M21 8 12 3 3 8l9 5 9-5Z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path></svg>`,
    book: `<svg ${common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path></svg>`,
    thumbUp: `<svg ${common}><path d="M7 10v11"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-1.38 6A3 3 0 0 1 17.45 21H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3l3.6-5.4A2 2 0 0 1 15 5.88Z"></path></svg>`,
    thumbDown: `<svg ${common}><path d="M17 14V3"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l1.38-6A3 3 0 0 1 6.55 3H20a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3l-3.6 5.4A2 2 0 0 1 9 18.12Z"></path></svg>`,
    edit: `<svg ${common}><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"></path></svg>`,
    lightbulb: `<svg ${common}><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"></path></svg>`,
    sparkles: `<svg ${common}><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z"></path><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z"></path><path d="m5 14 .9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z"></path></svg>`,
    checklist: `<svg ${common}><path d="M9 11l2 2 4-4"></path><path d="M9 17l2 2 4-4"></path><path d="M3 5h18"></path><path d="M3 12h3"></path><path d="M3 18h3"></path></svg>`,
    lock: `<svg ${common}><rect x="4" y="11" width="16" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path></svg>`
  };
  return icons[name] || '';
}
// HOORAPLAYBOOK_GAME_PAGE_REDESIGN_V1_END

// HOORAPLAYBOOK_LEAVE_REVIEW_AFTER_VOTE_V1_START
function renderLeaveReviewPage(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return renderAppShell(`<main class="content"><h1>Game not found</h1></main>`);

  const userRating = getUserGameRating(gameId) || 0;
  const reviewDraft = getUserReviewDraft(gameId);

  return `<div class="app-frame hp-review-frame"><main class="hp-review-page" aria-label="Leave a review for ${escapeHTML(game.title)}"><header class="hp-review-header"><button class="icon-btn hp-review-header-btn" data-back aria-label="Back"><img class="back-icon" src="/assets/back_button.png" alt=""></button>${headerBrand()}<span aria-hidden="true"></span></header><section class="hp-review-title-section"><h1>${escapeHTML(game.title)}</h1></section><section class="hp-review-rating-section" aria-label="Your rating"><h2>Your rating</h2><div class="hp-review-star-row" role="radiogroup" aria-label="Select your star rating">${[1,2,3,4,5].map(value => `<button class="hp-review-star ${value <= userRating ? 'is-selected' : ''}" type="button" data-review-star="${game.id}:${value}" role="radio" aria-checked="${value === userRating ? 'true' : 'false'}" aria-label="${value} star${value === 1 ? '' : 's'}">★</button>`).join('')}</div><p>Tap a star to rate. Your rating updates the public average.</p><div class="hp-current-average-card"><div class="hp-current-average-stars" aria-label="${game.averageRating || 0} out of 5 stars">${reviewAverageStars(game.averageRating || 0)}</div><span>Current average</span><strong>${reviewRatingText(game)}</strong></div></section><form id="leave-review-form" class="hp-review-form" data-game-id="${game.id}"><label class="hp-review-textarea-label"><span>Review</span><textarea name="review" placeholder="Share what worked, what didn’t, and any tips for other leaders...">${escapeHTML(reviewDraft.text || '')}</textarea></label><input id="review-media-input" class="hp-review-file-input" type="file" accept="image/*,video/*" multiple data-review-media-input="${game.id}"><button class="hp-add-media-button" type="button" data-review-media-button="${game.id}">${reviewIcon('media')}<span>${reviewDraft.mediaCount ? `${reviewDraft.mediaCount} file${reviewDraft.mediaCount === 1 ? '' : 's'} selected` : 'Add images or Video'}</span></button><button class="hp-submit-review-button" type="submit">Submit Review</button></form></main></div>`;
}

function getReviewUserId() {
  return currentUser()?.id || 'guest';
}

function getUserGameRating(gameId) {
  state.userGameRatings = state.userGameRatings || {};
  return Number(state.userGameRatings[`${getReviewUserId()}:${gameId}`] || 0);
}

function setUserGameRating(payload) {
  const [gameId, rawValue] = String(payload).split(':');
  const rating = Math.max(1, Math.min(5, Number(rawValue) || 0));
  const game = state.games.find(g => g.id === gameId);
  if (!game || !rating) return;

  state.userGameRatings = state.userGameRatings || {};
  const key = `${getReviewUserId()}:${gameId}`;
  const previous = Number(state.userGameRatings[key] || 0);
  const currentCount = Number(game.ratingCount || 0);
  const currentAverage = Number(game.averageRating || 0);
  const currentTotal = currentAverage * currentCount;

  if (previous > 0 && currentCount > 0) {
    game.averageRating = (currentTotal - previous + rating) / currentCount;
  } else {
    game.ratingCount = currentCount + 1;
    game.averageRating = (currentTotal + rating) / game.ratingCount;
  }

  game.averageRating = Math.round(Number(game.averageRating || 0) * 10) / 10;
  state.userGameRatings[key] = rating;
  saveState();
  render();
}

function getUserReviewDraft(gameId) {
  state.reviewDrafts = state.reviewDrafts || {};
  return state.reviewDrafts[`${getReviewUserId()}:${gameId}`] || { text: '', mediaCount: 0 };
}

function saveUserReviewDraft(gameId, patch = {}) {
  state.reviewDrafts = state.reviewDrafts || {};
  const key = `${getReviewUserId()}:${gameId}`;
  state.reviewDrafts[key] = { ...getUserReviewDraft(gameId), ...patch };
  saveState();
}

function handleReviewMediaButton(gameId) {
  const input = document.getElementById('review-media-input');
  input?.click();
}

function handleReviewMediaChange(input) {
  const gameId = input.dataset.reviewMediaInput;
  const count = input.files ? input.files.length : 0;
  saveUserReviewDraft(gameId, { mediaCount: count });
  render();
}

function handleLeaveReviewSubmit(e) {
  e.preventDefault();
  const gameId = e.target.dataset.gameId;
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;

  const fd = new FormData(e.target);
  const text = String(fd.get('review') || '').trim();
  const rating = getUserGameRating(gameId);
  const draft = getUserReviewDraft(gameId);

  state.gameReviews = Array.isArray(state.gameReviews) ? state.gameReviews : [];
  const userId = getReviewUserId();
  const existing = state.gameReviews.find(review => review.gameId === gameId && review.userId === userId);

  const savedReview = {
    id: existing?.id || makeId('review'),
    gameId,
    userId,
    rating,
    text,
    mediaCount: draft.mediaCount || 0,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (existing) {
    Object.assign(existing, savedReview);
  } else {
    state.gameReviews.push(savedReview);
  }

  saveUserReviewDraft(gameId, { text, mediaCount: draft.mediaCount || 0 });
  saveState();
  toast('Review submitted.');
  go(`/app/games/${gameId}`);
}

function reviewAverageStars(rating = 0) {
  const rounded = Math.round(Number(rating) || 0);
  return [1,2,3,4,5].map(i => `<span class="${i <= rounded ? 'is-filled' : 'is-empty'}">★</span>`).join('');
}

function reviewRatingText(game) {
  const count = Number(game.ratingCount || 0);
  if (!count) return 'No ratings yet';
  return `${Number(game.averageRating || 0).toFixed(1)} (${count} ${count === 1 ? 'rating' : 'ratings'})`;
}

function reviewIcon(name) {
  const common = 'width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';
  const icons = {
    media: `<svg ${common}><rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="8.5" cy="10.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path><path d="M18 3v4"></path><path d="M16 5h4"></path></svg>`
  };
  return icons[name] || '';
}
// HOORAPLAYBOOK_LEAVE_REVIEW_AFTER_VOTE_V1_END

function renderReviewsScreen(id) {
  const g = state.games.find(x=>x.id===id); if (!g) return '';
  const reviews = state.ratings.filter(r=>r.gameId===id && r.reviewStatus==='published');
  return `<div class="app-frame game-page-frame"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">REVIEWS</div><div></div></header><main class="content"><div class="card review-summary"><div class="review-score">${g.averageRating.toFixed(1)}</div><div>${stars(g.averageRating)}<div class="review-meta">${g.ratingCount} ratings and ${reviews.filter(r=>r.reviewText).length} reviews</div></div></div><button class="btn btn-primary full" style="margin:18px 0" data-go="/app/games/${id}/rate">Rate This Game</button><section><h2 style="text-transform:uppercase">Reviews:</h2>${reviews.map(renderReviewRow).join('') || '<p class="help">No written reviews yet.</p>'}</section></main></div>`;
}
function renderReviewRow(r) { const u = state.users.find(x=>x.id===r.userId) || {fullName:'HooraPlaybook User'}; return `<div class="review-row"><div class="avatar">${initials(u.fullName)}</div><div><div class="review-name">${u.fullName}</div><div>${stars(r.rating,true)} <span class="review-meta">${new Date(r.createdAt).toLocaleString()}</span></div>${r.reviewText?`<p class="help" style="font-size:15px">${escapeHTML(r.reviewText)}</p>`:''}</div></div>`; }
function initials(name='User') { return name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase(); }

function renderRateScreen(id) {
  const game = state.games.find(g=>g.id===id); if (!game) return '';
  const existing = state.ratings.find(r=>r.gameId===id && r.userId===currentUser().id) || {};
  return `<div class="app-frame fullscreen-page game-page-frame"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">RATE THIS GAME</div><div></div></header><main class="content no-bottom-nav"><form id="rate-form" data-game-id="${id}"><input type="hidden" name="rating" value="${existing.rating||0}"><div class="rate-card star-picker">${[1,2,3,4,5].map(i=>`<button type="button" class="${(existing.rating||0)>=i?'active':''}" data-star="${i}">☆</button>`).join('')}</div><label><span class="label">Review</span><textarea name="reviewText" placeholder="Write review">${escapeHTML(existing.reviewText||'')}</textarea></label><h2>IMAGES</h2><label class="upload-tile">+<input name="images" type="file" accept="image/*" multiple hidden></label><h2>VIDEOS</h2><label class="upload-tile">+<input name="videos" type="file" accept="video/*" multiple hidden></label></form></main><div class="sticky-actions" style="grid-template-columns:1fr"><button class="btn btn-primary full" form="rate-form">Submit</button></div></div>`;
}

function renderNotesScreen(id) {
  const game = state.games.find(g=>g.id===id); const key = `${currentUser().id}:${id}`; const note = state.notes[key] || '';
  return `<div class="app-frame game-page-frame"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">ADD NOTES</div><div></div></header><main class="content no-bottom-nav"><div class="card" style="padding:18px"><h2>${game.title}</h2><form id="notes-form" data-game-id="${id}" class="form-grid"><textarea name="note" placeholder="Private leader notes...">${escapeHTML(note)}</textarea><button class="btn btn-primary full">Save Notes</button></form></div></main></div>`;
}

function renderFavorites() {
  const favIds = state.favorites[currentUser().id] || [];
  const games = state.games.filter(g=>favIds.includes(g.id));
  return `<main class="content"><section class="hero-card"><h1>Favorites</h1><p>Free users can save 3 favorites. PRO users get unlimited favorites and collections.</p>${!hasProAccess()?'<div class="help">Free favorites used: '+favIds.length+'/3</div>':''}</section><div class="game-list">${games.map(renderGameCard).join('') || '<div class="card" style="padding:22px"><h2>No favorites yet.</h2><p class="help">Save games from the Find screen.</p></div>'}</div></main>`;
}

function renderPlan() {
  if (!hasProAccess()) return `<main class="content"><div class="lock-card"><h1>My Plans is PRO</h1><p>Save, organize, and modify reusable game plans.</p><button class="btn btn-primary full" data-go="/pricing">Upgrade to PRO</button></div></main>`;
  const parts = route.parts;
  if (parts[2] === 'new') return renderCreatePlanPage();
  if (parts[2] && parts[3] === 'modify') return renderModifyPlan(parts[2]);
  const plans = userPlans();
  return `<main class="content"><div class="page-heading-row"><div><h1>My Plans</h1><p class="help">Saved plans are reusable. Games inside saved plans are clickable.</p></div><button class="btn btn-secondary create-plan-btn" data-go="/app/plan/new"><span>+</span> Create a New Plan</button></div><section class="game-list saved-plan-list">${plans.map(renderPlanCard).join('') || '<div class="card" style="padding:22px"><h2>No saved plans yet.</h2><p class="help">Create your first plan or add games from game cards.</p><button class="btn btn-primary full" data-go="/app/plan/new">+ Create a New Plan</button></div>'}</section></main>`;
}

function renderCreatePlanPage() {
  return `<main class="content"><section class="hero-card"><h1>Create a New Plan</h1><p>Name the plan, then add games from the Find screen or game pages.</p><form id="create-plan-form" class="form-grid"><label><span class="label">Plan name</span><input class="input" name="title" value="Youth Night Plan" required></label><label><span class="label">Available Materials</span><button type="button" class="selector-row" data-go="/app/materials"><span>${escapeHTML(selectedMaterialsText())}</span><strong>›</strong></button></label><label><span class="label">Category</span><select class="input" name="category">${STANDARD_CATEGORIES.map(c=>`<option>${c}</option>`).join('')}</select></label><button class="btn btn-primary full">Save Plan</button></form></section></main>`;
}

function renderPlanCard(plan) {
  return `<section class="card plan-card" style="padding:18px"><h2>${escapeHTML(plan.title)}</h2><p class="help">Combined materials: ${(plan.materials || []).join(', ') || 'none'}</p><div class="plan-game-list">${(plan.items || []).map((item, index)=>renderPlanGameRow(plan, item, index, false)).join('') || '<p class="help">No games in this plan yet.</p>'}</div><div class="plan-actions"><button class="btn btn-secondary" data-go="/app/plan/${plan.id}/modify"><img class="btn-icon" src="/assets/edit-246.svg" alt=""> Modify</button><button class="btn btn-secondary" data-rename-plan="${plan.id}">Rename</button><button class="btn btn-danger" data-delete-plan="${plan.id}">Delete</button></div></section>`;
}

function renderModifyPlan(planId) {
  const plan = state.sessions.find(p=>p.id===planId && p.userId===currentUser().id);
  if (!plan) return `<main class="content"><div class="card" style="padding:22px"><h2>Plan not found.</h2></div></main>`;
  return `<main class="content"><div class="page-heading-row"><div><h1>Modify Plan</h1><p class="help">Drag game cards up or down to reorder. On mobile, swipe a game left to reveal the red X remove button.</p></div></div><section class="card" style="padding:14px"><h2>${escapeHTML(plan.title)}</h2><div class="plan-game-list sortable-plan" data-plan-id="${plan.id}">${(plan.items || []).map((item, index)=>renderPlanGameRow(plan, item, index, true)).join('') || '<p class="help">No games in this plan.</p>'}</div></section></main>`;
}

function renderPlanGameRow(plan, item, index, sortable=false) {
  const game = gameByPlanItem(item);
  const title = game?.title || item.title || 'Game';
  const desc = game?.shortDescription || item.notes || '';
  const gameId = game?.id || item.gameId || '';
  const rowClass = `plan-game-row ${sortable ? 'draggable-row mobile-swipe-row' : ''}`;
  return `<div class="${rowClass}" data-plan-id="${plan.id}" data-item-index="${index}" data-game-id="${escapeHTML(gameId)}"><button class="drag-handle" aria-label="Drag ${escapeHTML(title)}">☰</button><button class="plan-game-main" ${gameId?`data-go="/app/games/${gameId}"`:''}><span class="plan-game-number">${index+1}</span><span><strong>${escapeHTML(title)}</strong><small>${escapeHTML(desc)}</small></span></button><button class="remove-x-btn" data-remove-plan-game="${plan.id}:${index}" aria-label="Remove ${escapeHTML(title)}"><img src="/assets/Remove.png" alt=""></button></div>`;
}

function renderSessionPlan(plan) { return renderPlanCard(plan); }

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
  <form id="submit-game-form" class="form-grid"><div class="card" style="padding:18px"><h2>Add One Game</h2><p class="help">Use this form for a single game. It will be reviewed before publication.</p><label><span class="label">Game title</span><input class="input" name="title" required></label><label><span class="label">One-sentence description</span><input class="input" name="shortDescription" required></label></div><div class="card" style="padding:18px"><h2>2. Group Fit</h2><div class="two-col"><label><span class="label">Age min</span><input class="input" name="ageMin" type="number" required></label><label><span class="label">Age max</span><input class="input" name="ageMax" type="number" required></label></div><div class="two-col"><label><span class="label">Group min</span><input class="input" name="groupMin" type="number" required></label><label><span class="label">Group max</span><input class="input" name="groupMax" type="number" required></label></div></div><div class="card" style="padding:18px"><h2>3. Materials & Setup</h2><label><span class="label">Materials needed</span><input class="input" name="materials" placeholder="cups, paper, balls"></label><label><span class="label">Setup instructions</span><textarea name="setup" required></textarea></label></div><div class="card" style="padding:18px"><h2>4. How to Play</h2><label><span class="label">Rules / how to play</span><textarea name="howToPlay" required></textarea></label><label><span class="label">Win or end condition</span><textarea name="winCondition" required></textarea></label></div><div class="card" style="padding:18px"><h2>5. Safety</h2><label><span class="label">Safety notes</span><textarea name="safetyNotes" required></textarea></label><label><span class="label">Overall safety rating</span><select class="input" name="safety"><option>Low Risk</option><option>Moderate Risk</option><option>Use With Caution</option></select></label></div><button class="btn btn-primary full">Submit for Review</button></form></main>`;
}

function renderTools() { return `<main class="content"><section class="hero-card"><h1>Icebreaker</h1><p id="icebreaker-prompt">Which animal gives birth to the biggest babies in the world? The blue whale.</p><button class="btn btn-primary full" data-random-icebreaker>Break The Ice</button></section></main>`; }

function renderAccount() {
  const u = currentUser();
  const myBatches = (state.importBatches || []).filter(b => b.uploadedBy === u.id).slice(-3).reverse();
  const batchCard = myBatches.length ? `<div class="card" style="padding:18px"><h2>Recent Batch Uploads</h2>${myBatches.map(b=>`<p class="help"><strong>${b.importedCount}/${b.fileCount}</strong> imported · ${b.publishMode === 'publish_now' ? 'published' : 'queued for moderation'}${b.failedCount ? ` · ${b.failedCount} failed` : ''}</p>`).join('')}</div>` : '';
  return `<main class="content"><section class="hero-card"><h1>Account</h1><p>${u.fullName} · ${u.email}</p><div class="magic-row"><span class="magic-chip">Role: ${u.role}</span><span class="magic-chip">Plan: ${u.plan}</span><span class="magic-chip">Access: ${hasProAccess(u)?'PRO active':'Free'}</span></div></section><div class="game-list"><div class="card" style="padding:18px"><h2>My Plans</h2><p class="help">View, create, modify, rename, and delete your saved plans.</p><button class="btn btn-secondary full" data-go="/app/plan">Open My Plans</button></div><div class="card" style="padding:18px"><h2>Redeem Coupon</h2><form id="redeem-form" class="form-grid"><input class="input" name="code" maxlength="16" placeholder="16-character code"><button class="btn btn-primary full">Redeem one free month</button></form></div>${batchCard}<button class="btn btn-secondary full" data-go="/pricing">Upgrade / Manage Billing</button>${isStaff(u)?'<button class="btn btn-dark full" data-go="/admin">Admin Panel</button>':''}<button class="btn btn-danger full" data-logout>Log out</button><p class="app-version">Version ${APP_VERSION}</p></div></main>`;
}

function renderAdminRoute() {
  if (!isStaff()) return renderAppShell(`<main class="content"><h1>Not authorized</h1></main>`);
  const tab = route.parts[1] || 'dashboard';
  const title = tab === 'dashboard' ? 'ADMIN' : tab.toUpperCase();
  const inner = tab === 'users' ? renderAdminUsers() : tab === 'coupons' ? renderAdminCoupons() : tab === 'submissions' ? renderAdminSubmissions() : tab === 'games' ? renderAdminGames() : renderAdminDashboard();
  return `<div class="app-frame"><header class="topbar light-header">${headerBackButton()}<div class="topbar-title">${title}</div><div></div></header><main class="content"><div class="chip-scroll"><button class="chip quick-chip" data-go="/admin">Dashboard</button><button class="chip quick-chip" data-go="/admin/users">Users</button><button class="chip quick-chip" data-go="/admin/coupons">Coupons</button><button class="chip quick-chip" data-go="/admin/submissions">Submissions</button><button class="chip quick-chip" data-go="/admin/games">Games</button></div>${inner}</main>${renderBottomNav()}</div>`;
}
function renderStaffRoute() { return renderAdminRoute(); }
function renderAdminDashboard() { const pro = state.users.filter(u=>u.plan==='pro').length; return `<div class="admin-grid"><div class="stat-card"><span>Total users</span><strong>${state.users.length}</strong></div><div class="stat-card"><span>PRO users</span><strong>${pro}</strong></div><div class="stat-card"><span>Pending submissions</span><strong>${state.submissions.filter(s=>s.status==='submitted').length}</strong></div><div class="stat-card"><span>Coupons</span><strong>${state.coupons.length}</strong></div><div class="stat-card"><span>Total games</span><strong>${state.games.length}</strong></div><div class="stat-card"><span>Batch imports</span><strong>${(state.importBatches||[]).length}</strong></div><div class="stat-card"><span>Avg rating</span><strong>${avg(state.games.map(g=>g.averageRating)).toFixed(1)}</strong></div></div>`; }
function avg(nums) { return nums.length ? nums.reduce((a,b)=>a+b,0)/nums.length : 0; }
function renderAdminUsers() { if (!isAdmin()) return `<div class="lock-card">Only administrators can manage users and access.</div>`; return `<div class="card" style="padding:18px;margin-bottom:16px"><h2>Create user</h2><form id="admin-create-user" class="form-grid"><input class="input" name="fullName" placeholder="Full name"><input class="input" name="email" type="email" placeholder="Email" required><input class="input" name="password" placeholder="Temporary password" value="changeme123"><div class="two-col"><select class="input" name="role"><option>user</option><option>staff</option><option>admin</option></select><select class="input" name="plan"><option>free</option><option>pro</option></select></div><button class="btn btn-primary">Create User</button></form></div><div class="table-card"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Plan</th><th>Expires</th><th>Disabled</th><th>Actions</th></tr></thead><tbody>${state.users.map(u=>`<tr><td>${u.fullName}</td><td>${u.email}</td><td><select data-user-field="role" data-user-id="${u.id}">${['user','staff','admin'].map(r=>`<option ${u.role===r?'selected':''}>${r}</option>`).join('')}</select></td><td><select data-user-field="plan" data-user-id="${u.id}">${['free','pro'].map(p=>`<option ${u.plan===p?'selected':''}>${p}</option>`).join('')}</select></td><td><input type="date" data-user-field="accessExpiresAt" data-user-id="${u.id}" value="${u.accessExpiresAt?u.accessExpiresAt.slice(0,10):''}"></td><td><input type="checkbox" data-user-field="disabled" data-user-id="${u.id}" ${u.disabled?'checked':''}></td><td><button class="btn btn-secondary" data-grant-pro="${u.id}">Grant 30d</button></td></tr>`).join('')}</tbody></table></div>`; }
function renderAdminCoupons() { if (!isAdmin()) return `<div class="lock-card">Only administrators can create coupons.</div>`; return `<div class="card" style="padding:18px;margin-bottom:16px"><h2>Batch Create Coupons</h2><form id="coupon-form" class="form-grid"><input class="input" name="campaign" placeholder="Campaign name"><input class="input" name="quantity" type="number" value="5" min="1" max="100"><input class="input" name="expires" type="date"><button class="btn btn-primary">Generate Coupons</button></form></div><div class="table-card"><table><thead><tr><th>Code</th><th>Campaign</th><th>Expires</th><th>Redeemed</th><th>Actions</th></tr></thead><tbody>${state.coupons.map(c=>`<tr><td><strong>${c.displayCode}</strong></td><td>${c.campaign||''}</td><td>${c.expiresAt?c.expiresAt.slice(0,10):'—'}</td><td>${c.redeemedBy?'Yes':'No'}</td><td><button class="btn btn-secondary" data-copy="${c.displayCode}">Copy</button></td></tr>`).join('')}</tbody></table></div>`; }
function renderAdminSubmissions() { return `<div class="game-list">${state.submissions.map(s=>`<div class="card" style="padding:18px"><div class="pro-badge">${s.status}</div><h2>${escapeHTML(s.payload.title||'Untitled')}</h2><p class="help">${escapeHTML(s.payload.shortDescription||'')}</p>${s.sourceFilename?`<p class="help"><strong>Source file:</strong> ${escapeHTML(s.sourceFilename)} · ${escapeHTML(s.source||'manual')}</p>`:''}<div class="two-col"><button class="btn btn-primary" data-approve-submission="${s.id}">Approve / Publish</button><button class="btn btn-secondary" data-reject-submission="${s.id}">Reject</button></div></div>`).join('') || '<div class="card" style="padding:22px"><h2>No submissions yet.</h2></div>'}</div>`; }
function renderAdminGames() { return `<div class="game-list">${state.games.map(g=>`<div class="card" style="padding:16px"><h2>${g.title}</h2><div class="magic-row"><span class="magic-chip">${g.accessLevel}</span><span class="magic-chip">${g.safety}</span></div><div class="two-col"><button class="btn btn-secondary" data-toggle-game-access="${g.id}">Toggle Free/PRO</button><button class="btn btn-danger" data-delete-game="${g.id}">Delete</button></div></div>`).join('')}</div>`; }

function bindEvents() {
  document.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); go(el.dataset.go); }));
  document.querySelectorAll('[data-back]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); goBack(); }));
  document.querySelectorAll('[data-filter-chip]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); toggleFilter(el.dataset.filterChip); }));
  document.querySelectorAll('[data-material-chip]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); toggleMaterial(el.dataset.materialChip); }));
  document.querySelectorAll('[data-remove-find-chip]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); removeFindChip(el.dataset.removeFindChip); }));
  byId('search-input')?.addEventListener('input', handleSearchInput);
  byId('finder-form')?.addEventListener('submit', handleFinder);
  byId('login-form')?.addEventListener('submit', handleLogin);
  byId('signup-form')?.addEventListener('submit', handleSignup);
  byId('rate-form')?.addEventListener('submit', handleRate);
  byId('notes-form')?.addEventListener('submit', handleNotes);
  byId('submit-game-form')?.addEventListener('submit', handleSubmitGame);
  byId('batch-upload-form')?.addEventListener('submit', handleBatchUpload);
  byId('redeem-form')?.addEventListener('submit', handleRedeem);
  byId('coupon-form')?.addEventListener('submit', handleCouponGeneration);
  byId('admin-create-user')?.addEventListener('submit', handleAdminCreateUser);
  byId('create-plan-form')?.addEventListener('submit', handleCreatePlan);
  document.querySelectorAll('[data-toggle-favorite]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); toggleFavorite(el.dataset.toggleFavorite); }));
  document.querySelectorAll('[data-add-to-plan]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); openAddToPlan(el.dataset.addToPlan); }));
  document.querySelectorAll('[data-game-card]').forEach(el => el.addEventListener('click', e => { if (e.target.closest('button,a')) return; go(`/app/games/${el.dataset.gameCard}`); }));
  document.querySelectorAll('[data-add-game-to-existing-plan]').forEach(el => el.addEventListener('click', () => addGameToPlan(window.__addToPlanGameId, el.dataset.addGameToExistingPlan)));
  document.querySelectorAll('[data-create-plan-with-game]').forEach(el => el.addEventListener('click', () => createPlanWithGame(window.__addToPlanGameId)));
  document.querySelectorAll('[data-close-add-plan]').forEach(el => el.addEventListener('click', closeAddToPlan));
  document.querySelectorAll('[data-rename-plan]').forEach(el => el.addEventListener('click', () => renamePlan(el.dataset.renamePlan)));
  document.querySelectorAll('[data-delete-plan]').forEach(el => el.addEventListener('click', () => deletePlan(el.dataset.deletePlan)));
  document.querySelectorAll('[data-remove-plan-game]').forEach(el => el.addEventListener('click', () => removePlanGame(el.dataset.removePlanGame)));
  initPlanDragAndDrop();
  document.querySelectorAll('[data-clear-filters]').forEach(el => el.addEventListener('click', () => { state.filters=[]; saveState(); render(); }));
  document.querySelectorAll('[data-open-sort]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); window.__sortOpen = true; render(); }));
  document.querySelectorAll('[data-close-sort]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); window.__sortOpen = false; render(); }));
  document.querySelectorAll('[data-set-sort]').forEach(el => el.addEventListener('click', () => { state.sort = el.dataset.setSort; saveState(); window.__sortOpen=false; render(); }));
  document.querySelectorAll('[data-star]').forEach(el => el.addEventListener('click', () => setStars(Number(el.dataset.star))));
  document.querySelectorAll('[data-user-field]').forEach(el => el.addEventListener('change', handleUserField));
  document.querySelectorAll('[data-grant-pro]').forEach(el => el.addEventListener('click', () => grantPro(el.dataset.grantPro, 30)));
  document.querySelectorAll('[data-copy]').forEach(el => el.addEventListener('click', () => navigator.clipboard?.writeText(el.dataset.copy).then(()=>toast('Copied.'))));
  document.querySelectorAll('[data-approve-submission]').forEach(el => el.addEventListener('click', () => approveSubmission(el.dataset.approveSubmission)));
  document.querySelectorAll('[data-reject-submission]').forEach(el => el.addEventListener('click', () => rejectSubmission(el.dataset.rejectSubmission)));
  document.querySelectorAll('[data-toggle-game-access]').forEach(el => el.addEventListener('click', () => toggleGameAccess(el.dataset.toggleGameAccess)));
  document.querySelectorAll('[data-delete-game]').forEach(el => el.addEventListener('click', () => deleteGame(el.dataset.deleteGame)));
  document.querySelectorAll('[data-logout]').forEach(el => el.addEventListener('click', logout));
  document.querySelectorAll('[data-upgrade]').forEach(el => el.addEventListener('click', () => handleUpgrade(el.dataset.upgrade)));
  document.querySelectorAll('[data-share-game]').forEach(el => el.addEventListener('click', () => shareGame(el.dataset.shareGame)));
  document.querySelectorAll('[data-random-icebreaker]').forEach(el => el.addEventListener('click', randomIcebreaker));
  document.querySelectorAll('[data-game-vote]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); toggleGameVote(el.dataset.gameVote); const gameId = String(el.dataset.gameVote || '').split(':')[0]; if (gameId) go(`/app/games/${gameId}/leave-review`); }));
  document.querySelectorAll('[data-review-star]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); setUserGameRating(el.dataset.reviewStar); }));
  document.querySelectorAll('[data-review-media-button]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); handleReviewMediaButton(el.dataset.reviewMediaButton); }));
  document.querySelectorAll('[data-review-media-input]').forEach(el => el.addEventListener('change', e => handleReviewMediaChange(e.target))); 
  byId('leave-review-form')?.addEventListener('submit', handleLeaveReviewSubmit);
  byId('bible-suggestion-form')?.addEventListener('submit', handleBibleSuggestion);
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
function handleSignup(e) { e.preventDefault(); const fd = new FormData(e.target); const email = fd.get('email').toLowerCase().trim(); if (state.users.some(u=>u.email.toLowerCase()===email)) return toast('An account with this email already exists.'); const user = { id: makeId('id'), email, password: fd.get('password'), fullName: fd.get('fullName') || email, role: 'user', plan: 'free', accessStatus: 'active', accessExpiresAt: null, disabled: false }; state.users.push(user); state.currentUserId = user.id; saveState(); go('/app/find'); }
function logout() { state.currentUserId = null; saveState(); go('/login'); }
function handleSearchInput(e) { state.search = e.target.value; saveState(); clearTimeout(searchTimer); searchTimer = setTimeout(() => { render(); const next = byId('search-input'); if (next) { next.focus(); const len = next.value.length; try { next.setSelectionRange(len, len); } catch (_) {} } }, 180); }
function handleFinder(e) { e.preventDefault(); const fd = new FormData(e.target); state.finder = { groupSize: Number(fd.get('groupSize')), time: Number(fd.get('time')), ageMin: Number(fd.get('ageMin')), ageMax: Number(fd.get('ageMax')), materials: selectedMaterialsText(), space: fd.get('space'), category: fd.get('category'), safety: 'Low Risk', avoid: 'not embarrassing' }; saveState(); toast('Smart Finder updated your top matches.'); render(); }
function setStars(n) { const form = byId('rate-form'); form.rating.value = n; document.querySelectorAll('[data-star]').forEach(el => el.classList.toggle('active', Number(el.dataset.star) <= n)); }
function handleRate(e) { e.preventDefault(); const fd = new FormData(e.target); const rating = Number(fd.get('rating')); if (!rating) return toast('Choose a star rating first.'); const gameId = e.target.dataset.gameId; const userId = currentUser().id; const existing = state.ratings.find(r=>r.gameId===gameId && r.userId===userId); if (existing) { existing.rating = rating; existing.reviewText = fd.get('reviewText'); existing.updatedAt = new Date().toISOString(); } else state.ratings.push({ id: makeId('id'), userId, gameId, rating, reviewText: fd.get('reviewText'), reviewStatus: 'published', mediaStatus: 'pending', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); recalcRating(gameId); saveState(); toast('Rating submitted.'); go(`/app/games/${gameId}/reviews`); }
function recalcRating(gameId) { const rs = state.ratings.filter(r=>r.gameId===gameId); const g = state.games.find(x=>x.id===gameId); g.ratingCount = rs.length; g.reviewCount = rs.filter(r=>r.reviewText).length; g.averageRating = rs.length ? Math.round((rs.reduce((a,r)=>a+r.rating,0)/rs.length)*10)/10 : 0; }
function handleNotes(e) { e.preventDefault(); const gameId = e.target.dataset.gameId; state.notes[`${currentUser().id}:${gameId}`] = new FormData(e.target).get('note'); saveState(); toast('Notes saved.'); go(`/app/games/${gameId}`); }
function handleSubmitGame(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd.entries());
  state.submissions.push({ id: makeId('id'), submittedBy: currentUser().id, status: 'submitted', source: 'manual', payload, createdAt: new Date().toISOString() });
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
  const batch = { id: makeId('id'), uploadedBy: currentUser().id, fileCount: files.length, importedCount: 0, failedCount: 0, publishMode: publishNow ? 'publish_now' : 'moderation', errors: [], createdAt: new Date().toISOString() };
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
        state.submissions.push({ id: makeId('id'), submittedBy: currentUser().id, status: 'submitted', source: 'batch_md', sourceFilename: file.name, importBatchId: batch.id, payload, createdAt: new Date().toISOString() });
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
  if (v.includes('reject')) return 'Use With Caution';
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


function userPlans() { return state.sessions.filter(s => s.userId === currentUser()?.id); }
function findGameIdByTitle(title='') { return state.games.find(g => g.title === title)?.id || ''; }
function gameByPlanItem(item={}) { return state.games.find(g => g.id === item.gameId) || state.games.find(g => g.title === item.title) || null; }
function normalizePlanItem(item={}) {
  const gameId = item.gameId || findGameIdByTitle(item.title);
  const game = state.games.find(g=>g.id===gameId);
  return { gameId, title: game?.title || item.title || 'Game', notes: game?.shortDescription || item.notes || '' };
}
function normalizeCategory(value='') {
  const text = String(value).toLowerCase();
  const aliases = { teamwork:'Team-building', team:'Team-building', fun:'Quick and simple', icebreaker:'Icebreakers', wet:'Wet-n-Wild', sport:'Sport-n-fitness', fitness:'Sport-n-fitness', theatre:'Theatrical', theatrical:'Theatrical', tag:'Tag', relay:'Relays', circle:'Circle', adventure:'Adventure' };
  const exact = STANDARD_CATEGORIES.find(c => c.toLowerCase() === text);
  if (exact) return exact;
  for (const [key, val] of Object.entries(aliases)) if (text.includes(key)) return val;
  return 'Quick and simple';
}
function selectedMaterials() {
  const raw = state.planMaterials && state.planMaterials.length ? state.planMaterials : String(state.finder?.materials || 'No Materials').split(/[,]+/).map(x=>x.trim()).filter(Boolean);
  return raw.length ? raw : ['No Materials'];
}
function selectedMaterialsText() { return selectedMaterials().join(', '); }
function toggleMaterial(material) {
  let selected = selectedMaterials().filter(Boolean);
  if (material === 'No Materials') selected = ['No Materials'];
  else {
    selected = selected.filter(x => x !== 'No Materials');
    selected = selected.includes(material) ? selected.filter(x=>x!==material) : [...selected, material];
    if (!selected.length) selected = ['No Materials'];
  }
  state.planMaterials = selected;
  state.finder.materials = selected.join(', ');
  saveState(); render();
}
function isGameInAnyPlan(gameId) { return userPlans().some(plan => (plan.items || []).some(item => normalizePlanItem(item).gameId === gameId)); }
function openAddToPlan(gameId) { window.__addToPlanGameId = gameId; render(); }
function closeAddToPlan() { window.__addToPlanGameId = null; render(); }
function renderAddToPlanModalIfNeeded() {
  const gameId = window.__addToPlanGameId;
  if (!gameId) return '';
  const game = state.games.find(g=>g.id===gameId);
  const plans = userPlans();
  return `<div class="modal-backdrop" data-close-add-plan><div class="bottom-sheet" onclick="event.stopPropagation()"><h2>Add to Plan</h2><p class="help">${escapeHTML(game?.title || 'This game')}</p><div class="game-list">${plans.map(plan=>`<button class="btn btn-secondary full" data-add-game-to-existing-plan="${plan.id}">${escapeHTML(plan.title)}</button>`).join('') || '<p class="help">No saved plans yet.</p>'}<button class="btn btn-primary full" data-create-plan-with-game="1">+ Create New Plan</button><button class="btn btn-secondary full" data-close-add-plan>Cancel</button></div></div></div>`;
}
function addGameToPlan(gameId, planId) {
  const plan = state.sessions.find(p=>p.id===planId && p.userId===currentUser().id);
  const game = state.games.find(g=>g.id===gameId);
  if (!plan || !game) return;
  plan.items = (plan.items || []).map(normalizePlanItem);
  if (!plan.items.some(item=>item.gameId===gameId)) plan.items.push({ gameId, title: game.title, notes: game.shortDescription });
  plan.materials = [...new Set(plan.items.flatMap(item => gameByPlanItem(item)?.materials || []))];
  saveState(); window.__addToPlanGameId = null; toast('Added to plan.'); render();
}
function createPlanWithGame(gameId) {
  const game = state.games.find(g=>g.id===gameId);
  const title = prompt('New plan name:', game ? `${game.title} Plan` : 'New Plan');
  if (!title) return;
  const plan = { id: makeId('id'), userId: currentUser().id, title, materials: game ? [...game.materials] : [], items: game ? [{ gameId, title: game.title, notes: game.shortDescription }] : [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  state.sessions.push(plan); saveState(); window.__addToPlanGameId = null; toast('Plan created.'); go('/app/plan');
}
function handleCreatePlan(e) {
  e.preventDefault(); const fd = new FormData(e.target);
  const title = String(fd.get('title') || 'New Plan').trim();
  const plan = { id: makeId('id'), userId: currentUser().id, title, category: fd.get('category'), materials: [], items: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  state.sessions.push(plan); saveState(); toast('Plan saved.'); go('/app/plan');
}
function renamePlan(planId) { const plan = state.sessions.find(p=>p.id===planId && p.userId===currentUser().id); if (!plan) return; const title = prompt('Rename plan:', plan.title); if (!title) return; plan.title = title; plan.updatedAt = new Date().toISOString(); saveState(); render(); }
function deletePlan(planId) { state.sessions = state.sessions.filter(p => !(p.id===planId && p.userId===currentUser().id)); saveState(); toast('Plan deleted.'); render(); }
function refreshPlanMaterials(plan) {
  if (!plan) return;
  plan.items = (plan.items || []).map(normalizePlanItem);
  plan.materials = [...new Set(plan.items.flatMap(item => gameByPlanItem(item)?.materials || []))];
  plan.updatedAt = new Date().toISOString();
}

function removePlanGame(payload) {
  const [planId, indexText] = String(payload).split(':');
  const index = Number(indexText);
  const plan = state.sessions.find(p=>p.id===planId && p.userId===currentUser().id);
  if (!plan || !Number.isInteger(index)) return;

  plan.items = (plan.items || []).map(normalizePlanItem).filter((_, i)=>i !== index);
  refreshPlanMaterials(plan);
  saveState();
  toast('Game removed.');
  render();
}

function initPlanDragAndDrop() {
  initModifyPlanCardSortV6();
}

function initModifyPlanCardSortV6() {
  document.querySelectorAll('.sortable-plan').forEach(list => {
    const rows = () => Array.from(list.querySelectorAll('.draggable-row'));

    const saveOrderFromDom = () => {
      const planId = list.dataset.planId;
      const plan = state.sessions.find(p=>p.id===planId && p.userId===currentUser().id);
      if (!plan) return;

      const currentItems = (plan.items || []).map(normalizePlanItem);
      const orderedIndexes = rows()
        .map(row => Number(row.dataset.itemIndex))
        .filter(index => Number.isInteger(index) && currentItems[index]);

      if (orderedIndexes.length !== currentItems.length) return;

      const before = currentItems.map(item => item.gameId || item.title).join('|');
      const after = orderedIndexes.map(index => currentItems[index]).map(item => item.gameId || item.title).join('|');

      if (before === after) return;

      plan.items = orderedIndexes.map(index => currentItems[index]);
      refreshPlanMaterials(plan);
      saveState();
      toast('Plan order updated.');
      render();
    };

    const getInsertBeforeRow = y => {
      return rows().find(row => {
        const rect = row.getBoundingClientRect();
        return y < rect.top + rect.height / 2;
      }) || null;
    };

    rows().forEach(row => {
      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let mode = null;
      let placeholder = null;
      let dragRect = null;
      let swipeX = 0;
      let cleanupMove = null;
      let cleanupUp = null;

      const resetSwipe = () => {
        row.classList.remove('is-swiping', 'swipe-remove-ready');
        row.style.setProperty('--plan-row-swipe-x', '0px');
      };

      const suppressNextClick = () => {
        row.dataset.suppressPlanClick = '1';
        setTimeout(() => {
          delete row.dataset.suppressPlanClick;
        }, 300);
      };

      const clearFixedDragStyles = () => {
        row.classList.remove('is-dragging');
        row.style.removeProperty('position');
        row.style.removeProperty('left');
        row.style.removeProperty('top');
        row.style.removeProperty('width');
        row.style.removeProperty('height');
        row.style.removeProperty('z-index');
        row.style.removeProperty('pointer-events');
        row.style.removeProperty('box-shadow');
      };

      const beginDrag = e => {
        mode = 'drag';
        resetSwipe();

        dragRect = row.getBoundingClientRect();
        placeholder = document.createElement('div');
        placeholder.className = 'plan-drag-placeholder';
        placeholder.style.height = `${dragRect.height}px`;
        placeholder.style.borderRadius = getComputedStyle(row).borderRadius || '18px';
        placeholder.dataset.planDragPlaceholder = 'true';

        row.after(placeholder);

        row.classList.add('is-dragging');
        row.style.position = 'fixed';
        row.style.left = `${dragRect.left}px`;
        row.style.top = `${dragRect.top}px`;
        row.style.width = `${dragRect.width}px`;
        row.style.height = `${dragRect.height}px`;
        row.style.zIndex = '9999';
        row.style.pointerEvents = 'none';

        document.body.appendChild(row);
        moveDrag(e.clientY);
      };

      const movePlaceholder = y => {
        if (!placeholder) return;

        const beforeRow = getInsertBeforeRow(y);
        if (beforeRow) {
          list.insertBefore(placeholder, beforeRow);
        } else {
          list.appendChild(placeholder);
        }
      };

      const moveDrag = y => {
        if (!dragRect) return;
        const nextTop = dragRect.top + (y - startY);
        row.style.top = `${nextTop}px`;
        movePlaceholder(y);
      };

      const finishDrag = () => {
        if (placeholder) {
          placeholder.replaceWith(row);
        }

        clearFixedDragStyles();
        placeholder = null;
        dragRect = null;
        saveOrderFromDom();
        suppressNextClick();
      };

      const finishSwipe = () => {
        row.classList.remove('is-swiping');

        if (swipeX < -42) {
          row.classList.add('swipe-remove-ready');
          row.style.setProperty('--plan-row-swipe-x', '-72px');
        } else {
          resetSwipe();
        }

        suppressNextClick();
      };

      const cleanup = () => {
        if (cleanupMove) window.removeEventListener('pointermove', cleanupMove);
        if (cleanupUp) {
          window.removeEventListener('pointerup', cleanupUp);
          window.removeEventListener('pointercancel', cleanupUp);
        }

        cleanupMove = null;
        cleanupUp = null;
        pointerId = null;
        startX = 0;
        startY = 0;
        mode = null;
        swipeX = 0;
      };

      const cancelInteraction = () => {
        if (mode === 'drag' && placeholder) {
          placeholder.replaceWith(row);
          clearFixedDragStyles();
        }

        if (mode === 'swipe') resetSwipe();

        placeholder = null;
        dragRect = null;
        cleanup();
      };

      const onPointerMove = e => {
        if (pointerId !== e.pointerId) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const isMobile = window.matchMedia('(max-width: 759px)').matches;

        if (!mode) {
          if (isMobile && dx < -14 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            mode = 'swipe';
            row.classList.add('is-swiping');
          } else if (Math.abs(dy) > 9 && Math.abs(dy) > Math.abs(dx) * 0.7) {
            beginDrag(e);
          } else {
            return;
          }
        }

        if (mode === 'swipe') {
          e.preventDefault();
          swipeX = Math.max(dx, -82);
          row.style.setProperty('--plan-row-swipe-x', `${swipeX}px`);
          return;
        }

        if (mode === 'drag') {
          e.preventDefault();
          moveDrag(e.clientY);
        }
      };

      const onPointerUp = e => {
        if (pointerId !== e.pointerId) return;

        if (mode === 'drag') {
          e.preventDefault();
          finishDrag();
        } else if (mode === 'swipe') {
          e.preventDefault();
          finishSwipe();
        }

        cleanup();
      };

      row.addEventListener('dragstart', e => {
        e.preventDefault();
      });

      row.addEventListener('pointerdown', e => {
        if (e.button !== undefined && e.button !== 0) return;
        if (e.target.closest('[data-remove-plan-game], .remove-x-btn, input, select, textarea, a')) return;

        if (row.classList.contains('swipe-remove-ready')) {
          resetSwipe();
          e.preventDefault();
          return;
        }

        pointerId = e.pointerId;
        startX = e.clientX;
        startY = e.clientY;
        mode = null;
        swipeX = 0;

        try {
          row.setPointerCapture(pointerId);
        } catch (_) {}

        cleanupMove = onPointerMove;
        cleanupUp = onPointerUp;
        window.addEventListener('pointermove', cleanupMove, { passive: false });
        window.addEventListener('pointerup', cleanupUp, { passive: false });
        window.addEventListener('pointercancel', cleanupUp, { passive: false });
      });

      row.addEventListener('click', e => {
        if (row.dataset.suppressPlanClick === '1') {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if (!row.classList.contains('swipe-remove-ready')) return;
        if (e.target.closest('[data-remove-plan-game], .remove-x-btn')) return;

        e.preventDefault();
        e.stopPropagation();
        resetSwipe();
      }, true);
    });
  });
}
function handleSession(e) { e.preventDefault(); }

function handleRedeem(e) { e.preventDefault(); const code = new FormData(e.target).get('code').toUpperCase().trim(); const c = state.coupons.find(x=>x.displayCode===code); if (!c) return toast('Coupon not found.'); if (c.disabled) return toast('Coupon is disabled.'); if (c.redeemedBy) return toast('Coupon was already redeemed.'); if (c.expiresAt && isExpired(c.expiresAt)) return toast('Coupon expired.'); c.redeemedBy = currentUser().id; c.redeemedAt = new Date().toISOString(); grantPro(currentUser().id, c.durationDays || 30, false); saveState(); toast('PRO unlocked for one month.'); render(); }
function handleCouponGeneration(e) { e.preventDefault(); const fd = new FormData(e.target); const qty = Math.min(100, Math.max(1, Number(fd.get('quantity')))); for (let i=0;i<qty;i++) state.coupons.push({ id: makeId('id'), displayCode: generateCouponCode(), benefitType: 'one_free_month_pro', durationDays: 30, campaign: fd.get('campaign'), expiresAt: fd.get('expires') ? new Date(fd.get('expires')).toISOString() : null, redeemedBy: null, disabled: false, createdBy: currentUser().id, createdAt: new Date().toISOString() }); saveState(); toast(`${qty} coupon(s) created.`); render(); }
function generateCouponCode() { let code = ''; const bytes = new Uint8Array(16); crypto.getRandomValues(bytes); for (const b of bytes) code += COUPON_ALPHABET[b % COUPON_ALPHABET.length]; return code; }
function grantPro(userId, days=30, rerender=true) { const u = state.users.find(x=>x.id===userId); if (!u) return; u.plan='pro'; u.accessStatus='active'; const current = u.accessExpiresAt && new Date(u.accessExpiresAt) > new Date() ? new Date(u.accessExpiresAt) : new Date(); current.setDate(current.getDate()+days); u.accessExpiresAt = current.toISOString(); saveState(); if (rerender) { toast('PRO access granted.'); render(); } }
function handleAdminCreateUser(e) { e.preventDefault(); const fd = new FormData(e.target); const user = { id: makeId('id'), email: fd.get('email'), password: fd.get('password'), fullName: fd.get('fullName') || fd.get('email'), role: fd.get('role'), plan: fd.get('plan'), accessStatus: 'active', accessExpiresAt: fd.get('plan')==='pro' ? addDaysISO(365) : null, disabled: false }; state.users.push(user); saveState(); toast('User created.'); render(); }
function handleUserField(e) { const u = state.users.find(x=>x.id===e.target.dataset.userId); const field = e.target.dataset.userField; if (field === 'disabled') u.disabled = e.target.checked; else if (field === 'accessExpiresAt') u.accessExpiresAt = e.target.value ? new Date(e.target.value).toISOString() : null; else u[field] = e.target.value; saveState(); toast('User updated.'); }
function approveSubmission(id) { const s = state.submissions.find(x=>x.id===id); if (!s) return; const game = gameFromPayload(s.payload, { creator: currentUser().fullName, sourceFilename: s.sourceFilename }); state.games.push(game); s.status='published'; s.publishedGameId=game.id; if (s.importBatchId) { const batch = (state.importBatches||[]).find(b=>b.id===s.importBatchId); if (batch) batch.lastPublishedAt = new Date().toISOString(); } saveState(); toast('Submission published.'); render(); }
function rejectSubmission(id) { const s = state.submissions.find(x=>x.id===id); s.status='rejected'; saveState(); render(); }
function toggleGameAccess(id) { const g = state.games.find(x=>x.id===id); g.accessLevel = g.accessLevel==='free'?'pro':'free'; saveState(); render(); }
function deleteGame(id) { if (!confirm('Delete this game from the local demo?')) return; state.games = state.games.filter(g=>g.id!==id); saveState(); render(); }
function handleUpgrade(plan) { const user = currentUser(); if (user && plan !== 'Team') { grantPro(user.id, 365); toast('Demo upgrade: PRO access granted. In production this redirects to Stripe Checkout.'); } else go('/signup'); }
function shareGame(id) { const url = `${location.origin}${location.pathname}#/app/games/${id}`; if (navigator.share) navigator.share({ url }).catch(()=>{}); else navigator.clipboard?.writeText(url).then(()=>toast('Link copied.')); }
function randomIcebreaker() { const prompts = ['Would you rather lead a game with no materials or too many materials?', 'What is one game you loved as a kid?', 'Trivia: Which animal gives birth to the biggest babies? The blue whale.', 'Dad joke: Did you hear about the watermelon wedding? They cantaloupe.', 'Quick challenge: In 20 seconds, name five things you can use as game supplies.']; byId('icebreaker-prompt').textContent = prompts[Math.floor(Math.random()*prompts.length)]; }
function toast(message) { clearTimeout(toastTimer); let el = document.querySelector('.toast'); if (!el) { el = document.createElement('div'); el.className='toast'; document.body.appendChild(el); } el.textContent = message; toastTimer = setTimeout(()=>el.remove(), 3000); }
