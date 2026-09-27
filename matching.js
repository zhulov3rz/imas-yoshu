/**
 * Pure catalog matching and normalization helpers.
 *
 * Keeping these functions independent from the DOM makes the product rules
 * executable documentation and lets the UI remain a thin presentation layer.
 */

export function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/\s+/gu, "");
}

const VOICED_WITHOUT_ACTOR_CREDIT_IDS = new Set([
  "cosmo_kamizuru",
  "manaka_tomori",
  "letora",
]);

export function isCharacterVoiced(character) {
  return (
    Boolean(character.voice_actor_name) ||
    VOICED_WITHOUT_ACTOR_CREDIT_IDS.has(character.id)
  );
}

export function matchesCharacterQuery(character, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true;

  const romanizedNameParts = String(character.id ?? "").split("_");
  const searchableValues = [
    character.name,
    character.name_kana,
    character.voice_actor_name,
    romanizedNameParts.join(" "),
    [...romanizedNameParts].reverse().join(" "),
    ...(character.aliases ?? []),
  ];

  return searchableValues.some((value) =>
    normalizeSearchText(value).includes(normalizedQuery),
  );
}

function compareSongs(left, right) {
  return (
    normalizeSearchText(left.song.title).localeCompare(
      normalizeSearchText(right.song.title),
      "ja",
    ) || left.song.id.localeCompare(right.song.id)
  );
}

export function classifySongs(songs, selectedPerformerIds, options = {}) {
  const selected = new Set(selectedPerformerIds);
  const includeMissingTwo = options.includeMissingTwo ?? false;
  const excludeSoloSongs = options.excludeSoloSongs ?? false;
  const result = { exact: [], missingOne: [], missingTwo: [] };

  for (const song of songs) {
    const canonicalIds = song.canonical_performer_ids;
    if (excludeSoloSongs && canonicalIds.length === 1) continue;

    const presentPerformerIds = canonicalIds.filter((id) => selected.has(id));
    const missingPerformerIds = canonicalIds.filter((id) => !selected.has(id));
    const missing = missingPerformerIds.length;

    const match = {
      song,
      presentPerformerIds,
      missingPerformerIds,
    };

    if (missing === 0) {
      result.exact.push(match);
    } else if (presentPerformerIds.length >= 2 && missing === 1) {
      result.missingOne.push(match);
    } else if (
      includeMissingTwo &&
      presentPerformerIds.length >= 2 &&
      missing === 2
    ) {
      result.missingTwo.push(match);
    }
  }

  result.exact.sort(compareSongs);
  result.missingOne.sort(compareSongs);
  result.missingTwo.sort(compareSongs);
  return result;
}

export function parseRosterState(search, validCharacterIds) {
  const parameters = new URLSearchParams(search);
  const validIds = new Set(validCharacterIds);
  const selectedIds = [];
  const seen = new Set();

  for (const id of (parameters.get("idols") ?? "").split(",")) {
    if (validIds.has(id) && !seen.has(id)) {
      selectedIds.push(id);
      seen.add(id);
    }
  }

  return {
    selectedIds,
    includeMissingTwo: parameters.get("missing") !== "1",
    excludeSoloSongs: parameters.get("solo") !== "show",
    compactResults: parameters.get("view") === "compact",
  };
}

export function serializeRosterState(
  selectedIds,
  includeMissingTwo = true,
  excludeSoloSongs = true,
  compactResults = false,
) {
  const parameters = new URLSearchParams();
  if (selectedIds.length) parameters.set("idols", selectedIds.join(","));
  parameters.set("missing", includeMissingTwo ? "2" : "1");
  parameters.set("solo", excludeSoloSongs ? "hide" : "show");
  if (compactResults) parameters.set("view", "compact");
  const query = parameters.toString();
  return query ? `?${query}` : "";
}
