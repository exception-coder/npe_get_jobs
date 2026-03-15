import { ISize } from '../../shared/shape';
import { BooleanNumber, CellValueType, HorizontalAlign, LocaleType, TextDirection, VerticalAlign, WrapStrategy } from '../enum';
import { IDrawingParam } from './i-drawing';
import { IMention } from './i-mention';
import { IColorStyle, IStyleBase } from './i-style-data';
/**
 * Properties of document
 */
export interface IDocumentData extends IReferenceSource {
    /** unit ID */
    id: string;
    /** Revision of this document. Would be used in collaborated editing. Starts with zero. */
    rev?: number;
    locale?: LocaleType;
    title?: string;
    body?: IDocumentBody;
    documentStyle: IDocumentStyle;
    settings?: IDocumentSettings;
    resources?: Array<{
        id?: string;
        name: string;
        data: string;
    }>;
    disabled?: boolean;
}
export interface IReferenceSource {
    tableSource?: ITables;
    footers?: IFooters;
    headers?: IHeaders;
    lists?: ILists;
    drawings?: IDrawings;
    drawingsOrder?: string[];
    headerFooterDrawingsOrder?: string[];
}
export interface IDocumentSettings {
    zoomRatio?: number;
}
/**
 * Set of headers
 */
export interface IHeaders {
    [headerId: string]: IHeaderData;
}
/**
 * Set of footer
 */
export interface IFooters {
    [footerId: string]: IFooterData;
}
export interface ITables {
    [tableId: string]: ITable;
}
/**
 * Set of lists
 */
export interface ILists {
    [listType: string]: IListData;
}
/**
 * Set of Drawings
 */
export interface IDrawings {
    [drawingId: string]: IDocDrawingBase;
}
/**
 * Set of IStyles
 */
export interface IDocStyles {
    [styleId: string]: IDocStyle;
}
/**
 * Properties of document body
 * Contain three update types: range overlay, range mutual exclusion, and placeholder
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
 */
export interface IDocumentBody {
    dataStream: string;
    textRuns?: ITextRun[];
    paragraphs?: IParagraph[];
    sectionBreaks?: ISectionBreak[];
    customBlocks?: ICustomBlock[];
    tables?: ICustomTable[];
    customRanges?: ICustomRange[];
    customDecorations?: ICustomDecoration[];
    /**
     * for copy/paste, data of custom-range and other module
     * it won't save to disk
     */
    payloads?: Record<string, string>;
}
export interface IDocStyle {
    name: string;
    basedOn: string;
    link: string;
    type: DocStyleType;
    textStyle: ITextStyle;
}
export declare enum DocStyleType {
    character = 0,
    paragraph = 1,
    table = 2,
    numbering = 3
}
/**
 * Properties of doc footer
 */
export interface IFooterData {
    footerId: string;
    body: IDocumentBody;
}
/**
 * Properties of doc header
 */
export interface IHeaderData {
    headerId: string;
    body: IDocumentBody;
}
/**
 * The properties of a list which describe the look and feel of bullets belonging to paragraphs associated with a list.
 */
export interface IListData {
    listType: string;
    nestingLevel: INestingLevel[];
}
/**
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
 */
export interface INestingLevel {
    paragraphProperties?: IParagraphStyle;
    bulletAlignment: BulletAlignment;
    glyphFormat: string;
    textStyle?: ITextStyle;
    startNumber: number;
    glyphType?: ListGlyphType;
    glyphSymbol?: string;
}
/**
 * Follow the space after the list
 */
export declare enum FollowNumberWithType {
    TAB = 0,
    SPACE = 1,
    NOTHING = 2
}
/**
 * An enumeration of the supported glyph types.
 */
