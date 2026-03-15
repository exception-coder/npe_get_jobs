import { IDocumentSkeletonGlyph, IDocumentSkeletonLine, IDocumentSkeletonPage, PageLayoutType } from '../../basics/i-document-skeleton-cached';
import { IBoundRectNoAngle, IViewportInfo } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { DOCS_EXTENSION_TYPE } from './doc-extension';
import { DocumentSkeleton } from './layout/doc-skeleton';
import { RenderComponent } from '../component';
export interface IPageMarginLayout {
    pageMarginLeft: number;
    pageMarginTop: number;
    pageLayoutType?: PageLayoutType;
}
export interface IDocumentsConfig extends IPageMarginLayout {
    hasEditor?: boolean;
}
export declare abstract class DocComponent extends RenderComponent<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle[]> {
    private _skeleton?;
    pageMarginLeft: number;
    pageMarginTop: number;
    pageLayoutType: PageLayoutType;
    constructor(oKey: string, _skeleton?: DocumentSkeleton | undefined, config?: IDocumentsConfig);
    getSkeleton(): DocumentSkeleton | undefined;
    setSkeleton(skeleton: DocumentSkeleton): void;
    private _setConfig;
    render(mainCtx: UniverRenderingContext, bounds?: Partial<IViewportInfo>): this | undefined;
    getParentScale(): {
        scaleX: any;
        scaleY: any;
    };
    isSkipByDiffBounds(page: IDocumentSkeletonPage, pageTop: number, pageLeft: number, bounds?: IViewportInfo): boolean;
    protected abstract _draw(ctx: UniverRenderingContext, bounds?: Partial<IViewportInfo>): void;
}
