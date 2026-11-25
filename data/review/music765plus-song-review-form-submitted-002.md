# music765plus song review worksheet — submitted batch 002

This is the human-editable decision form for the pending canonical-song queue.
Edit this file, then tell the reviewing agent that it is ready. Do not edit the
generated candidate, review, or decision-log JSON files.

- Pending candidates in this worksheet: 57
- Review queue SHA-256: `b1e7cf7351db8da24b853a48ae2a13c6c47f46b83c51b4a3088edce92e76d055`
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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): ritsuko_akizuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for ritsuko

---

## 2. THE IDOLM@STER

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

- Decision: `broad_credit_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Brand level song.

---

## 3. 9:02pm

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): azusa_miura
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for azusa

---

## 4. ポジティブ！

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): ami_futami, mami_futami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for the futamis

---

## 5. 太陽のジェラシー

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for Haruka

---

## 6. エージェント夜を往く

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): makoto_kikuchi
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for makoto

---

## 7. おはよう！！朝ご飯

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yayoi_takatsuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for Yayoi

---

## 8. 蒼い鳥

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): cihaya_kisaragi
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for chihaya

---

## 9. First Stage

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yukiho_hagiwara
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for yukiho

---

## 10. Here we go!!

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): iori_minase
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Character song for iori

---

## 11. 私はアイドル♡

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, iori_minase
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Originally released as a duet

---

## 12. GO MY WAY!!

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yayoi_takatsuki, ami_futami, mami_futami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Haruka was added later... difficult because people probably know that one better than this very first version.

---

## 13. 思い出をありがとう

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): cihaya_kisaragi, miki_hoshii
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Duet from the xbox era

---

## 14. relations

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): miki_hoshii
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Miki image song

---

## 15. My Best Friend

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yukiho_hagiwara, ritsuko_akizuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Xbox era duet

---

## 16. まっすぐ

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): azusa_miura, makoto_kikuchi
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Another xbox era duet

---

## 17. i

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

- Decision: `shared_song_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Common solo song of the Master Artist 01 series.

---

## 18. shiny smile

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, cihaya_kisaragi, ritsuko_akizuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: One of Hibiki's 持ち歌 but this is the first official cd release credit

---

## 19. Do-Dai

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yayoi_takatsuki, ami_futami, miki_hoshii
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on CD release credit

---

## 20. my song

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): iori_minase, makoto_kikuchi, azusa_miura
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: DLC song. The credit is for the cd release

---

## 21. Colorful Days

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, cihaya_kisaragi, ami_futami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official CD release

---

## 22. L・O・B・M

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yayoi_takatsuki, haruka_amami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Duet from PSP era

---

## 23. キミはメロディ

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): azusa_miura, takane_shijo, cihaya_kisaragi, miki_hoshii, yayoi_takatsuki, ami_futami, mami_futami
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release credits

---

## 24. MEGARE!

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, hibiki_ganaha, miki_hoshii
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release credits

---

## 25. キミ＊チャンネル

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, hibiki_ganaha, makoto_kikuchi
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release shared song with predictable group

---

## 26. 99 Nights

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): miki_hoshii, iori_minase, takane_shijo
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release shared song with predictable group

---

## 27. 静かな夜に願いを…

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): cihaya_kisaragi, mami_futami, yukiho_hagiwara
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release shared song with predictable group

---

## 28. Good-Byes

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yayoi_takatsuki, azusa_miura
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Original CD release shared song with predictable group

---

## 29. Happy!

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, cihaya_kisaragi, yukiho_hagiwara, iori_minase, azusa_miura, hibiki_ganaha, ritsuko_akizuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official release credits

---

## 30. ザ・ライブ革命でSHOW！

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): miki_hoshii, yayoi_takatsuki, makoto_kikuchi, ami_futami, mami_futami, takane_shijo
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official release credits

---

## 31. Miracle Night

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, makoto_kikuchi, ami_futami, mami_futami, iori_minase
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official CD release

---

## 32. 僕たちのResistance

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): miki_hoshii, cihaya_kisaragi, yayoi_takatsuki, hibiki_ganaha
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: based on official CD release

---

## 33. アマテラス

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): yukiho_hagiwara, azusa_miura, takane_shijo, ritsuko_akizuki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: based on official CD release

---

## 34. Vertex Meister

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): cihaya_kisaragi, ritsuko_akizuki, makoto_kikuchi, takane_shijo, hibiki_ganaha
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official CD release

---

## 35. ストレートラブ！

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

- Decision: `excluded`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): 神長瑠衣(久川綾)
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: This probably ends up not indexed because this is probably a very big edge case

---

## 36. Melted Snow

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

- Decision: `excluded`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Technically a combined or universal true version does not exist

---

## 37. 星彩ステッパー

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): iori_minase, ami_futami, mami_futami, miki_hoshii
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official CD released

---

## 38. そしてぼくらは旅にでる

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, yukiho_hagiwara, yayoi_takatsuki, azusa_miura
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on official CD release