export declare enum ListGlyphType {
    BULLET = 0,// The glyph type is unspecified or unsupported.
    NONE = 1,// An empty string.
    DECIMAL = 2,// A number, like 1, 2, or 3.
    DECIMAL_ZERO = 3,// A number where single digit numbers are prefixed with a zero, like 01, 02, or 03. Numbers with more than one digit are not prefixed with a zero.
    UPPER_LETTER = 4,// An uppercase letter, like A, B, or C.
    LOWER_LETTER = 5,// A lowercase letter, like a, b, or c.
    UPPER_ROMAN = 6,// An uppercase Roman numeral, like I, II, or III.
    LOWER_ROMAN = 7,// A lowercase Roman numeral, like i, ii, or iii.
    /**
     * Not yet achieved, aligned with Excel's standards.
     * 17.18.59 ST_NumberFormat (Numbering Format)
     */
    ORDINAL = 8,
    CARDINAL_TEXT = 9,
    ORDINAL_TEXT = 10,
    HEX = 11,
    CHICAGO = 12,
    IDEOGRAPH_DIGITAL = 13,
    JAPANESE_COUNTING = 14,
    AIUEO = 15,
    IROHA = 16,
    DECIMAL_FULL_WIDTH = 17,
    DECIMAL_HALF_WIDTH = 18,
    JAPANESE_LEGAL = 19,
    JAPANESE_DIGITAL_TEN_THOUSAND = 20,
    DECIMAL_ENCLOSED_CIRCLE = 21,
    DECIMAL_FULL_WIDTH2 = 22,
    AIUEO_FULL_WIDTH = 23,
    IROHA_FULL_WIDTH = 24,
    GANADA = 25,
    CHOSUNG = 26,
    DECIMAL_ENCLOSED_FULLSTOP = 27,
    DECIMAL_ENCLOSED_PAREN = 28,
    DECIMAL_ENCLOSED_CIRCLE_CHINESE = 29,
    IDEOGRAPH_ENCLOSED_CIRCLE = 30,
    IDEOGRAPH_TRADITIONAL = 31,
    IDEOGRAPH_ZODIAC = 32,
    IDEOGRAPH_ZODIAC_TRADITIONAL = 33,
    TAIWANESE_COUNTING = 34,
    IDEOGRAPH_LEGAL_TRADITIONAL = 35,
    TAIWANESE_COUNTING_THOUSAND = 36,
    TAIWANESE_DIGITAL = 37,
    CHINESE_COUNTING = 38,
    CHINESE_LEGAL_SIMPLIFIED = 39,
    CHINESE_COUNTING_THOUSAND = 40,
    KOREAN_DIGITAL = 41,
    KOREAN_COUNTING = 42,
    KOREAN_LEGAL = 43,
    KOREAN_DIGITAL2 = 44,
    VIETNAMESE_COUNTING = 45,
    RUSSIAN_LOWER = 46,
    RUSSIAN_UPPER = 47,
    NUMBER_IN_DASH = 48,
    HEBREW1 = 49,
    HEBREW2 = 50,
    ARABIC_ALPHA = 51,
    ARABIC_ABJAD = 52,
    HINDI_VOWELS = 53,
    HINDI_CONSONANTS = 54,
    HINDI_NUMBERS = 55,
    HINDI_COUNTING = 56,
    THAI_LETTERS = 57,
    THAI_NUMBERS = 58,
    THAI_COUNTING = 59,
    CUSTOM = 60
}
/**
 * The types of alignment for a bullet.
 */
export declare enum BulletAlignment {
    BULLET_ALIGNMENT_UNSPECIFIED = 0,// The bullet alignment is unspecified.
    START = 1,// bullet is aligned to the start of the space allotted for rendering the bullet. Left-aligned for LTR text, right-aligned otherwise.
    CENTER = 2,// The bullet is aligned to the center of the space allotted for rendering the bullet.
    END = 3,// The bullet is aligned to the end of the space allotted for rendering the bullet. Right-aligned for LTR text, left-aligned otherwise.
    BOTH = 4
}
export interface IMargin {
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
}
export interface ITableOfContent {
}
export interface IHyperlink {
    url?: string;
    bookmarkId?: string;
    headingId?: string;
}
/**
 * A ParagraphElement that represents a run of text that all has the same styling.
 */
export interface ITextRun {
    st: number;
    ed: number;
    sId?: string;
    ts?: ITextStyle;
}
/**
 * Block element, link like, disabled to self nested
 */
export interface ICustomRange<T extends Record<string, any> = Record<string, any>> {
    startIndex: number;
    endIndex: number;
    rangeId: string;
    rangeType: CustomRangeType | number;
    /**
     * display as a whole-entity
     */
    wholeEntity?: boolean;
    /**
     * properties of custom range,
     * for example, hyperlink: `{ url: string }`
     */
    properties?: T;
}
export type IHyperLinkCustomRange = ICustomRange<{
    url: string;
}>;
export type IMentionCustomRange = ICustomRange<IMention>;
export declare enum CustomRangeType {
    HYPERLINK = 0,
    FIELD = 1,// 17.16 Fields and Hyperlinks
    SDT = 2,// 17.5.2 Structured Document Tags
    BOOKMARK = 3,
    COMMENT = 4,
    CUSTOM = 5,
    MENTION = 6,
    UNI_FORMULA = 7,
    DELTED = 9999
}
/**
 * Custom Block
 */
