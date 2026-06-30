# HooraPlaybook — Individual Game Page Coding Instructions

## Purpose
Create the **Individual Game Page** for HooraPlaybook based on the attached `APP. Game Page.png` visual direction. This page shows one game in detail, lets the user favorite it, share it, add it to a plan, vote on it, add personal notes, and read the full play instructions.

The page must visually match the polished HooraPlaybook iPhone mockup style: clean white background, rounded cards, soft borders, generous spacing, bold dark typography, green primary action, blue/purple brand logo, and a universal bottom footer.

---

## Global Page Structure

Use this vertical order:

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

The page should be scrollable vertically. The footer stays visually consistent with `Universal footer.png` and should remain universal across all app pages.

---

## Page Container

### Layout

Use a mobile-first app shell:

```css
.game-page {
  min-height: 100dvh;
  background: #ffffff;
  color: #11122f;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.game-page__content {
  max-width: 430px;
  margin: 0 auto;
  padding: calc(env(safe-area-inset-top, 0px) + 18px) 22px calc(96px + env(safe-area-inset-bottom, 0px));
}
```

### Spacing Rules

- Horizontal page padding: `22px` on mobile.
- Maximum content width: `430px`.
- Use `16px` spacing between major content blocks.
- Use `10–12px` spacing between tightly related items.
- Use `20–24px` spacing before a new major section.
- The footer must not overlap the bottom content. Add bottom padding to the scroll area.

---

## Color System

Use the following visual palette unless the app already has matching CSS variables:

```css
:root {
  --hp-bg: #ffffff;
  --hp-ink: #11122f;
  --hp-muted: #6f7484;
  --hp-border: #dde1e8;
  --hp-soft-border: #e8ebf1;
  --hp-card: #ffffff;
  --hp-green: #5d8b3f;
  --hp-green-dark: #4d7834;
  --hp-blue: #2457c5;
  --hp-purple: #6b3ff2;
  --hp-yellow: #f8bd34;
  --hp-orange: #c9822d;
  --hp-footer-inactive: #4f5875;
}
```

### Color Usage

- Page background: white.
- Main text: dark navy `#11122f`.
- Secondary text: muted slate `#6f7484`.
- Primary CTA: green `#5d8b3f` with white text.
- Active footer item: green.
- Inactive footer icons/text: slate navy.
- Rating stars: golden yellow.
- Borders: soft gray.
- Icons: match the intent of each section; use blue, green, orange, or navy as in the mockup.

---

## Typography

### Font

Use the app’s existing main font. If no app font is defined, use:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Type Scale

```css
.game-title {
  font-size: clamp(34px, 9vw, 44px);
  line-height: 0.98;
  letter-spacing: -0.045em;
  font-weight: 850;
  color: var(--hp-ink);
}

.section-title {
  font-size: 18px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--hp-ink);
}

.body-text {
  font-size: 15px;
  line-height: 1.45;
  font-weight: 500;
  color: var(--hp-ink);
}

.meta-label {
  font-size: 13px;
  line-height: 1.15;
  color: var(--hp-muted);
}

.meta-value {
  font-size: 18px;
  line-height: 1.15;
  font-weight: 600;
  color: var(--hp-ink);
}
```

The title should feel large and bold like the attached mockup: `Scripture Bridge Race` is prominent, dark, and slightly condensed by tight letter spacing. The name will be taken from the individual game's markdown file. 

---

## Header: Individual Game Page

The individual game page header is different from the Find Games page header.

### Required Header Elements

Left:
- Circular back button.
- Standard iOS-style left arrow / chevron icon.
- Button returns the user to the previous page.

Center:
- HooraPlaybook logo lockup.
- Centered in the header, not affected visually by the left/right buttons.

Right:
- Circular share button.
- Use a standard iOS share icon: square with upward arrow.
- Do **not** show sort or filter icons on this page.
- Share icon must be visually similar to the other circular icon buttons in size, stroke weight, and color.

