import {
  classifySongs,
  createSongExport,
  isCharacterVoiced,
  matchesCharacterQuery,
  parseRosterState,
  serializeRosterState,
} from "./matching.js?v=20261004-2";

const BRAND_LABELS = {
  ja: {
    "the-idolmaster": "765PRO ALLSTARS",
    "cinderella-girls": "CINDERELLA GIRLS",
    "million-live": "MILLION LIVE!",
    sidem: "SideM",
    "shiny-colors": "SHINY COLORS",
    "gakuen-idolmaster": "学園アイドルマスター",
    other: "その他",
  },
  en: {
    "the-idolmaster": "765PRO ALLSTARS",
    "cinderella-girls": "CINDERELLA GIRLS",
    "million-live": "MILLION LIVE!",
    sidem: "SideM",
    "shiny-colors": "SHINY COLORS",
    "gakuen-idolmaster": "学園アイドルマスター",
    other: "Other",
  },
};

const COPY = {
  ja: {
    documentTitle: "IM@S 予習リスト",
    description: "出演アイドルから、オリジナルメンバーがそろうアイドルマスター楽曲を探します。",
    homeLabel: "トップに戻る",
    languageLabel: "表示言語",
    appTitle: "IM@S 予習リスト",
    lede: "出演アイドルを選ぶと、オリジナルメンバーがそろう曲と、あと少しでそろう曲を探せます。",
    loading: "楽曲データを読み込んでいます…",
    pickerTitle: "出演アイドルを選ぶ",
    bulkImport: "出演者をまとめて入力",
    searchLabel: "アイドルを検索",
    searchPlaceholder: "名前・よみ・ローマ字・声優名で検索",
    hideUnvoiced: "ボイスなしのアイドルを非表示",
    selectedPrefix: "選択中",
    peopleSuffix: "人",
    clearSelection: "すべて解除",
    includeMissingTwo: "あと2人の候補も表示",
    findSongs: "このメンバーで楽曲を探す",
    resultsTitle: "予習する楽曲",
    exportResults: "JSONを書き出す",
    backToSelection: "メンバー選択に戻る",
    excludeSoloSongs: "ソロ曲を除外",
    compactResults: "コンパクト表示",
    footer: "非公式のファンツールです。楽曲データは「最初に確認できた録音の歌唱者」を基準に整理しています。",
    brandFilterLabel: "ブランドで絞り込む",
    allBrands: "すべて",
    visibleCount: "{count}人",
    visibleCountOne: "{count}人",
    emptyIdols: "条件に合うアイドルが見つかりません。",
    selectedAria: "{name} 選択済み",
    selectAria: "{name} を選択",
    removeAria: "{name}を選択解除",
    originalMembers: "オリジナルメンバー",
    missing: "不足",
    firstRelease: "初出: {date}",
    noSongs: "該当曲はありません。",
    resultSummary: "{performers}人の編成から {songs}曲を表示{filter}",
    resultSummaryOne: "{performers}人の編成から {songs}曲を表示{filter}",
    soloFilterSummary: "（ソロ曲を除外）",
    exactTitle: "全員そろっている曲",
    exactDescription: "オリジナルメンバーが全員、選択した編成に含まれます。",
    missingOneTitle: "あと1人でそろう曲",
    missingOneDescription: "選択済みメンバーが2人以上いて、オリジナルメンバーが1人不足しています。",
    missingTwoTitle: "あと2人でそろう曲",
    missingTwoDescription: "選択済みメンバーが2人以上いて、オリジナルメンバーが2人不足しています。",
    loadError: "データを読み込めませんでした。ページを再読み込みしてください。",
  },
  en: {
    documentTitle: "IM@S Prep List",
    description: "Find IDOLM@STER songs whose canonical performers are represented by a selected concert roster.",
    homeLabel: "Return to the home page",
    languageLabel: "Display language",
    appTitle: "IM@S Prep List",
    lede: "Select the performers appearing at a show to find songs with complete or nearly complete canonical lineups.",
    loading: "Loading song data…",
    pickerTitle: "Select performers",
    bulkImport: "Import a performer list",
    searchLabel: "Search performers",
    searchPlaceholder: "Search by name, reading, romanization, or voice actor",
    hideUnvoiced: "Hide unvoiced idols",
    selectedPrefix: "Selected:",
    peopleSuffix: "",
    clearSelection: "Clear all",
    includeMissingTwo: "Include songs missing two performers",
    findSongs: "Find songs for this roster",
    resultsTitle: "Songs to prepare",
    exportResults: "Export JSON",
    backToSelection: "Back to performer selection",
    excludeSoloSongs: "Exclude solo songs",
    compactResults: "Compact view",
    footer: "This is an unofficial fan tool. Song data is organized by the performers credited on the earliest identified recording.",
    brandFilterLabel: "Filter by brand",
    allBrands: "All",
    visibleCount: "{count} idols",
    visibleCountOne: "{count} idol",
    emptyIdols: "No idols match these filters.",
    selectedAria: "{name}, selected",
    selectAria: "Select {name}",
    removeAria: "Remove {name} from the selection",
    originalMembers: "Canonical performers",
    missing: "Missing",
    firstRelease: "First release: {date}",
    noSongs: "No matching songs.",
    resultSummary: "Showing {songs} songs for a roster of {performers}{filter}",
    resultSummaryOne: "Showing {songs} song for a roster of {performers}{filter}",
    soloFilterSummary: " (solo songs excluded)",
    exactTitle: "Complete canonical lineups",
    exactDescription: "Every canonical performer is included in the selected roster.",
    missingOneTitle: "Missing one performer",
    missingOneDescription: "At least two selected performers are present, with one canonical performer missing.",
    missingTwoTitle: "Missing two performers",
    missingTwoDescription: "At least two selected performers are present, with two canonical performers missing.",
    loadError: "The data could not be loaded. Please reload the page.",
  },
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

const initialLanguage = new URLSearchParams(location.search).get("lang") === "en"
  ? "en"
  : "ja";

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
  matches: null,
  language: initialLanguage,
  loadFailed: false,
};

