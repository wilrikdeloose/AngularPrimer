import { Component } from '@angular/core';
import { ChapterService } from '../chapter/chapter.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    get chapterService() { return this._chapterService; }
    constructor(private _chapterService: ChapterService) { }
 }