### Header Layout

```css
.game-header {
  position: relative;
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  min-height: 52px;
  margin-bottom: 26px;
}

.game-header__logo {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 34px;
}

.icon-circle-button {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid var(--hp-soft-border);
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--hp-ink);
  box-shadow: 0 2px 8px rgba(17, 18, 47, 0.08);
}

.icon-circle-button svg {
  width: 23px;
  height: 23px;
  stroke-width: 2;
}
```

### Header Functionality

Back button:
- Use app navigation history when possible.
- If no history exists, navigate to the Find Games page.

Share button:
- Use `navigator.share()` when available.
- Share title: game name.
- Share text: short game description or `Check out this HooraPlaybook game: [Game Name]`.
- Share URL: current game detail URL.
- Fallback: copy the URL to clipboard and show a small confirmation toast: `Game link copied`.

Example behavior:

```js
async function shareGame(game) {
  const shareData = {
    title: game.title,
    text: `Check out this HooraPlaybook game: ${game.title}`,
    url: window.location.href
  };

  if (navigator.share) {
    await navigator.share(shareData);
  } else {
    await navigator.clipboard.writeText(window.location.href);
    showToast('Game link copied');
  }
}
```

---

## Game Title

Place the game name directly below the header.

### Layout

```html
<h1 class="game-title">Scripture Bridge Race</h1>
```

### Requirements

- Left aligned.
- Large, bold, dark navy.
- Allow wrapping to two lines for long game names.
- Do not shrink the title too small.
- Keep `12–14px` spacing between the title and the rating row.

---

## Rating, Reviews, and Favorite Section

This section sits immediately below the game title.

### Required Elements

Top row:
- Five yellow star icons.
- Rating text, for example: `4.6 (5 ratings)`. This will be computed as simple average based on submitted game reviews. 
- Heart favorite button on the same row, visually aligned with the rating text. 

Second row:
- `View reviews` link.  

### Layout

```html
<section class="rating-section" aria-label="Game rating">
  <div class="rating-row">
    <div class="stars" aria-label="4.6 out of 5 stars">
      <!-- five star icons -->
    </div>
    <span class="rating-text">4.6 (5 ratings)</span>
    <button class="favorite-button" aria-label="Add to favorites">
      <!-- heart icon -->
    </button>
  </div>
  <button class="reviews-link">View reviews</button>
</section>
```

```css
.rating-section {
  margin-top: 12px;
  margin-bottom: 28px;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  color: var(--hp-yellow);
}

.stars svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
}

.rating-text {
  font-size: 18px;
  font-weight: 750;
  color: var(--hp-muted);
  margin-left: 6px;
}

.favorite-button {
  margin-left: 12px;
  width: 36px;
  height: 36px;
  border: 0;
  background: transparent;
  color: #778097;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.favorite-button svg {
  width: 28px;
  height: 28px;
}

.favorite-button.is-active {
  color: #e84d5b;
}

.reviews-link {
  margin-top: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--hp-green-dark);
  font-size: 17px;
  font-weight: 750;
  text-decoration: underline;
  text-underline-offset: 3px;
}
```

### Functionality

Favorite heart:
- Tapping toggles the current game in the user’s Favorites.
- Empty heart = not favorited.
- Filled heart = favorited.
- Tapping heart must **not** navigate away from the page.

View reviews:
- Opens a reviews page for this specific game. 


Rating display:
- Display one decimal when available: `4.6`.
- Show count as `1 rating` or `5 ratings`.
- If there are no ratings, show `No ratings yet` and use muted/empty stars.

---

## Game Image

The game image appears below the rating section.

### Requirements

- Aspect ratio must be **1.55 width to height**.
- Full content width.
- Rounded corners.
- No cropping that cuts off important text or illustration.
- Use `object-fit: cover` for normal images, but make sure generated title-card style images still look correct.
- Add a soft border if the image blends into the background.

