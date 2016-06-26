import {Component, provide, OnInit, ElementRef} from '@angular/core';
import {YoutubeService} from '../shared/index';
import {SearchResult} from './youtube.models';
import {EventEmitter} from "@angular/platform-browser-dynamic/src/facade/async";
import {Observable} from "rxjs/Rx";

@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  template: `
      <input type="text" class="form-control" placeholder="Search" autofocus>
    `
})
class SearchBox implements OnInit {
  loading:EventEmitter<boolean> = new EventEmitter<boolean>();
  results:EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public youtubeService: YoutubeService,
              private el: ElementRef) {
  }

  ngOnInit():any {
    Observable
      .fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.youtubeService.search(query))
      .switch()
      .subscribe(
        (results: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        (error: any) => {
          console.log(error);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      )
  }
}


/**
 * This class represents the lazy loaded YoutubeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-youtube',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
  providers: [YoutubeService],
  directives: [SearchBox]
})
export class YoutubeComponent {

  /**
   * Creates an instance of the YoutubeComponent with the injected
   * YoutubeService
   *
   * @param youtubeService
   */
  constructor(public youtubeService:YoutubeService) {
    youtubeService.search('korgi').subscribe((data) => {
      console.log(data);
    });
  }
}
