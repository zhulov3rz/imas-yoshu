import {
  classifySongs,
  isCharacterVoiced,
  matchesCharacterQuery,
  parseRosterState,
  serializeRosterState,
} from "./matching.js?v=20260927-6";

const BRAND_LABELS = {
  "the-idolmaster": "765PRO ALLSTARS",
  "cinderella-girls": "CINDERELLA GIRLS",
  "million-live": "MILLION LIVE!",
  sidem: "SideM",
  "shiny-colors": "SHINY COLORS",
  "gakuen-idolmaster": "学園アイドルマスター",
  other: "その他",
};

const BRAND_ORDER = [
  "the-idolmaster",
  "cinderella-girls",
  "million-live",
  "sidem",
  "shiny-colors",
  "gakuen-idolmaster",
  "other",
];

const state = {
  catalog: null,
  charactersById: new Map(),
  selectedIds: new Set(),
  query: "",
  brand: "all",
  hideUnvoicedIdols: true,
  includeMissingTwo: true,
  excludeSoloSongs: true,
  compactResults: false,
  hasSearched: false,
};

const elements = {
  status: document.querySelector("#status"),
  app: document.querySelector("#app"),
  searchInput: document.querySelector("#idol-search"),
  brandFilters: document.querySelector("#brand-filters"),
  hideUnvoicedIdols: document.querySelector("#hide-unvoiced-idols"),
  idolGrid: document.querySelector("#idol-grid"),
  visibleCount: document.querySelector("#visible-count"),
  selectedTray: document.querySelector("#selected-tray"),
  selectedList: document.querySelector("#selected-list"),
  selectedCount: document.querySelector("#selected-count"),
  clearSelection: document.querySelector("#clear-selection"),
  findSongs: document.querySelector("#find-songs"),
  includeMissingTwo: document.querySelector("#include-missing-two"),
  excludeSoloSongs: document.querySelector("#exclude-solo-songs"),
  compactResults: document.querySelector("#compact-results"),
  results: document.querySelector("#results"),
  resultSummary: document.querySelector("#result-summary"),
  resultGroups: document.querySelector("#result-groups"),
};

function characterSort(left, right) {
  return (
    left.name_kana.localeCompare(right.name_kana, "ja") ||
    left.id.localeCompare(right.id)
  );
}

function characterName(id) {
  return state.charactersById.get(id)?.name ?? id;
}

function makeCharacterImage(character, eager = false) {
  const image = document.createElement("img");
  image.src = character.thumbnail_path;
  image.alt = "";
  image.loading = eager ? "eager" : "lazy";
  image.decoding = "async";
  image.width = 112;
  image.height = 112;
  return image;
}

function renderBrandFilters() {
  const availableBrands = new Set(state.catalog.characters.map((item) => item.brand));
  const brands = BRAND_ORDER.filter((brand) => availableBrands.has(brand));
  elements.brandFilters.replaceChildren();
  for (const brand of ["all", ...brands]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip";
    button.dataset.brand = brand;
    button.textContent = brand === "all" ? "すべて" : (BRAND_LABELS[brand] ?? brand);
    button.setAttribute("aria-pressed", String(state.brand === brand));
    button.addEventListener("click", () => {
      state.brand = brand;
      renderBrandFilters();
      renderIdols();
    });
    elements.brandFilters.append(button);
  }
}