```html
<div class="game-image-wrap">
  <img src="..." alt="Scripture Bridge Race game illustration" class="game-image" />
</div>
```

```css
.game-image-wrap {
  width: 100%;
  aspect-ratio: 1.55 / 1;
  border-radius: 17px;
  overflow: hidden;
  border: 1px solid rgba(17, 18, 47, 0.06);
  background: #f4f6fb;
  margin-bottom: 18px;
}

.game-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
```

---

## `+ Add to Plan` Button

Place the primary button directly below the image.

### Visual Requirements

- Full width.
- Green background.
- White text.
- Rounded corners.
- Plus icon before text.
- Height around `58–62px`.
- Text must stay on one line.

```html
<button class="add-to-plan-button">
  <span class="button-plus">+</span>
  <span>Add to Plan</span>
</button>
```

```css
.add-to-plan-button {
  width: 100%;
  min-height: 60px;
  border: 0;
  border-radius: 12px;
  background: var(--hp-green);
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.08);
  white-space: nowrap;
}

.button-plus {
  font-size: 32px;
  line-height: 1;
  font-weight: 400;
  transform: translateY(-1px);
}
```

### Functionality

Tapping `+ Add to Plan` opens the existing **Pick a Plan / Create New Plan** flow.

Expected behavior:
- User taps `+ Add to Plan`.
- App opens plan picker.
- User can select an existing plan.
- User can create a new plan.
- After game is added, show confirmation: `Added to plan`.
- If the game is already in the selected plan, avoid duplicate insertion and show: `Already in this plan`.

---

## Popularity Vote and Add Notes Row

Place this row below the `+ Add to Plan` button.

### Required Elements

Left side:
- Thumbs up button.
- Thumbs down button.
- These are separate buttons, even if they are visually grouped in one segmented card.
- They increase or decrease the game’s global popularity count.

Right side:
- `Add Notes` button.
- Include a standard iOS notes/edit icon before the text, visually matching the attached image.

### Layout

Use a two-column row:
- Left segmented vote control: about half width.
- Right notes button: about half width.
- Gap: `16px`.

```html
<div class="game-actions-row">
  <div class="vote-control" role="group" aria-label="Vote on this game">
    <button class="vote-button" aria-label="Thumbs up this game">
      <!-- thumbs up icon -->
    </button>
    <span class="vote-divider" aria-hidden="true"></span>
    <button class="vote-button" aria-label="Thumbs down this game">
      <!-- thumbs down icon -->
    </button>
  </div>

  <button class="notes-button">
    <!-- notes/edit icon -->
    <span>Add Notes</span>
  </button>
</div>
```

```css
.game-actions-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 14px;
  margin-bottom: 16px;
}

.vote-control,
.notes-button {
  min-height: 58px;
  border: 1px solid var(--hp-border);
  border-radius: 13px;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(17, 18, 47, 0.03);
}

.vote-control {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  align-items: center;
}

.vote-button {
  height: 100%;
  border: 0;
  background: transparent;
  color: var(--hp-green);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.vote-button svg {
  width: 26px;
  height: 26px;
  stroke-width: 2;
}

.vote-divider {
  height: 32px;
  width: 1px;
  background: var(--hp-border);
}

.notes-button {
  color: var(--hp-green);
  font-size: 16px;
  font-weight: 750;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.notes-button svg {
  width: 24px;
  height: 24px;
  stroke-width: 2;
}
```

### Functionality

Thumbs up/down:
- A user can vote up or down on the game.
- Store the user’s vote state so repeated taps do not create unlimited duplicate global votes.
- Recommended vote states: `null`, `up`, `down`.
- If user changes from up to down, subtract the previous up vote and apply the down vote (and visa versa).
- Use these global popularity values for sorting games.
- Give visual feedback when selected — fill thumbs up with green when tapped or thumbs down with red, remember thumbs up or thumbs down status and cancel the opposite when one is tapped (thumb up cancels thumbs down and visa versa)

Example data fields:

