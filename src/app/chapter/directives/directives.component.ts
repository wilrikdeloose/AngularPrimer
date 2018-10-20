import { Component } from '@angular/core';

import { Person } from './person.model';
import { ChapterService } from '../chapter.service';

@Component({ selector: 'app-directives', templateUrl: './directives.component.html' })
export class DirectivesComponent {
  private display: boolean = true;
  private value: number = 0;
  private people: Person[] = [];
  private colors: string[] = ['Red', 'Green', 'Blue'];
  private selectedColor: number = 0;

  constructor(private chapterService: ChapterService) { }

  addPerson(name: string, age: number) {
    this.people.push(new Person(name, age));
  }

  toggleDisplay(event: Event) {
    event.preventDefault();
    this.display = !this.display;
  }

  increaseValue(event: Event) {
    event.preventDefault();
    this.value = (this.value + 1) % 3;
  }
}