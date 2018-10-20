import { Chapter } from "./chapter.model";

export class ChapterService {
    private chapters: Chapter[] = [
        new Chapter('Introduction', 'introduction'),
        new Chapter('Setup', 'setup'),
        new Chapter('Components', 'components'),
        new Chapter('Data binding', 'data-binding'),
        new Chapter('Directives', 'directives'),
        new Chapter('Components II', 'components-ii'),
        new Chapter('Services', 'services'),
        new Chapter('Routing', 'routing'),
        new Chapter('HTML forms', 'html-forms'),
        new Chapter('Pipes', 'pipes'),
        new Chapter('HTTP requests', 'http-requests'),
        new Chapter('Apendices', 'apendices')
    ];

    getAll() {
        return this.chapters.slice();
    }

    outputStringInterpolation(value: string) {
      return "{{ " + value + " }}";
    }
}