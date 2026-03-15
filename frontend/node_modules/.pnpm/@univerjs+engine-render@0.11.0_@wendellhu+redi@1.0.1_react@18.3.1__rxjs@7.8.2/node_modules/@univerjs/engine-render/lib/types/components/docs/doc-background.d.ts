import { IViewportInfo } from '../../basics/vector2';
import { UniverRenderingContext } from '../../context';
import { IDocumentsConfig, DocComponent } from './doc-component';
import { DocumentSkeleton } from './layout/doc-skeleton';
export declare class DocBackground extends DocComponent {
    private _drawLiquid;
    constructor(oKey: string, documentSkeleton?: DocumentSkeleton, config?: IDocumentsConfig);
    static create(oKey: string, documentSkeleton?: DocumentSkeleton, config?: IDocumentsConfig): DocBackground;
    draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
    changeSkeleton(newSkeleton: DocumentSkeleton): this;
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
}
