import { detectImportedCharacters } from "./importing.js?v=20261004-2";
import { serializeRosterState } from "./matching.js?v=20261004-2";

const MATCH_KIND_LABELS = {
  ja: {
    idol: "アイドル名",
    actor: "声優名",
    romaji: "ローマ字",
  },
  en: {
    idol: "Idol name",
    actor: "Voice actor name",
    romaji: "Romanized name",
  },
};

const COPY = {
  ja: {
    documentTitle: "出演者をまとめて入力 | IM@S 予習リスト",
    description: "アイドル名や声優名の一覧から、IM@S 予習リストの出演者をまとめて選択します。",
    homeLabel: "トップに戻る",
    languageLabel: "表示言語",
    appTitle: "IM@S 予習リスト",
    lede: "出演者の一覧を貼り付けて、まとめて選択できます。",
    loading: "アイドルデータを読み込んでいます…",
    importTitle: "出演者をまとめて入力",
    backToPicker: "通常の選択に戻る",
    instructions: "アイドル名または声優名を含むテキストを貼り付けてください。改行、読点、カンマなどで区切れます。同じ声優が複数のアイドルを担当している場合は、該当する全員を検出します。",
    inputLabel: "出演者情報",
    inputPlaceholder: "例：\n中村 繪里子\n如月 千早\nMachico",
    emptySummary: "名前を入力すると、検出結果がここに表示されます。",
    submit: "検出したアイドルを選択",
    detectedTitle: "検出したアイドル",
    unmatchedTitle: "検出できなかった入力",
    footer: "非公式のファンツールです。",
    detectedSummary: "{count}人を検出しました。",
    detectedSummaryOne: "{count}人を検出しました。",
    loadError: "データを読み込めませんでした。ページを再読み込みしてください。",
  },
  en: {
    documentTitle: "Import performers | IM@S Prep List",
    description: "Select performers in IM@S Prep List by pasting a list of idol or voice actor names.",
    homeLabel: "Return to the home page",
    languageLabel: "Display language",
    appTitle: "IM@S Prep List",
    lede: "Paste a performer list to select everyone at once.",
    loading: "Loading idol data…",
    importTitle: "Import a performer list",
    backToPicker: "Back to regular selection",
    instructions: "Paste text containing idol or voice actor names. Entries can be separated by line breaks, Japanese commas, or standard commas. If one voice actor represents multiple idols, every matching idol will be detected.",
    inputLabel: "Performer information",
    inputPlaceholder: "Example:\n中村 繪里子\n如月 千早\nMachico",
    emptySummary: "Enter names to see detected performers here.",
    submit: "Select detected idols",
    detectedTitle: "Detected idols",
    unmatchedTitle: "Unmatched input",
    footer: "This is an unofficial fan tool.",
    detectedSummary: "Detected {count} idols.",
    detectedSummaryOne: "Detected {count} idol.",
    loadError: "The data could not be loaded. Please reload the page.",
  },
};

const initialLanguage = new URLSearchParams(location.search).get("lang") === "en"
  ? "en"
  : "ja";

const state = {
  catalog: null,
  matches: [],
  language: initialLanguage,
  loadFailed: false,
};

const elements = {
  description: document.querySelector('meta[name="description"]'),
  headerHome: document.querySelector(".header-home"),
  languageButtons: document.querySelectorAll("[data-language]"),
  backToPicker: document.querySelector("#back-to-picker"),
  status: document.querySelector("#status"),
  app: document.querySelector("#import-app"),
  form: document.querySelector("#import-form"),
  input: document.querySelector("#bulk-input"),
  summary: document.querySelector("#import-summary"),
  submit: document.querySelector("#import-submit"),
  feedback: document.querySelector("#import-feedback"),
  detectedCount: document.querySelector("#detected-count"),
  detectedList: document.querySelector("#detected-list"),
  unmatchedGroup: document.querySelector("#unmatched-group"),
  unmatchedCount: document.querySelector("#unmatched-count"),
  unmatchedList: document.querySelector("#unmatched-list"),
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
  elements.backToPicker.href = `./${languageQuery}`;
}

function renderFeedback() {
  const result = detectImportedCharacters(elements.input.value, state.catalog.characters);
  state.matches = result.matches;
  const hasInput = elements.input.value.trim().length > 0;

  elements.feedback.hidden = !hasInput;
  elements.detectedCount.textContent = String(result.matches.length);
  elements.detectedList.replaceChildren();

  for (const match of result.matches) {
    const item = document.createElement("li");
    item.className = "detected-idol";

    const image = document.createElement("img");
    image.src = match.character.thumbnail_path;
    image.alt = "";
    image.loading = "lazy";
    image.width = 48;
    image.height = 48;

    const copy = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = match.character.name;
    const reason = document.createElement("small");
    reason.textContent = match.matchedKinds
      .map((kind) => MATCH_KIND_LABELS[state.language][kind])
      .join(state.language === "ja" ? "・" : ", ");
    copy.append(name, reason);
    item.append(image, copy);
    elements.detectedList.append(item);
  }

  elements.unmatchedGroup.hidden = result.unmatchedSegments.length === 0;
  elements.unmatchedCount.textContent = String(result.unmatchedSegments.length);
  elements.unmatchedList.replaceChildren();
  for (const segment of result.unmatchedSegments) {
    const item = document.createElement("li");
    item.textContent = segment;
    elements.unmatchedList.append(item);
  }

  elements.submit.disabled = result.matches.length === 0;
  elements.summary.textContent = hasInput
    ? t(result.matches.length === 1 ? "detectedSummaryOne" : "detectedSummary", {
        count: result.matches.length,
      })
    : t("emptySummary");
}

function setLanguage(language) {
  if (language === state.language) return;
  state.language = language;
  applyStaticCopy();
  const url = new URL(location.href);
  if (language === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  if (state.catalog) renderFeedback();
  else if (state.loadFailed) elements.status.textContent = t("loadError");
}

async function initialize() {
  try {
    const response = await fetch("./data/catalog.json");
    if (!response.ok) throw new Error(`catalog request failed (${response.status})`);
    const catalog = await response.json();
    if (!Array.isArray(catalog.characters)) {
      throw new Error("catalog has an unsupported shape");
    }
    state.catalog = catalog;
    elements.status.hidden = true;
    elements.app.hidden = false;
    elements.input.focus();
  } catch (error) {
    console.error(error);
    state.loadFailed = true;
    elements.status.className = "load-status load-error";
    elements.status.textContent = t("loadError");
  }
}

elements.input.addEventListener("input", renderFeedback);
elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.matches.length) return;
  const selectedIds = state.matches.map((match) => match.character.id);
  location.assign(
    `./${serializeRosterState(selectedIds, true, true, false, state.language)}`,
  );
});
for (const button of elements.languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

applyStaticCopy();
initialize();
