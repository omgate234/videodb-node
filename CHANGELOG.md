# Changelog


## [0.0.4]() (2024-03-07)

### Added
- `Image` class
  - Upload image using `Collection.upload()`
  - Get an image using `Collection.getImage()`
  - Get all images using `Colection.getImages()`
  - Delete image using `Collection.deleteImage()` or `Image.delete()`
- `ImageAsset` class
  - Create a `ImageAsset` using `ImageAsset()` class
  - Overlay `ImageAsset` in timeline using `Timeline.addOverlay()`
- `TextAsset` & `TextStyle` class
  - Create a `TextAsset` using `TextAsset()` class 
  - Configure styling of `TextAsset` using `TextStyle()`
- `SubtitleStyle`
  - Configure subtitle styling by passing a `SubtitleStyle` in `Video.addSubtitle()`
- Keyword Search
  Search using Keyword in Video using `Video.search()` (pass searchType = "keyword")
> Note: Collection Keyword Search is not available 

### Changed
  - `Video.index()` -> `Video.indexSpokenWords()`
  - param `type` -> `searchType` in `Video.search()` 
  - param `type` -> `searchType` in `Collection.search()` 

### Fixed
  -  Pass undefined params as `null` to VideoDB Server API




## [0.0.3]() (2024-02-13)

### Added
- Concept of Audio Files 🔈
- Concept of MediaAsset : VideoAsset, AudioAsset 💼
- Concept of Timeline for editing workflows ✂️
- Export `VideodbError` 
- Minor updates in readme & package.json

### Changed 
- Http client timeout 30s -> 60s

### Fixed
- Better Error handling
- Param validation in 
  - `Coll.getVideo()`
  - `Coll.getAudio()`
  - `Coll.getVideo()`
  - `Coll.deleteAudio()`



## [0.0.2]() (2024-01-24)

### Added

- Upload through file and external links - supports YouTube for now.
- Semantic Index : Index & search spoken content.
- Editing: Add subtitle to videos with default style.
- Search across collections [supports a default collection for now]
- `Video` and `Collection` object access without saving.
- `playStream` function to get playable video links.
