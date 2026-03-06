const featuredDeck = {
  name: "Mono-White Lifegain Swarm 60",
  summary:
    "Mono-white is the cleanest first build from the tracked pool. The deck gains life early, turns those triggers into pressure with Ajani's Pridemate, and closes by going wide with cats, rabbits, soldiers, and anthem-like finishers.",
  pillars: [
    "Open on Hinterland Sanctifier, Savannah Lions, or another low-curve threat, then convert early life gain into real pressure with Ajani's Pridemate.",
    "Use Resolute Reinforcements, Release the Dogs, Felidar Retreat, and Regal Caracal to widen the board instead of leaning on one creature.",
    "Linden, Lyra Dawnbringer, and Syr Alin give the deck a stronger top end without forcing a second color right now."
  ],
  groups: [
    {
      name: "Creatures (23)",
      items: [
        ["Hinterland Sanctifier", 3],
        ["Savannah Lions", 1],
        ["Ajani's Pridemate", 2],
        ["Charming Prince", 1],
        ["Cat Collector", 1],
        ["Resolute Reinforcements", 1],
        ["Mentor of the Meek", 1],
        ["Inspiring Overseer", 1],
        ["Angel of Vitality", 1],
        ["Ballynock Banneret", 1],
        ["Crusader of Odric", 1],
        ["Dawnwing Marshal", 1],
        ["Felidar Cub", 1],
        ["Hare Apparent", 1],
        ["Knight of Grace", 1],
        ["Dazzling Angel", 1],
        ["Linden, the Steadfast Queen", 1],
        ["Syr Alin, the Lion's Claw", 1],
        ["Regal Caracal", 1],
        ["Lyra Dawnbringer", 1],
        ["Angel of Finality", 1]
      ]
    },
    {
      name: "Spells (13)",
      items: [
        ["Stasis Snare", 2],
        ["Banishing Light", 1],
        ["Felidar Retreat", 1],
        ["Oppressive Rays", 1],
        ["Twinblade Blessing", 1],
        ["Angelic Destiny", 1],
        ["Disenchant", 1],
        ["Valorous Stance", 1],
        ["Stroke of Midnight", 1],
        ["Make a Stand", 1],
        ["Phalanx Formation", 1],
        ["Release the Dogs", 1]
      ]
    },
    {
      name: "Lands (24)",
      items: [["Plains", 24]]
    }
  ],
  flex: [
    "Move Angel of Finality to the side if graveyard decks are rare and you want a lower curve body instead.",
    "Bring in Fumigate against creature mirrors where the board stalls or your opponent out-swarms you.",
    "If you add more Ajani's Pridemate, Inspiring Overseer, or Regal Caracal later, replace the weakest singletons first."
  ]
};

const state = {
  inventory: { sections: [], cards: [] },
  search: "",
  color: "all",
  type: "all"
};

