import { BulletAlignment, ColumnSeparatorType, DataStreamTreeTokenType, IDocDrawingBase, IDocumentRenderConfig, INestingLevel, IParagraph, IParagraphBorder, IParagraphProperties, ITable, ITableRow, ITextStyle, PageOrientType } from '@univerjs/core';
import { BreakPointType } from '../components/docs/layout/line-breaker/break';
export interface IDocumentSkeletonCached extends ISkeletonResourceReference {
    pages: IDocumentSkeletonPage[];
    left: number;
    top: number;
    st: number;
    ed?: number;
    parent?: unknown;
}
export interface IParagraphList {
    bullet: IDocumentSkeletonBullet;
    paragraph: IParagraph;
}
export interface ISkeletonResourceReference {
    skeHeaders: Map<string, Map<number, IDocumentSkeletonHeaderFooter>>;
    skeFooters: Map<string, Map<number, IDocumentSkeletonHeaderFooter>>;
    skeListLevel?: Map<string, IParagraphList[][]>;
    drawingAnchor?: Map<string, Map<number, IDocumentSkeletonDrawingAnchor>>;
}
export interface IDocumentSkeletonDrawingAnchor {
    elements: IDocumentSkeletonLine[];
    paragraphIndex: number;
    top: number;
}
export declare enum DocumentSkeletonPageType {
    BODY = 0,
    HEADER = 1,
    FOOTER = 2,
    CELL = 3
}
export interface IDocumentSkeletonPage {
    sections: IDocumentSkeletonSection[];
    headerId: string;
    footerId: string;
    pageWidth: number;
    pageHeight: number;
    pageOrient: PageOrientType;
    marginLeft: number;
    marginRight: number;
    originMarginTop: number;
    marginTop: number;
    originMarginBottom: number;
    marginBottom: number;
    left: number;
    pageNumber: number;
    pageNumberStart: number;
    verticalAlign: boolean;
    angle: number;
    width: number;
    height: number;
    breakType: BreakType;
    st: number;
    ed: number;
    skeDrawings: Map<string, IDocumentSkeletonDrawing>;
    skeTables: Map<string, IDocumentSkeletonTable>;
    segmentId: string;
    type: DocumentSkeletonPageType;
    renderConfig?: IDocumentRenderConfig;
    parent?: IDocumentSkeletonCached | IDocumentSkeletonRow;
}
export interface IDocumentSkeletonHeaderFooter extends IDocumentSkeletonPage {
}
export interface IDocumentSkeletonSection {
    columns: IDocumentSkeletonColumn[];
    colCount: number;
    height: number;
    top: number;
    st: number;
    ed: number;
    parent?: IDocumentSkeletonPage;
}
export interface IDocumentSkeletonTable {
    rows: IDocumentSkeletonRow[];
    width: number;
    height: number;
    top: number;
    left: number;
    st: number;
    ed: number;
    tableId: string;
    tableSource: ITable;
    parent?: IDocumentSkeletonPage;
}
export interface IDocumentSkeletonRow {
    cells: IDocumentSkeletonPage[];
    index: number;
    height: number;
    top: number;
    st: number;
    ed: number;
    rowSource: ITableRow;
    parent?: IDocumentSkeletonTable;
    isRepeatRow: boolean;
}
export interface IDocumentSkeletonColumn {
    lines: IDocumentSkeletonLine[];
    left: number;
    width: number;
    height?: number;
    spaceWidth: number;
    separator: ColumnSeparatorType;
    st: number;
    ed: number;
    drawingLRIds: [];
    isFull: boolean;
    parent?: IDocumentSkeletonSection;
}
export interface IDocumentSkeletonLine {
    paragraphIndex: number;
    type: LineType;
    divides: IDocumentSkeletonDivide[];
    divideLen: number;
    lineHeight: number;
    contentHeight: number;
    top: number;
    asc: number;
    dsc: number;
    paddingTop: number;
    paddingBottom: number;
    marginTop: number;
    marginBottom: number;
    spaceBelowApply: number;
    st: number;
    ed: number;
    lineIndex: number;
    paragraphStart: boolean;
    isBehindTable: boolean;
    tableId: string;
    borderBottom?: IParagraphBorder;
    bullet?: IDocumentSkeletonBullet;
    width?: number;
    parent?: IDocumentSkeletonColumn;
}
export interface IDocumentSkeletonDivide {
    glyphGroup: IDocumentSkeletonGlyph[];
    width: number;
    left: number;
    paddingLeft: number;
    isFull: boolean;
    st: number;
    ed: number;
    breakType?: BreakPointType;
    parent?: IDocumentSkeletonLine;
}
export interface IAdjustability {
    stretchability: [number, number];
    shrinkability: [number, number];
}
export interface IDocumentSkeletonGlyph {
    glyphId?: string;
    glyphType: GlyphType;
    streamType: DataStreamTreeTokenType;
    width: number;
    bBox: IDocumentSkeletonBoundingBox;
    xOffset: number;
    left: number;
    count: number;
    content: string;
    raw: string;
    adjustability: IAdjustability;
    isJustifiable: boolean;
    ts?: ITextStyle;
    fontStyle?: IDocumentSkeletonFontStyle;
    parent?: IDocumentSkeletonDivide;
    url?: string;
    featureId?: string;
    drawingId?: string;
}
export interface IDocumentSkeletonBullet {
    listId: string;
    symbol: string;
    ts: ITextStyle;
    fontStyle?: IDocumentSkeletonFontStyle;
    startIndexItem: number;
    nestingLevel?: INestingLevel;
    bulletAlign?: BulletAlignment;
    bulletType?: boolean;
    paragraphProperties?: IParagraphProperties;
}
export interface IDocumentSkeletonDrawing {
    drawingId: string;
    aLeft: number;
    aTop: number;
    width: number;
    height: number;
    angle: number;
    initialState: boolean;
    drawingOrigin: IDocDrawingBase;
    columnLeft: number;
    isPageBreak: boolean;
    lineTop: number;
    lineHeight: number;
    blockAnchorTop: number;
}
export interface IDocumentSkeletonFontStyle {
    fontString: string;
    fontSize: number;
    originFontSize: number;
    fontFamily: string;
    fontCache: string;
}
export interface IDocumentSkeletonBoundingBox {
    width: number;
    ba: number;
    bd: number;
    aba: number;
    abd: number;
    sp: number;
    sbr: number;
    sbo: number;
    spr: number;
    spo: number;
}
export declare enum SkeletonType {
    GLYPH = 0,
    DIVIDE = 1,
    LINE = 2,
    COLUMN = 3,
    SECTION = 4,
    PAGE = 5,
    DRAWING = 6,
    BULLET = 7,
    HEADER = 8,
    FOOTER = 9,
    ALL = 10
}
export declare enum BreakType {
    SECTION = 0,
    PAGE = 1,
    COLUMN = 2
}
export declare enum LineType {
    PARAGRAPH = 0,
    BLOCK = 1
}
export declare enum GlyphType {
    LETTER = 0,
    WORD = 1,
    LIST = 2,
    PLACEHOLDER = 3,
    TAB = 4,
    IMAGE = 5,
    AT = 6,
    MATH = 7,
    MULTI_LINE = 8,
    CUSTOM = 9
}
/**
 * Determining the text layout, whether it's vertical or horizontal,
 * data storage is primarily horizontal,
 * and vertical layout is supported through rendering and drawing.
 */
export declare enum PageLayoutType {
    VERTICAL = 0,
    HORIZONTAL = 1,
    AUTO = 2
}
