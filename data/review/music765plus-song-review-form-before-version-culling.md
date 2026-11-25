# music765plus song review worksheet — pre-version-culling snapshot

This 105-candidate worksheet was superseded after the approved version-identity
policy removed exact variants of already indexed canonical songs. It is retained
only as an audit snapshot; enter new decisions in
`music765plus-song-review-form.md` instead.

This is the human-editable decision form for the pending canonical-song queue.
Edit this file, then tell the reviewing agent that it is ready. Do not edit the
generated candidate, review, or decision-log JSON files.

- Pending candidates in this worksheet: 105
- Review queue SHA-256: `f864f56121b5f1be5ecf5f274ada83b92db0bbe4b89a9ce701e3246e32850d57`
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

## 1. 魔法をかけて！

- Song ID: `song_000001`
- Candidate ID: `music765plus_page_4`
- Source page: [music765plus page 4](https://music765plus.com/%E9%AD%94%E6%B3%95%E3%82%92%E3%81%8B%E3%81%91%E3%81%A6%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 魔法をかけて！
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005/07/26)
- CD first: [[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE01|MASTERPIECE 01]] (2005年9月28日)

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

## 2. ススメ☆オトメ ～jewel parade～

- Song ID: `song_000009`
- Candidate ID: `music765plus_page_83`
- Source page: [music765plus page 83](https://music765plus.com/%E3%82%B9%E3%82%B9%E3%83%A1%E2%98%86%E3%82%AA%E3%83%88%E3%83%A1_%E3%80%9Cjewel_parade%E3%80%9C)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ススメ☆オトメ ～jewel parade～
- Unit label: (jewelries! 001共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2013-09-25
- Game first: スターライトステージ(2015/09/03)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ|jewelries! 001 シリーズ共通曲]](2013/09/25)

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

## 3. ゴキゲンParty Night

- Song ID: `song_000080`
- Candidate ID: `music765plus_page_161`
- Source page: [music765plus page 161](https://music765plus.com/%E3%82%B4%E3%82%AD%E3%82%B2%E3%83%B3Party_Night)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ゴキゲンParty Night
- Unit label: (jewelries! 002共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2014-12-17
- Game first: スターライトステージ(2015/12/30)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ|jewelries! 002 シリーズ共通曲]](2014/12/17)

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

## 4. Near to You

- Song ID: `song_000084`
- Candidate ID: `music765plus_page_165`
- Source page: [music765plus page 165](https://music765plus.com/Near_to_You)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Near to You
- Unit label: (jewelries! 003共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-08-19
- Game first: スターライトステージ(2016年8月19日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ|jewelries! 003 シリーズ共通曲]]

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

## 5. メッセージ

- Song ID: `song_000090`
- Candidate ID: `music765plus_page_171`
- Source page: [music765plus page 171](https://music765plus.com/%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8)
- Pending flags: `duplicate_original_title`

### Why it was flagged

- `duplicate_original_title` — Two Original pages with the same title are not merged automatically; confirm whether they are one song, distinct songs, or duplicate evidence.

### Current source evidence

- Source title: メッセージ
- Unit label: (第3回シンデレラガール総選挙ベスト5)
- Raw vocal credit: 渋谷凛(福原綾香),安部菜々(三宅麻理恵),緒方智絵里(大空直美),島村卯月(大橋彩香),本田未央(原紗友里)
- Suggested performers: 渋谷 凛 (`shibuya_rin`), 安部 菜々 (`abe_nana`), 緒方 智絵里 (`ogata_chieri`), 島村 卯月 (`shimamura_uzuki`), 本田 未央 (`honda_mio`)
- Release date: 2014-07-30
- Game first: スターライトステージ（2015年9月3日）
- CD first: [[THE IDOLM@STER CINDERELLA MASTER シリーズ (総選挙曲)#第3回総選挙CD|CINDERELLA MASTER We're the friends!]](2014年7月30日)

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

## 6. THE IDOLM@STER

- Song ID: `song_000193`
- Candidate ID: `music765plus_page_281`
- Source page: [music765plus page 281](https://music765plus.com/THE_IDOLM%40STER)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: THE IDOLM@STER
- Unit label: (共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005/07/26)
- CD first: [[THE IDOLM@STER MASTERPIECE シリーズ|MASTERPIECEシリーズ共通曲]]

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

## 7. 9:02pm

- Song ID: `song_000194`
- Candidate ID: `music765plus_page_283`
- Source page: [music765plus page 283](https://music765plus.com/9%3A02pm)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 9:02pm
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: [[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE02|THE IDOLM@STER MASTERPIECE 02]] (2005年11月2日)

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

## 8. ポジティブ！

- Song ID: `song_000195`
- Candidate ID: `music765plus_page_284`
- Source page: [music765plus page 284](https://music765plus.com/%E3%83%9D%E3%82%B8%E3%83%86%E3%82%A3%E3%83%96%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ポジティブ！
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005/07/26)
- CD first: [[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE03|THE IDOLM@STER MASTERPIECE 03 水瀬伊織・高槻やよい・双海亜美／真美]](2005/11/30)

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

## 9. 太陽のジェラシー

- Song ID: `song_000196`
- Candidate ID: `music765plus_page_285`
- Source page: [music765plus page 285](https://music765plus.com/%E5%A4%AA%E9%99%BD%E3%81%AE%E3%82%B8%E3%82%A7%E3%83%A9%E3%82%B7%E3%83%BC)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 太陽のジェラシー
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE01|MASTERPIECE 01]] (2005年9月28日)／M@STER VERSION：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE04|MASTERPIECE 04]] (2006年3月22日)

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

## 10. エージェント夜を往く

- Song ID: `song_000197`
- Candidate ID: `music765plus_page_286`
- Source page: [music765plus page 286](https://music765plus.com/%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E5%A4%9C%E3%82%92%E5%BE%80%E3%81%8F)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: エージェント夜を往く
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005/07/26)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE02|MASTERPIECE 02]] (2005年11月2日)／M@STER VERSION：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE04|MASTERPIECE 04]] (2006年3月22日)

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

## 11. おはよう！！朝ご飯

- Song ID: `song_000198`
- Candidate ID: `music765plus_page_287`
- Source page: [music765plus page 287](https://music765plus.com/%E3%81%8A%E3%81%AF%E3%82%88%E3%81%86%EF%BC%81%EF%BC%81%E6%9C%9D%E3%81%94%E9%A3%AF)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: おはよう！！朝ご飯
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE03|MASTERPIECE 03]] (2005年11月30日)／M@STER VERSION：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE04|MASTERPIECE 04]] (2006年3月22日)

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

## 12. 蒼い鳥

- Song ID: `song_000199`
- Candidate ID: `music765plus_page_288`
- Source page: [music765plus page 288](https://music765plus.com/%E8%92%BC%E3%81%84%E9%B3%A5)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 蒼い鳥
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE02|THE IDOLM@STER MASTERPIECE 02]] (2005年11月2日)／M@STER VERSION(編曲は異なる)：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE05|THE IDOLM@STER MASTERPIECE 05]] (2006年5月31日)

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

## 13. First Stage

- Song ID: `song_000200`
- Candidate ID: `music765plus_page_289`
- Source page: [music765plus page 289](https://music765plus.com/First_Stage)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: First Stage
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE01|MASTERPIECE01]] (2005年9月28日)／M@STER VERSION：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE05|MASTERPIECE05]] (2006年5月31日)

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

## 14. Here we go!!