export interface ICustomBlock {
    startIndex: number;
    blockType?: BlockType;
    blockId: string;
}
export declare enum CustomDecorationType {
    COMMENT = 0,
    DELETED = 9999
}
export interface ICustomDecoration {
    startIndex: number;
    endIndex: number;
    id: string;
    type: CustomDecorationType;
}
/**
 * Type of block
 */
export declare enum BlockType {
    DRAWING = 0,
    CUSTOM = 1
}
export interface IHeaderAndFooterBase {
    defaultHeaderId?: string;
    defaultFooterId?: string;
    evenPageHeaderId?: string;
    evenPageFooterId?: string;
    firstPageHeaderId?: string;
    firstPageFooterId?: string;
    useFirstPageHeaderFooter?: BooleanNumber;
    evenAndOddHeaders?: BooleanNumber;
}
export declare enum DocumentFlavor {
    UNSPECIFIED = 0,
    TRADITIONAL = 1,
    MODERN = 2
}
/**
 * Basics properties of doc style
 */
export interface IDocStyleBase extends IMargin {
    pageNumberStart?: number;
    pageSize?: ISize;
    pageOrient?: PageOrientType;
    documentFlavor?: DocumentFlavor;
    marginHeader?: number;
    marginFooter?: number;
    renderConfig?: IDocumentRenderConfig;
}
export interface IDocumentLayout {
    defaultTabStop?: number;
    characterSpacingControl?: characterSpacingControlType;
    paragraphLineGapDefault?: number;
    spaceWidthEastAsian?: BooleanNumber;
    autoHyphenation?: BooleanNumber;
    consecutiveHyphenLimit?: number;
    doNotHyphenateCaps?: BooleanNumber;
    hyphenationZone?: number;
}
export declare enum GridType {
    DEFAULT = 0,
    LINES = 1,
    LINES_AND_CHARS = 2,
    SNAP_TO_CHARS = 3
}
export interface IDocumentStyle extends IDocStyleBase, IDocumentLayout, IHeaderAndFooterBase {
    textStyle?: ITextStyle;
}
/**
 * the alignment mode is returned with respect to the offset of the sheet cell,
 * because the document needs to render the layout for cells and
 * support alignment across multiple cells (e.g., horizontal alignment of long text in overflow mode).
 * The alignment mode of the document itself cannot meet this requirement,
 * so an additional renderConfig needs to be added during the rendering of the document component.
 * This means that there are two coexisting alignment modes.
 * In certain cases, such as in an editor, conflicts may arise,
 * requiring only one alignment mode to be retained.
 * By removing the relevant configurations in renderConfig,
 * the alignment mode of the sheet cell can be modified.
 * The alternative alignment mode is applied to paragraphs within the document.
 */
export interface IDocumentRenderConfig {
    verticalAlign?: VerticalAlign;
    centerAngle?: number;
    vertexAngle?: number;
    horizontalAlign?: HorizontalAlign;
    isRotateNonEastAsian?: BooleanNumber;
    background?: IColorStyle;
    wrapStrategy?: WrapStrategy;
    cellValueType?: CellValueType;
    isRenderStyle?: BooleanNumber;
    zeroWidthParagraphBreak?: BooleanNumber;
}
export interface ISectionBreakBase {
    charSpace?: number;
    linePitch?: number;
    gridType?: GridType;
    columnProperties?: ISectionColumnProperties[];
    columnSeparatorType?: ColumnSeparatorType;
    contentDirection?: TextDirection;
    sectionType?: SectionType;
    sectionTypeNext?: SectionType;
    textDirection?: TextDirectionType;
}
/**
 * Properties of section break
 */
export interface ISectionBreak extends IDocStyleBase, ISectionBreakBase, IHeaderAndFooterBase {
    startIndex: number;
}
/**
 * Represents how the start of the current section is positioned relative to the previous section.
 */
