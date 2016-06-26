import {Component, provide } from '@angular/core';
import { YoutubeService } from '../shared/index';
import { SearchResult } from './youtube.models';

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
    youtubeService.search('korgi').subscribe((data) => {
      console.log(data);
    });
  }


}
