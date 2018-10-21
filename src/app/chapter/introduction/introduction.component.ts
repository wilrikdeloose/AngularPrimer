import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {
  private _version: string;
  get version() { return this._version; }
  
  constructor() { }

  ngOnInit() {
    this._version = VERSION.full;
  }
}
