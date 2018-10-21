import { Component, ViewChild, ElementRef } from '@angular/core';

import { Person } from './person.model';
import { ChapterService } from '../chapter.service';

@Component({ selector: 'app-directives', templateUrl: './directives.component.html' })
export class DirectivesComponent {
  get display() { return this._display; }
  private _display: boolean = true;

  get value() { return this._value; }
  private _value: number = 0;

  get people() { return this._people.slice(); }
  private _people: Person[] = [];

  get colors() { return this._colors.slice(); }
  private _colors: string[] = ['Red', 'Green', 'Blue'];

  get selectedColor() { return this._selectedColor; }
  private _selectedColor: number = 0;

  get chapterService() { return this._chapterService; }
  constructor(private _chapterService: ChapterService) { }

  @ViewChild('personName') nameInput: ElementRef;

  addPerson(name: string, age: number) {
    const person = new Person(this.nameInput.nativeElement.value, age);
    this._people.push(person);
  }

  toggleDisplay(event: Event) {
    event.preventDefault();
    this._display = !this._display;
  }

  increaseValue(event: Event) {
    event.preventDefault();
    this._value = (this._value + 1) % 3;
  }
}