const refs = {
  searchInput: document.querySelector("#searchInput"),
  colorFilter: document.querySelector("#colorFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  summaryGrid: document.querySelector("#summaryGrid"),
  inventoryStatus: document.querySelector("#inventoryStatus"),
  inventorySections: document.querySelector("#inventorySections"),
  featuredDeck: document.querySelector("#featuredDeck")
};

init().catch((error) => {
  refs.inventoryStatus.textContent = "Inventory note failed to load.";
  refs.inventorySections.innerHTML = `<p class="empty-state">${escapeHtml(error.message)}</p>`;
});

async function init() {
  renderFeaturedDeck();
  bindControls();
  const inventoryText = await loadInventory();
  state.inventory = parseInventory(inventoryText);
  populateTypeFilter(state.inventory.cards);
  render();
}

function bindControls() {
  refs.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  refs.colorFilter.addEventListener("change", (event) => {
    state.color = event.target.value;
    render();
  });

  refs.typeFilter.addEventListener("change", (event) => {
    state.type = event.target.value;
    render();
  });
}

async function loadInventory() {
  const path = encodeURI("Cards/Card Inventory.md");
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Could not read ${path}.`);
  }
  return response.text();
}

function parseInventory(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const sections = [];
  let currentSection = null;
  let currentBucket = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (/^##\s+Held For Verification/i.test(line)) {
      break;
    }

    const detailsMatch = line.match(/^<summary><strong>(.+?)<\/strong><\/summary>$/i);
    if (detailsMatch) {
      currentSection = createSection(detailsMatch[1]);
      sections.push(currentSection);
      currentBucket = null;
      continue;
    }

    const sectionMatch = line.match(/^###\s+(.+)$/);
    if (sectionMatch) {
      currentSection = createSection(sectionMatch[1]);
      sections.push(currentSection);
      currentBucket = null;
      continue;
    }

    const bucketMatch = line.match(/^####\s+(.+)$/);
    if (bucketMatch && currentSection) {
      currentBucket = { name: bucketMatch[1], cards: [] };
      currentSection.buckets.push(currentBucket);
      continue;
    }

    if (!line.startsWith("- ") || !currentSection || !currentBucket) {
      continue;
    }

    const entry = parseCardLine(line.slice(2));
    if (!entry) {
      continue;
    }

    entry.section = currentSection.name;
    entry.bucket = currentBucket.name;
    currentBucket.cards.push(entry);
  }

  const cards = sections.flatMap((section) =>
    section.buckets.flatMap((bucket) => bucket.cards)
  );

  return { sections, cards };
}

function createSection(name) {
  return {
    name,
    buckets: [],
    tone: inferSectionTone(name)
  };
}

function parseCardLine(line) {
  const match = line.match(/^\[\[(.+?)\]\]\s+x(\d+)\s+\|\s+(.+?)\s+\|\s+(.+?)\s+\|\s+(.+?)\s+\|\s+(.+)$/);
  if (!match) {
    return null;
  }

  const [, name, quantity, colorText, typeText, creatureText, tagText] = match;
  const tags = tagText.split(/\s+/).filter(Boolean);
  const colorTags = tags
    .filter((tag) => tag.startsWith("#color/"))
    .map((tag) => tag.replace("#color/", ""));
  const typeTags = tags
    .filter((tag) => tag.startsWith("#type/"))
    .map((tag) => tag.replace("#type/", ""));
  const creatureTags = tags
    .filter((tag) => tag.startsWith("#creature-type/"))
    .map((tag) => tag.replace("#creature-type/", ""));

  return {
    name,
    quantity: Number(quantity),
    colorText,
    typeText,
    creatureText,
    tags,
    colorTags,
    typeTags,
    creatureTags,
    searchable: [name, colorText, typeText, creatureText, tags.join(" ")].join(" ").toLowerCase()
  };
}

function populateTypeFilter(cards) {
  const types = Array.from(
    new Set(cards.flatMap((card) => card.typeTags))
  ).sort((left, right) => left.localeCompare(right));

  const options = ['<option value="all">All types</option>'].concat(
    types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(titleCase(type))}</option>`)
  );

  refs.typeFilter.innerHTML = options.join("");
}

function render() {
  const filteredSections = state.inventory.sections
    .map((section) => ({
      ...section,
      buckets: section.buckets
        .map((bucket) => ({
          ...bucket,
          cards: bucket.cards.filter(matchesFilters)
        }))
        .filter((bucket) => bucket.cards.length > 0)
    }))
    .filter((section) => section.buckets.length > 0);

  const filteredCards = filteredSections.flatMap((section) =>
    section.buckets.flatMap((bucket) => bucket.cards)
  );

  renderSummary(filteredSections, filteredCards);
  renderInventory(filteredSections, filteredCards.length);
}

function matchesFilters(card) {
  const matchesSearch = !state.search || card.searchable.includes(state.search);
  const matchesColor = state.color === "all" || card.colorTags.includes(state.color);
  const matchesType = state.type === "all" || card.typeTags.includes(state.type);
  return matchesSearch && matchesColor && matchesType;
}

function renderSummary(sections, cards) {
  const uniqueCards = cards.length;
  const totalCopies = cards.reduce((sum, card) => sum + card.quantity, 0);

  const sectionCards = sections.map((section) => {
    const cardsInSection = section.buckets.flatMap((bucket) => bucket.cards);
    const quantity = cardsInSection.reduce((sum, card) => sum + card.quantity, 0);
    return { name: section.name, unique: cardsInSection.length, quantity };
  });

  const cardsHtml = [
    summaryCard("Unique entries", uniqueCards, "Distinct rows after filters"),
    summaryCard("Total quantity", totalCopies, "Copies counted from the inventory note")
  ].concat(
    sectionCards.map((section) => summaryCard(section.name, section.unique, `${section.quantity} total copies`))
  );

  refs.summaryGrid.innerHTML = cardsHtml.join("");
}

