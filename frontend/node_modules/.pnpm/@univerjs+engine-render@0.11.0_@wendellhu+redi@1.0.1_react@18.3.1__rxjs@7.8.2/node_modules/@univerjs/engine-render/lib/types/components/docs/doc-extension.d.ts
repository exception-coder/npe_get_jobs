import { IDocumentSkeletonGlyph, IDocumentSkeletonLine } from '../../basics/i-document-skeleton-cached';
import { IBoundRectNoAngle } from '../../basics/vector2';
import { ComponentExtension } from '../extension';
export declare enum DOCS_EXTENSION_TYPE {
    SPAN = 0,
    LINE = 1
}
export declare class docExtension extends ComponentExtension<IDocumentSkeletonGlyph | IDocumentSkeletonLine, DOCS_EXTENSION_TYPE, IBoundRectNoAngle> {
    type: DOCS_EXTENSION_TYPE;
    translateX: number;
    translateY: number;
}