export declare enum SectionType {
    SECTION_TYPE_UNSPECIFIED = 0,// The section type is unspecified.
    CONTINUOUS = 1,// The section starts immediately after the last paragraph of the previous section.
    NEXT_PAGE = 2,// The section starts on the next page.
    EVEN_PAGE = 3,// The section starts on the next page.
    ODD_PAGE = 4
}
/**
 * The style of column separators between columns.
 */
export declare enum ColumnSeparatorType {
    COLUMN_SEPARATOR_STYLE_UNSPECIFIED = 0,// An unspecified column separator style.
    NONE = 1,// No column separator lines between columns.
    BETWEEN_EACH_COLUMN = 2
}
/**
 * Direction of text
 */
export declare enum TextDirectionType {
    NORMAL = 0,// Horizontal
    TBRL = 1,// Vertical
    LRTBV = 2
}
/**
 * Properties of section column
 */
export interface ISectionColumnProperties {
    width: number;
    paddingEnd: number;
}
export interface IParagraph {
    startIndex: number;
    paragraphStyle?: IParagraphStyle;
    bullet?: IBullet;
}
export declare enum ParagraphElementType {
    TEXT_RUN = 0,
    AUTO_TEXT = 1,
    PAGE_BREAK = 2,
    COLUMN_BREAK = 3,
    FOOT_NOTE_REFERENCE = 4,
    HORIZONTAL_RULE = 5,
    EQUATION = 6,
    DRAWING = 7,
    PERSON = 8,
    RICH_LINK = 9
}
/**
 * Properties of list
 */
export interface IBullet {
    listType: string;
    listId: string;
    nestingLevel: number;
    textStyle?: ITextStyle;
}
/**
 * Properties of Drawing
 * 20.4.2.8 inline (Inline DrawingML Object)
 * 20.4.2.15 wrapNone (No Text Wrapping)
 * 20.4.2.16 wrapPolygon (Wrapping Polygon)
 * 20.4.2.17 wrapSquare (Square Wrapping)
 * 20.4.2.18 wrapThrough (Through Wrapping)
 * 20.4.2.19 wrapTight (Tight Wrapping)
 * 20.4.2.20 wrapTopAndBottom (Top and Bottom Wrapping)
 */
export interface IDocDrawingBase extends IDrawingParam {
    drawingId: string;
    title: string;
    description: string;
    docTransform: IDocDrawingPosition;
    layoutType: PositionedObjectLayoutType;
    behindDoc?: BooleanNumber;
    start?: number[];
    lineTo?: number[][];
    wrapText?: WrapTextType;
    distL?: number;
    distR?: number;
    distT?: number;
    distB?: number;
}
/**
 * Types of wrap text
 */
export declare enum WrapTextType {
    BOTH_SIDES = 0,
    LEFT = 1,
    RIGHT = 2,
    LARGEST = 3
}
/**
 * The possible layouts of a [PositionedObject]
 */
export declare enum PositionedObjectLayoutType {
    INLINE = 0,
    WRAP_NONE = 1,
    WRAP_POLYGON = 2,
    WRAP_SQUARE = 3,
    WRAP_THROUGH = 4,
    WRAP_TIGHT = 5,
    WRAP_TOP_AND_BOTTOM = 6
}
/**
 * Properties of a draw object
 */
export interface IDocDrawingPosition {
    size: ISize;
    positionH: IObjectPositionH;
    positionV: IObjectPositionV;
    angle: number;
}
/**
 * ChartProperties
 */
export interface IChartProperties {
}
/**
 * Properties of text style
 */
export interface ITextStyle extends IStyleBase {
    sc?: number;
    pos?: number;
    sa?: number;
}
export interface IIndentStart {
    indentFirstLine?: INumberUnit;
    hanging?: INumberUnit;
    indentStart?: INumberUnit;
    tabStops?: ITabStop[];
    indentEnd?: INumberUnit;
}
/**
 * Properties of paragraph style
 */
