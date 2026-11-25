# Raw source snapshots

These files preserve upstream evidence for the Phase 1 canonical-data work.
They are not the project's canonical character or song datasets.

## Official idol-list import

This directory contains a reproducible snapshot of the public character list at
the [official Idolmaster idol directory](https://idollist.idolmaster-official.jp/search).

`official-idol-list.json` preserves the official numeric ID, page slug, name,
kana reading, upstream brand fields, detail-page URL, and list-thumbnail URL.
It also records a local image path, size, and SHA-256 checksum for each downloaded
thumbnail. `idol-images/` contains those list thumbnails, renamed to the official
page slug for predictable local references.

The normalized `brand` field follows the brand groups displayed by the official
search UI. The original `official_brand_id` and `official_style_brand_class` are
retained so the grouping can be audited. Records displayed under the official
`その他` group remain `other`; they are not assigned to a more specific franchise
by inference.

This snapshot intentionally does **not** include voice actors or profile fields
that require visiting each character's detail page. Voice-actor credits are kept
in the separate `official-idol-details.json` snapshot described below. These
files are raw source material, not yet the project's canonical `Character`
dataset or its stable internal-ID policy.

To refresh the snapshot and download missing images:

```sh
python3 scripts/import_official_idols.py
```

Existing images are reused. To fetch every image again, pass `--refresh-images`.
To validate the checked-in JSON, image presence, sizes, and checksums without
network access:

```sh
python3 scripts/import_official_idols.py --check
```

## Official detail-page snapshot

`official-idol-details.json` records the voice-actor credit displayed on every
official character detail page. A `voice_actor_name` string preserves the
official display value. An explicit `null` means that the page was fetched and
the expected CV container was present but empty; it does not mean the request or
parser failed.

To refresh all detail records with four concurrent requests:

```sh
python3 scripts/import_official_idol_details.py
```

To validate its complete coverage of `official-idol-list.json`, names, URLs,
nullable values, and summary counts without network access:

```sh
python3 scripts/import_official_idol_details.py --check
```

The names, character artwork, and other upstream material remain attributable to
their respective rights holders. The source page carries the copyright notice
`©窪岡俊之 THE IDOLM@STER™& ©Bandai Namco Entertainment Inc.`; redistribution
requirements should be reviewed before publishing the downloaded assets.

## music765plus SongList import

`music765plus-song-list.json` is a reproducible snapshot of every recording row
in the `SongList` Cargo table at the unofficial fan wiki
[アイドルマスター楽曲メモ](https://music765plus.com/アイドルマスター楽曲メモ:アイドルマスター楽曲メモについて).
The snapshot records its row count and retrieval time in the file.
The source is useful evidence, but its contents must be reviewed before they are
promoted into canonical project data.

Refresh the snapshot with two concurrent data requests (the default):

```sh
python3 scripts/import_music765plus_songs.py
```

The importer requests the source count, retrieves `SongList` in 500-row pages
ordered by Cargo `_ID`, and requests the count again. It will not replace the
existing file if either count differs, a page fails, a record is malformed, or
row IDs are duplicated. Concurrency can be set from one to four workers, for
example with `--workers 4`. Request timeout, retry count, and retry backoff can
also be set with `--timeout`, `--attempts`, and `--backoff`.

Validate the checked-in snapshot without making network requests:

```sh
python3 scripts/import_music765plus_songs.py --check
```

The top level records schema and retrieval metadata, the exact Cargo field
mapping and pagination settings, both source-count results, row count, and a
quality summary. `records` is sorted numerically by `cargo_row_id`. Its fields
are:

- `cargo_row_id`: numeric Cargo `_ID`, used for deterministic ordering.
- `wiki_page_id`: numeric MediaWiki `_pageID`, retained as the stable upstream
  page identifier.
- `page_name`: raw Cargo `_pageName`; `page_url` is the importer-constructed URL
  for that page.
- `title`, `unit_label`, and `vocal_credit`: raw `曲名`, `ユニット`, and `歌手`
  values.
- `release_date` and `release_date_precision`: Cargo `発売日` and its Cargo date
  precision.
- `game_first` and `cd_first`: raw `GAME初出` and `CD初出` values. These are
  separate source concepts from `release_date` and remain separate.
- `kind_code`: raw numeric `オリジナル` code.
- `brand`: raw `ブランド` value.
- `other` and `notes`: raw `その他` and `その他2` values.

Strings are preserved as returned by Cargo, including MediaWiki markup, HTML
entities, punctuation, actor names in parentheses, comma-separated brands,
empty strings, and `null`. Only fields declared numeric in the snapshot are
converted to integers. The quality summary counts blank and null titles, vocal
credits, dates, kind codes, and brands, and includes complete kind and brand
value distributions.

Important source limitations:

- The wiki templates document `kind_code` only for values `0` through `3`, but
  the live table contains additional values through `20`. All values are kept
  without interpretation.
- Brand values can contain multiple comma-separated codes, blanks, and apparent
  source typos such as `756AS`. They are not normalized.
- `release_date`, `game_first`, and `cd_first` are independent source fields;
  none is substituted for another.
- All recording rows are included: originals, remixes, covers, solo versions,
  and undocumented types. This snapshot does not deduplicate titles, parse
  performers, select earliest releases, or classify exceptions.
- The newer `SongsEN` and `CreditsEN` tables and the wiki alias tables are not
  queried because they are incomplete subsets for this collection pass.
- Lyricist, composer, arranger, and remix-creator credits are intentionally not
  collected because they do not advance canonical performer matching.