```js
popularity: {
  upVotes: 42,
  downVotes: 3,
  score: 39
}
```

Add Notes:
- Opens the notes editor for the current game.
- Notes should be personal to the user, not global.


---

## Metadata Cards

Place four cards in a single row below the action row.

### Required Cards

1. Ages
   - Icon: standard iOS person icon.
   - Example value: `10–15`. This information is extracted from the game's markdown file or Submit Game functionality. 

2. Players
   - Icon: standard iOS group/person.3 icon.
   - Example value: `10–20`. This information is extracted from the game's markdown file or Submit Game functionality.

3. Time
   - Icon: standard iOS clock icon.
   - Example value: `15 min`. This information is extracted from the game's markdown file or Submit Game functionality.

4. Materials
   - Icon: standard iOS box/archive/package icon.
   - Example value: `Paper, Markers`. This information is extracted from the game's markdown file or Submit Game functionality.

### Visual Layout

```html
<div class="game-meta-grid">
  <article class="meta-card">
    <IconPerson />
    <div class="meta-label">Ages</div>
    <div class="meta-value">10–15</div>
  </article>
  ...
</div>
```

```css
.game-meta-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 16px;
}

.meta-card {
  min-height: 112px;
  border: 1px solid var(--hp-border);
  border-radius: 13px;
  background: var(--hp-card);
  padding: 14px 8px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.meta-card svg {
  width: 29px;
  height: 29px;
  margin-bottom: 8px;
  stroke-width: 2;
}

.meta-card--ages svg,
.meta-card--players svg {
  color: var(--hp-blue);
}

.meta-card--time svg {
  color: var(--hp-ink);
}

.meta-card--materials svg {
  color: var(--hp-orange);
}

.meta-label {
  margin-bottom: 4px;
}

.meta-value {
  word-break: normal;
}

.meta-card--materials .meta-value {
  font-size: 14px;
  line-height: 1.12;
  font-weight: 750;
}
```

### Responsive Behavior

- Default mobile layout: 4 cards in one row.
- For extremely narrow screens under `340px`, allow 2x2 grid.

```css
@media (max-width: 340px) {
  .game-meta-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Category Section

Place the category section below the four metadata cards.  This information is extracted from the game's markdown file or Submit Game functionality.

### Important Requirement

The category section must **not** be selectable and must **not** have a right chevron icon.

It is a static information card only.

### Allowed Categories

Limit game categories to this list only:

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

### Layout

```html
<section class="category-card" aria-label="Game category">
  <div class="category-icon">
    <!-- book/category icon -->
  </div>
  <div class="category-content">
    <div class="category-label">Category</div>
    <div class="category-value">
      <span>Bible</span>
      <span class="category-separator">/</span>
      <span>Team-building</span>
    </div>
  </div>
