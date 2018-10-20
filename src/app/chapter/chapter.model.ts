export class Chapter {
    private visible = true;
    constructor(private title: string, private tag: string) { }

    toggleVisibility() { 
        this.visible = !this.visible;
    }
}