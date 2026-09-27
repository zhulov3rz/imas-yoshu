import { normalizeSearchText } from "./matching.js";

const SEGMENT_SEPARATOR = /[\r\n,、;；|｜/／]+/u;

function romanizedNames(character) {
  const parts = String(character.id ?? "").split("_").filter(Boolean);
  if (!parts.length) return [];
  return [parts.join(" "), [...parts].reverse().join(" ")];
}

function normalizeRomaji(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/gu, " ")
    .trim();
}

function characterTerms(character) {
  const terms = [
    { value: character.name, kind: "idol" },
    { value: character.name_kana, kind: "idol" },
    ...(character.aliases ?? []).map((value) => ({ value, kind: "idol" })),
    { value: character.voice_actor_name, kind: "actor" },
    ...romanizedNames(character).map((value) => ({ value, kind: "romaji" })),
  ];

  const unique = new Map();
  for (const term of terms) {
    const normalized = normalizeSearchText(term.value);
    if (normalized.length >= 2 && !unique.has(normalized)) {
      unique.set(normalized, {
        ...term,
        normalized,
        normalizedRomaji: term.kind === "romaji" ? normalizeRomaji(term.value) : "",
      });
    }
  }
  return [...unique.values()];
}

export function splitImportSegments(input) {
  return String(input ?? "")
    .split(SEGMENT_SEPARATOR)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export function detectImportedCharacters(input, characters) {
  const segments = splitImportSegments(input);
  const normalizedSegments = segments.map((segment) => ({
    text: normalizeSearchText(segment),
    romaji: ` ${normalizeRomaji(segment)} `,
  }));
  const matchedSegmentIndexes = new Set();
  const matches = [];

  for (const character of characters) {
    const matchedKinds = new Set();
    for (const term of characterTerms(character)) {
      normalizedSegments.forEach((segment, index) => {
        const matched =
          term.kind === "romaji"
            ? segment.romaji.includes(` ${term.normalizedRomaji} `)
            : segment.text.includes(term.normalized);
        if (matched) {
          matchedKinds.add(term.kind);
          matchedSegmentIndexes.add(index);
        }
      });
    }
    if (matchedKinds.size) matches.push({ character, matchedKinds: [...matchedKinds] });
  }

  matches.sort(
    (left, right) =>
      left.character.name_kana.localeCompare(right.character.name_kana, "ja") ||
      left.character.id.localeCompare(right.character.id),
  );

  return {
    matches,
    unmatchedSegments: segments.filter((_, index) => !matchedSegmentIndexes.has(index)),
  };
}