function renderIdols() {
  const visible = state.catalog.characters
    .filter((character) => state.brand === "all" || character.brand === state.brand)
    .filter((character) => !state.hideUnvoicedIdols || isCharacterVoiced(character))
    .filter((character) => matchesCharacterQuery(character, state.query))
    .sort(characterSort);

  elements.visibleCount.textContent = `${visible.length}人`;
  elements.idolGrid.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty-grid";
    empty.textContent = "条件に合うアイドルが見つかりません。";
    elements.idolGrid.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  visible.forEach((character, index) => {
    const selected = state.selectedIds.has(character.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "idol-card";
    button.dataset.characterId = character.id;
    button.setAttribute("aria-pressed", String(selected));
    button.setAttribute("aria-label", `${character.name}${selected ? " 選択済み" : " を選択"}`);
    button.append(makeCharacterImage(character, index < 12));

    const copy = document.createElement("span");
    copy.className = "idol-card-copy";
    const name = document.createElement("strong");
    name.textContent = character.name;
    const kana = document.createElement("small");
    kana.textContent = character.name_kana;
    copy.append(name, kana);

    const check = document.createElement("span");
    check.className = "selection-mark";
    check.setAttribute("aria-hidden", "true");
    check.textContent = "✓";
    button.append(copy, check);
    button.addEventListener("click", () => toggleCharacter(character.id));
    fragment.append(button);
  });
  elements.idolGrid.append(fragment);
}

function toggleCharacter(id) {
  if (state.selectedIds.has(id)) state.selectedIds.delete(id);
  else state.selectedIds.add(id);
  renderIdols();
  renderSelected();
}

function renderSelected() {
  const selectedCharacters = [...state.selectedIds]
    .map((id) => state.charactersById.get(id))
    .filter(Boolean)
    .sort(characterSort);

  elements.selectedCount.textContent = String(selectedCharacters.length);
  elements.selectedTray.hidden = selectedCharacters.length === 0;
  elements.findSongs.disabled = selectedCharacters.length === 0;
  elements.selectedList.replaceChildren();

  for (const character of selectedCharacters) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "selected-chip";
    button.setAttribute("aria-label", `${character.name}を選択解除`);
    button.append(makeCharacterImage(character));
    const label = document.createElement("span");
    label.textContent = character.name;
    const remove = document.createElement("span");
    remove.setAttribute("aria-hidden", "true");
    remove.textContent = "×";
    button.append(label, remove);
    button.addEventListener("click", () => toggleCharacter(character.id));
    elements.selectedList.append(button);
  }
}

function performerList(ids, className) {
  const list = document.createElement("span");
  list.className = className;
  list.textContent = ids.map(characterName).join("、");
  return list;
}

function renderSongCard(match, kind) {
  const article = document.createElement("article");
  article.className = "song-card";

  const heading = document.createElement("h3");
  heading.textContent = match.song.title;
  article.append(heading);

  const canonical = document.createElement("p");
  canonical.className = "performer-line";
  const canonicalLabel = document.createElement("span");
  canonicalLabel.textContent = "オリジナルメンバー";
  canonical.append(canonicalLabel, performerList(match.song.canonical_performer_ids, ""));
  article.append(canonical);

  if (kind !== "exact") {
    const missing = document.createElement("p");
    missing.className = "performer-line missing-line";
    const missingLabel = document.createElement("span");
    missingLabel.textContent = "不足";
    missing.append(
      missingLabel,
      performerList(match.missingPerformerIds, "missing-names"),
    );
    article.append(missing);
  }

  if (match.song.provenance.release_date) {
    const date = document.createElement("p");
    date.className = "release-date";
    date.textContent = `初出: ${match.song.provenance.release_date}`;
    article.append(date);
  }
  return article;
}

function renderResultGroup(title, description, matches, kind) {
  const section = document.createElement("section");
  section.className = `result-group result-group-${kind}`;

  const header = document.createElement("div");
  header.className = "result-group-header";
  const heading = document.createElement("h2");
  heading.textContent = title;
  const count = document.createElement("span");
  count.textContent = String(matches.length);
  header.append(heading, count);
  const detail = document.createElement("p");
  detail.textContent = description;
  section.append(header, detail);

  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "該当曲はありません。";
    section.append(empty);
  } else {
    const grid = document.createElement("div");
    grid.className = "song-grid";
    for (const match of matches) grid.append(renderSongCard(match, kind));
    section.append(grid);
  }
  return section;
}

