import { IDocumentSkeletonColumn, IDocumentSkeletonDivide, IDocumentSkeletonGlyph, IDocumentSkeletonLine, IDocumentSkeletonPage, IDocumentSkeletonSection, PageLayoutType } from '../../basics/i-document-skeleton-cached';
export declare class Liquid {
    private _translateX;
    private _translateY;
    private _translateSaveList;
    get x(): number;
    get y(): number;
    reset(): void;
    translateBy(x?: number, y?: number): void;
    translate(x?: number, y?: number): void;
    translateSave(): void;
    translateRestore(): void;
    translatePagePadding(page: IDocumentSkeletonPage): void;
    restorePagePadding(page: IDocumentSkeletonPage): void;
    translatePage(page: IDocumentSkeletonPage, type?: PageLayoutType, left?: number, top?: number, _right?: number, _bottom?: number): {
        x: number;
        y: number;
    };
    translateSection(section: IDocumentSkeletonSection): {
        x: number;
        y: number;
    };
    translateColumn(column: IDocumentSkeletonColumn): {
        x: number;
        y: number;
    };
    translateLine(line: IDocumentSkeletonLine, includeMarginTop?: boolean, includePaddingTop?: boolean): {
        x: number;
        y: number;
    };
    translateDivide(divide: IDocumentSkeletonDivide): {
        x: number;
        y: number;
    };
    translateGlyph(glyph: IDocumentSkeletonGlyph): {
        x: number;
        y: number;
    };
}
