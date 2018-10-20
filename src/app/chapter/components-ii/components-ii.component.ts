import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-components-ii',
  templateUrl: './components-ii.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ComponentsIIComponent {
  constructor(private chapterService: ChapterService) { }

  buttonWasClicked(rand: number) {
    alert("The number was " + rand);
  }
}