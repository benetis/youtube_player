import {Injectable, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

const YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
/**
 * This class provides the Youtube service with methods to retrieve search results from youtube.
 */
@Injectable()
export class YoutubeService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
 * @constructor
   */
  constructor(public http: Http) {

  }

}

