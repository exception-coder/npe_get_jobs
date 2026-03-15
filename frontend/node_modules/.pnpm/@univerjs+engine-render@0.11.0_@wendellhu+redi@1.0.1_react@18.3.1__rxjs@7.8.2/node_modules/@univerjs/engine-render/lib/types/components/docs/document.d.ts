import { Nullable } from '@univerjs/core';
import { IDocumentSkeletonPage } from '../../basics/i-document-skeleton-cached';
import { Transform } from '../../basics/transform';
import { IViewportInfo } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { IDocumentsConfig, IPageMarginLayout, DocComponent } from './doc-component';
import { DocumentSkeleton } from './layout/doc-skeleton';
import './extensions';
export interface IPageRenderConfig {
    page: IDocumentSkeletonPage;
    pageLeft: number;
    pageTop: number;
    ctx: UniverRenderingContext;
}
export interface IDocumentOffsetConfig extends IPageMarginLayout {
    docsLeft: number;
    docsTop: number;
    documentTransform: Transform;
}
export declare class Documents extends DocComponent {
    private readonly _pageRender$;
    readonly pageRender$: import('rxjs').Observable<IPageRenderConfig>;
    private _drawLiquid;
    constructor(oKey: string, documentSkeleton?: DocumentSkeleton, config?: IDocumentsConfig);
    static create(oKey: string, documentSkeleton?: DocumentSkeleton, config?: IDocumentsConfig): Documents;
    dispose(): void;
    getOffsetConfig(): IDocumentOffsetConfig;
    getEngine(): Nullable<import('../..').Engine>;
    changeSkeleton(newSkeleton: DocumentSkeleton): this;
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    private _drawTable;
    private _drawBorderBottom;
    private _drawTableCell;
    private _drawTableCellBordersAndBg;
    private _drawHeaderFooter;
    private _horizontalHandler;
    private _verticalHandler;
    private _startRotation;
    private _resetRotation;
    private _initialDefaultExtension;
}
