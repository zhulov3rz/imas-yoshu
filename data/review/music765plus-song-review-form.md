# music765plus song review worksheet

This is the human-editable decision form for the pending canonical-song queue.
Edit this file, then tell the reviewing agent that it is ready. Do not edit the
generated candidate, review, or decision-log JSON files.

- Pending candidates in this worksheet: 1
- Review queue SHA-256: `f397c453ff40f0e588f62a390a41a330b2618c8318b2e4da654a10345cfcec35`
- Generated from: `data/generated/music765plus-song-review.json`

For every song, replace `TODO` with exactly one decision:

- `indexed` — include the song with the reviewed canonical performers.
- `duplicate_of` — merge its identity into the supplied canonical song ID.
- `broad_credit_exception` — exclude a broad project/cast credit.
- `shared_song_exception` — exclude a shared song with no useful fixed lineup.
- `excluded` — exclude it from the MVP for another stated reason.
- `defer` — leave it in the queue for later research.

For `indexed`, provide the canonical title, performers, earliest recorded-release
date, evidence, and rationale. Performer names or stable IDs are both acceptable.
For `duplicate_of`, provide the retained song ID. For exceptions/exclusions, provide
evidence where available and a clear rationale. Fields that do not apply may remain
blank. Multiple evidence references may be added as additional Markdown bullets.

When finished, search for decision lines still containing `TODO`. The exact
command is shown below. Use `defer` explicitly when that is the intended decision.

```sh
rg -n '^- Decision: `TODO`$' data/review/music765plus-song-review-form.md
```

---

## 1. 白い犬＆黒い犬

- Song ID: `song_001186`
- Candidate ID: `music765plus_page_3182`
- Source page: [music765plus page 3182](https://music765plus.com/%E7%99%BD%E3%81%84%E7%8A%AC%EF%BC%86%E9%BB%92%E3%81%84%E7%8A%AC)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 白い犬＆黒い犬
- Unit label: *(blank)*
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2009-01-23
- Game first: *(blank)*
- CD first: ドラマCD アイドルマスター Eternal Prism 02(2009/01/23)、音源初出は[[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

### Decision — edit this section

- Decision: `TODO`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes:

---
