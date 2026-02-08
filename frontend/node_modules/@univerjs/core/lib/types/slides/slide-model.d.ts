import { Observable } from 'rxjs';
import { Nullable } from '../shared';
import { ISlideData, ISlidePage, PageType } from '../types/interfaces';
import { UnitModel, UniverInstanceType } from '../common/unit';
export declare class SlideDataModel extends UnitModel<ISlideData, UniverInstanceType.UNIVER_SLIDE> {
    type: UniverInstanceType.UNIVER_SLIDE;
    private readonly _activePage$;
    private get _activePage();
    readonly activePage$: Observable<Nullable<ISlidePage>>;
    private readonly _name$;
    name$: Observable<string>;
    private _snapshot;
    private _unitId;
    constructor(snapshot: Partial<ISlideData>);
    setName(name: string): void;
    getRev(): number;
    incrementRev(): void;
    setRev(_rev: number): void;
    getSnapshot(): ISlideData;
    getUnitId(): string;
    getPages(): {
        [id: string]: ISlidePage;
    } | undefined;
    getPageOrder(): string[] | undefined;
    getPage(pageId: string): ISlidePage | undefined;
    getElementsByPage(pageId: string): {
        [elementId: string]: import('..').IPageElement;
    } | undefined;
    getElement(pageId: string, elementId: string): import('..').IPageElement | undefined;
    getPageSize(): import('..').ISize;
    getBlankPage(): {
        id: string;
        pageType: PageType;
        zIndex: number;
        title: string;
        description: string;
        pageBackgroundFill: {
            rgb: string;
        };
        pageElements: {};
    };
    setActivePage(page: Nullable<ISlidePage>): void;
    getActivePage(): Nullable<ISlidePage>;
    updatePage(pageId: string, page: ISlidePage): void;
    appendPage(page: ISlidePage): void;
}
