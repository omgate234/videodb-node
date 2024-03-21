[videodb](../README.md) / [Exports](../modules.md) / [core/search/searchResult](../modules/core_search_searchResult.md) / SearchResult

# Class: SearchResult

[core/search/searchResult](../modules/core_search_searchResult.md).SearchResult

## Table of contents

### Constructors

- [constructor](core_search_searchResult.SearchResult.md#constructor)

### Properties

- [collectionId](core_search_searchResult.SearchResult.md#collectionid)
- [playerUrl](core_search_searchResult.SearchResult.md#playerurl)
- [shots](core_search_searchResult.SearchResult.md#shots)
- [streamUrl](core_search_searchResult.SearchResult.md#streamurl)

### Methods

- [compile](core_search_searchResult.SearchResult.md#compile)
- [play](core_search_searchResult.SearchResult.md#play)

## Constructors

### constructor

• **new SearchResult**(`http`, `searchResponse`): [`SearchResult`](core_search_searchResult.SearchResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `http` | [`HttpClient`](utils_httpClient.HttpClient.md) |
| `searchResponse` | [`SearchResponse`](../modules/types_response.md#searchresponse) |

#### Returns

[`SearchResult`](core_search_searchResult.SearchResult.md)

#### Defined in

[src/core/search/searchResult.ts:15](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L15)

## Properties

### collectionId

• **collectionId**: `string` = `'default'`

#### Defined in

[src/core/search/searchResult.ts:13](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L13)

___

### playerUrl

• `Optional` **playerUrl**: `string`

#### Defined in

[src/core/search/searchResult.ts:12](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L12)

___

### shots

• **shots**: [`Shot`](core_shot.Shot.md)[]

#### Defined in

[src/core/search/searchResult.ts:10](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L10)

___

### streamUrl

• `Optional` **streamUrl**: `string`

#### Defined in

[src/core/search/searchResult.ts:11](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L11)

## Methods

### compile

▸ **compile**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/search/searchResult.ts:41](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L41)

___

### play

▸ **play**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/core/search/searchResult.ts:63](https://github.com/video-db/videodb-node/blob/4dc9a20/src/core/search/searchResult.ts#L63)