const elements = {
  description: document.querySelector('meta[name="description"]'),
  headerHome: document.querySelector(".header-home"),
  languageButtons: document.querySelectorAll("[data-language]"),
  bulkImportLink: document.querySelector(".bulk-import-link"),
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
  exportResults: document.querySelector("#export-results"),
  results: document.querySelector("#results"),
  resultSummary: document.querySelector("#result-summary"),
  resultGroups: document.querySelector("#result-groups"),
};

function t(key, values = {}) {
  return COPY[state.language][key].replace(
    /\{(\w+)\}/gu,
    (_, name) => String(values[name] ?? ""),
  );
}

function applyStaticCopy() {
  document.documentElement.lang = state.language;
  document.title = t("documentTitle");
  elements.description.content = t("description");
  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = t(element.dataset.i18n);
  }
  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  }
  for (const element of document.querySelectorAll("[data-i18n-aria]")) {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  }
  for (const button of elements.languageButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  }
  const languageQuery = state.language === "en" ? "?lang=en" : "";
  elements.headerHome.href = `./${languageQuery}`;
  elements.bulkImportLink.href = `./import.html${languageQuery}`;
}

function updateLanguageInUrl() {
  const url = new URL(location.href);
  if (state.language === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

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
    button.textContent = brand === "all"
      ? t("allBrands")
      : (BRAND_LABELS[state.language][brand] ?? brand);
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

  elements.visibleCount.textContent = t(
    visible.length === 1 ? "visibleCountOne" : "visibleCount",
    { count: visible.length },
  );
  elements.idolGrid.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty-grid";
    empty.textContent = t("emptyIdols");
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
    button.setAttribute(
      "aria-label",
      t(selected ? "selectedAria" : "selectAria", { name: character.name }),
    );
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
    button.setAttribute("aria-label", t("removeAria", { name: character.name }));
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
  list.textContent = ids.map(characterName).join(state.language === "ja" ? "、" : ", ");
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
  canonicalLabel.textContent = t("originalMembers");
  canonical.append(canonicalLabel, performerList(match.song.canonical_performer_ids, ""));
  article.append(canonical);

  if (kind !== "exact") {
    const missing = document.createElement("p");
    missing.className = "performer-line missing-line";
    const missingLabel = document.createElement("span");
    missingLabel.textContent = t("missing");
    missing.append(
      missingLabel,
      performerList(match.missingPerformerIds, "missing-names"),
    );
    article.append(missing);
  }

  if (match.song.provenance.release_date) {
    const date = document.createElement("p");
    date.className = "release-date";
    date.textContent = t("firstRelease", { date: match.song.provenance.release_date });
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
    empty.textContent = t("noSongs");
    section.append(empty);
  } else {
    const grid = document.createElement("div");
    grid.className = "song-grid";
    for (const match of matches) grid.append(renderSongCard(match, kind));
    section.append(grid);
  }
  return section;
}

function runSearch({ updateUrl = true, scroll = true } = {}) {
  if (!state.selectedIds.size) return;
  state.includeMissingTwo = elements.includeMissingTwo.checked;
  state.excludeSoloSongs = elements.excludeSoloSongs.checked;
  state.compactResults = elements.compactResults.checked;
  state.hasSearched = true;

  const matches = classifySongs(state.catalog.songs, state.selectedIds, {
    includeMissingTwo: state.includeMissingTwo,
    excludeSoloSongs: state.excludeSoloSongs,
  });
  state.matches = matches;
  const total = matches.exact.length + matches.missingOne.length + matches.missingTwo.length;
  elements.exportResults.disabled = total === 0;
  const filterSummary = state.excludeSoloSongs ? t("soloFilterSummary") : "";
  elements.resultSummary.textContent = t(total === 1 ? "resultSummaryOne" : "resultSummary", {
    performers: state.selectedIds.size,
    songs: total,
    filter: filterSummary,
  });
  elements.resultGroups.replaceChildren(
    renderResultGroup(
      t("exactTitle"),
      t("exactDescription"),
      matches.exact,
      "exact",
    ),
    renderResultGroup(
      t("missingOneTitle"),
      t("missingOneDescription"),
      matches.missingOne,
      "one",
    ),
  );
  if (state.includeMissingTwo) {
    elements.resultGroups.append(
      renderResultGroup(
        t("missingTwoTitle"),
        t("missingTwoDescription"),
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
      state.language,
    );
    history.replaceState(null, "", `${location.pathname}${query}${location.hash}`);
  }
  if (scroll) elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportResults() {
  if (!state.matches) return;

  const contents = `${JSON.stringify(createSongExport(state.matches), null, 2)}\n`;
  const url = URL.createObjectURL(
    new Blob([contents], { type: "application/json;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "imas-yoshu-song-list.json";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function setLanguage(language) {
  if (language === state.language) return;
  state.language = language;
  applyStaticCopy();
  updateLanguageInUrl();

  if (state.catalog) {
    renderBrandFilters();
    renderIdols();
    renderSelected();
    if (state.hasSearched) runSearch({ updateUrl: false, scroll: false });
  } else if (state.loadFailed) {
    elements.status.textContent = t("loadError");
  }
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
    state.language = restored.language;
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
    state.loadFailed = true;
    elements.status.className = "load-status load-error";
    elements.status.textContent = t("loadError");
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
  state.matches = null;
  elements.exportResults.disabled = true;
  elements.results.hidden = true;
  history.replaceState(
    null,
    "",
    `${location.pathname}${state.language === "en" ? "?lang=en" : ""}`,
  );
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
elements.exportResults.addEventListener("click", exportResults);
for (const button of elements.languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

applyStaticCopy();
initialize();
