import { ApiPath } from '@/constants';
import type {
  CollectionBase,
  ICollection,
  VideoBase,
  AudioBase,
  ImageBase,
} from '@/interfaces/core';
import { IndexType, SearchType } from '@/types/search';
import type { FileUploadConfig, URLUploadConfig } from '@/types/collection';
import type {
  GetVideos,
  GetAudios,
  GetImages,
  VideoResponse,
  AudioResponse,
  ImageResponse,
} from '@/types/response';
import { fromSnakeToCamel } from '@/utils';
import { HttpClient } from '@/utils/httpClient';
import { uploadToServer } from '@/utils/upload';
import { DefaultSearchType, DefaultIndexType } from '@/core/config';
import { SearchFactory } from './search';
import { Video } from './video';
import { Audio } from './audio';
import { Image } from './image';
import { VideodbError } from '@/utils/error';

const { video, audio, image } = ApiPath;

/**
 * The base VideoDB class
 * @remarks
 * The base class through which all videodb actions are possible
 */
export class Collection implements ICollection {
  public meta: CollectionBase;
  #vhttp: HttpClient;

  constructor(http: HttpClient, data: CollectionBase) {
    this.meta = data;
    this.#vhttp = http;
  }

  /** * Get all videos from the collection
   * @returns A list of objects of the Video class
   * @throws an error if the request fails
   */
  public getVideos = async () => {
    const res = await this.#vhttp.get<GetVideos>([video], {
      params: { collection_id: this.meta.id },
    });
    const videos = res.data.videos;
    return videos.map(vid => {
      const data = fromSnakeToCamel(vid) as VideoBase;
      return new Video(this.#vhttp, data);
    });
  };

  /**
   * Get all the information for a specific video
   * @param videoId - Unique ID of the video.
   * @returns An object of the Video class
   * @throws an error if the request fails
   */
  public getVideo = async (videoId: string) => {
    if (!videoId.trim()) {
      throw new VideodbError('Video ID cannot be empty');
    }
    const res = await this.#vhttp.get<VideoResponse>([video, videoId], {
      params: { collection_id: this.meta.id },
    });
    const data = fromSnakeToCamel(res.data) as VideoBase;
    return new Video(this.#vhttp, data);
  };

  /**
   *
   * @param videoId - Id of the video to be deleted
   * @returns A promise that resolves when delete is successful
   * @throws an error if the request fails
   */
  public deleteVideo = async (videoId: string) => {
    if (!videoId.trim()) {
      throw new VideodbError('Video ID cannot be empty');
    }
    return await this.#vhttp.delete<Record<string, never>>([video, videoId], {
      params: { collection_id: this.meta.id },
    });
  };

  /** * Get all audios from the collection
   * @returns A list of objects of the Audio class
   * @throws an error if the request fails
   */
  public getAudios = async () => {
    const res = await this.#vhttp.get<GetAudios>([audio], {
      params: { collection_id: this.meta.id },
    });
    const audios = res.data.audios;
    return audios.map(audio => {
      const data = fromSnakeToCamel(audio) as AudioBase;
      return new Audio(this.#vhttp, data);
    });
  };

  /**
   * Get all the information for a specific audio
   * @param audioId- Unique ID of the audio.
   * @returns An object of the Audio class
   * @throws an error if the request fails
   */
  public getAudio = async (audioId: string) => {
    if (!audioId.trim()) {
      throw new VideodbError('Audio ID cannot be empty');
    }
    const res = await this.#vhttp.get<AudioResponse>([audio, audioId], {
      params: { collection_id: this.meta.id },
    });
    const data = fromSnakeToCamel(res.data) as AudioBase;
    return new Audio(this.#vhttp, data);
  };

  /**
   *
   * @param audioId- Id of the audio to be deleted
   * @returns A promise that resolves when delete is successful
   * @throws an error if the request fails
   */
  public deleteAudio = async (audioId: string) => {
    if (!audioId.trim()) {
      throw new VideodbError('Audio ID cannot be empty');
    }
    return await this.#vhttp.delete<Record<string, never>>([audio, audioId], {
      params: { collection_id: this.meta.id },
    });
  };

  /** * Get all images from the collection
   * @returns A list of objects of the Image class
   * @throws an error if the request fails
   */
  public getImages = async () => {
    const res = await this.#vhttp.get<GetImages>([image], {
      params: { collection_id: this.meta.id },
    });
    const images = res.data.images;
    return images.map(audio => {
      const data = fromSnakeToCamel(audio) as ImageBase;
      return new Image(this.#vhttp, data);
    });
  };

  /**
   * Get all the information for a specific image
   * @param imageId- Unique ID of the image.
   * @returns An object of the Image class
   * @throws an error if the request fails
   */
  public getImage = async (imageId: string) => {
    if (!imageId.trim()) {
      throw new VideodbError('Image ID cannot be empty');
    }
    const res = await this.#vhttp.get<ImageResponse>([image, imageId], {
      params: { collection_id: this.meta.id },
    });
    const data = fromSnakeToCamel(res.data) as ImageBase;
    return new Image(this.#vhttp, data);
  };

  /**
   *
   * @param imageId- Id of the image to be deleted
   * @returns A promise that resolves when delete is successful
   * @throws an error if the request fails
   */
  public deleteImage = async (imageId: string) => {
    if (!imageId.trim()) {
      throw new VideodbError('Image ID cannot be empty');
    }
    return await this.#vhttp.delete<Record<string, never>>([image, imageId], {
      params: { collection_id: this.meta.id },
    });
  };

  /**
   * @param filePath - absolute path to a file
   * @param callbackUrl- [optional] A url that will be called once upload is finished
   * @param name - [optional] Name of the file
   * @param description - [optional] Description of the file
   *
   * @see
   * Providing a callbackUrl will return undefined and not providing one
   * will return a Job object (TODO: Implement proper type for this condition)
   */
  public uploadFile = async (data: FileUploadConfig) => {
    return uploadToServer(this.#vhttp, this.meta.id, data);
  };

  /**
   * @param URL - URL of the hosted file
   * @param callbackUrl- [optional] A url that will be called once upload is finished
   * @param name - [optional] Name of the file
   * @param description - [optional] Description of the file
   *
   * @see
   * Providing a callbackUrl will return undefined and not providing one
   * will return a Job object (TODO: Implement proper type for this condition)
   */
  public uploadURL = async (data: URLUploadConfig) => {
    return uploadToServer(this.#vhttp, this.meta.id, data);
  };

  /**
   * @param query - Search query
   * @param searchType - [optional] Type of search to be performed
   * @param resultThreshold - [optional] Result Threshold
   * @param scoreThreshold - [optional] Score Threshold
   */
  public search = async (
    query: string,
    searchType?: SearchType,
    indexType?: IndexType,
    resultThreshold?: number,
    scoreThreshold?: number
  ) => {
    const s = new SearchFactory(this.#vhttp);
    const searchFunc = s.getSearch(searchType ?? DefaultSearchType);

    const results = await searchFunc.searchInsideCollection({
      collectionId: this.meta.id,
      query: query,
      searchType: searchType ?? DefaultSearchType,
      indexType: indexType ?? DefaultIndexType,
      resultThreshold: resultThreshold,
      scoreThreshold: scoreThreshold,
    });
    return results;
  };
}
