import { LocaleService, Nullable, Skeleton } from '@univerjs/core';
import { IDocumentSkeletonCached, IDocumentSkeletonGlyph, IDocumentSkeletonPage, PageLayoutType } from '../../../basics/i-document-skeleton-cached';
import { INodeInfo, INodePosition, INodeSearch } from '../../../basics/interfaces';
import { IViewportInfo, Vector2 } from '../../../basics/vector2';
import { DocumentViewModel, DocumentEditArea } from '../view-model/document-view-model';
export declare enum DocumentSkeletonState {
    PENDING = "pending",
    CALCULATING = "calculating",
    READY = "ready",
    INVALID = "invalid"
}
export interface IFindNodeRestrictions {
    strict: boolean;
    segmentId: string;
    segmentPage: number;
}
export declare class DocumentSkeleton extends Skeleton {
    private _docViewModel;
    private _dirty$;
    readonly dirty$: import('rxjs').Observable<boolean>;
    private _skeletonData;
    private _findLiquid;
    private _hyphen;
    private _languageDetector;
    private _iteratorCount;
    private _initialWidth;
    constructor(_docViewModel: DocumentViewModel, localeService: LocaleService);
    static create(docViewModel: DocumentViewModel, localeService: LocaleService): DocumentSkeleton;
    dispose(): void;
    getViewModel(): DocumentViewModel;
    /**
     * Layout the document.
     * PS: This method has significant impact on performance.
     */
    calculate(bounds?: IViewportInfo): void;
    getSkeletonData(): Nullable<IDocumentSkeletonCached>;
    resetInitialWidth(): void;
    getActualSize(): {
        actualWidth: number;
        actualHeight: number;
    };
    private _getPageActualWidth;
    getPageSize(): import('@univerjs/core').ISize | undefined;
    findPositionByGlyph(glyph: IDocumentSkeletonGlyph, segmentPage: number): Nullable<INodeSearch>;
    findCharIndexByPosition(position: INodePosition): Nullable<number>;
    findNodePositionByCharIndex(charIndex: number, isBack?: boolean, segmentId?: string, segmentPIndex?: number): Nullable<INodePosition>;
    findNodeByCharIndex(charIndex: number, segmentId?: string, segmentPageIndex?: number): Nullable<IDocumentSkeletonGlyph>;
    findGlyphByPosition(position: Nullable<INodePosition>): IDocumentSkeletonGlyph | undefined;
    findEditAreaByCoord(coord: Vector2, pageLayoutType: PageLayoutType, pageMarginLeft: number, pageMarginTop: number): {
        editArea: DocumentEditArea;
        pageNumber: number;
        page: Nullable<IDocumentSkeletonPage>;
    };
    findNodeByCoord(coord: Vector2, pageLayoutType: PageLayoutType, pageMarginLeft: number, pageMarginTop: number, restrictions?: IFindNodeRestrictions): Nullable<INodeInfo>;
    private _collectNearestNode;
    private _getNearestNode;
    private _getPageBoundingBox;
    private _translatePage;
    private _prepareLayoutContext;
    /**
     * \v COLUMN_BREAK
     * \f PAGE_BREAK
     * \0 DOCS_END
     * \t TAB
     *
     * Needs to be changed：
     * \r PARAGRAPH
     * \n SECTION_BREAK
     *
     * \b customBlock: Scenarios where customBlock, images, mentions, etc. do not participate in the document flow.
     *
     * Table
     * \x1A table start
     * \x1B table row start
     * \x1C table cell start
     * \x1D table cell end
     * \x1E table row end
     * \x1F table end
     *
     * Special ranges within the document flow:：hyperlinks，field，structured document tags， bookmark，comment
     * \x1F customRange start
     * \x1E customRange end
     *
     * Split the document according to SectionBreak and perform layout calculations.
     * @returns view model: skeleton
     */
    private _createSkeleton;
    private _addNewSectionByContinuous;
    private _findNodeByIndex;
}
