import { DocumentDataModel, INumberUnit, IObjectPositionH, IObjectPositionV, IParagraph, IParagraphStyle, ITextStyle, Nullable, BooleanNumber, GridType, SpacingRule } from '@univerjs/core';
import { IDocumentSkeletonCached, IDocumentSkeletonColumn, IDocumentSkeletonDivide, IDocumentSkeletonFontStyle, IDocumentSkeletonGlyph, IDocumentSkeletonLine, IDocumentSkeletonPage, IDocumentSkeletonSection, ISkeletonResourceReference } from '../../../basics/i-document-skeleton-cached';
import { IDocsConfig, IParagraphConfig, ISectionBreakConfig } from '../../../basics/interfaces';
import { DataStreamTreeNode } from '../view-model/data-stream-tree-node';
import { DocumentViewModel } from '../view-model/document-view-model';
import { Hyphen } from './hyphenation/hyphen';
import { LanguageDetector } from './hyphenation/language-detector';
export declare function getLastPage(pages: IDocumentSkeletonPage[]): IDocumentSkeletonPage;
export declare function getLastSection(page: IDocumentSkeletonPage): IDocumentSkeletonSection;
export declare function getLastColumn(page: IDocumentSkeletonPage): IDocumentSkeletonColumn;
export declare function getLastLine(page: IDocumentSkeletonPage): IDocumentSkeletonLine | undefined;
export declare function getLastLineByColumn(column: IDocumentSkeletonColumn): IDocumentSkeletonLine;
export declare function getPageContentWidth(page: IDocumentSkeletonPage): number;
export declare function getPreLine(line: IDocumentSkeletonLine): IDocumentSkeletonLine | undefined;
export declare function getColumnByDivide(divide: IDocumentSkeletonDivide): IDocumentSkeletonColumn | undefined;
export declare function getLastNotFullColumnInfo(page: IDocumentSkeletonPage): {
    column: IDocumentSkeletonColumn;
    isLast: boolean;
    index: number;
} | undefined;
export declare function getLastNotFullDivideInfo(page: IDocumentSkeletonPage): {
    divide: IDocumentSkeletonDivide;
    isLast: boolean;
    index: number;
} | undefined;
export declare function getNextDivide(curLine: IDocumentSkeletonLine, curDivide: IDocumentSkeletonDivide): IDocumentSkeletonDivide | undefined;
export declare function getLastRemainingDivide(curLine: IDocumentSkeletonLine): IDocumentSkeletonDivide | undefined;
export declare function getLastSpan(page: IDocumentSkeletonPage): IDocumentSkeletonGlyph | undefined;
export declare function isColumnFull(page: IDocumentSkeletonPage): boolean;
export declare function isBlankPage(page: IDocumentSkeletonPage): boolean;
export declare function isBlankColumn(column: IDocumentSkeletonColumn): boolean;
export declare function getNumberUnitValue(unitValue: Nullable<INumberUnit>, benchMark: number): number;
export declare function getCharSpaceApply(charSpace: number | undefined, defaultTabStop: number, gridType?: GridType, snapToGrid?: BooleanNumber): number;
export declare function validationGrid(gridType?: GridType, snapToGrid?: BooleanNumber): boolean;
export declare function getLineHeightConfig(sectionBreakConfig: ISectionBreakConfig, paragraphConfig: IParagraphConfig): {
    paragraphLineGapDefault: number;
    linePitch: number;
    gridType: GridType;
    lineSpacing: number;
    spacingRule: SpacingRule;
    snapToGrid: BooleanNumber;
};
export declare function getCharSpaceConfig(sectionBreakConfig: ISectionBreakConfig, paragraphConfig: IParagraphConfig): {
    charSpace: number;
    documentFontSize: number;
    defaultTabStop: number;
    gridType: GridType;
    snapToGrid: BooleanNumber;
};
export declare function updateBlockIndex(pages: IDocumentSkeletonPage[], start?: number): void;
export declare function updateInlineDrawingCoordsAndBorder(ctx: ILayoutContext, pages: IDocumentSkeletonPage[]): void;
export declare function glyphIterator(pages: IDocumentSkeletonPage[], cb: (glyph: IDocumentSkeletonGlyph, divide: IDocumentSkeletonDivide, line: IDocumentSkeletonLine, column: IDocumentSkeletonColumn, section: IDocumentSkeletonSection, page: IDocumentSkeletonPage) => void): void;
export declare function lineIterator(pagesOrCells: (IDocumentSkeletonPage)[], cb: (line: IDocumentSkeletonLine, column: IDocumentSkeletonColumn, section: IDocumentSkeletonSection, page: IDocumentSkeletonPage) => void): void;
export declare function columnIterator(pages: IDocumentSkeletonPage[], iteratorFunction: (column: IDocumentSkeletonColumn) => void): void;
export declare function getPositionHorizon(positionH: IObjectPositionH, column: IDocumentSkeletonColumn, page: IDocumentSkeletonPage, objectWidth: number, isPageBreak?: boolean): number | undefined;
export declare function getPositionVertical(positionV: IObjectPositionV, page: IDocumentSkeletonPage, lineTop: number, lineHeight: number, objectHeight: number, blockAnchorTop?: number, isPageBreak?: boolean): number | undefined;
export declare function getGlyphGroupWidth(divide: IDocumentSkeletonDivide): number;
interface IFontCreateConfig {
    fontStyle: IDocumentSkeletonFontStyle;
    textStyle: ITextStyle;
    charSpace: number;
    gridType: GridType;
    snapToGrid: BooleanNumber;
    pageWidth: number;
}
export declare function clearFontCreateConfigCache(): void;
export declare function getFontConfigFromLastGlyph(glyph: IDocumentSkeletonGlyph, sectionBreakConfig: ISectionBreakConfig, paragraphStyle: IParagraphStyle): {
    fontStyle: IDocumentSkeletonFontStyle;
    textStyle: ITextStyle;
    charSpace: number;
    gridType: GridType;
    snapToGrid: BooleanNumber;
    pageWidth: number;
};
export declare function getFontCreateConfig(index: number, viewModel: DocumentViewModel, paragraphNode: DataStreamTreeNode, sectionBreakConfig: ISectionBreakConfig, paragraph: IParagraph): IFontCreateConfig;
export declare function getNullSkeleton(): IDocumentSkeletonCached;
export declare function setPageParent(pages: IDocumentSkeletonPage[], parent: IDocumentSkeletonCached): void;
export declare enum FloatObjectType {
    IMAGE = "IMAGE",
    TABLE = "TABLE"
}
export interface IFloatObject {
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
    angle: number;
    type: FloatObjectType;
    positionV: IObjectPositionV;
}
export interface ILayoutContext {
    viewModel: DocumentViewModel;
    dataModel: DocumentDataModel;
    docsConfig: IDocsConfig;
    skeleton: IDocumentSkeletonCached;
    layoutStartPointer: Record<string, Nullable<number>>;
    isDirty: boolean;
    skeletonResourceReference: ISkeletonResourceReference;
    floatObjectsCache: Map<string, {
        count: number;
        page: IDocumentSkeletonPage;
        floatObject: IFloatObject;
    }>;
    paragraphConfigCache: Map<string, Map<number, IParagraphConfig>>;
    sectionBreakConfigCache: Map<number, ISectionBreakConfig>;
    paragraphsOpenNewPage: Set<number>;
    hyphen: Hyphen;
    languageDetector: LanguageDetector;
}
export declare const DEFAULT_PAGE_SIZE: {
    width: number;
    height: number;
};
export declare function prepareSectionBreakConfig(ctx: ILayoutContext, nodeIndex: number): ISectionBreakConfig;
export declare function resetContext(ctx: ILayoutContext): void;
export declare function mergeByV<T = unknown>(object: unknown, originObject: unknown, type: 'max' | 'min'): T;
export declare function getPageFromPath(skeletonData: IDocumentSkeletonCached, path: (string | number)[]): Nullable<IDocumentSkeletonPage>;
export {};
