import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {
  private _isHidden: boolean = true;
  get isHidden() { return this._isHidden; }

  private _inputValue: string = "";
  get inputValue() { return this._inputValue; }
  set inputValue(value: string) { this._inputValue = value; }

  get chapterService() { return this._chapterService; }
  constructor(private _chapterService: ChapterService) { }

  ngOnInit() {
  }

  onCheckboxClicked(event: Event) {
    console.log(event);
    this._isHidden = !this._isHidden;
  }
}
