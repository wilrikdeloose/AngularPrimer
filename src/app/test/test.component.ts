import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
        <p [hidden]="showButton">{{ value }} <ng-content></ng-content></p>
        <button
            type="button"
            class="btn btn-outline-secondary"
            [hidden]="!showButton"
            (click)="onButtonClick()">
                Click me!
        </button>`,
    styles: ['p { color: red; }']
})
export class TestComponent {
    @Input() private value: string = "It works!";
    @Input() private showButton: boolean = false;

    @Output("btnClick") private onClick = new EventEmitter<number>();

    onButtonClick() {
        const rand: number = Math.trunc(Math.random() * 100);
        this.onClick.emit(rand);
    }
}