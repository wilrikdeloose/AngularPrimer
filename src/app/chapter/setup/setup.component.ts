import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
  }

}
