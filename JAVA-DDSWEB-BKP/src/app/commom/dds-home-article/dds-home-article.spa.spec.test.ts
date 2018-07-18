import { DdsHomeArticleComponent } from './dds-home-article.component';

describe ('DdsHomeArticleComponent', () => {
    const component = new DdsHomeArticleComponent();

    it ('test variables', () => {
        expect(component.dataSource.length).toBe(undefined);
        expect(component.displayedColumns.length).toBe(4);
    });


    it ('ngOnInit', () => {
        component.ngOnInit();
    });

});