---

## 39. MEET THE WORLD!

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): teru_tendo, hideo_akuno, suzaku_akai, amehiko_kuzunoha
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: based on official cd release

---

## 40. LIVE in your SMILE

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): kei_tsuzuki, rei_kagura, kyosuke_aoi, yusuke_aoi, hideo_akuno, ryu_kimura, seiji_shingen, shoma_hanamura, kirio_nekoyanagi, kuro_kiyosumi, suzaku_akai, genbu_kurono, michio_hazama, rui_maita, jiro_yamashita, takeru_taiga, ren_kizaki, michiru_enjoji, amehiko_kuzunoha, sora_kitamura, chris_koron
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Ambiguous, but subsequent performances seem to follow somewhat closely with the list.

---

## 41. DREAM JOURNEY

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): teru_tendo, kaoru_sakuraba, tsubasa_kashiwagi, toma_amagase, shota_mitarai, hokuto_ijuin, kyoji_takajo, pierre, minori_watanabe, shiki_iseya, hayato_akiyama, haruna_wakazato, jun_fuyumi, natsuki_sakaki, yukihiro_kamiya, soichiro_shinonome, asselin_beelzebuth, makio_uzuki, saki_mizushima, nao_okamura, shiro_tachibana, kanon_himeno, ryo_akizuki, kazuki_tsukumo, daigo_kabuto
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Only ever performed once. The cast list is big enough its basically a brand song, but we'll just index it anyway.

---

## 42. リフレクトサイン

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): hiori_kazano, mamimi_tanaka, yuika_mitsumine, kiriko_yukoku, rinze_morino, tenka_osaki, mei_izumi, koito_fukumaru
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Team.Luna is a well defined unit name

---

## 43. ストレートラブ！(765プロVer.)

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): haruka_amami, iori_minase, makoto_kikuchi
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Non-indexed original is an edge case.

---

## 44. ストレートラブ！(961プロVer.)

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: non-indexed original is an edge case.

---

## 45. 白い犬＆黒い犬

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

- Decision: `defer`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): 白い犬：高槻やよい(仁後真耶子)、秋月律子(若林直美)、双海亜美(下田麻美) ／ 黒い犬：星井美希(長谷川明子)、我那覇響(沼倉愛美)、四条貴音(原由実)
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: This is a strange case, this counts as two songs on most other databases, but they're similar. Each song has a different group.

---

## 46. Melted Snow(765プロVer.)

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): cihaya_kisaragi, yukiho_hagiwara, azusa_miura
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Canonical variant 1/2 as a combined version doesn't exist.

---

## 47. Melted Snow(961プロVer.)

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): miki_hoshii, hibiki_ganaha, takane_shijo
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Canonical variant 2/2 as a combined version doesn't exist.

---

## 48. 全力★ドリーミングガールズ

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): mamimi_tanaka, yukiho_hagiwara, yayoi_takatsuki, ami_futami, mami_futami, miki_hoshii, moroboshi_kirari, jougasaki_mika, tsubasa_ibuki, kaori_sakuramori, kaho_komiya, kohaku_okuzora, aya
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: DLC song for Starlit Season under Unit Project LUMINOUS. The odds of hitting the full list are very low due to cross brand plus extras, so this is a 0.001% edge case if indexed or not either way.

---

## 49. 幻想のUtopia

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

- Decision: `broad_credit_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Opening theme for a specific live event. Treated as a brand song in subsequent concerts.

---

## 50. 安寧のDystopia

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

- Decision: `broad_credit_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Opening theme for a specific live event. Treated as a brand song in subsequent concerts.

---

## 51. がむしゃらに行こう！

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): saki_hanami, temari_tsukimura, kotone_fujita
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on MV and canonical gacha release

---

## 52. Howling over the World

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): lilja_katsuragi, china_kuramoto, rinami_himesaki
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on MV and gacha release characters

---

## 53. ミラクルナナウ(ﾟ∀ﾟ)！

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): mao_arimura, sumika_shiun, hiro_shinosawa
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Based on MV and gacha release characters

---

## 54. 古今東西ちょちょいのちょい

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

- Decision: `broad_credit_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Effectively behaves as a brand song

---

## 55. ENDLESS DANCE

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

- Decision: `indexed`
- Canonical title:
- Canonical performers (names or IDs, comma-separated): ume_hanami, misuzu_hataya, sena_juo
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Season song, choice of performers reflects first release

---

## 56. CROWN US KING!

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

- Decision: `broad_credit_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: Theme for a specific event. Indexing value is low

---

## 57. 修楽旅行

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

- Decision: `shared_song_exception`
- Canonical title:
- Canonical performers (names or IDs, comma-separated):
- Duplicate of song ID:
- Earliest recorded-release date:
- Evidence/reference(s):
  -
- Rationale/notes: One song, many arrangements. Probably fits into migratory echoes class of problems

---
