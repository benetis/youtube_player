import {Component, provide } from '@angular/core';
import { YoutubeService } from '../shared/index';
import { ReflectiveInjector } from '@angular/core';

/**
 * This class represents the lazy loaded YoutubeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-youtube',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent {

  /**
   * Creates an instance of the YoutubeComponent with the injected
   * YoutubeService
   *
   * @param youtubeService
   */
  constructor(public youtubeService: YoutubeService) {
  }

}

class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

// export var youTubeServiceInjectables: Array<any> = [
//   bind(YoutubeService).toClass(YoutubeService),
//   bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
//   bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
// ];
