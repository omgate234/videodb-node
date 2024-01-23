[videodb](../README.md) / [Exports](../modules.md) / types/video

# Module: types/video

## Table of contents

### Type Aliases

- [StreamableURL](types_video.md#streamableurl)
- [Timeline](types_video.md#timeline)
- [TimelineTuple](types_video.md#timelinetuple)
- [Transcript](types_video.md#transcript)

## Type Aliases

### StreamableURL

Ƭ **StreamableURL**: `string`

#### Defined in

src/types/video.ts:11

___

### Timeline

Ƭ **Timeline**: [`TimelineTuple`](types_video.md#timelinetuple)[]

#### Defined in

src/types/video.ts:2

___

### TimelineTuple

Ƭ **TimelineTuple**: [`number`, `number`]

#### Defined in

src/types/video.ts:1

___

### Transcript

Ƭ **Transcript**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `wordTimestamps` | \{ `end`: `number` ; `start`: `number` ; `word`: `string`  }[] |

#### Defined in

src/types/video.ts:3