export interface IParagraphStyle extends IParagraphProperties {
    textStyle?: ITextStyle;
}
export interface IParagraphProperties extends IIndentStart {
    headingId?: string;
    namedStyleType?: NamedStyleType;
    horizontalAlign?: HorizontalAlign;
    lineSpacing?: number;
    direction?: TextDirection;
    spacingRule?: SpacingRule;
    snapToGrid?: BooleanNumber;
    spaceAbove?: INumberUnit;
    spaceBelow?: INumberUnit;
    borderBetween?: IParagraphBorder;
    borderTop?: IParagraphBorder;
    borderBottom?: IParagraphBorder;
    borderLeft?: IParagraphBorder;
    borderRight?: IParagraphBorder;
    keepLines?: BooleanNumber;
    keepNext?: BooleanNumber;
    wordWrap?: BooleanNumber;
    widowControl?: BooleanNumber;
    shading?: IShading;
    suppressHyphenation?: BooleanNumber;
}
/**
 * Types of name style
 */
export declare enum NamedStyleType {
    NAMED_STYLE_TYPE_UNSPECIFIED = 0,// The type of named style is unspecified.
    NORMAL_TEXT = 1,// Normal text.
    TITLE = 2,// Title.
    SUBTITLE = 3,// Subtitle.
    HEADING_1 = 4,// Heading 1.
    HEADING_2 = 5,// Heading 2.
    HEADING_3 = 6,// Heading 3.
    HEADING_4 = 7,// Heading 4.
    HEADING_5 = 8
}
export declare enum SpacingRule {
    /**
     * Specifies that the line spacing of the parent object shall be automatically determined by the size of its contents, with no predetermined minimum or maximum size.
     */
    AUTO = 0,
    /**
     * Specifies that the height of the line shall be at least the value specified, but might be expanded to fit its content as needed.
     */
    AT_LEAST = 1,
    /**
     * Specifies that the height of the line shall be exactly the value specified, regardless of the size of the contents of the contents.
     */
    EXACT = 2
}
/**
 * Properties of doc border
 */
export interface IDocsBorder {
    color: IColorStyle;
    width: number;
    dashStyle: DashStyleType;
}
/**
 * Properties of paragraph border
 */
export interface IParagraphBorder extends IDocsBorder {
    padding: number;
}
/**
 * The kinds of dashes with which linear geometry can be rendered.
 */
export declare enum DashStyleType {
    DASH_STYLE_UNSPECIFIED = 0,// Unspecified dash style.
    SOLID = 1,// Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default dash style.
    DOT = 2,// Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.
    DASH = 3
}
/**
 * A tab stop within a paragraph.
 */
export interface ITabStop {
    offset: number;
    alignment: TabStopAlignment;
}
/**
 * The alignment of the tab stop.
 */
export declare enum TabStopAlignment {
    TAB_STOP_ALIGNMENT_UNSPECIFIED = 0,// The tab stop alignment is unspecified.
    START = 1,// The tab stop is aligned to the start of the line. This is the default.
    CENTER = 2,// The tab stop is aligned to the center of the line.
    END = 3
}
/**
 * Properties of shading
 */
export interface IShading {
    backgroundColor: IColorStyle;
}
export interface IDistFromText {
    distT: number;
    distB: number;
    distL: number;
    distR: number;
}
export interface ITableAnchor {
    positionH: IObjectPositionH;
    positionV: IObjectPositionV;
}
export declare enum TableSizeType {
    UNSPECIFIED = 0,
    SPECIFIED = 1
}
export interface IWidthInTableSize {
    type: TableSizeType;
    width: INumberUnit;
}
export declare enum TableAlignmentType {
    START = 0,
    CENTER = 1,
    END = 2
}
export declare enum TableLayoutType {
    AUTO_FIT = 0,
    FIXED = 1
}
export declare enum TableTextWrapType {
    NONE = 0,
    WRAP = 1
}
export interface ICustomTable {
    startIndex: number;
    endIndex: number;
    tableId: string;
}
/**
 * Properties of table
 */
export interface ITable {
    tableRows: ITableRow[];
    tableColumns: ITableColumn[];
    align: TableAlignmentType;
    indent: INumberUnit;
    textWrap: TableTextWrapType;
    position: ITableAnchor;
    dist: IDistFromText;
    size: IWidthInTableSize;
    tableId: string;
    cellMargin?: ITableCellMargin;
    layout?: TableLayoutType;
    overlap?: BooleanNumber;
    description?: string;
}
export declare enum TableRowHeightRule {
    AUTO = 0,
    AT_LEAST = 1,
    EXACT = 2
}
export interface ITableColumn {
    size: IWidthInTableSize;
}
export interface ITableRowSize {
    val: INumberUnit;
    hRule: TableRowHeightRule;
}
/**
 * Properties of row of table
 */