function summaryCard(label, value, subtle) {
  return `
    <article class="summary-card">
      <span class="metric-label">${escapeHtml(label)}</span>
      <p class="metric-value">${escapeHtml(String(value))}</p>
      <p class="metric-subtle">${escapeHtml(subtle)}</p>
    </article>
  `;
}

function renderInventory(sections, totalMatches) {
  if (!sections.length) {
    refs.inventoryStatus.textContent = "No cards matched the current filters.";
    refs.inventorySections.innerHTML = '<p class="empty-state">Clear or widen the filters to see more of the vault.</p>';
    return;
  }

  refs.inventoryStatus.textContent = `${totalMatches} card rows matched the current filters.`;
  refs.inventorySections.innerHTML = sections.map(renderSection).join("");
}

function renderSection(section) {
  const cardsInSection = section.buckets.flatMap((bucket) => bucket.cards);
  const quantity = cardsInSection.reduce((sum, card) => sum + card.quantity, 0);

  return `
    <details class="section-block" open>
      <summary>
        <div class="section-title-wrap">
          <span class="section-swatch" data-color="${escapeHtml(section.tone)}"></span>
          <div>
            <h3 class="section-title">${escapeHtml(section.name)}</h3>
            <p class="bucket-copy">${cardsInSection.length} unique entries and ${quantity} total copies</p>
          </div>
        </div>
        <span class="section-count">${escapeHtml(String(section.buckets.length))} buckets</span>
      </summary>
      <div class="section-body">
        ${section.buckets.map(renderBucket).join("")}
      </div>
    </details>
  `;
}

function renderBucket(bucket) {
  const quantity = bucket.cards.reduce((sum, card) => sum + card.quantity, 0);
  return `
    <section class="bucket">
      <div class="bucket-head">
        <h3>${escapeHtml(bucket.name)}</h3>
        <p class="bucket-copy">${bucket.cards.length} entries and ${quantity} copies</p>
      </div>
      <div class="card-grid">
        ${bucket.cards.map(renderCard).join("")}
      </div>
    </section>
  `;
}

function renderCard(card) {
  const metaChips = [card.colorText, card.typeText]
    .concat(card.creatureText !== "-" ? [card.creatureText] : [])
    .map((value) => `<span class="meta-chip">${escapeHtml(value)}</span>`)
    .join("");

  return `
    <article class="card-row">
      <div class="card-top">
        <div>
          <h4 class="card-name">${escapeHtml(card.name)}</h4>
          <p class="card-meta">${escapeHtml(card.section)} | ${escapeHtml(card.bucket)}</p>
        </div>
        <span class="quantity-pill">x${escapeHtml(String(card.quantity))}</span>
      </div>
      <div class="card-tags">${metaChips}</div>
      <div class="card-tags">
        ${card.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderFeaturedDeck() {
  const groups = featuredDeck.groups
    .map(
      (group) => `
        <section class="deck-group">
          <h3>${escapeHtml(group.name)}</h3>
          <ul class="deck-list">
            ${group.items
              .map(([name, quantity]) => `<li>${escapeHtml(String(quantity))}x ${escapeHtml(name)}</li>`)
              .join("")}
          </ul>
        </section>
      `
    )
    .join("");

  const pillars = featuredDeck.pillars
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const flex = featuredDeck.flex
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  refs.featuredDeck.innerHTML = `
    <p class="deck-summary">${escapeHtml(featuredDeck.summary)}</p>
    <section class="deck-group">
      <h3>Game plan</h3>
      <ul class="deck-notes">${pillars}</ul>
    </section>
    ${groups}
    <section class="deck-group">
      <h3>Flex notes</h3>
      <ul class="deck-notes">${flex}</ul>
    </section>
  `;
}

function inferSectionTone(sectionName) {
  const normalized = sectionName.toLowerCase();
  if (normalized.includes("green")) return "green";
  if (normalized.includes("red")) return "red";
  if (normalized.includes("blue")) return "blue";
  if (normalized.includes("white")) return "white";
  if (normalized.includes("black")) return "black";
  if (normalized.includes("dual") || normalized.includes("multi")) return "multi";
  if (normalized.includes("colorless") || normalized.includes("artifact") || normalized.includes("land")) return "colorless";
  return "multi";
}

function titleCase(value) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