- Song ID: `song_000201`
- Candidate ID: `music765plus_page_290`
- Source page: [music765plus page 290](https://music765plus.com/Here_we_go%21%21)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Here we go!!
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2005-07-26
- Game first: THE IDOLM@STER アーケード版(2005年7月26日)
- CD first: GAME Ver：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE03|MASTERPIECE 03]] (2005年11月30日)／M@STER VERSION：[[THE IDOLM@STER MASTERPIECE シリーズ#MASTERPIECE05|MASTERPIECE 05]] (2006年5月31日)

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

## 15. 私はアイドル♡

- Song ID: `song_000202`
- Candidate ID: `music765plus_page_291`
- Source page: [music765plus page 291](https://music765plus.com/%E7%A7%81%E3%81%AF%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E2%99%A1)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 私はアイドル♡
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2006-12-20
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: 私はアイドル♥：[[THE IDOLM@STER MASTERWORK シリーズ#MW00|MASTERWORK 00]](2006年12月20日)／私はアイドル♡：[[THE IDOLM@STER MASTERWORK シリーズ#MW03|MASTERWORK 03]](2007年3月28日)

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

## 16. GO MY WAY!!

- Song ID: `song_000203`
- Candidate ID: `music765plus_page_292`
- Source page: [music765plus page 292](https://music765plus.com/GO_MY_WAY%21%21)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: GO MY WAY!!
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2006-07-23
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: [[THE IDOLM@STER MASTERWORK シリーズ#MW01|MASTERWORK 01]](2007年1月31日)

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

## 17. 思い出をありがとう

- Song ID: `song_000204`
- Candidate ID: `music765plus_page_293`
- Source page: [music765plus page 293](https://music765plus.com/%E6%80%9D%E3%81%84%E5%87%BA%E3%82%92%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Already resolved by approved policy

- `game_first_predates_release_date` — Approved policy treats the earliest game date, 2007-01-25, as the first recorded-release date.

### Current source evidence

- Source title: 思い出をありがとう
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2007-01-31
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: [[THE IDOLM@STER MASTERWORK シリーズ#MW01|THE IDOLM@STER MASTERWORK 01]](2007/01/31)

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

## 18. relations

- Song ID: `song_000205`
- Candidate ID: `music765plus_page_294`
- Source page: [music765plus page 294](https://music765plus.com/relations)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: relations
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2007-01-25
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: [[THE IDOLM@STER MASTERWORK シリーズ#MW02|THE IDOLM@STER MASTERWORK 02]](2007年2月28日)

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

## 19. My Best Friend

- Song ID: `song_000206`
- Candidate ID: `music765plus_page_295`
- Source page: [music765plus page 295](https://music765plus.com/My_Best_Friend)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Already resolved by approved policy

- `game_first_predates_release_date` — Approved policy treats the earliest game date, 2007-01-25, as the first recorded-release date.

### Current source evidence

- Source title: My Best Friend
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2007-02-28
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: [[THE IDOLM@STER MASTERWORK シリーズ#MW02|THE IDOLM@STER MASTERWORK 02]] (2007年2月28日)

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

## 20. まっすぐ

- Song ID: `song_000207`
- Candidate ID: `music765plus_page_296`
- Source page: [music765plus page 296](https://music765plus.com/%E3%81%BE%E3%81%A3%E3%81%99%E3%81%90)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Already resolved by approved policy

- `game_first_predates_release_date` — Approved policy treats the earliest game date, 2007-01-25, as the first recorded-release date.

### Current source evidence

- Source title: まっすぐ
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2007-03-28
- Game first: XBOX360版アイドルマスター(2007年1月25日)
- CD first: [[THE IDOLM@STER MASTERWORK シリーズ#MW03|THE IDOLM@STER MASTERWORK 03]](2007/03/28)

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

## 21. i

- Song ID: `song_000208`
- Candidate ID: `music765plus_page_297`
- Source page: [music765plus page 297](https://music765plus.com/i)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: i
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2007-07-18
- Game first: XBOX360版『THE IDOLM@STER LIVE FOR YOU!』カタログ第5号(2008年6月25日配信)
- CD first: [[THE IDOLM@STER MASTER ARTIST シリーズ|MASTER ARTISTシリーズ共通曲]]

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

## 22. shiny smile

- Song ID: `song_000223`
- Candidate ID: `music765plus_page_313`
- Source page: [music765plus page 313](https://music765plus.com/shiny_smile)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: shiny smile
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2008-02-13
- Game first: Xbox360版『アイドルマスター ライブフォーユー！』予約特典（2008年3月26日よりDL開始）
- CD first: [[THE IDOLM@STER MASTER LIVE シリーズ#ML00|THE IDOLM@STER MASTER LIVE 00 shiny smile]](2008/02/13)

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

## 23. Do-Dai

- Song ID: `song_000227`
- Candidate ID: `music765plus_page_317`
- Source page: [music765plus page 317](https://music765plus.com/Do-Dai)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Already resolved by approved policy

- `game_first_predates_release_date` — Approved policy treats the earliest game date, 2008-04-30, as the first recorded-release date.

### Current source evidence

- Source title: Do-Dai
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2008-05-14
- Game first: Xbox360版『アイドルマスター ライブフォーユー！』カタログ第3号（2008年4月30日配信）
- CD first: [[THE IDOLM@STER MASTER LIVE シリーズ#ML03|THE IDOLM@STER MASTER LIVE 03 Do-Dai]](2008/05/14)

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

## 24. my song

- Song ID: `song_000229`
- Candidate ID: `music765plus_page_319`
- Source page: [music765plus page 319](https://music765plus.com/my_song)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: my song
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2008-05-28
- Game first: Xbox360版『アイドルマスター ライブフォーユー！』カタログ第4号（2008年5月28日配信）
- CD first: [[THE IDOLM@STER MASTER LIVE シリーズ#ML04|THE IDOLM@STER MASTER LIVE 04 my song]](2008/06/18)

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

## 25. Colorful Days

- Song ID: `song_000233`
- Candidate ID: `music765plus_page_323`
- Source page: [music765plus page 323](https://music765plus.com/Colorful_Days)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Colorful Days
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2008-12-10
- Game first: PSP版THE IDOLM@STER SP（2009年2月19日）
- CD first: [[THE IDOLM@STER MASTER SPECIAL シリーズ#MS765|THE IDOLM@STER MASTER SPECIAL 765 Colorful Days]](2008/12/10)

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

## 26. L・O・B・M

- Song ID: `song_000237`
- Candidate ID: `music765plus_page_327`
- Source page: [music765plus page 327](https://music765plus.com/L%E3%83%BBO%E3%83%BBB%E3%83%BBM)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: L・O・B・M
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2009-02-04
- Game first: PSP版THE IDOLM@STER SPカタログ第18号（2010年7月28日配信）
- CD first: [[THE IDOLM@STER MASTER SPECIAL シリーズ|MASTER SPECIAL01～06共通曲]](2009/02/04)

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

## 27. キミはメロディ

- Song ID: `song_000252`
- Candidate ID: `music765plus_page_342`
- Source page: [music765plus page 342](https://music765plus.com/%E3%82%AD%E3%83%9F%E3%81%AF%E3%83%A1%E3%83%AD%E3%83%87%E3%82%A3)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Already resolved by approved policy

- `game_first_predates_release_date` — Approved policy treats the earliest game date, 2009-08-26, as the first recorded-release date.

### Current source evidence

- Source title: キミはメロディ
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2009-12-16
- Game first: PSP版『THE IDOLM@STER SP』カタログ第7号（2009年8月26日配信）
- CD first: [[THE IDOLM@STER MASTER SPECIAL シリーズ#MSWINTER|THE IDOLM@STER MASTER SPECIAL WINTER]](2009/12/16)

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

## 28. MEGARE!

- Song ID: `song_000277`
- Candidate ID: `music765plus_page_367`
- Source page: [music765plus page 367](https://music765plus.com/MEGARE%21)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: MEGARE!
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2010-11-03
- Game first: Xbox360版『THE IDOLM@STER 2』(2011年2月24日)
- CD first: [[THE IDOLM@STER MASTER ARTIST 2 シリーズ|MASTER ARTIST 2シリーズ共通曲]]

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

## 29. キミ＊チャンネル

- Song ID: `song_000335`
- Candidate ID: `music765plus_page_425`
- Source page: [music765plus page 425](https://music765plus.com/%E3%82%AD%E3%83%9F%EF%BC%8A%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: キミ＊チャンネル
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2014-06-25
- Game first: ワンフォーオールDLCカタログ第2号（2014年6月25日）
- CD first: [[THE IDOLM@STER MASTER ARTIST 3 シリーズ#MA3 01|MASTER ARTIST 3［01～03］共通曲]] (2015年4月22日)

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

## 30. 99 Nights

- Song ID: `song_000339`
- Candidate ID: `music765plus_page_429`
- Source page: [music765plus page 429](https://music765plus.com/99_Nights)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 99 Nights
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2014-09-25
- Game first: ワンフォーオールDLCカタログ第5号（2014年9月25日）
- CD first: [[THE IDOLM@STER MASTER ARTIST 3 シリーズ#MA3 04|MASTER ARTIST 3［04～06］共通曲]] (2015年6月3日)

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

## 31. 静かな夜に願いを…

- Song ID: `song_000343`
- Candidate ID: `music765plus_page_433`
- Source page: [music765plus page 433](https://music765plus.com/%E9%9D%99%E3%81%8B%E3%81%AA%E5%A4%9C%E3%81%AB%E9%A1%98%E3%81%84%E3%82%92%E2%80%A6)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 静かな夜に願いを…
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2014-07-30
- Game first: ワンフォーオールDLCカタログ第7号（2014年11月25日）
- CD first: [[THE IDOLM@STER MASTER ARTIST 3 シリーズ#MA3 07|MASTER ARTIST 3［07～09］共通曲]] (2015年7月8日)

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

## 32. Good-Byes

- Song ID: `song_000347`
- Candidate ID: `music765plus_page_437`
- Source page: [music765plus page 437](https://music765plus.com/Good-Byes)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Good-Byes
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2015-03-25
- Game first: ワンフォーオールDLCカタログ第11号（2015年3月25日）
- CD first: [[THE IDOLM@STER MASTER ARTIST 3 シリーズ#MA3 10|MASTER ARTIST 3 10～13共通曲]] (2015年10月21日※MA3-10と11発売日)

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

## 33. Happy!

- Song ID: `song_000354`
- Candidate ID: `music765plus_page_444`
- Source page: [music765plus page 444](https://music765plus.com/Happy%21)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Happy!
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-07-20
- Game first: PS4版『アイドルマスター プラチナスターズ』（2016年7月28日）
- CD first: [[THE IDOLM@STER PLATINUM MASTER シリーズ#PM00|PLATINUM MASTER 00 Happy!]] (2016年7月20日)

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

## 34. ザ・ライブ革命でSHOW！

- Song ID: `song_000355`
- Candidate ID: `music765plus_page_445`
- Source page: [music765plus page 445](https://music765plus.com/%E3%82%B6%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%96%E9%9D%A9%E5%91%BD%E3%81%A7SHOW%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ザ・ライブ革命でSHOW！
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2014-08-26
- Game first: PS4版『アイドルマスター プラチナスターズ』（2016年7月28日）
- CD first: [[THE IDOLM@STER PLATINUM MASTER シリーズ#PM00|THE IDOLM@STER PLATINUM MASTER 00 Happy!]] (2016年7月20日)

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

## 35. Miracle Night

- Song ID: `song_000356`
- Candidate ID: `music765plus_page_446`
- Source page: [music765plus page 446](https://music765plus.com/Miracle_Night)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Miracle Night
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-07-28
- Game first: プラチナスターズDLCカタログ創刊号（2016年7月28日）
- CD first: [[THE IDOLM@STER PLATINUM MASTER シリーズ#PM01|THE IDOLM@STER PLATINUM MASTER 01 Miracle Night]] (2016年8月17日)

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

## 36. 僕たちのResistance

- Song ID: `song_000358`
- Candidate ID: `music765plus_page_448`
- Source page: [music765plus page 448](https://music765plus.com/%E5%83%95%E3%81%9F%E3%81%A1%E3%81%AEResistance)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 僕たちのResistance
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-08-25
- Game first: プラチナスターズDLCカタログ2号（2016年8月25日）
- CD first: [[THE IDOLM@STER PLATINUM MASTER シリーズ#PM02|THE IDOLM@STER PLATINUM MASTER 02 僕たちのResistance]] (2016年9月21日)

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

## 37. アマテラス

- Song ID: `song_000360`
- Candidate ID: `music765plus_page_450`
- Source page: [music765plus page 450](https://music765plus.com/%E3%82%A2%E3%83%9E%E3%83%86%E3%83%A9%E3%82%B9)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: アマテラス
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-10-05
- Game first: プラチナスターズDLCカタログ3号（2016年10月5日）
- CD first: [[THE IDOLM@STER PLATINUM MASTER シリーズ#PM03|THE IDOLM@STER PLATINUM MASTER 03 アマテラス]] (2016年10月19日)

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

## 38. Vertex Meister

- Song ID: `song_000377`
- Candidate ID: `music765plus_page_467`
- Source page: [music765plus page 467](https://music765plus.com/Vertex_Meister)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Vertex Meister
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2017-12-21
- Game first: ステラステージDLCカタログ創刊号（2017年12月21日）
- CD first: [[THE IDOLM@STER STELLA MASTER シリーズ#SM01|THE IDOLM@STER STELLA MASTER 01 Vertex Meister]] (2018年2月7日)

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

## 39. 夕映えプレゼント

- Song ID: `song_000382`
- Candidate ID: `music765plus_page_484`
- Source page: [music765plus page 484](https://music765plus.com/%E5%A4%95%E6%98%A0%E3%81%88%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 夕映えプレゼント
- Unit label: (デレアニED曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2015-01-17
- Game first: スターライトステージ（2015年9月3日）
- CD first: [[THE IDOLM@STER CINDERELLA GIRLS ANIMATION PROJECT シリーズ#ANIMATION PROJECT|ANIMATION PROJECT シリーズの02〜08]]

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

## 40. Memories

- Song ID: `song_000383`
- Candidate ID: `music765plus_page_485`
- Source page: [music765plus page 485](https://music765plus.com/Memories)
- Pending flags: `duplicate_original_title`

### Why it was flagged

- `duplicate_original_title` — Two Original pages with the same title are not merged automatically; confirm whether they are one song, distinct songs, or duplicate evidence.

### Current source evidence

- Source title: Memories
- Unit label: LOVE LAIKA
- Raw vocal credit: 新田美波(洲崎綾),アナスタシア(上坂すみれ)
- Suggested performers: 新田 美波 (`nitta_minami`), アナスタシア (`anastasia`)
- Release date: 2015-02-14
- Game first: スターライトステージ（2015年9月3日）
- CD first: [[THE IDOLM@STER CINDERELLA GIRLS ANIMATION PROJECT シリーズ#AP02|CINDERELLA GIRLS ANIMATION PROJECT 02 Memories]](2015年3月18日)

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

## 41. ØωØver!! -Heart Beat Version-

- Song ID: `song_000388`
- Candidate ID: `music765plus_page_490`
- Source page: [music765plus page 490](https://music765plus.com/%C3%98%CF%89%C3%98ver%21%21_-Heart_Beat_Version-)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ØωØver!! -Heart Beat Version-
- Unit label: ＊(Asterisk)
- Raw vocal credit: 前川みく(高森奈津美),多田李衣菜(青木瑠璃子)
- Suggested performers: 前川 みく (`maekawa_miku`), 多田 李衣菜 (`tada_riina`)
- Release date: 2015-10-07
- Game first: テレビアニメ19話挿入歌
- CD first: [[THE IDOLM@STER CINDERELLA GIRLS ANIMATION PROJECT シリーズ#AP2nd04|CINDERELLA GIRLS ANIMATION PROJECT 2nd Season 04 この空の下 ＆ ØωØver!! -Heart Beat Version-]]

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

## 42. 夢色ハーモニー

- Song ID: `song_000392`
- Candidate ID: `music765plus_page_494`
- Source page: [music765plus page 494](https://music765plus.com/%E5%A4%A2%E8%89%B2%E3%83%8F%E3%83%BC%E3%83%A2%E3%83%8B%E3%83%BC)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 夢色ハーモニー
- Unit label: (デレアニED曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2015-07-18
- Game first: スターライトステージ（2015年10月31日）
- CD first: [[THE_IDOLM@STER_CINDERELLA_GIRLS_ANIMATION_PROJECT_シリーズ#ANIMATION PROJECT 2nd Season|ANIMATION PROJECT 2nd Season 01の02〜07]]

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

## 43. DIAMOND DAYS

- Song ID: `song_000514`
- Candidate ID: `music765plus_page_619`
- Source page: [music765plus page 619](https://music765plus.com/DIAMOND_DAYS)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: DIAMOND DAYS
- Unit label: (キャスティング投票企画共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2016-09-07
- Game first: シアターデイズ(2023/12/09)
- CD first: THE@TER ACTIVITIES、THE@TER BOOST、THE@TER CHALLENGE共通曲

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

## 44. ストレートラブ！

- Song ID: `song_000566`
- Candidate ID: `music765plus_page_671`
- Source page: [music765plus page 671](https://music765plus.com/%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%83%A9%E3%83%96%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ストレートラブ！
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2008-12-25
- Game first: *(blank)*
- CD first: ドラマCD アイドルマスター Eternal Prism 01(2008/12/25)、音源初出は[[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|Eternal Prism Premium CD]](2009年5月11日)

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

## 45. Melted Snow

- Song ID: `song_000569`
- Candidate ID: `music765plus_page_674`
- Source page: [music765plus page 674](https://music765plus.com/Melted_Snow)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Melted Snow
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2009-02-25
- Game first: *(blank)*
- CD first: ドラマCD アイドルマスター Eternal Prism 03(2009/02/25)、音源初出は[[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

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

## 46. 星彩ステッパー

- Song ID: `song_000648`
- Candidate ID: `music765plus_page_1029`
- Source page: [music765plus page 1029](https://music765plus.com/%E6%98%9F%E5%BD%A9%E3%82%B9%E3%83%86%E3%83%83%E3%83%91%E3%83%BC)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 星彩ステッパー
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2018-01-11
- Game first: ステラステージDLCカタログ２号 (2018年1月11日)
- CD first: [[THE IDOLM@STER STELLA MASTER シリーズ#SM02|THE IDOLM@STER STELLA MASTER 02 星彩ステッパー]] (2018年3月14日)

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

## 47. そしてぼくらは旅にでる

- Song ID: `song_000650`
- Candidate ID: `music765plus_page_1031`
- Source page: [music765plus page 1031](https://music765plus.com/%E3%81%9D%E3%81%97%E3%81%A6%E3%81%BC%E3%81%8F%E3%82%89%E3%81%AF%E6%97%85%E3%81%AB%E3%81%A7%E3%82%8B)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: そしてぼくらは旅にでる
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2018-01-25
- Game first: ステラステージDLCカタログ３号 (2018年1月25日)
- CD first: [[THE IDOLM@STER STELLA MASTER シリーズ#SM03|THE IDOLM@STER STELLA MASTER 03 そしてぼくらは旅にでる]] (2018年4月18日)

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

## 48. DRIVE A LIVE

- Song ID: `song_000672`
- Candidate ID: `music765plus_page_1081`
- Source page: [music765plus page 1081](https://music765plus.com/DRIVE_A_LIVE)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: DRIVE A LIVE
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2015-04-15
- Game first: LIVE ON ST@GE (2017年8月30日)
- CD first: [[THE IDOLM@STER SideM ST@RTING LINE シリーズ|SideM ST@RTING LINEシリーズ共通曲]] (2015年4月15日)

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

## 49. MEET THE WORLD!

- Song ID: `song_000697`
- Candidate ID: `music765plus_page_1127`
- Source page: [music765plus page 1127](https://music765plus.com/MEET_THE_WORLD%21)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: MEET THE WORLD!
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2018-05-09
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER SideM WORLD TRE@SURE シリーズ]] (2018年5月9日)

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

## 50. お願い！シンデレラ〈天海春香 ver.〉

- Song ID: `song_000843`
- Candidate ID: `music765plus_page_1521`
- Source page: [music765plus page 1521](https://music765plus.com/%E3%81%8A%E9%A1%98%E3%81%84%EF%BC%81%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%80%88%E5%A4%A9%E6%B5%B7%E6%98%A5%E9%A6%99_ver.%E3%80%89)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: お願い！シンデレラ〈天海春香 ver.〉
- Unit label: -
- Raw vocal credit: 天海春香(中村繪里子)
- Suggested performers: 天海 春香 (`haruka_amami`)
- Release date: 2014-12-28
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER ORIGINAL CD SET - 1111 BRIGHTS and MAGICS -]]

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

## 51. LIVE in your SMILE

- Song ID: `song_000857`
- Candidate ID: `music765plus_page_1599`
- Source page: [music765plus page 1599](https://music765plus.com/LIVE_in_your_SMILE)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: LIVE in your SMILE
- Unit label: Altessimo、W、FRAME、彩、神速一魂、S.E.M、THE 虎牙道、Legenders
- Raw vocal credit: 都築圭(土岐隼一),神楽麗(永野由祐),蒼井享介(山谷祥生),蒼井悠介(菊池勇成),握野英雄(熊谷健太郎),木村龍(濱健人),信玄誠司(増元拓也),華村翔真(バレッタ裕),猫柳キリオ(山下大輝),清澄九郎(中田祐矢),紅井朱雀(益山武明),黒野玄武(深町寿成),硲道夫(伊東健人),舞田類(榎木淳弥),山下次郎(中島ヨシキ),大河タケル(寺島惇太),牙崎漣(小松昌平),円城寺道流(濱野大輝),葛之葉雨彦(笠間淳),北村想楽(汐谷文康),古論クリス(駒田航)
- Suggested performers: 都築 圭 (`kei_tsuzuki`), 神楽 麗 (`rei_kagura`), 蒼井 享介 (`kyosuke_aoi`), 蒼井 悠介 (`yusuke_aoi`), 握野 英雄 (`hideo_akuno`), 木村 龍 (`ryu_kimura`), 信玄 誠司 (`seiji_shingen`), 華村 翔真 (`shoma_hanamura`), 猫柳 キリオ (`kirio_nekoyanagi`), 清澄 九郎 (`kuro_kiyosumi`), 紅井 朱雀 (`suzaku_akai`), 黒野 玄武 (`genbu_kurono`), 硲 道夫 (`michio_hazama`), 舞田 類 (`rui_maita`), 山下 次郎 (`jiro_yamashita`), 大河 タケル (`takeru_taiga`), 牙崎 漣 (`ren_kizaki`), 円城寺 道流 (`michiru_enjoji`), 葛之葉 雨彦 (`amehiko_kuzunoha`), 北村 想楽 (`sora_kitamura`), 古論 クリス (`chris_koron`)
- Release date: 2019-05-11
- Game first: *(blank)*
- CD first: [[THE_IDOLM@STER_SideM_ANNIVERSARY_DISC_シリーズ#4thANNV|THE IDOLM@STER SideM 4th ANNIVERSARY DISC「LIVE in your SMILE / DREAM JOURNEY」]] (2019/05/11・4thライブ会場先行販売)

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

## 52. DREAM JOURNEY

- Song ID: `song_000858`
- Candidate ID: `music765plus_page_1600`
- Source page: [music765plus page 1600](https://music765plus.com/DREAM_JOURNEY)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Already resolved by approved policy

- `actor_credit_mismatch` — Approved policy resolves performer identity by the credited character even when actor spelling differs or the voice cast changed.

### Current source evidence

- Source title: DREAM JOURNEY
- Unit label: DRAMATIC STARS、Jupiter、Beit、High×Joker、Café Parade、もふもふえん 、F-LAGS
- Raw vocal credit: 天道輝(仲村宗悟),桜庭薫(内田雄馬),柏木翼(八代拓),天ヶ瀬冬馬(寺島拓篤),御手洗翔太(松岡禎丞),伊集院北斗(神原大地),鷹城恭二(梅原裕一郎),ピエール(堀江瞬),渡辺みのり(高塚智人),伊瀬谷四季(野上翔),秋山隼人(千葉翔也),若里春名(白井悠介),冬美旬(永塚拓馬),榊夏来(渡辺紘),神谷幸広(狩野翔),東雲荘一郎(天﨑滉平),アスラン＝ベルゼビュートⅡ世(古川慎),卯月巻緒(児玉卓也),水嶋咲(小林大紀),岡村直央(矢野奨吾),橘志狼(古畑恵介),姫野かのん(村瀬歩),秋月涼(三瓶由布子),九十九一希(徳武竜也),兜大吾(浦尾岳大)
- Suggested performers: 天道 輝 (`teru_tendo`), 桜庭 薫 (`kaoru_sakuraba`), 柏木 翼 (`tsubasa_kashiwagi`), 天ヶ瀬 冬馬 (`toma_amagase`), 御手洗 翔太 (`shota_mitarai`), 伊集院 北斗 (`hokuto_ijuin`), 鷹城 恭二 (`kyoji_takajo`), ピエール (`pierre`), 渡辺 みのり (`minori_watanabe`), 伊瀬谷 四季 (`shiki_iseya`), 秋山 隼人 (`hayato_akiyama`), 若里 春名 (`haruna_wakazato`), 冬美  旬 (`jun_fuyumi`), 榊 夏来 (`natsuki_sakaki`), 神谷 幸広 (`yukihiro_kamiya`), 東雲 荘一郎 (`soichiro_shinonome`), アスラン＝ベルゼビュート Ⅱ世 (`asselin_beelzebuth`), 卯月 巻緒 (`makio_uzuki`), 水嶋 咲 (`saki_mizushima`), 岡村 直央 (`nao_okamura`), 橘 志狼 (`shiro_tachibana`), 姫野 かのん (`kanon_himeno`), 秋月 涼 (`ryo_akizuki`), 九十九 一希 (`kazuki_tsukumo`), 兜 大吾 (`daigo_kabuto`)
- Release date: 2019-05-11
- Game first: *(blank)*
- CD first: [[THE_IDOLM@STER_SideM_ANNIVERSARY_DISC_シリーズ#4thANNV|THE IDOLM@STER SideM 4th ANNIVERSARY DISC「LIVE in your SMILE / DREAM JOURNEY」]] (2019/05/11・4thライブ会場先行販売)

Credit diagnostics:

- 姫野かのん(村瀬歩): resolved_by_name, differs_from_current
- 九十九一希(徳武竜也): resolved_by_name, differs_from_current

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

## 53. ススメ☆オトメ 〜jewel parade〜 (COOL VERSION)

- Song ID: `song_000918`
- Candidate ID: `music765plus_page_1707`
- Source page: [music765plus page 1707](https://music765plus.com/%E3%82%B9%E3%82%B9%E3%83%A1%E2%98%86%E3%82%AA%E3%83%88%E3%83%A1_%E3%80%9Cjewel_parade%E3%80%9C_%28COOL_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ススメ☆オトメ 〜jewel parade〜 (COOL VERSION)
- Unit label: -
- Raw vocal credit: 渋谷凛(福原綾香),高垣楓(早見沙織),神崎蘭子(内田真礼),多田李衣菜(青木瑠璃子),新田美波(洲崎綾)
- Suggested performers: 渋谷 凛 (`shibuya_rin`), 高垣 楓 (`takagaki_kaede`), 神崎 蘭子 (`kanzaki_ranko`), 多田 李衣菜 (`tada_riina`), 新田 美波 (`nitta_minami`)
- Release date: 2013-09-25
- Game first: スターライトステージ(2015年9月3日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cool jewelries! 001|THE IDOLM@STER CINDERELLA MASTER Cool jewelries! 001]]

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

## 54. ススメ☆オトメ 〜jewel parade〜 (PASSION VERSION)

- Song ID: `song_000919`
- Candidate ID: `music765plus_page_1708`
- Source page: [music765plus page 1708](https://music765plus.com/%E3%82%B9%E3%82%B9%E3%83%A1%E2%98%86%E3%82%AA%E3%83%88%E3%83%A1_%E3%80%9Cjewel_parade%E3%80%9C_%28PASSION_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ススメ☆オトメ 〜jewel parade〜 (PASSION VERSION)
- Unit label: -
- Raw vocal credit: 城ヶ崎莉嘉(山本希望),諸星きらり(松嵜麗),城ヶ崎美嘉(佳村はるか),本田未央(原紗友里),赤城みりあ(黒沢ともよ)
- Suggested performers: 城ヶ崎 莉嘉 (`jougasaki_rika`), 諸星 きらり (`moroboshi_kirari`), 城ヶ崎 美嘉 (`jougasaki_mika`), 本田 未央 (`honda_mio`), 赤城 みりあ (`akagi_miria`)
- Release date: 2013-10-02
- Game first: スターライトステージ(2015年9月3日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Passion jewelries! 001|THE IDOLM@STER CINDERELLA MASTER Passion jewelries! 001]]

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

## 55. ススメ☆オトメ 〜jewel parade〜 (CUTE VERSION)

- Song ID: `song_000920`
- Candidate ID: `music765plus_page_1709`
- Source page: [music765plus page 1709](https://music765plus.com/%E3%82%B9%E3%82%B9%E3%83%A1%E2%98%86%E3%82%AA%E3%83%88%E3%83%A1_%E3%80%9Cjewel_parade%E3%80%9C_%28CUTE_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ススメ☆オトメ 〜jewel parade〜 (CUTE VERSION)
- Unit label: -
- Raw vocal credit: 双葉杏(五十嵐裕美),前川みく(高森奈津美),島村卯月(大橋彩香),小日向美穂(津田美波),安部菜々(三宅麻理恵)
- Suggested performers: 双葉 杏 (`futaba_anzu`), 前川 みく (`maekawa_miku`), 島村 卯月 (`shimamura_uzuki`), 小日向 美穂 (`kohinata_miho`), 安部 菜々 (`abe_nana`)
- Release date: 2013-10-09
- Game first: スターライトステージ(2015年9月3日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cute jewelries! 001|THE IDOLM@STER CINDERELLA MASTER Cute jewelries! 001]]

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

## 56. ゴキゲンParty Night (COOL VERSION)

- Song ID: `song_000921`
- Candidate ID: `music765plus_page_1714`
- Source page: [music765plus page 1714](https://music765plus.com/%E3%82%B4%E3%82%AD%E3%82%B2%E3%83%B3Party_Night_%28COOL_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ゴキゲンParty Night (COOL VERSION)
- Unit label: -
- Raw vocal credit: 川島瑞樹(東山奈央),白坂小梅(桜咲千依),アナスタシア(上坂すみれ),神谷奈緒(松井恵理子),北条加蓮(渕上舞)
- Suggested performers: 川島 瑞樹 (`kawashima_mizuki`), 白坂 小梅 (`shirasaka_koume`), アナスタシア (`anastasia`), 神谷 奈緒 (`kamiya_nao`), 北条 加蓮 (`hojo_karen`)
- Release date: 2014-12-17
- Game first: スターライトステージ(2015年12月30日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cool jewelries! 002|THE IDOLM@STER CINDERELLA MASTER Cool jewelries! 002]]

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

## 57. ゴキゲンParty Night (PASSION VERSION)

- Song ID: `song_000922`
- Candidate ID: `music765plus_page_1715`
- Source page: [music765plus page 1715](https://music765plus.com/%E3%82%B4%E3%82%AD%E3%82%B2%E3%83%B3Party_Night_%28PASSION_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ゴキゲンParty Night (PASSION VERSION)
- Unit label: -
- Raw vocal credit: 十時愛梨(原田ひとみ),日野茜(赤﨑千夏),高森藍子(金子有希),星輝子(松田颯水),堀裕子(鈴木絵理)
- Suggested performers: 十時 愛梨 (`totoki_airi`), 日野 茜 (`hino_akane`), 高森 藍子 (`takamori_aiko`), 星 輝子 (`hoshi_shoko`), 堀 裕子 (`hori_yuko`)
- Release date: 2014-12-24
- Game first: スターライトステージ(2015年12月30日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Passion jewelries! 002|THE IDOLM@STER CINDERELLA MASTER Passion jewelries! 002]]

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

## 58. ゴキゲンParty Night (CUTE VERSION)

- Song ID: `song_000923`
- Candidate ID: `music765plus_page_1716`
- Source page: [music765plus page 1716](https://music765plus.com/%E3%82%B4%E3%82%AD%E3%82%B2%E3%83%B3Party_Night_%28CUTE_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ゴキゲンParty Night (CUTE VERSION)
- Unit label: -
- Raw vocal credit: 三村かな子(大坪由佳),輿水幸子(竹達彩奈),佐久間まゆ(牧野由依),緒方智絵里(大空直美),小早川紗枝(立花理香)
- Suggested performers: 三村 かな子 (`mimura_kanako`), 輿水 幸子 (`koshimizu_sachiko`), 佐久間 まゆ (`sakuma_mayu`), 緒方 智絵里 (`ogata_chieri`), 小早川 紗枝 (`kobayakawa_sae`)
- Release date: 2014-12-31
- Game first: スターライトステージ(2015年12月30日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cute jewelries! 002|THE IDOLM@STER CINDERELLA MASTER Cute jewelries! 002]]

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

## 59. Near to You (CUTE VERSION)

- Song ID: `song_000926`
- Candidate ID: `music765plus_page_1785`
- Source page: [music765plus page 1785](https://music765plus.com/Near_to_You_%28CUTE_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Near to You (CUTE VERSION)
- Unit label: -
- Raw vocal credit: 宮本フレデリカ(髙野麻美),一ノ瀬志希(藍原ことみ),櫻井桃華(照井春佳),中野有香(下地紫野),五十嵐響子(種﨑敦美)
- Suggested performers: 宮本 フレデリカ (`miyamoto_frederica`), 一ノ瀬 志希 (`ichinose_shiki`), 櫻井 桃華 (`sakurai_momoka`), 中野 有香 (`nakano_yuka`), 五十嵐 響子 (`igarashi_kyoko`)
- Release date: 2016-06-01
- Game first: スターライトステージ(2016年8月19日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cute jewelries! 003|THE IDOLM@STER CINDERELLA MASTER Cute jewelries! 003]]

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

## 60. Near to You (PASSION VERSION)

- Song ID: `song_000927`
- Candidate ID: `music765plus_page_1787`
- Source page: [music765plus page 1787](https://music765plus.com/Near_to_You_%28PASSION_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Near to You (PASSION VERSION)
- Unit label: -
- Raw vocal credit: 姫川友紀(杜野まこ),市原仁奈(久野美咲),片桐早苗(和氣あず未),大槻唯(山下七海),相葉夕美(木村珠莉)
- Suggested performers: 姫川 友紀 (`himekawa_yuki`), 市原 仁奈 (`ichihara_nina`), 片桐 早苗 (`katagiri_sanae`), 大槻 唯 (`ohtsuki_yui`), 相葉 夕美 (`aiba_yumi`)
- Release date: 2016-06-15
- Game first: スターライトステージ(2016年8月19日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Passion jewelries! 003|THE IDOLM@STER CINDERELLA MASTER Passion jewelries! 003]]

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

## 61. Near to You (COOL VERSION)

- Song ID: `song_000928`
- Candidate ID: `music765plus_page_1788`
- Source page: [music765plus page 1788](https://music765plus.com/Near_to_You_%28COOL_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Near to You (COOL VERSION)
- Unit label: -
- Raw vocal credit: 鷺沢文香(M･A･O),速水奏(飯田友子),橘ありす(佐藤亜美菜),塩見周子(ルゥ ティン),二宮飛鳥(青木志貴)
- Suggested performers: 鷺沢 文香 (`sagisawa_fumika`), 速水 奏 (`hayami_kanade`), 橘 ありす (`tachibana_arisu`), 塩見 周子 (`shiomi_shuko`), 二宮 飛鳥 (`ninomiya_asuka`)
- Release date: 2016-06-29
- Game first: スターライトステージ(2016年8月19日)
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cool jewelries! 003|THE IDOLM@STER CINDERELLA MASTER Cool jewelries! 003]]

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

## 62. IDOL POWER RAINBOW(765PRO Ver.)

- Song ID: `song_000934`
- Candidate ID: `music765plus_page_2095`
- Source page: [music765plus page 2095](https://music765plus.com/IDOL_POWER_RAINBOW%28765PRO_Ver.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: IDOL POWER RAINBOW(765PRO Ver.)
- Unit label: -
- Raw vocal credit: 天海春香(中村繪里子),如月千早(今井麻美),星井美希(長谷川明子)
- Suggested performers: 天海 春香 (`haruka_amami`), 如月 千早 (`cihaya_kisaragi`), 星井 美希 (`miki_hoshii`)
- Release date: 2014-10-22
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER M@STERS OF IDOL WORLD!!2014 (映像商品)|THE IDOLM@STER M@STERS OF IDOL WORLD!!2014 &quot;PERFECT BOX!&quot;]] 特典CD(2014年10月22日)

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

## 63. なんどでも笑おう

- Song ID: `song_000935`
- Candidate ID: `music765plus_page_2197`
- Source page: [music765plus page 2197](https://music765plus.com/%E3%81%AA%E3%82%93%E3%81%A9%E3%81%A7%E3%82%82%E7%AC%91%E3%81%8A%E3%81%86)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: なんどでも笑おう
- Unit label: THE IDOLM@STER FIVE STARS!!!!!
- Raw vocal credit: 天海春香(中村繪里子),如月千早(今井麻美),星井美希(長谷川明子),島村卯月(大橋彩香),渋谷凛(福原綾香),本田未央(原紗友里),春日未来(山崎はるか),最上静香(田所あずさ),伊吹翼(Machico),天道輝(仲村宗悟),桜庭薫(内田雄馬),柏木翼(八代拓),櫻木真乃(関根瞳),風野灯織(近藤玲奈),八宮めぐる(峯田茉優)
- Suggested performers: 天海 春香 (`haruka_amami`), 如月 千早 (`cihaya_kisaragi`), 星井 美希 (`miki_hoshii`), 島村 卯月 (`shimamura_uzuki`), 渋谷 凛 (`shibuya_rin`), 本田 未央 (`honda_mio`), 春日 未来 (`mirai_kasuga`), 最上 静香 (`shizuka_mogami`), 伊吹 翼 (`tsubasa_ibuki`), 天道 輝 (`teru_tendo`), 桜庭 薫 (`kaoru_sakuraba`), 柏木 翼 (`tsubasa_kashiwagi`), 櫻木 真乃 (`mano_sakuragi`), 風野 灯織 (`hiori_kazano`), 八宮 めぐる (`meguru_hachimiya`)
- Release date: 2020-09-16
- Game first: *(blank)*
- CD first: [[THE IDOLM@STERシリーズ15周年記念曲「なんどでも笑おう」]](配信日：2020/09/16、CD発売日：2020/09/30)

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

## 64. New Me, Continued

- Song ID: `song_000986`
- Candidate ID: `music765plus_page_2545`
- Source page: [music765plus page 2545](https://music765plus.com/New_Me%2C_Continued)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: New Me, Continued
- Unit label: -
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2020-08-05
- Game first: *(blank)*
- CD first: MASTER ARTIST 4 共通曲(2020年8月5日)

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

## 65. NEXT STAGE！

- Song ID: `song_001013`
- Candidate ID: `music765plus_page_2646`
- Source page: [music765plus page 2646](https://music765plus.com/NEXT_STAGE%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: NEXT STAGE！
- Unit label: (NEW STAGEシリーズ共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2020-10-07
- Game first: *(blank)*
- CD first: THE IDOLM@STER SideM NEW STAGE EPISODE：01 もふもふえん(2020/10/07)

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

## 66. リフレクトサイン

- Song ID: `song_001074`
- Candidate ID: `music765plus_page_2770`
- Source page: [music765plus page 2770](https://music765plus.com/%E3%83%AA%E3%83%95%E3%83%AC%E3%82%AF%E3%83%88%E3%82%B5%E3%82%A4%E3%83%B3)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: リフレクトサイン
- Unit label: Team.Luna
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2021-01-23
- Game first: シャイニーカラーズ (2021/02/04)
- CD first: *(blank)*

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

## 67. Be proud

- Song ID: `song_001118`
- Candidate ID: `music765plus_page_2875`
- Source page: [music765plus page 2875](https://music765plus.com/Be_proud)
- Pending flags: `duplicate_original_title`

### Why it was flagged

- `duplicate_original_title` — Two Original pages with the same title are not merged automatically; confirm whether they are one song, distinct songs, or duplicate evidence.

### Current source evidence

- Source title: Be proud
- Unit label: ストロベリーポップムーン
- Raw vocal credit: 春日未来(山崎はるか),最上静香(田所あずさ),伊吹翼(Machico)
- Suggested performers: 春日 未来 (`mirai_kasuga`), 最上 静香 (`shizuka_mogami`), 伊吹 翼 (`tsubasa_ibuki`)
- Release date: 2021-04-18
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER MILLION THE@TER WAVE シリーズ#Strawberry_Pop_Moon|THE IDOLM@STER MILLION THE@TER WAVE 18 ストロベリーポップムーン]](2021/06/23)

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

## 68. VOY@GER

- Song ID: `song_001128`
- Candidate ID: `music765plus_page_2924`
- Source page: [music765plus page 2924](https://music765plus.com/VOY%40GER)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: VOY@GER
- Unit label: THE IDOLM@STER FIVE STARS!!!!!
- Raw vocal credit: 天海春香(中村繪里子),菊地真(平田宏美),四条貴音(原由実),塩見周子(ルゥ ティン),新田美波(洲崎綾),久川颯(長江里加),高坂海美(上田麗奈),白石紬(南早紀),望月杏奈(夏川椎菜),鷹城恭二(梅原裕一郎),黒野玄武(深町寿成),古論クリス(駒田航),有栖川夏葉(涼本あきほ),黛冬優子(幸村恵理),浅倉透(和久井優)
- Suggested performers: 天海 春香 (`haruka_amami`), 菊地 真 (`makoto_kikuchi`), 四条 貴音 (`takane_shijo`), 塩見 周子 (`shiomi_shuko`), 新田 美波 (`nitta_minami`), 久川 颯 (`hisakawa_hayate`), 高坂 海美 (`umi_kousaka`), 白石 紬 (`tsumugi_shiraishi`), 望月 杏奈 (`anna_mochizuki`), 鷹城 恭二 (`kyoji_takajo`), 黒野 玄武 (`genbu_kurono`), 古論 クリス (`chris_koron`), 有栖川 夏葉 (`natsuha_arisugawa`), 黛 冬優子 (`fuyuko_mayuzumi`), 浅倉 透 (`toru_asakura`)
- Release date: 2021-08-04
- Game first: スターライトステージ(2021/12/19)、シアターデイズ(2022/05/15)、Song for Prism(2025/02/26)、アイドルマスター ツアーズ(2025/03/26)
- CD first: 【THE IDOLM@STER FIVE STARS!!!!!】(配信・2021/08/04)&lt;br&gt;【765PRO ALLSTARS盤】【シンデレラガールズ盤】【ミリオンライブ！盤】【SideM盤】【シャイニーカラーズ盤】を同時発売(2021/08/04)

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

## 69. ダイヤモンド・クラリティ

- Song ID: `song_001145`
- Candidate ID: `music765plus_page_3034`
- Source page: [music765plus page 3034](https://music765plus.com/%E3%83%80%E3%82%A4%E3%83%A4%E3%83%A2%E3%83%B3%E3%83%89%E3%83%BB%E3%82%AF%E3%83%A9%E3%83%AA%E3%83%86%E3%82%A3)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: ダイヤモンド・クラリティ
- Unit label: BRIGHT DIAMOND
- Raw vocal credit: 桜守歌織(香里有佐),四条貴音(原由実),伊吹翼(Machico),春日未来(山崎はるか),周防桃子(渡部恵子),田中琴葉(種田梨沙),徳川まつり(諏訪彩花),所恵美(藤井ゆきよ),萩原雪歩(浅倉杏美),双海真美(下田麻美),水瀬伊織(釘宮理恵),宮尾美也(桐谷蝶々),百瀬莉緒(山口立花子)
- Suggested performers: 桜守 歌織 (`kaori_sakuramori`), 四条 貴音 (`takane_shijo`), 伊吹 翼 (`tsubasa_ibuki`), 春日 未来 (`mirai_kasuga`), 周防 桃子 (`momoko_suou`), 田中 琴葉 (`kotoha_tanaka`), 徳川 まつり (`matsuri_tokugawa`), 所 恵美 (`megumi_tokoro`), 萩原 雪歩 (`yukiho_hagiwara`), 双海 真美 (`mami_futami`), 水瀬 伊織 (`iori_minase`), 宮尾 美也 (`miya_miyao`), 百瀬 莉緒 (`rio_momose`)
- Release date: 2021-09-17
- Game first: シアターデイズ(2021/09/17)
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#BRIGHT_DIAMOND|THE IDOLM@STER MILLION THE@TER SEASON BRIGHT DIAMOND]](2021/10/27)

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

## 70. ストレートラブ！(765プロVer.)

- Song ID: `song_001184`
- Candidate ID: `music765plus_page_3169`
- Source page: [music765plus page 3169](https://music765plus.com/%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%83%A9%E3%83%96%EF%BC%81%28765%E3%83%97%E3%83%ADVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ストレートラブ！(765プロVer.)
- Unit label: -
- Raw vocal credit: 天海春香(中村繪里子),水瀬伊織(釘宮理恵),菊地真(平田宏美)
- Suggested performers: 天海 春香 (`haruka_amami`), 水瀬 伊織 (`iori_minase`), 菊地 真 (`makoto_kikuchi`)
- Release date: 2009-05-11
- Game first: *(blank)*
- CD first: [[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

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

## 71. ストレートラブ！(961プロVer.)

- Song ID: `song_001185`
- Candidate ID: `music765plus_page_3170`
- Source page: [music765plus page 3170](https://music765plus.com/%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%83%A9%E3%83%96%EF%BC%81%28961%E3%83%97%E3%83%ADVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: ストレートラブ！(961プロVer.)
- Unit label: -
- Raw vocal credit: 星井美希(長谷川明子),我那覇響(沼倉愛美),四条貴音(原由実)
- Suggested performers: 星井 美希 (`miki_hoshii`), 我那覇 響 (`hibiki_ganaha`), 四条 貴音 (`takane_shijo`)
- Release date: 2009-05-11
- Game first: *(blank)*
- CD first: [[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

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

## 72. 白い犬＆黒い犬

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

## 73. Melted Snow(765プロVer.)

- Song ID: `song_001187`
- Candidate ID: `music765plus_page_3188`
- Source page: [music765plus page 3188](https://music765plus.com/Melted_Snow%28765%E3%83%97%E3%83%ADVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Already resolved by approved policy

- `actor_credit_mismatch` — Approved policy resolves performer identity by the credited character even when actor spelling differs or the voice cast changed.

### Current source evidence

- Source title: Melted Snow(765プロVer.)
- Unit label: -
- Raw vocal credit: 如月千早(今井麻美),萩原雪歩(長谷優里奈),三浦あずさ(たかはし智秋)
- Suggested performers: 如月 千早 (`cihaya_kisaragi`), 萩原 雪歩 (`yukiho_hagiwara`), 三浦 あずさ (`azusa_miura`)
- Release date: 2009-05-11
- Game first: *(blank)*
- CD first: [[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

Credit diagnostics:

- 萩原雪歩(長谷優里奈): resolved_by_name, differs_from_current

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

## 74. Melted Snow(961プロVer.)

- Song ID: `song_001188`
- Candidate ID: `music765plus_page_3190`
- Source page: [music765plus page 3190](https://music765plus.com/Melted_Snow%28961%E3%83%97%E3%83%ADVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Melted Snow(961プロVer.)
- Unit label: -
- Raw vocal credit: 星井美希(長谷川明子),我那覇響(沼倉愛美),四条貴音(原由実)
- Suggested performers: 星井 美希 (`miki_hoshii`), 我那覇 響 (`hibiki_ganaha`), 四条 貴音 (`takane_shijo`)
- Release date: 2009-05-11
- Game first: *(blank)*
- CD first: [[アイマスラジオ（フロンティアワークス）のCD#Eternal Prism|THE IDOLM@STER Eternal Prism Premium CD]](2009/05/11)

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

## 75. Shamrock Vivace

- Song ID: `song_001194`
- Candidate ID: `music765plus_page_3210`
- Source page: [music765plus page 3210](https://music765plus.com/Shamrock_Vivace)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: Shamrock Vivace
- Unit label: CLEVER CLOVER
- Raw vocal credit: 木下ひなた(田村奈央),高坂海美(上田麗奈),秋月律子(若林直美),大神環(稲川英里),菊地真(平田宏美),島原エレナ(角元明日香),二階堂千鶴(野村香菜子),箱崎星梨花(麻倉もも),馬場このみ(髙橋ミナミ),真壁瑞希(阿部里果),三浦あずさ(たかはし智秋),横山奈緒(渡部優衣),ロコ(中村温姫)
- Suggested performers: 木下 ひなた (`hinata_kinoshita`), 高坂 海美 (`umi_kousaka`), 秋月 律子 (`ritsuko_akizuki`), 大神 環 (`tamaki_ogami`), 菊地 真 (`makoto_kikuchi`), 島原 エレナ (`elena_shimabara`), 二階堂 千鶴 (`chizuru_nikaido`), 箱崎 星梨花 (`serika_hakozaki`), 馬場 このみ (`konomi_baba`), 真壁 瑞希 (`mizuki_makabe`), 三浦 あずさ (`azusa_miura`), 横山 奈緒 (`nao_yokoyama`), ロコ (`roco_handa`)
- Release date: 2022-01-18
- Game first: シアターデイズ(2022/1/18)
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#CLEVER_CLOVER|THE IDOLM@STER MILLION THE@TER SEASON CLEVER CLOVER]](2022/02/23)

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

## 76. 全力★ドリーミングガールズ

- Song ID: `song_001208`
- Candidate ID: `music765plus_page_3272`
- Source page: [music765plus page 3272](https://music765plus.com/%E5%85%A8%E5%8A%9B%E2%98%85%E3%83%89%E3%83%AA%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: 全力★ドリーミングガールズ
- Unit label: (スタマスDLC)
- Raw vocal credit: 田中摩美々(菅沼千紗),萩原雪歩(浅倉杏美),高槻やよい(仁後真耶子),双海亜美(下田麻美),双海真美(下田麻美),星井美希(長谷川明子),諸星きらり(松嵜麗),城ヶ崎美嘉(佳村はるか),伊吹翼(Machico),桜守歌織(香里有佐),小宮果穂(河野ひより),奥空心白(田中あいみ),亜夜(日高里菜)
- Suggested performers: 田中 摩美々 (`mamimi_tanaka`), 萩原 雪歩 (`yukiho_hagiwara`), 高槻 やよい (`yayoi_takatsuki`), 双海 亜美 (`ami_futami`), 双海 真美 (`mami_futami`), 星井 美希 (`miki_hoshii`), 諸星 きらり (`moroboshi_kirari`), 城ヶ崎 美嘉 (`jougasaki_mika`), 伊吹 翼 (`tsubasa_ibuki`), 桜守 歌織 (`kaori_sakuramori`), 小宮 果穂 (`kaho_komiya`), 奥空 心白 (`kohaku_okuzora`), 亜夜 (`aya`)
- Release date: 2022-02-10
- Game first: スターリットシーズン DLC CATALOG Vol.5(2022/02/10)
- CD first: [[THE IDOLM@STER STARLIT SEASON シリーズ#STARLIT03|THE IDOLM@STER STARLIT SEASON 03]](2022/03/02)

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

## 77. 空色♡ Birthday Card

- Song ID: `song_001250`
- Candidate ID: `music765plus_page_3327`
- Source page: [music765plus page 3327](https://music765plus.com/%E7%A9%BA%E8%89%B2%E2%99%A1_Birthday_Card)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: 空色♡ Birthday Card
- Unit label: LOVERS HEART
- Raw vocal credit: ジュリア(愛美),高山紗代子(駒形友梨),天海春香(中村繪里子),如月千早(今井麻美),北上麗花(平山笑美),佐竹美奈子(大関英里),高槻やよい(仁後真耶子),天空橋朋花(小岩井ことり),七尾百合子(伊藤美来),福田のり子(浜崎奈々),松田亜利沙(村川梨衣),望月杏奈(夏川椎菜),矢吹可奈(木戸衣吹)
- Suggested performers: ジュリア (`julia`), 高山 紗代子 (`sayoko_takayama`), 天海 春香 (`haruka_amami`), 如月 千早 (`cihaya_kisaragi`), 北上 麗花 (`reika_kitakami`), 佐竹 美奈子 (`minako_satake`), 高槻 やよい (`yayoi_takatsuki`), 天空橋 朋花 (`tomoka_tenkubashi`), 七尾 百合子 (`yuriko_nanao`), 福田 のり子 (`noriko_fukuda`), 松田 亜利沙 (`arisa_matsuda`), 望月 杏奈 (`anna_mochizuki`), 矢吹 可奈 (`kana_yabuki`)
- Release date: 2022-05-17
- Game first: シアターデイズ(2022/05/17)
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#LOVERS_HEART|THE IDOLM@STER MILLION THE@TER SEASON LOVERS HEART]](2022/06/29)

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

## 78. 認めてくれなくたっていいよ

- Song ID: `song_001299`
- Candidate ID: `music765plus_page_3399`
- Source page: [music765plus page 3399](https://music765plus.com/%E8%AA%8D%E3%82%81%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%8F%E3%81%9F%E3%81%A3%E3%81%A6%E3%81%84%E3%81%84%E3%82%88)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 認めてくれなくたっていいよ
- Unit label: (jewelries! 004共通曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2022-09-03
- Game first: スターライトステージ(2022/09/29)
- CD first: [[THE_IDOLM@STER_CINDERELLA_MASTER_jewelries!_シリーズ#Cute_jewelries!_004|jewelries! 004 シリーズ共通曲]](2022/09/28)

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

## 79. 約束(TV VERSION)

- Song ID: `song_001302`
- Candidate ID: `music765plus_page_3438`
- Source page: [music765plus page 3438](https://music765plus.com/%E7%B4%84%E6%9D%9F%28TV_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: 約束(TV VERSION)
- Unit label: (アニメ挿入歌)
- Raw vocal credit: 如月千早(今井麻美),天海春香(中村繪里子),星井美希(長谷川明子),高槻やよい(仁後真耶子),萩原雪歩(浅倉杏美),菊地真(平田宏美),双海亜美／真美(下田麻美),水瀬伊織(釘宮理恵),三浦あずさ(たかはし智秋),四条貴音(原由実),我那覇響(沼倉愛美)
- Suggested performers: 如月 千早 (`cihaya_kisaragi`), 天海 春香 (`haruka_amami`), 星井 美希 (`miki_hoshii`), 高槻 やよい (`yayoi_takatsuki`), 萩原 雪歩 (`yukiho_hagiwara`), 菊地 真 (`makoto_kikuchi`), 双海 亜美 (`ami_futami`), 双海 真美 (`mami_futami`), 水瀬 伊織 (`iori_minase`), 三浦 あずさ (`azusa_miura`), 四条 貴音 (`takane_shijo`), 我那覇 響 (`hibiki_ganaha`)
- Release date: 2011-11-18
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER ANIM@TION MASTER シリーズ#AM06|THE IDOLM@STER ANIM@TION MASTER 06]] (2011年12月28日)

Credit diagnostics:

- 双海亜美／真美(下田麻美): explicit_override, matches_current

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

## 80. ESPADA

- Song ID: `song_001326`
- Candidate ID: `music765plus_page_3552`
- Source page: [music765plus page 3552](https://music765plus.com/ESPADA)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: ESPADA
- Unit label: SHADE OF SPADE
- Raw vocal credit: 豊川風花(末柄里恵),エミリー スチュアート(郁原ゆう),我那覇響(沼倉愛美),北沢志保(雨宮天),篠宮可憐(近藤唯),白石紬(南早紀),中谷育(原嶋あかり),永吉昴(斉藤佑圭),野々原茜(小笠原早紀),双海亜美(下田麻美),星井美希(長谷川明子),舞浜歩(戸田めぐみ),最上静香(田所あずさ)
- Suggested performers: 豊川 風花 (`fuka_toyokawa`), エミリー スチュアート (`emily_stewart`), 我那覇 響 (`hibiki_ganaha`), 北沢 志保 (`shiho_kitazawa`), 篠宮 可憐 (`karen_shinomiya`), 白石 紬 (`tsumugi_shiraishi`), 中谷 育 (`iku_nakatani`), 永吉 昴 (`subaru_nagayoshi`), 野々原 茜 (`akane_nonohara`), 双海 亜美 (`ami_futami`), 星井 美希 (`miki_hoshii`), 舞浜 歩 (`ayumu_maihama`), 最上 静香 (`shizuka_mogami`)
- Release date: 2022-09-17
- Game first: シアターデイズ(2022/09/17)
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#SHADE_OF_SPADE|THE IDOLM@STER MILLION THE@TER SEASON SHADE OF SPADE]](2022/10/26)

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

## 81. 幻想のUtopia

- Song ID: `song_001379`
- Candidate ID: `music765plus_page_3809`
- Source page: [music765plus page 3809](https://music765plus.com/%E5%B9%BB%E6%83%B3%E3%81%AEUtopia)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: 幻想のUtopia
- Unit label: (PRS超常事変)
- Raw vocal credit: ピエール(堀江瞬),蒼井悠介(菊池勇成),蒼井享介(山谷祥生),握野英雄(熊谷健太郎),木村龍(濱健人),秋山隼人(千葉翔也),冬美旬(永塚拓馬),榊夏来(渡辺紘),若里春名(白井悠介),紅井朱雀(益山武明),東雲荘一郎(天﨑滉平),アスラン＝ベルゼビュートⅡ世(古川慎),岡村直央(矢野奨吾),硲道夫(伊東健人),大河タケル(寺島惇太),牙崎漣(小松昌平),天峰秀(伊瀬結陸),花園百々人(宮﨑雅也),眉見鋭心(大塚剛央)
- Suggested performers: ピエール (`pierre`), 蒼井 悠介 (`yusuke_aoi`), 蒼井 享介 (`kyosuke_aoi`), 握野 英雄 (`hideo_akuno`), 木村 龍 (`ryu_kimura`), 秋山 隼人 (`hayato_akiyama`), 冬美  旬 (`jun_fuyumi`), 榊 夏来 (`natsuki_sakaki`), 若里 春名 (`haruna_wakazato`), 紅井 朱雀 (`suzaku_akai`), 東雲 荘一郎 (`soichiro_shinonome`), アスラン＝ベルゼビュート Ⅱ世 (`asselin_beelzebuth`), 岡村 直央 (`nao_okamura`), 硲 道夫 (`michio_hazama`), 大河 タケル (`takeru_taiga`), 牙崎 漣 (`ren_kizaki`), 天峰 秀 (`shu_amamine`), 花園 百々人 (`momohito_hanazono`), 眉見 鋭心 (`eishin_mayumi`)
- Release date: 2023-03-11
- Game first: *(blank)*
- CD first: [[THE_IDOLM@STER_SideM_PASSIONABLE_READING_SHOW_シリーズ#超常事変|アイドルマスター SideM 超常事変～対立スル正義～ 主題歌「幻想のUtopia」/「安寧のDystopia」]](2023/03/11)

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

## 82. 安寧のDystopia

- Song ID: `song_001380`
- Candidate ID: `music765plus_page_3810`
- Source page: [music765plus page 3810](https://music765plus.com/%E5%AE%89%E5%AF%A7%E3%81%AEDystopia)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: 安寧のDystopia
- Unit label: (PRS超常事変)
- Raw vocal credit: 天ヶ瀬冬馬(寺島拓篤),伊集院北斗(神原大地),都築圭(土岐隼一),神楽麗(永野由祐),渡辺みのり(高塚智人),信玄誠司(増元拓也),華村翔真(バレッタ裕),清澄九郎(中田祐矢),伊瀬谷四季(野上翔),神谷幸広(狩野翔),卯月巻緒(児玉卓也),水嶋咲(小林大紀),橘志狼(古畑恵介),舞田類(榎木淳弥),山下次郎(中島ヨシキ),円城寺道流(濱野大輝),兜大吾(浦尾岳大),九十九一希(比留間俊哉),葛之葉雨彦(笠間淳),北村想楽(汐谷文康)
- Suggested performers: 天ヶ瀬 冬馬 (`toma_amagase`), 伊集院 北斗 (`hokuto_ijuin`), 都築 圭 (`kei_tsuzuki`), 神楽 麗 (`rei_kagura`), 渡辺 みのり (`minori_watanabe`), 信玄 誠司 (`seiji_shingen`), 華村 翔真 (`shoma_hanamura`), 清澄 九郎 (`kuro_kiyosumi`), 伊瀬谷 四季 (`shiki_iseya`), 神谷 幸広 (`yukihiro_kamiya`), 卯月 巻緒 (`makio_uzuki`), 水嶋 咲 (`saki_mizushima`), 橘 志狼 (`shiro_tachibana`), 舞田 類 (`rui_maita`), 山下 次郎 (`jiro_yamashita`), 円城寺 道流 (`michiru_enjoji`), 兜 大吾 (`daigo_kabuto`), 九十九 一希 (`kazuki_tsukumo`), 葛之葉 雨彦 (`amehiko_kuzunoha`), 北村 想楽 (`sora_kitamura`)
- Release date: 2023-03-11
- Game first: *(blank)*
- CD first: [[THE_IDOLM@STER_SideM_PASSIONABLE_READING_SHOW_シリーズ#超常事変|アイドルマスター SideM 超常事変～対立スル正義～ 主題歌「幻想のUtopia」/「安寧のDystopia」]](2023/03/11)

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

## 83. メッセージ

- Song ID: `song_001429`
- Candidate ID: `music765plus_page_3899`
- Source page: [music765plus page 3899](https://music765plus.com/%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%28%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%AA%E3%82%A2%E3%81%AE%E6%9B%B2%29)
- Pending flags: `duplicate_original_title`

### Why it was flagged

- `duplicate_original_title` — Two Original pages with the same title are not merged automatically; confirm whether they are one song, distinct songs, or duplicate evidence.

### Current source evidence

- Source title: メッセージ
- Unit label: アルストロメリア
- Raw vocal credit: 大崎甘奈(黒木ほの香),大崎甜花(前川涼子),桑山千雪(芝崎典子)
- Suggested performers: 大崎 甘奈 (`amana_osaki`), 大崎 甜花 (`tenka_osaki`), 桑山 千雪 (`chiyuki_kuwayama`)
- Release date: 2023-06-09
- Game first: シャイニーカラーズ(2023/06/09)
- CD first: 【先行配信】(2023/07/05)、[[THE IDOLM@STER SHINY COLORS “CANVAS”シリーズ#ALSTROEMERIA|THE IDOLM@STER SHINY COLORS “CANVAS” 04]](2023/07/12)

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

## 84. がむしゃらに行こう！

- Song ID: `song_001648`
- Candidate ID: `music765plus_page_4269`
- Source page: [music765plus page 4269](https://music765plus.com/%E3%81%8C%E3%82%80%E3%81%97%E3%82%83%E3%82%89%E3%81%AB%E8%A1%8C%E3%81%93%E3%81%86%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: がむしゃらに行こう！
- Unit label: (初星学園・デビューライブ開催記念曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2024-08-09
- Game first: 学園アイドルマスター(2025/09/29)
- CD first: 【配信】(2024/08/09)

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

## 85. Howling over the World

- Song ID: `song_001656`
- Candidate ID: `music765plus_page_4295`
- Source page: [music765plus page 4295](https://music765plus.com/Howling_over_the_World)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: Howling over the World
- Unit label: (初星学園・デビューライブ開催記念曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2024-08-16
- Game first: 学園アイドルマスター(2025/05/29)
- CD first: 【配信】(2024/08/16)

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

## 86. ミラクルナナウ(ﾟ∀ﾟ)！

- Song ID: `song_001659`
- Candidate ID: `music765plus_page_4298`
- Source page: [music765plus page 4298](https://music765plus.com/%E3%83%9F%E3%83%A9%E3%82%AF%E3%83%AB%E3%83%8A%E3%83%8A%E3%82%A6%28%EF%BE%9F%E2%88%80%EF%BE%9F%29%EF%BC%81)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ミラクルナナウ(ﾟ∀ﾟ)！
- Unit label: (初星学園・デビューライブ開催記念曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2024-08-23
- Game first: 学園アイドルマスター(2025/08/29)
- CD first: Apple Musicで先行配信(2024/08/23)、【配信】(2024/08/24)

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

## 87. 古今東西ちょちょいのちょい

- Song ID: `song_001693`
- Candidate ID: `music765plus_page_4352`
- Source page: [music765plus page 4352](https://music765plus.com/%E5%8F%A4%E4%BB%8A%E6%9D%B1%E8%A5%BF%E3%81%A1%E3%82%87%E3%81%A1%E3%82%87%E3%81%84%E3%81%AE%E3%81%A1%E3%82%87%E3%81%84)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 古今東西ちょちょいのちょい
- Unit label: (初星学園)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2024-10-28
- Game first: 学園アイドルマスター(2024/10/28)
- CD first: 【配信】(2024/10/30)、[[学園アイドルマスター 初星学園×アニメイト コラボCD「古今東西ちょちょいのちょい」]](全6種)(2024/10/30)

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

## 88. Migratory Echoes (アンティーカVer.)

- Song ID: `song_001740`
- Candidate ID: `music765plus_page_4572`
- Source page: [music765plus page 4572](https://music765plus.com/Migratory_Echoes_%28%E3%82%A2%E3%83%B3%E3%83%86%E3%82%A3%E3%83%BC%E3%82%ABVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (アンティーカVer.)
- Unit label: アンティーカ
- Raw vocal credit: 月岡恋鐘(礒部花凜),田中摩美々(菅沼千紗),白瀬咲耶(八巻アンナ),三峰結華(希水しお),幽谷霧子(結名美月)
- Suggested performers: 月岡 恋鐘 (`kogane_tsukioka`), 田中 摩美々 (`mamimi_tanaka`), 白瀬 咲耶 (`sakuya_shirase`), 三峰 結華 (`yuika_mitsumine`), 幽谷 霧子 (`kiriko_yukoku`)
- Release date: 2024-05-30
- Game first: シャイニーカラーズ(2024/05/30)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#L_Antica|THE IDOLM@STER SHINY COLORS ECHOES 02]](2024/06/12)

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

## 89. Migratory Echoes (放課後クライマックスガールズVer.)

- Song ID: `song_001741`
- Candidate ID: `music765plus_page_4573`
- Source page: [music765plus page 4573](https://music765plus.com/Migratory_Echoes_%28%E6%94%BE%E8%AA%B2%E5%BE%8C%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%9E%E3%83%83%E3%82%AF%E3%82%B9%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BAVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (放課後クライマックスガールズVer.)
- Unit label: 放課後クライマックスガールズ
- Raw vocal credit: 小宮果穂(河野ひより),園田智代子(白石晴香),西城樹里(永井真里子),杜野凛世(丸岡和佳奈),有栖川夏葉(涼本あきほ)
- Suggested performers: 小宮 果穂 (`kaho_komiya`), 園田 智代子 (`chiyoko_sonoda`), 西城 樹里 (`juri_saijo`), 杜野 凛世 (`rinze_morino`), 有栖川 夏葉 (`natsuha_arisugawa`)
- Release date: 2024-06-29
- Game first: シャイニーカラーズ(2024/06/29)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#HO-KA-GO_CLIMAX_GIRLS|THE IDOLM@STER SHINY COLORS ECHOES 03]](2024/07/10)

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

## 90. Migratory Echoes (アルストロメリアVer.)

- Song ID: `song_001742`
- Candidate ID: `music765plus_page_4574`
- Source page: [music765plus page 4574](https://music765plus.com/Migratory_Echoes_%28%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AD%E3%83%A1%E3%83%AA%E3%82%A2Ver.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (アルストロメリアVer.)
- Unit label: アルストロメリア
- Raw vocal credit: 大崎甘奈(黒木ほの香), 大崎甜花(前川涼子), 桑山千雪(芝崎典子)
- Suggested performers: 大崎 甘奈 (`amana_osaki`), 大崎 甜花 (`tenka_osaki`), 桑山 千雪 (`chiyuki_kuwayama`)
- Release date: 2024-07-27
- Game first: シャイニーカラーズ(2024/07/27)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#ALSTROEMERIA|THE IDOLM@STER SHINY COLORS ECHOES 04]](2024/08/07)

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

## 91. Migratory Echoes (ストレイライトVer.)

- Song ID: `song_001743`
- Candidate ID: `music765plus_page_4575`
- Source page: [music765plus page 4575](https://music765plus.com/Migratory_Echoes_%28%E3%82%B9%E3%83%88%E3%83%AC%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%88Ver.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (ストレイライトVer.)
- Unit label: ストレイライト
- Raw vocal credit: 芹沢あさひ(田中有紀),黛冬優子(幸村恵理),和泉愛依(北原沙弥香)
- Suggested performers: 芹沢 あさひ (`asahi_serizawa`), 黛 冬優子 (`fuyuko_mayuzumi`), 和泉 愛依 (`mei_izumi`)
- Release date: 2024-08-30
- Game first: シャイニーカラーズ(2024/08/30)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#Straylight|THE IDOLM@STER SHINY COLORS ECHOES 05]](2024/09/11)

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

## 92. Migratory Echoes (ノクチルVer.)

- Song ID: `song_001744`
- Candidate ID: `music765plus_page_4576`
- Source page: [music765plus page 4576](https://music765plus.com/Migratory_Echoes_%28%E3%83%8E%E3%82%AF%E3%83%81%E3%83%ABVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (ノクチルVer.)
- Unit label: ノクチル
- Raw vocal credit: 浅倉透(和久井優),樋口円香(土屋李央),福丸小糸(田嶌紗蘭),市川雛菜(岡咲美保)
- Suggested performers: 浅倉 透 (`toru_asakura`), 樋口 円香 (`madoka_higuchi`), 福丸 小糸 (`koito_fukumaru`), 市川 雛菜 (`hinana_ichikawa`)
- Release date: 2024-09-29
- Game first: シャイニーカラーズ(2024/09/29)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#noctchill|THE IDOLM@STER SHINY COLORS ECHOES 06]](2024/10/09)

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

## 93. Migratory Echoes (シーズVer.)

- Song ID: `song_001745`
- Candidate ID: `music765plus_page_4577`
- Source page: [music765plus page 4577](https://music765plus.com/Migratory_Echoes_%28%E3%82%B7%E3%83%BC%E3%82%BAVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (シーズVer.)
- Unit label: シーズ
- Raw vocal credit: 七草にちか(紫月杏朱彩),緋田美琴(山根綺)
- Suggested performers: 七草 にちか (`nichika_nanakusa`), 緋田 美琴 (`mikoto_aketa`)
- Release date: 2024-10-31
- Game first: シャイニーカラーズ(2024/10/31)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#SHHis|THE IDOLM@STER SHINY COLORS ECHOES 07]](2024/11/13)

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

## 94. Migratory Echoes (コメティックVer.)

- Song ID: `song_001746`
- Candidate ID: `music765plus_page_4578`
- Source page: [music765plus page 4578](https://music765plus.com/Migratory_Echoes_%28%E3%82%B3%E3%83%A1%E3%83%86%E3%82%A3%E3%83%83%E3%82%AFVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (コメティックVer.)
- Unit label: コメティック
- Raw vocal credit: 斑鳩ルカ(川口莉奈),鈴木羽那(三川華月),郁田はるき(小澤麗那)
- Suggested performers: 斑鳩 ルカ (`ruka_ikaruga`), 鈴木 羽那 (`hana_suzuki`), 郁田 はるき (`haruki_ikuta`)
- Release date: 2024-11-29
- Game first: シャイニーカラーズ(2024/11/29)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#CoMETIK|THE IDOLM@STER SHINY COLORS ECHOES 08]](2024/12/11)

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

## 95. Migratory Echoes (イルミネーションスターズVer.)

- Song ID: `song_001747`
- Candidate ID: `music765plus_page_4579`
- Source page: [music765plus page 4579](https://music765plus.com/Migratory_Echoes_%28%E3%82%A4%E3%83%AB%E3%83%9F%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BAVer.%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: Migratory Echoes (イルミネーションスターズVer.)
- Unit label: イルミネーションスターズ
- Raw vocal credit: 櫻木真乃(関根瞳),風野灯織(近藤玲奈),八宮めぐる(峯田茉優)
- Suggested performers: 櫻木 真乃 (`mano_sakuragi`), 風野 灯織 (`hiori_kazano`), 八宮 めぐる (`meguru_hachimiya`)
- Release date: 2024-12-27
- Game first: シャイニーカラーズ(2024/12/27)
- CD first: [[THE IDOLM@STER SHINY COLORS ECHOES シリーズ#illumination_STARS|THE IDOLM@STER SHINY COLORS ECHOES 01]](2025/01/22)

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

## 96. 認めてくれなくたっていいよ (CUTE VERSION)

- Song ID: `song_001753`
- Candidate ID: `music765plus_page_5152`
- Source page: [music765plus page 5152](https://music765plus.com/%E8%AA%8D%E3%82%81%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%8F%E3%81%9F%E3%81%A3%E3%81%A6%E3%81%84%E3%81%84%E3%82%88_%28CUTE_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: 認めてくれなくたっていいよ (CUTE VERSION)
- Unit label: -
- Raw vocal credit: 乙倉悠貴(中島由貴),関裕美(会沢紗弥),白菊ほたる(天野聡美),早坂美玲(朝井彩加),黒埼ちとせ(佐倉薫)
- Suggested performers: 乙倉 悠貴 (`otokura_yuuki`), 関 裕美 (`seki_hiromi`), 白菊 ほたる (`shiragiku_hotaru`), 早坂 美玲 (`hayasaka_mirei`), 黒埼 ちとせ (`kurosaki_chitose`)
- Release date: 2022-09-28
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cute_jewelries!_004|THE IDOLM@STER CINDERELLA MASTER Cute jewelries! 004]] (2022/09/28)

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

## 97. 認めてくれなくたっていいよ (COOL VERSION)

- Song ID: `song_001754`
- Candidate ID: `music765plus_page_5153`
- Source page: [music765plus page 5153](https://music765plus.com/%E8%AA%8D%E3%82%81%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%8F%E3%81%9F%E3%81%A3%E3%81%A6%E3%81%84%E3%81%84%E3%82%88_%28COOL_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: 認めてくれなくたっていいよ (COOL VERSION)
- Unit label: -
- Raw vocal credit: 松永涼(千菅春香),三船美優(原田彩楓),森久保乃々(高橋花林),藤原肇(鈴木みのり),砂塚あきら(富田美憂)
- Suggested performers: 松永 涼 (`matsunaga_ryo`), 三船 美優 (`mifune_miyu`), 森久保 乃々 (`morikubo_nono`), 藤原 肇 (`fujiwara_hajime`), 砂塚 あきら (`sunazuka_akira`)
- Release date: 2023-03-01
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Cool_jewelries!_004|THE IDOLM@STER CINDERELLA MASTER Cool jewelries! 004]](2023/03/01)

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

## 98. 認めてくれなくたっていいよ (PASSION VERSION)

- Song ID: `song_001755`
- Candidate ID: `music765plus_page_5154`
- Source page: [music765plus page 5154](https://music765plus.com/%E8%AA%8D%E3%82%81%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%8F%E3%81%9F%E3%81%A3%E3%81%A6%E3%81%84%E3%81%84%E3%82%88_%28PASSION_VERSION%29)
- Pending flags: `version_marker_in_title`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.

### Current source evidence

- Source title: 認めてくれなくたっていいよ (PASSION VERSION)
- Unit label: -
- Raw vocal credit: 依田芳乃(高田憂希),村上巴(花井美春),佐藤心(花守ゆみり),夢見りあむ(星希成奏),久川凪(立花日菜)
- Suggested performers: 依田 芳乃 (`yorita_yoshino`), 村上 巴 (`murakami_tomoe`), 佐藤 心 (`sato_shin`), 夢見 りあむ (`yumemi_riamu`), 久川 凪 (`hisakawa_nagi`)
- Release date: 2025-01-22
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER CINDERELLA MASTER jewelries! シリーズ#Passion_jewelries!_004|THE IDOLM@STER CINDERELLA MASTER Passion jewelries! 004]] (2025/01/22)

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

## 99. EVERYDAY STARS!! (プリンセススターズ ver.)

- Song ID: `song_001765`
- Candidate ID: `music765plus_page_5759`
- Source page: [music765plus page 5759](https://music765plus.com/EVERYDAY_STARS%21%21_%28%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BB%E3%82%B9%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_ver.%29)
- Pending flags: `version_marker_in_title`, `large_performer_set`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.
- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: EVERYDAY STARS!! (プリンセススターズ ver.)
- Unit label: プリンセススターズ
- Raw vocal credit: 天海春香(中村繪里子),我那覇響(沼倉愛美),菊地真(平田宏美),萩原雪歩(浅倉杏美),春日未来(山崎はるか),エミリー スチュアート(郁原ゆう),高坂海美(上田麗奈),佐竹美奈子(大関英里),高山紗代子(駒形友梨),田中琴葉(種田梨沙),徳川まつり(諏訪彩花),中谷育(原嶋あかり),七尾百合子(伊藤美来),福田のり子(浜崎奈々),松田亜利沙(村川梨衣),矢吹可奈(木戸衣吹),横山奈緒(渡部優衣)
- Suggested performers: 天海 春香 (`haruka_amami`), 我那覇 響 (`hibiki_ganaha`), 菊地 真 (`makoto_kikuchi`), 萩原 雪歩 (`yukiho_hagiwara`), 春日 未来 (`mirai_kasuga`), エミリー スチュアート (`emily_stewart`), 高坂 海美 (`umi_kousaka`), 佐竹 美奈子 (`minako_satake`), 高山 紗代子 (`sayoko_takayama`), 田中 琴葉 (`kotoha_tanaka`), 徳川 まつり (`matsuri_tokugawa`), 中谷 育 (`iku_nakatani`), 七尾 百合子 (`yuriko_nanao`), 福田 のり子 (`noriko_fukuda`), 松田 亜利沙 (`arisa_matsuda`), 矢吹 可奈 (`kana_yabuki`), 横山 奈緒 (`nao_yokoyama`)
- Release date: 2021-05-18
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#Harmony_4_You|THE IDOLM@STER MILLION THE@TER SEASON Harmony 4 You]](2021/07/28)

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

## 100. EVERYDAY STARS!! (フェアリースターズ ver.)

- Song ID: `song_001766`
- Candidate ID: `music765plus_page_5760`
- Source page: [music765plus page 5760](https://music765plus.com/EVERYDAY_STARS%21%21_%28%E3%83%95%E3%82%A7%E3%82%A2%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_ver.%29)
- Pending flags: `version_marker_in_title`, `large_performer_set`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.
- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: EVERYDAY STARS!! (フェアリースターズ ver.)
- Unit label: フェアリースターズ
- Raw vocal credit: 如月千早(今井麻美),秋月律子(若林直美),四条貴音(原由実),水瀬伊織(釘宮理恵),最上静香(田所あずさ),北沢志保(雨宮天),ジュリア(愛美),白石紬(南早紀),周防桃子(渡部恵子),天空橋朋花(小岩井ことり),所恵美(藤井ゆきよ),永吉昴(斉藤佑圭),二階堂千鶴(野村香菜子),舞浜歩(戸田めぐみ),真壁瑞希(阿部里果),百瀬莉緒(山口立花子),ロコ(中村温姫)
- Suggested performers: 如月 千早 (`cihaya_kisaragi`), 秋月 律子 (`ritsuko_akizuki`), 四条 貴音 (`takane_shijo`), 水瀬 伊織 (`iori_minase`), 最上 静香 (`shizuka_mogami`), 北沢 志保 (`shiho_kitazawa`), ジュリア (`julia`), 白石 紬 (`tsumugi_shiraishi`), 周防 桃子 (`momoko_suou`), 天空橋 朋花 (`tomoka_tenkubashi`), 所 恵美 (`megumi_tokoro`), 永吉 昴 (`subaru_nagayoshi`), 二階堂 千鶴 (`chizuru_nikaido`), 舞浜 歩 (`ayumu_maihama`), 真壁 瑞希 (`mizuki_makabe`), 百瀬 莉緒 (`rio_momose`), ロコ (`roco_handa`)
- Release date: 2021-05-18
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#Harmony_4_You|THE IDOLM@STER MILLION THE@TER SEASON Harmony 4 You]](2021/07/28)

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

## 101. EVERYDAY STARS!! (エンジェルスターズ ver.)

- Song ID: `song_001767`
- Candidate ID: `music765plus_page_5761`
- Source page: [music765plus page 5761](https://music765plus.com/EVERYDAY_STARS%21%21_%28%E3%82%A8%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA_ver.%29)
- Pending flags: `version_marker_in_title`, `large_performer_set`

### Why it was flagged

- `version_marker_in_title` — A labelled version is not treated as a separate canonical song until review confirms its underlying song identity.
- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: EVERYDAY STARS!! (エンジェルスターズ ver.)
- Unit label: エンジェルスターズ
- Raw vocal credit: 星井美希(長谷川明子),高槻やよい(仁後真耶子),双海亜美(下田麻美),双海真美(下田麻美),三浦あずさ(たかはし智秋),伊吹翼(Machico),大神環(稲川英里),北上麗花(平山笑美),木下ひなた(田村奈央),桜守歌織(香里有佐),篠宮可憐(近藤唯),島原エレナ(角元明日香),豊川風花(末柄里恵),野々原茜(小笠原早紀),箱崎星梨花(麻倉もも),馬場このみ(髙橋ミナミ),宮尾美也(桐谷蝶々),望月杏奈(夏川椎菜)
- Suggested performers: 星井 美希 (`miki_hoshii`), 高槻 やよい (`yayoi_takatsuki`), 双海 亜美 (`ami_futami`), 双海 真美 (`mami_futami`), 三浦 あずさ (`azusa_miura`), 伊吹 翼 (`tsubasa_ibuki`), 大神 環 (`tamaki_ogami`), 北上 麗花 (`reika_kitakami`), 木下 ひなた (`hinata_kinoshita`), 桜守 歌織 (`kaori_sakuramori`), 篠宮 可憐 (`karen_shinomiya`), 島原 エレナ (`elena_shimabara`), 豊川 風花 (`fuka_toyokawa`), 野々原 茜 (`akane_nonohara`), 箱崎 星梨花 (`serika_hakozaki`), 馬場 このみ (`konomi_baba`), 宮尾 美也 (`miya_miyao`), 望月 杏奈 (`anna_mochizuki`)
- Release date: 2021-05-18
- Game first: *(blank)*
- CD first: [[THE IDOLM@STER MILLION THE@TER SEASON シリーズ#Harmony_4_You|THE IDOLM@STER MILLION THE@TER SEASON Harmony 4 You]](2021/07/28)

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

## 102. ENDLESS DANCE

- Song ID: `song_001772`
- Candidate ID: `music765plus_page_5807`
- Source page: [music765plus page 5807](https://music765plus.com/ENDLESS_DANCE)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: ENDLESS DANCE
- Unit label: (初星学園・デビューライブ開催記念曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2025-02-08
- Game first: 学園アイドルマスター(2026/02/27)
- CD first: 【配信】(2025/02/08)

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

## 103. CROWN US KING!

- Song ID: `song_001912`
- Candidate ID: `music765plus_page_6865`
- Source page: [music765plus page 6865](https://music765plus.com/CROWN_US_KING%21)
- Pending flags: `large_performer_set`

### Why it was flagged

- `large_performer_set` — Large explicit credits require a broad-credit check before indexing; size alone does not expand or exclude the performer set.

### Current source evidence

- Source title: CROWN US KING!
- Unit label: DRAMATIC STARS、FRAME、彩、High×Joker、神速一魂、THE 虎牙道、F-LAGS、Legenders
- Raw vocal credit: 天道輝(仲村宗悟),桜庭薫(内田雄馬),柏木翼(八代拓),握野英雄(熊谷健太郎),木村龍(濱健人),信玄誠司(増元拓也),華村翔真(バレッタ裕),猫柳キリオ(山下大輝),清澄九郎(中田祐矢),伊瀬谷四季(野上翔),秋山隼人(千葉翔也),若里春名(白井悠介),冬美旬(永塚拓馬),榊夏来(渡辺紘),紅井朱雀(益山武明),黒野玄武(深町寿成),大河タケル(寺島惇太),牙崎漣(小松昌平),円城寺道流(濱野大輝),秋月涼(三瓶由布子),九十九一希(比留間俊哉),兜大吾(浦尾岳大),葛之葉雨彦(笠間淳),北村想楽(汐谷文康),古論クリス(駒田航)
- Suggested performers: 天道 輝 (`teru_tendo`), 桜庭 薫 (`kaoru_sakuraba`), 柏木 翼 (`tsubasa_kashiwagi`), 握野 英雄 (`hideo_akuno`), 木村 龍 (`ryu_kimura`), 信玄 誠司 (`seiji_shingen`), 華村 翔真 (`shoma_hanamura`), 猫柳 キリオ (`kirio_nekoyanagi`), 清澄 九郎 (`kuro_kiyosumi`), 伊瀬谷 四季 (`shiki_iseya`), 秋山 隼人 (`hayato_akiyama`), 若里 春名 (`haruna_wakazato`), 冬美  旬 (`jun_fuyumi`), 榊 夏来 (`natsuki_sakaki`), 紅井 朱雀 (`suzaku_akai`), 黒野 玄武 (`genbu_kurono`), 大河 タケル (`takeru_taiga`), 牙崎 漣 (`ren_kizaki`), 円城寺 道流 (`michiru_enjoji`), 秋月 涼 (`ryo_akizuki`), 九十九 一希 (`kazuki_tsukumo`), 兜 大吾 (`daigo_kabuto`), 葛之葉 雨彦 (`amehiko_kuzunoha`), 北村 想楽 (`sora_kitamura`), 古論 クリス (`chris_koron`)
- Release date: 2025-10-04
- Game first: *(blank)*
- CD first: *(blank)*

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

## 104. Be proud

- Song ID: `song_002019`
- Candidate ID: `music765plus_page_8862`
- Source page: [music765plus page 8862](https://music765plus.com/Be_proud%28%E9%9B%A8%E5%A4%9C%E7%87%95%E3%81%AE%E6%9B%B2%29)
- Pending flags: `duplicate_original_title`

### Why it was flagged

- `duplicate_original_title` — Two Original pages with the same title are not merged automatically; confirm whether they are one song, distinct songs, or duplicate evidence.

### Current source evidence

- Source title: Be proud
- Unit label: (ソロ・燕)
- Raw vocal credit: 雨夜燕(天音ゆかり)
- Suggested performers: 雨夜 燕 (`tsubame_amaya`)
- Release date: 2026-09-05
- Game first: *(blank)*
- CD first: 【配信】(2026/09/06)、雨夜 燕 2nd Single「三分半の創世」(2026/12/02)

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

## 105. 修楽旅行

- Song ID: `song_002026`
- Candidate ID: `music765plus_page_8900`
- Source page: [music765plus page 8900](https://music765plus.com/%E4%BF%AE%E6%A5%BD%E6%97%85%E8%A1%8C)
- Pending flags: `missing_vocal_credit`

### Why it was flagged

- `missing_vocal_credit` — Find a reviewable first recording with a fixed performer credit or classify the song as a shared/common-song exception.

### Current source evidence

- Source title: 修楽旅行
- Unit label: (初星学園・標ツアー曲)
- Raw vocal credit: *(blank)*
- Suggested performers: *(none)*
- Release date: 2026-08-20
- Game first: *(blank)*
- CD first: 【配信】(2026/08/20)

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
