import { detectImportedCharacters } from "./importing.js?v=20260927-6";
import { serializeRosterState } from "./matching.js?v=20260927-6";

const MATCH_KIND_LABELS = {
  idol: "アイドル名",
  actor: "声優名",
  romaji: "ローマ字",
};

const state = {
  catalog: null,
  matches: [],
};

const elements = {
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
    reason.textContent = match.matchedKinds.map((kind) => MATCH_KIND_LABELS[kind]).join("・");
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
    ? `${result.matches.length}人を検出しました。`
    : "名前を入力すると、検出結果がここに表示されます。";
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
    elements.status.className = "load-status load-error";
    elements.status.textContent = "データを読み込めませんでした。ページを再読み込みしてください。";
  }
}

elements.input.addEventListener("input", renderFeedback);
elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.matches.length) return;
  const selectedIds = state.matches.map((match) => match.character.id);
  location.assign(`./${serializeRosterState(selectedIds, true, true)}`);
});

initialize();