export interface ITableRow {
    tableCells: ITableCell[];
    trHeight: ITableRowSize;
    cantSplit?: BooleanNumber;
    isFirstRow?: BooleanNumber;
    repeatHeaderRow?: BooleanNumber;
}
/**
 * Properties of table cell
 */
export interface ITableCell {
    margin?: ITableCellMargin;
    rowSpan?: number;
    columnSpan?: number;
    backgroundColor?: IColorStyle;
    borderLeft?: ITableCellBorder;
    borderRight?: ITableCellBorder;
    borderTop?: ITableCellBorder;
    borderBottom?: ITableCellBorder;
    size?: IWidthInTableSize;
    tcFitText?: BooleanNumber;
    vAlign?: VerticalAlignmentType;
}
export interface ITableCellMargin {
    start: INumberUnit;
    end: INumberUnit;
    top: INumberUnit;
    bottom: INumberUnit;
}
/**
 * Properties of cell border
 */
export interface ITableCellBorder {
    color: IColorStyle;
    width?: INumberUnit;
    dashStyle?: DashStyleType;
}
/**
 * The content alignments for a Shape or TableCell. The supported alignments correspond to predefined text anchoring types from the ECMA-376 standard.
 */
export declare enum VerticalAlignmentType {
    CONTENT_ALIGNMENT_UNSPECIFIED = 0,// An unspecified content alignment. The content alignment is inherited from the parent if one exists.
    BOTH = 1,
    TOP = 2,// An alignment that aligns the content to the top of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 't'.
    CENTER = 3,// An alignment that aligns the content to the middle of the content holder. Corresponds to ECMA-376 ST_TextAnchoringType 'ctr'.
    BOTTOM = 4
}
/**
 * Types of font style
 */
export declare enum FontStyleType {
    NORMAL = "normal",
    BOLD = "bold",
    ITALIC = "italic"
}
export interface INumberUnit {
    v: number;
    u?: NumberUnitType;
}
export interface IObjectPositionH {
    relativeFrom: ObjectRelativeFromH;
    align?: AlignTypeH;
    posOffset?: number;
    percent?: number;
}
export interface IObjectPositionV {
    relativeFrom: ObjectRelativeFromV;
    align?: AlignTypeV;
    posOffset?: number;
    percent?: number;
}
export declare enum ObjectRelativeFromH {
    PAGE = 0,
    COLUMN = 1,
    CHARACTER = 2,
    MARGIN = 3,
    INSIDE_MARGIN = 4,
    OUTSIDE_MARGIN = 5,
    LEFT_MARGIN = 6,
    RIGHT_MARGIN = 7
}
export declare enum ObjectRelativeFromV {
    PAGE = 0,
    PARAGRAPH = 1,
    LINE = 2,
    MARGIN = 3,
    TOP_MARGIN = 4,
    BOTTOM_MARGIN = 5,
    INSIDE_MARGIN = 6,
    OUTSIDE_MARGIN = 7
}
export declare enum NumberUnitType {
    POINT = 0,
    LINE = 1,
    CHARACTER = 2,
    PIXEL = 3,
    PERCENT = 4
}
export declare enum AlignTypeH {
    CENTER = 0,
    INSIDE = 1,
    LEFT = 2,
    OUTSIDE = 3,
    RIGHT = 4,
    BOTH = 5,
    DISTRIBUTE = 6
}
export declare enum AlignTypeV {
    BOTTOM = 0,
    CENTER = 1,
    INSIDE = 2,
    OUTSIDE = 3,
    TOP = 4
}
export declare enum characterSpacingControlType {
    compressPunctuation = 0,
    compressPunctuationAndJapaneseKana = 1,
    doNotCompress = 2
}
/**
 * Paper orientation, whether it's portrait (vertical) or landscape (horizontal)
 */
export declare enum PageOrientType {
    PORTRAIT = 0,
    LANDSCAPE = 1
}
export declare enum PaperType {
    Letter = "Letter",
    Tabloid = "Tabloid",
    Legal = "Legal",
    Statement = "Statement",
    Executive = "Executive",
    Folio = "Folio",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
    B4 = "B4",
    B5 = "B5"
}
export declare const PAPER_TYPES: PaperType[];
