# Canonical data and generated outputs

The files in `data/raw/` are immutable source snapshots. They are evidence, not
the website's canonical dataset.

`characters.json` is the project's canonical character registry. It was seeded
from the official idol-list and detail snapshots. Its IDs are now project IDs:
they must remain stable even if an upstream slug later changes.

`songs.json` is the canonical song registry. Its initial indexed entries were
promoted from unflagged Original candidates under the documented MVP policy;
later corrections are reviewed case by case. A song may use one of the statuses
`indexed`, `needs_review`, `broad_credit_exception`,
`shared_song_exception`, or `excluded`. Only `indexed` songs are emitted for the
website.

`exceptions.json` records reviewed non-indexed songs separately. It uses the
same non-indexed status values as `songs.json`.

`performer-credit-overrides.json` contains explicit resolutions for source
credits that cannot be joined one-to-one by normalized character name. It must
not be used for fuzzy guesses. Its `unit_label_overrides` section records exact,
approved unit-label rosters for otherwise blank vocal credits.

`song-id-registry.json` reserves stable project song IDs for every Original
candidate. Existing assignments must never be renumbered when new candidates
are added.

`generated/music765plus-song-candidates.json` is a deterministic review aid,
not a canonical editing surface. It contains the deduplicated `kind_code = 0`
wiki pages, suggested performer IDs, resolution diagnostics, and review flags.
Rebuild it rather than editing it.

`generated/music765plus-song-review.json` is the smaller review queue containing
only flagged candidates whose disposition is still pending.

`generated/music765plus-decision-log.json` contains every flagged candidate,
the principle associated with each flag, and its current outcome. This is the
audit trail for automatic MVP exclusions and later manual decisions.

`review/music765plus-song-review-form.md` is the human-editable worksheet for
the current pending queue. It is created once and is not rewritten by normal
catalog builds. Reviewers fill in its decision sections and submit the whole
file for application to the canonical JSON sources.

The Phase 2 input is `public/data/catalog.json`. Its character records include
the relative `thumbnail_path` consumed by the static website. Rebuild the
generated data files:

```sh
python3 scripts/build_catalog.py
```

Then build the deployable website, including the locally snapshotted idol
thumbnails, from `src/` into `public/`:

```sh
python3 scripts/build_site.py
```

Validate all inputs and confirm that the generated files are current without
rewriting anything:

```sh
python3 scripts/build_catalog.py --check
```

Create the one-time Markdown review worksheet (this refuses to overwrite an
existing worksheet containing human decisions):

```sh
python3 scripts/build_catalog.py --create-review-form
```

Apply every completed decision while leaving `TODO` entries untouched:

```sh
python3 scripts/build_catalog.py --apply-review-form
```

For an `indexed` decision, blank canonical title and performer fields retain
the candidate title and suggested performer IDs. A blank `duplicate_of` target
is accepted only when removing the trailing version qualifier identifies one
unique normalized base title; otherwise an explicit song ID is required. The
application validates the complete canonical documents before writing them.
Submitted worksheets are retained in `data/review/` as human-review audit
snapshots, and a new worksheet is created from the remaining queue.

Under the approved MVP policy, unflagged Original candidates are indexed on the
assumption that corrections can be handled case by case. Candidates with broad
unit labels become `broad_credit_exception` records, and candidates whose
credits cannot be represented by the official idol directory are excluded.

The approved review-culling policy additionally:

- uses the earliest parsed game date when it predates the stored release date;
- resolves actor-credit spelling differences and historical voice-cast changes
  to the character already identified by the source credit; and
- resolves a blank vocal credit with the exact unit label `アンティーカ` to
  the five-member roster recorded in `performer-credit-overrides.json`.

The approved version-identity policy removes a version-labelled candidate when
stripping its trailing version qualifier produces an exact normalized title
match to one already-indexed non-version song. The exception records the
retained canonical song ID. It does not use fuzzy title matching, and variants
without an indexed base remain queued. This reflects the MVP decision that
version-specific recordings have little additional value for cast-based concert
preparation, even when their arrangements differ substantially.

A candidate is indexed automatically only when these decisions resolve every
one of its flags and leave a non-empty performer set. Independent flags such as
version identity or a large cast remain in the review queue, while resolved
diagnostics stay visible in the decision log. The one-time policy was applied
with:

```sh
python3 scripts/build_catalog.py --apply-review-culling-policy
```

Run the version policy after canonical song decisions so newly eligible variants
are reconciled. It is safe to rerun and reports zero when there are no new exact
matches:

```sh
python3 scripts/build_catalog.py --apply-version-identity-policy
```

An indexed song entry has this shape:

```json
{
  "id": "song_000001",
  "title": "Example Song",
  "aliases": [],
  "canonical_performer_ids": [
    "haruka_amami",
    "chihaya_kisaragi"
  ],
  "status": "indexed",
  "source": {
    "music765plus_wiki_page_id": 1234,
    "rationale": "Reviewed as the earliest officially released recording."
  }
}
```

Song IDs are assigned once and never regenerated from a title. The source page
may be a non-Original recording when review establishes that it is the proper
canonical evidence. The builder copies the raw date, artist credit, page URL,
and all duplicate Cargo row IDs into the generated catalog.
