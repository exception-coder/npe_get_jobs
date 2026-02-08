import { DocumentDataModel, ICustomRange, IParagraph, Nullable, Disposable } from '@univerjs/core';
import { Documents, DocumentSkeleton, IBoundRectNoAngle, IDocumentSkeletonGlyph, IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
export interface ICustomRangeBound {
    customRange: ICustomRange;
    rects: IBoundRectNoAngle[];
    segmentId?: string;
    segmentPageIndex: number;
}
export interface IBulletBound {
    rect: IBoundRectNoAngle;
    segmentId?: string;
    segmentPageIndex: number;
    paragraph: IParagraph;
}
export declare const calcDocGlyphPosition: (glyph: IDocumentSkeletonGlyph, documents: Documents, skeleton: DocumentSkeleton, pageIndex?: number) => IBoundRectNoAngle | undefined;
interface ICustomRangeActive {
    range: ICustomRange;
    segmentId?: string;
    segmentPageIndex: number;
    rects: IBoundRectNoAngle[];
}
interface IBulletActive {
    paragraph: IParagraph;
    segmentId?: string;
    segmentPageIndex: number;
    rect: IBoundRectNoAngle;
}
export interface IMutiPageParagraphBound {
    rect: IBoundRectNoAngle;
    paragraphStart: number;
    paragraphEnd: number;
    startIndex: number;
    rects: IBoundRectNoAngle[];
    pageIndex: number;
    segmentId?: string;
    firstLine: IBoundRectNoAngle;
}
export interface ITableParagraphBound {
    rect: IBoundRectNoAngle;
    paragraphStart: number;
    paragraphEnd: number;
    startIndex: number;
    pageIndex: number;
    segmentId?: string;
    rowIndex: number;
    colIndex: number;
    firstLine: IBoundRectNoAngle;
    tableId: string;
}
export interface ITableBound {
    rect: IBoundRectNoAngle;
    pageIndex: number;
    tableId: string;
}
export interface ITableCellBound {
    rect: IBoundRectNoAngle;
    pageIndex: number;
    rowIndex: number;
    colIndex: number;
    tableId: string;
}
export declare class DocEventManagerService extends Disposable implements IRenderModule {
    private _context;
    private readonly _docSkeletonManagerService;
    private readonly _hoverCustomRanges$;
    readonly hoverCustomRanges$: import('rxjs').Observable<ICustomRangeActive[]>;
    private readonly _clickCustomRanges$;
    readonly clickCustomRanges$: import('rxjs').Observable<ICustomRangeActive>;
    private readonly _hoverBullet$;
    readonly hoverBullet$: import('rxjs').Observable<Nullable<IBulletActive>>;
    private readonly _clickBullet$;
    readonly clickBullets$: import('rxjs').Observable<IBulletActive>;
    private readonly _hoverParagraph$;
    readonly hoverParagraph$: import('rxjs').Observable<Nullable<IMutiPageParagraphBound>>;
    readonly hoverParagraphRealTime$: import('rxjs').Observable<Nullable<IMutiPageParagraphBound>>;
    get hoverParagraph(): Nullable<IMutiPageParagraphBound>;
    private readonly _hoverParagraphLeft$;
    readonly hoverParagraphLeft$: import('rxjs').Observable<Nullable<IMutiPageParagraphBound>>;
    readonly hoverParagraphLeftRealTime$: import('rxjs').Observable<Nullable<IMutiPageParagraphBound>>;
    get hoverParagraphLeft(): Nullable<IMutiPageParagraphBound>;
    private readonly _hoverTableCell$;
    readonly hoverTableCell$: import('rxjs').Observable<Nullable<ITableCellBound>>;
    readonly hoverTableCellRealTime$: import('rxjs').Observable<Nullable<ITableCellBound>>;
    private readonly _hoverTable$;
    readonly hoverTable$: import('rxjs').Observable<Nullable<ITableBound>>;
    readonly hoverTableRealTime$: import('rxjs').Observable<Nullable<ITableBound>>;
    private _customRangeDirty;
    private _bulletDirty;
    private _paragraphDirty;
    /**
     * cache the bounding of custom ranges,
     * it will be updated when the doc-skeleton is recalculated
     */
    private _customRangeBounds;
    /**
     * cache the bounding of bullets,
     * it will be updated when the doc-skeleton is recalculated
     */
    private _bulletBounds;
    /**
     * cache the bounding of paragraphs,
     * it will be updated when the doc-skeleton is recalculated
     */
    private _paragraphBounds;
    private _paragraphLeftBounds;
    private _tableParagraphBounds;
    private _segmentParagraphBounds;
    private _tableCellBounds;
    private _tableBounds;
    private get _skeleton();
    private get _documents();
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService);
    dispose(): void;
    private _initPointer;
    private _initResetDirty;
    private _initEvents;
    private _buildCustomRangeBoundsBySegment;
    private _buildCustomRangeBounds;
    private _calcActiveRanges;
    private _buildBulletBoundsBySegment;
    private _buildBulletBounds;
    private _calcActiveBullet;
    private _buildParagraphBoundsBySegment;
    private _buildParagraphBounds;
    private _calcActiveParagraph;
    private _calcActiveParagraphLeft;
    get paragraphBounds(): Map<number, IMutiPageParagraphBound>;
    findParagraphBoundByIndex(index: number): IMutiPageParagraphBound | ITableParagraphBound | undefined;
}
export {};
