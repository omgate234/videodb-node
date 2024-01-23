[videodb](../README.md) / [Exports](../modules.md) / [utils/job](../modules/utils_job.md) / IndexJob

# Class: IndexJob

[utils/job](../modules/utils_job.md).IndexJob

Base Job class used to create different kinds of jobs

**`Remarks`**

Jobs are used for long running tasks where a simple
async call would take too long causing a timeout.

**`See`**

This class accepts 3 type params
- ApiResponse: The response recieved from the API on calling

## Hierarchy

- [`Job`](utils_job.Job.md)\<[`NoDataResponse`](../modules/types_response.md#nodataresponse), [`NoDataResponse`](../modules/types_response.md#nodataresponse)\>

  ↳ **`IndexJob`**

## Table of contents

### Constructors

- [constructor](utils_job.IndexJob.md#constructor)

### Properties

- [convertResponseToCamelCase](utils_job.IndexJob.md#convertresponsetocamelcase)
- [indexConfig](utils_job.IndexJob.md#indexconfig)
- [jobTitle](utils_job.IndexJob.md#jobtitle)
- [vhttp](utils_job.IndexJob.md#vhttp)
- [videoId](utils_job.IndexJob.md#videoid)

### Methods

- [\_handleError](utils_job.IndexJob.md#_handleerror)
- [\_handleSuccess](utils_job.IndexJob.md#_handlesuccess)
- [\_initiateBackoff](utils_job.IndexJob.md#_initiatebackoff)
- [beforeSuccess](utils_job.IndexJob.md#beforesuccess)
- [on](utils_job.IndexJob.md#on)
- [start](utils_job.IndexJob.md#start)

## Constructors

### constructor

• **new IndexJob**(`http`, `videoId`, `indexType`): [`IndexJob`](utils_job.IndexJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `http` | [`HttpClient`](utils_httpClient.HttpClient.md) |
| `videoId` | `string` |
| `indexType` | ``"semantic"`` |

#### Returns

[`IndexJob`](utils_job.IndexJob.md)

#### Overrides

[Job](utils_job.Job.md).[constructor](utils_job.Job.md#constructor)

#### Defined in

src/utils/job.ts:236

## Properties

### convertResponseToCamelCase

• `Protected` **convertResponseToCamelCase**: `boolean` = `true`

#### Inherited from

[Job](utils_job.Job.md).[convertResponseToCamelCase](utils_job.Job.md#convertresponsetocamelcase)

#### Defined in

src/utils/job.ts:48

___

### indexConfig

• **indexConfig**: [`IndexConfig`](../modules/types.md#indexconfig)

#### Defined in

src/utils/job.ts:234

___

### jobTitle

• `Protected` **jobTitle**: `string`

#### Inherited from

[Job](utils_job.Job.md).[jobTitle](utils_job.Job.md#jobtitle)

#### Defined in

src/utils/job.ts:49

___

### vhttp

• `Protected` **vhttp**: [`HttpClient`](utils_httpClient.HttpClient.md)

#### Inherited from

[Job](utils_job.Job.md).[vhttp](utils_job.Job.md#vhttp)

#### Defined in

src/utils/job.ts:47

___

### videoId

• **videoId**: `string`

#### Defined in

src/utils/job.ts:233

## Methods

### \_handleError

▸ **_handleError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`void`

#### Inherited from

[Job](utils_job.Job.md).[_handleError](utils_job.Job.md#_handleerror)

#### Defined in

src/utils/job.ts:78

___

### \_handleSuccess

▸ **_handleSuccess**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ApiResponse` |

#### Returns

`void`

#### Inherited from

[Job](utils_job.Job.md).[_handleSuccess](utils_job.Job.md#_handlesuccess)

#### Defined in

src/utils/job.ts:94

___

### \_initiateBackoff

▸ **_initiateBackoff**(`callbackUrl`): `Promise`\<`void`\>

Initiates a backoff-like system where we check the status
of the job in an exponentially increasing interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackUrl` | `string` | URL sent by the server to check status |

#### Returns

`Promise`\<`void`\>

NOTHING. Do not await this function. This will call the
success or error listener depending on the status.

#### Inherited from

[Job](utils_job.Job.md).[_initiateBackoff](utils_job.Job.md#_initiatebackoff)

#### Defined in

src/utils/job.ts:116

___

### beforeSuccess

▸ **beforeSuccess**(`data`): \{ `message?`: `undefined` = data.message; `success`: ``true`` = data.success } \| \{ `message`: `undefined` \| `string` = data.message; `success`: `undefined` \| ``false`` = data.success }

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`NoDataResponse`](../modules/types_response.md#nodataresponse) |

#### Returns

\{ `message?`: `undefined` = data.message; `success`: ``true`` = data.success } \| \{ `message`: `undefined` \| `string` = data.message; `success`: `undefined` \| ``false`` = data.success }

#### Overrides

Job.beforeSuccess

#### Defined in

src/utils/job.ts:264

___

### on

▸ **on**(`option`, `method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | ``"success"`` |
| `method` | [`JobSuccessCallback`](../modules/types_utils.md#jobsuccesscallback)\<[`NoDataResponse`](../modules/types_response.md#nodataresponse)\> |

#### Returns

`void`

#### Inherited from

[Job](utils_job.Job.md).[on](utils_job.Job.md#on)

#### Defined in

src/utils/job.ts:61

▸ **on**(`option`, `method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | ``"error"`` |
| `method` | [`JobErrorCallback`](../modules/types_utils.md#joberrorcallback) |

#### Returns

`void`

#### Inherited from

[Job](utils_job.Job.md).[on](utils_job.Job.md#on)

#### Defined in

src/utils/job.ts:62

___

### start

▸ **start**(): `Promise`\<`void`\>

Initiates a Transcript Job.
On sucess, it calls the index endpoint

#### Returns

`Promise`\<`void`\>

#### Overrides

Job.start

#### Defined in

src/utils/job.ts:249