function runSearch({ updateUrl = true } = {}) {
  if (!state.selectedIds.size) return;
  state.includeMissingTwo = elements.includeMissingTwo.checked;
  state.excludeSoloSongs = elements.excludeSoloSongs.checked;
  state.compactResults = elements.compactResults.checked;
  state.hasSearched = true;

  const matches = classifySongs(state.catalog.songs, state.selectedIds, {
    includeMissingTwo: state.includeMissingTwo,
    excludeSoloSongs: state.excludeSoloSongs,
  });
  const total = matches.exact.length + matches.missingOne.length + matches.missingTwo.length;
  const filterSummary = state.excludeSoloSongs ? "（ソロ曲を除外）" : "";
  elements.resultSummary.textContent =
    `${state.selectedIds.size}人の編成から ${total}曲を表示${filterSummary}`;
  elements.resultGroups.replaceChildren(
    renderResultGroup(
      "全員そろっている曲",
      "オリジナルメンバーが全員、選択した編成に含まれます。",
      matches.exact,
      "exact",
    ),
    renderResultGroup(
      "あと1人でそろう曲",
      "選択済みメンバーが2人以上いて、オリジナルメンバーが1人不足しています。",
      matches.missingOne,
      "one",
    ),
  );
  if (state.includeMissingTwo) {
    elements.resultGroups.append(
      renderResultGroup(
        "あと2人でそろう曲",
        "選択済みメンバーが2人以上いて、オリジナルメンバーが2人不足しています。",
        matches.missingTwo,
        "two",
      ),
    );
  }
  elements.results.hidden = false;
  elements.results.classList.toggle("compact-results", state.compactResults);

  if (updateUrl) {
    const query = serializeRosterState(
      [...state.selectedIds],
      state.includeMissingTwo,
      state.excludeSoloSongs,
      state.compactResults,
    );
    history.replaceState(null, "", `${location.pathname}${query}${location.hash}`);
  }
  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function initialize() {
  try {
    const response = await fetch("./data/catalog.json");
    if (!response.ok) throw new Error(`catalog request failed (${response.status})`);
    const catalog = await response.json();
    if (!Array.isArray(catalog.characters) || !Array.isArray(catalog.songs)) {
      throw new Error("catalog has an unsupported shape");
    }

    state.catalog = catalog;
    state.charactersById = new Map(catalog.characters.map((item) => [item.id, item]));
    const restored = parseRosterState(location.search, state.charactersById.keys());
    state.selectedIds = new Set(restored.selectedIds);
    state.includeMissingTwo = restored.includeMissingTwo;
    state.excludeSoloSongs = restored.excludeSoloSongs;
    state.compactResults = restored.compactResults;
    elements.includeMissingTwo.checked = restored.includeMissingTwo;
    elements.excludeSoloSongs.checked = restored.excludeSoloSongs;
    elements.compactResults.checked = restored.compactResults;

    renderBrandFilters();
    renderIdols();
    renderSelected();
    elements.status.hidden = true;
    elements.app.hidden = false;

    if (state.selectedIds.size) runSearch({ updateUrl: false });
  } catch (error) {
    console.error(error);
    elements.status.className = "load-status load-error";
    elements.status.textContent = "データを読み込めませんでした。ページを再読み込みしてください。";
  }
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderIdols();
});
elements.hideUnvoicedIdols.addEventListener("change", (event) => {
  state.hideUnvoicedIdols = event.target.checked;
  renderIdols();
});
elements.clearSelection.addEventListener("click", () => {
  state.selectedIds.clear();
  renderIdols();
  renderSelected();
  elements.results.hidden = true;
  history.replaceState(null, "", location.pathname);
});
elements.findSongs.addEventListener("click", () => runSearch());
elements.includeMissingTwo.addEventListener("change", () => {
  if (state.hasSearched) runSearch();
});
elements.excludeSoloSongs.addEventListener("change", () => {
  if (state.hasSearched) runSearch();
});
elements.compactResults.addEventListener("change", () => {
  if (state.hasSearched) runSearch();
});

initialize();
