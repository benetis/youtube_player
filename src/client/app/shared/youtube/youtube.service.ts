import {Injectable, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import { SearchResult } from "../../+youtube/youtube.models";

/**
 * This class provides the Youtube service with methods to retrieve search results from youtube.
 */
@Injectable()
export class YoutubeService {
  private apiKey: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
  private apiUrl: string = 'https://www.googleapis.com/youtube/v3/search';

  /**
   * Creates a new YoutubeService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(public http: Http) {}

  public search(query: string): any {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (response.json()).items.map((item: any) => {
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }
}