</section>
```

```css
.category-card {
  border: 1px solid var(--hp-border);
  border-radius: 13px;
  background: #ffffff;
  min-height: 66px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.category-card button,
.category-card a {
  pointer-events: none;
}

.category-icon {
  color: var(--hp-blue);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.category-icon svg {
  width: 34px;
  height: 34px;
  stroke-width: 2;
}

.category-label {
  font-size: 14px;
  color: var(--hp-muted);
  font-weight: 600;
  margin-bottom: 4px;
}

.category-value {
  font-size: 15px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--hp-ink);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-separator {
  color: var(--hp-ink);
  opacity: 0.8;
}
```

### Category Data Rule

Validate category values before rendering. If a game has a category outside the allowed list, either:

- map it to the closest allowed category, or
- show `Quick and simple` as the safe fallback.

---

## Content Section Card Style

The sections below Category should use rounded white cards with soft borders, matching the `How it works` card in the mockup.

### Shared Style

```css
.detail-section-card {
  border: 1px solid var(--hp-border);
  border-radius: 13px;
  background: #ffffff;
  padding: 17px 18px;
  margin-bottom: 14px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 14px;
}

.detail-section-icon {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(93, 139, 63, 0.16);
  color: var(--hp-green);
}

.detail-section-icon svg {
  width: 25px;
  height: 25px;
  stroke-width: 2;
}

.detail-section-content h2 {
  margin: 0 0 6px;
}

.detail-section-content p,
.detail-section-content li {
  font-size: 15px;
  line-height: 1.45;
  font-weight: 500;
  color: var(--hp-ink);
}

.detail-section-content ul,
.detail-section-content ol {
  margin: 8px 0 0;
  padding-left: 20px;
}
```

---

## How to Play Section

This replaces `How it works` section in the screenshot. This information is extracted from the game's markdown file or Submit Game functionality.

### Required Content

Include:

1. **Game Setup**
2. **Rules**

### Layout

```html
<section class="detail-section-card how-to-play-section">
  <div class="detail-section-icon">
    <!-- lightbulb or play icon -->
  </div>
  <div class="detail-section-content">
    <h2 class="section-title">How to Play</h2>

    <h3>Game Setup</h3>
    <p>Prepare verse cards, mark the start and finish points, and divide players into teams.</p>

    <h3>Rules</h3>
    <ol>
      <li>Teams race to collect the scripture pieces.</li>
      <li>Players transport the pieces across the bridge area.</li>
      <li>The first team to build the verse in the correct order wins.</li>
    </ol>
  </div>
</section>
```

```css
.detail-section-content h3 {
  font-size: 15px;
  line-height: 1.25;
  font-weight: 800;
  color: var(--hp-ink);
  margin: 12px 0 4px;
}
```

### Data Fields

Recommended fields:

```js
howToPlay: {
  setup: "Prepare verse cards...",
  rules: ["Divide players into teams", "..."]
}
```

---

## Variations Section

Place below `How to Play`. This information is extracted from the game's markdown file or Submit Game functionality.

### Purpose

Show ways to make the game easier, harder, or different.


### Layout

```html
<section class="detail-section-card variations-section">
  <div class="detail-section-icon detail-section-icon--purple">
    <!-- shuffle/sliders/spark icon -->
  </div>
  <div class="detail-section-content">
    <h2 class="section-title">Variations</h2>

    <h3>Easier</h3>
    <p>Use shorter verses or fewer cards.</p>

    <h3>Harder</h3>
    <p>Add more verse pieces, obstacles, or memory-only rounds.</p>

    <h3>Different</h3>
    <p>Play as a relay, silent challenge, or large-group tournament.</p>
  </div>
</section>
```

```css
.detail-section-icon--purple {
  background: rgba(107, 63, 242, 0.14);
  color: var(--hp-purple);
}
```

---

## Possible Bible Verse Connections Section

Place below `Variations`. This information is extracted from the game's markdown file or Submit Game functionality.
On the bottom of this section, even if there is content already, add a button  "Suggest a Bible connection" Which will lead to a page to submit a verse and provide an explanation 

### Purpose

Connect the game to Scripture. This is especially important for youth pastors, church leaders, and Christian teachers.

### Required Content

Each Bible connection should include:

- Bible reference
- Short connection title or theme
- Description of how the game connects to the Scripture

### Layout

```html
<section class="detail-section-card bible-section">
  <div class="detail-section-icon detail-section-icon--blue">
    <!-- Bible/book icon -->
  </div>
  <div class="detail-section-content">
    <h2 class="section-title">Possible Bible Verse Connections</h2>

    <article class="bible-connection">
      <h3>Psalm 119:105 — God’s Word Guides Us</h3>
      <p>The bridge challenge can illustrate how Scripture helps us find the right path and put truth in the right order.</p>
    </article>
  </div>
</section>
```

```css
.detail-section-icon--blue {
  background: rgba(36, 87, 197, 0.13);
  color: var(--hp-blue);
}

.bible-connection + .bible-connection {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--hp-soft-border);
}
```

### Data Fields

Recommended fields:

```js
bibleConnections: [
  {
    reference: "Psalm 119:105",
    theme: "God’s Word Guides Us",
    description: "The game illustrates..."
  }
]
```

---

## Tips Section

Place below `Possible Bible Verse Connections`. This information is extracted from the game's markdown file or Submit Game functionality.

### Purpose

Give practical leader advice for running the game well.

### Content Examples

- Safety reminders.
- Group management tips.
- Material preparation tips.
- Ways to keep energy high.
- Ways to avoid confusion.

### Layout

```html
<section class="detail-section-card tips-section">
  <div class="detail-section-icon detail-section-icon--orange">
    <!-- tip/checklist icon -->
  </div>
  <div class="detail-section-content">
    <h2 class="section-title">Tips</h2>
    <ul>
      <li>Prepare the verse pieces before the session starts.</li>
      <li>Use clear boundaries so teams know where to run.</li>
      <li>For younger groups, demonstrate one full round first.</li>
    </ul>
  </div>
</section>
```

```css
.detail-section-icon--orange {
  background: rgba(201, 130, 45, 0.14);
  color: var(--hp-orange);
}
```

---

## Universal Footer

The footer is universal on all pages. Use `Universal footer.png` as the visual identity.

### Required Footer Items

Exactly these four items, in this order:

1. Find
2. Favorites
3. Icebreakers
4. Account

### Active State

On the individual game page, the active footer item should remain **Find**.

### Footer Layout

```html
<nav class="app-footer" aria-label="Primary navigation">
  <a class="footer-item is-active" href="#/find">
    <!-- search icon -->
    <span>Find</span>
  </a>
  <a class="footer-item" href="#/favorites">
    <!-- heart icon -->
    <span>Favorites</span>
  </a>
  <a class="footer-item" href="#/icebreakers">
    <!-- smile icon -->
    <span>Icebreakers</span>
  </a>
  <a class="footer-item" href="#/account">
    <!-- user icon -->
    <span>Account</span>
  </a>
</nav>
```

```css
.app-footer {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: min(100%, 430px);
  padding: 9px 18px calc(8px + env(safe-area-inset-bottom, 0px));
  background: rgba(255,255,255,0.96);
  border-top: 1px solid var(--hp-soft-border);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  z-index: 50;
  backdrop-filter: blur(14px);
}

.footer-item {
  min-height: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--hp-footer-inactive);
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}

