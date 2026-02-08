import { BooleanNumber, GridType, IDocStyleBase, IDocumentLayout, IOffset, IParagraphStyle, IReferenceSource, IScale, ISectionBreakBase, ISize, ITextStyle, ITransformState, LocaleService } from '@univerjs/core';
import { DataStreamTreeNode } from '../components/docs/view-model/data-stream-tree-node';
import { DocumentViewModel } from '../components/docs/view-model/document-view-model';
import { DocumentSkeletonPageType, IDocumentSkeletonBullet, IDocumentSkeletonDrawing, IDocumentSkeletonDrawingAnchor, IDocumentSkeletonFontStyle, IDocumentSkeletonGlyph, IDocumentSkeletonHeaderFooter, IDocumentSkeletonTable } from './i-document-skeleton-cached';
import { ITransformerConfig } from './transformer-config';
import { Vector2 } from './vector2';
export interface IObjectFullState extends ITransformState {
    strokeWidth?: number;
    zIndex?: number;
    forceRender?: boolean;
    debounceParentDirty?: boolean;
    transformerConfig?: ITransformerConfig;
    printable?: boolean;
}
export interface IRect extends ISize, IOffset {
    points: Vector2[];
}
/**
 * width
 * height
 * scaleX
 * scaleY
 */
export interface ISceneTransformState extends ISize, IScale {
}
/**
 * Bad design! should use Bit Flags!
 */
export declare enum TRANSFORM_CHANGE_OBSERVABLE_TYPE {
    translate = 0,
    resize = 1,
    scale = 2,
    skew = 3,
    flip = 4,
    all = 5
}
export interface ITransformChangeState {
    type: TRANSFORM_CHANGE_OBSERVABLE_TYPE;
    value: IObjectFullState | ISceneTransformState;
    preValue: IObjectFullState | ISceneTransformState;
}
export interface IFontLocale {
    fontList: string[];
    defaultFontSize: number;
}
export interface IDocsConfig extends IReferenceSource, IDocumentLayout {
    localeService: LocaleService;
    documentTextStyle?: ITextStyle;
    headerTreeMap: Map<string, DocumentViewModel>;
    footerTreeMap: Map<string, DocumentViewModel>;
}
export interface IHeaderIds {
    defaultHeaderId?: string;
    evenPageHeaderId?: string;
    firstPageHeaderId?: string;
}
export interface IFooterIds {
    defaultFooterId?: string;
    evenPageFooterId?: string;
    firstPageFooterId?: string;
}
export interface ISectionBreakConfig extends IDocStyleBase, ISectionBreakBase, IDocsConfig {
    headerIds?: IHeaderIds;
    footerIds?: IFooterIds;
    useFirstPageHeaderFooter?: BooleanNumber;
    evenAndOddHeaders?: BooleanNumber;
}
export interface IParagraphTableCache {
    tableId: string;
    table: IDocumentSkeletonTable;
    hasPositioned: boolean;
    isSlideTable: boolean;
    tableNode: DataStreamTreeNode;
}
export interface IParagraphConfig {
    paragraphIndex: number;
    paragraphNonInlineSkeDrawings?: Map<string, IDocumentSkeletonDrawing>;
    paragraphInlineSkeDrawings?: Map<string, IDocumentSkeletonDrawing>;
    skeTablesInParagraph?: IParagraphTableCache[];
    bulletSkeleton?: IDocumentSkeletonBullet;
    paragraphStyle?: IParagraphStyle;
    skeHeaders: Map<string, Map<number, IDocumentSkeletonHeaderFooter>>;
    skeFooters: Map<string, Map<number, IDocumentSkeletonHeaderFooter>>;
    pDrawingAnchor?: Map<number, IDocumentSkeletonDrawingAnchor>;
}
export interface IFontCreateConfig {
    fontStyle: IDocumentSkeletonFontStyle;
    textStyle: ITextStyle;
    charSpace: number;
    snapToGrid: BooleanNumber;
    gridType?: GridType;
    pageWidth?: number;
}
export interface INodeInfo {
    node: IDocumentSkeletonGlyph;
    ratioX: number;
    ratioY: number;
    segmentId: string;
    segmentPage: number;
}
export interface INodeSearch {
    glyph: number;
    divide: number;
    line: number;
    column: number;
    section: number;
    page: number;
    segmentPage: number;
    pageType: DocumentSkeletonPageType;
    path: (string | number)[];
}
export interface INodePosition extends INodeSearch {
    isBack: boolean;
}
export interface IAfterRender$Info {
    frameTimeMetric: Record<string, number | number[]>;
    tags: {
        scrolling: boolean;
    } & Record<string, any>;
}
export type ITimeMetric = [string, number];
