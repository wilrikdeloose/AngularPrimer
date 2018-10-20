import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent implements OnInit {
  private version: string;
  
  constructor() { }

  ngOnInit() {
    this.version = VERSION.full;
  }
}
