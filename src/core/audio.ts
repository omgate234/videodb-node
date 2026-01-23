import { ApiPath } from '@/constants';
import type { AudioBase, IAudio } from '@/interfaces/core';
import { HttpClient } from '@/utils/httpClient';

const { audio } = ApiPath;

/**
 * The base Audio class
 * @remarks
 * Use this to initialize an audio stored in VideoDB
 */
export class Audio implements IAudio {
  public meta: AudioBase;
  #vhttp: HttpClient;

  /**
   * Initializes a VideoDB Instance
   * @param http - HttpClient object
   * @param data - Data needed to initialize an audio instance
   */
  constructor(http: HttpClient, data: AudioBase) {
    this.meta = data;
    this.#vhttp = http;
  }
  
  /**
   * Deletes the audio with confirmation.
   * @param force - Must be true to confirm deletion.
   * @returns A promise that resolves when deletion is successful.
   * @throws Error if force is false, InvalidRequestError if request fails.
   */
  public delete = async (force: boolean) => {
    if (!force) {
      throw new Error("Parameter 'force' must be true to confirm deletion.");
    }
    return await this.#vhttp.delete<Record<string, never>>(
      [audio, this.meta.id],
      { data: { force } }
    );
  };
}
