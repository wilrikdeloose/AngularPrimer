import { Component, ViewEncapsulation } from '@angular/core';
import { ChapterService } from './chapter/chapter.service';
import { Chapter } from './chapter/chapter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ChapterService]
})
export class AppComponent {

  constructor(private chapterService: ChapterService) { }

  getYear() {
    const yearBegin = 2018;
    const yearNow = (new Date()).getFullYear();
    const yearString = yearNow.toString();

    if (yearBegin === yearNow) {
      return yearString;
    }

    return yearBegin + ' - ' + yearString;
  }
}