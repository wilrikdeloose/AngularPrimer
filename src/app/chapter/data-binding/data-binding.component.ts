import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {

  private isHidden: boolean = true;
  private inputValue: string = "";

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
  }

  onCheckboxClicked(event: Event) {
    // console.log(event);
    this.isHidden = !this.isHidden;
  }
}