.footer-item svg {
  width: 27px;
  height: 27px;
  stroke-width: 2;
}

.footer-item.is-active {
  color: var(--hp-green-dark);
}
```

### Footer Visual Requirements

- Match the attached universal footer: white background, soft top border, four evenly spaced icons, label below each icon.
- Icons should be outline style.
- Active `Find` item uses green.
- Inactive items use muted slate/navy.
- Must not show any extra footer items.

---

## Recommended Data Model

Use or adapt this structure for each game:

```js
const game = {
  id: "scripture-bridge-race",
  title: "Scripture Bridge Race",
  imageUrl: "assets/games/scripture-bridge-race.png",
  ratingAverage: 4.6,
  ratingCount: 5,
  isFavorite: false,
  ages: "10–15",
  players: "10–20",
  time: "15 min",
  materials: ["Paper", "Markers"],
  categories: ["Team-building"],
  summary: "Teams race to transport scripture stones across the bridge and build the verse in correct order.",
  howToPlay: {
    setup: "Prepare verse cards or scripture stones before the game begins. Mark a start line, bridge area, and assembly area.",
    rules: [
      "Divide players into teams.",
      "Teams race to move scripture pieces across the bridge area.",
      "Once all pieces are collected, teams arrange the verse in the correct order.",
      "The first team with the correct verse wins."
    ]
  },
  variations: {
    easier: "Use a short verse and fewer pieces.",
    harder: "Add obstacles, more pieces, or a memory-only round.",
    different: "Play as a relay, silent challenge, or tournament."
  },
  bibleConnections: [
    {
      reference: "Psalm 119:105",
      theme: "God’s Word Guides Us",
      description: "The game can illustrate how Scripture guides our steps and helps us put truth in the right order."
    }
  ],
  tips: [
    "Prepare materials before the session starts.",
    "Demonstrate one round before beginning.",
    "Use clear boundaries for safe movement."
  ],
  popularity: {
    upVotes: 0,
    downVotes: 0,
    score: 0
  }
};
```

---

## Interaction Requirements

### Back Button

- Tap target: at least `44px` by `44px`.
- Returns to previous screen.
- Fallback route: Find Games page.

### Share Button

- Tap target: at least `44px` by `44px`.
- Opens native share sheet when supported.
- Fallback copies current URL.

### Favorite Heart

- Toggles favorite state.
- Does not navigate.
- Updates UI immediately.
- Persist favorite state for the user.

### View Reviews

- Opens or scrolls to reviews.
- If reviews are not ready, show a non-blocking placeholder message.

### Add to Plan

- Opens Pick a Plan / Create New Plan screen.
- Must not immediately add to a random/default plan unless the app’s existing flow already does that intentionally.

### Thumbs Up / Thumbs Down

- Updates global popularity count.
- Must track per-user vote state to avoid repeated unlimited votes.
- Used later for sorting games.

### Add Notes

- Opens personal notes editor for this game.
- Notes are user-specific.

---

## Accessibility Requirements

- All icon-only buttons need clear `aria-label` values.
- Minimum tap target: `44px` square.
- Use semantic headings: one `h1`, then `h2` for sections.
- Do not rely on color alone for selected states.
- Rating stars should include readable text such as `4.6 out of 5 stars`.
- Images need descriptive `alt` text.
- Footer navigation must have `aria-label="Primary navigation"`.

---

## Implementation Checklist

- [ ] Build or update reusable individual game page component/view.
- [ ] Use universal footer exactly: Find, Favorites, Icebreakers, Account.
- [ ] Keep `Find` active in footer on game detail page.
- [ ] Header has back button, centered HooraPlaybook logo, and iOS share button.
- [ ] Remove sort/filter buttons from this page.
- [ ] Show game title below header.
- [ ] Show rating stars, rating text, favorite heart, and `View reviews` link.
- [ ] Game image uses `aspect-ratio: 1.55 / 1`.
- [ ] `+ Add to Plan` opens Pick a Plan / Create New Plan flow.
- [ ] Thumbs up and thumbs down are separate functional buttons.
- [ ] Thumbs buttons update popularity state with per-user vote protection.
- [ ] `Add Notes` opens user-specific notes editor.
- [ ] Show four metadata cards: Ages, Players, Time, Materials.
- [ ] Category section is static and not selectable.
- [ ] Category section has no right chevron.
- [ ] Limit categories to the approved list.
- [ ] Add How to Play section with Game Setup and Rules.
- [ ] Add Variations section.
- [ ] Add Possible Bible Verse Connections section.
- [ ] Add Tips section.
- [ ] Test on iPhone-size mobile viewport.
- [ ] Test long game titles.
- [ ] Test long materials text.
- [ ] Test missing image fallback.
- [ ] Test no ratings state.
- [ ] Test favorite, share, add to plan, vote, and notes interactions.

---

## Visual Summary

The final page should feel like a polished iOS-style HooraPlaybook detail screen:

- Header: circular back button, centered logo, circular share button.
- Title: large, bold, dark navy.
- Rating row: yellow stars, muted rating text, heart icon.
- Game image: large rounded rectangle with 1.55:1 aspect ratio.
- Primary action: full-width green `+ Add to Plan` button.
- Secondary actions: thumbs up/down segmented control and `Add Notes` button.
- Metadata: four compact rounded cards.
- Category: static rounded card with no chevron.
- Detail content: clear rounded cards for How to Play, Variations, Bible Connections, and Tips.
- Footer: universal four-item footer matching `Universal footer.png`.
