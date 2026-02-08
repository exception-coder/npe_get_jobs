import { IObjectMatrixPrimitiveType, Nullable, ObjectMatrix } from '../shared';
import { HorizontalAlign, VerticalAlign, BooleanNumber, FontItalic, FontWeight, WrapStrategy } from '../types/enum';
import { IBorderData, IDocumentBody, IDocumentData, IStyleBase, IStyleData, ITextDecoration, ITextRotation } from '../types/interfaces';
import { Styles } from './styles';
import { ICellData, IRange } from './typedef';
import { Worksheet } from './worksheet';
/**
 * getObjectValues options type
 */
interface IValueOptionsType {
    /**
     * set whether to include style
     */
    isIncludeStyle?: boolean;
}
export interface IRangeDependencies {
    getStyles(): Readonly<Styles>;
}
export declare function isAllFormatInTextRuns(key: keyof IStyleBase, body: IDocumentBody): BooleanNumber;
/**
 * Access and modify spreadsheet ranges.
 *
 * @remarks
 * A range can be a single cell in a sheet or a group of adjacent cells in a sheet.
 *
 * Reference from: https://developers.google.com/apps-script/reference/spreadsheet/range
 *
 * @beta
 */
export declare class Range {
    private readonly _deps;
    private _range;
    private _worksheet;
    constructor(workSheet: Worksheet, range: IRange, _deps: IRangeDependencies);
    static foreach(range: IRange, action: (row: number, column: number) => void): void;
    static transformRange: (range: IRange, worksheet: Worksheet) => IRange;
    /**
     * get current range data
     *
     * @returns current range
     */
    getRangeData(): IRange;
    /**
     * Returns the value of the top-left cell in the range. The value may be of type Number, Boolean, Date, or String
     * depending on the value of the cell. Empty cells return an empty string.
     * @returns  The value in this cell
     */
    getValue(): Nullable<ICellData>;
    /**
     * Returns the rectangular grid of values for this range.
     *
     * Returns a two-dimensional array of values, indexed by row, then by column. The values may be of type Number,
     * Boolean, Date, or String, depending on the value of the cell. Empty cells are represented by an empty string
     * in the array. Remember that while a range index starts at 0, 0, same as the JavaScript array is indexed from [0][0].
     *
     * In web apps, a Date value isn't a legal parameter. getValues() fails to return data to a web app if the range
     * contains a cell with a Date value. Instead, transform all the values retrieved from the sheet to a supported
     * JavaScript primitive like a Number, Boolean, or String.
     *
     * @returns  A two-dimensional array of values.
     */
    getValues(): Array<Array<Nullable<ICellData>>>;
    /**
     * get range matrix
     *
     * @returns range matrix
     */
    getMatrix(): ObjectMatrix<Nullable<ICellData>>;
    /**
     * get range matrix object
     *
     * @returns range matrix object
     */
    getMatrixObject(): ObjectMatrix<ICellData>;
    /**
     * Returns a string description of the range, in A1 notation.
     *
     * @returns The string description of the range in A1 notation.
     */
    getA1Notation(): string;
    /**
     * Returns the background color of the top-left cell in the range (for example, '#ffffff').
     *
     * @returns — The color code of the background.
     */
    getBackground(): string;
    /**
     * Returns the background colors of the cells in the range (for example, '#ffffff').
     *
     * @returns  — A two-dimensional array of color codes of the backgrounds.
     */
    getBackgrounds(): string[][];
    /**
     * Returns a given cell within a range.
     *
     * The row and column here are relative to the range
     * e.g. "B2:D4", getCell(0,0) in this code returns the cell at B2
     * @returns  — A range containing a single cell at the specified coordinates.
     */
    getCell(row: number, column: number): Range;
    /**
     * Returns the starting column position for this range
     *
     * @returns  — The range's starting column position in the spreadsheet.
     */
    getColumn(): number;
    /**
     * Returns the data of the object structure, and can set whether to bring styles
     */
    getObjectValue(options?: IValueOptionsType): Nullable<ICellData>;
    /**
     * Returns the data of the object structure, and can set whether to bring styles
     *
     * @param options set whether to include style
     * @returns Returns a value in object format
     */
    getObjectValues(options?: IValueOptionsType): IObjectMatrixPrimitiveType<Nullable<ICellData>>;
    /**
     * Returns the font color of the cell in the top-left corner of the range, in CSS notation
     */
    getFontColor(): string;
    /**
     * Returns the font colors of the cells in the range in CSS notation (such as '#ffffff' or 'white').
     */
    getFontColors(): string[][];
    /**
     * Returns the font families of the cells in the range.
     */
    getFontFamilies(): string[][];
    /**
     * Returns the font family of the cell in the top-left corner of the range.
     */
    getFontFamily(): string;
    /**
     * Returns the underlines of the cells in the range.
     */
    getUnderlines(): ITextDecoration[][];
    /**
     * Returns the underline of the cells in the range.
     */
    getUnderline(): ITextDecoration;
    /**
     * Returns the overlines of the cells in the range.
     */
    getOverlines(): ITextDecoration[][];
    /**
     * Returns the overline of the cells in the range.
     */
    getOverline(): ITextDecoration;
    /**
     * Returns the strikeThrough of the cells in the range.
     */
    getStrikeThrough(): ITextDecoration;
    /**
     * Returns the strikeThroughs of the cells in the range.
     */
    private getStrikeThroughs;
    /**
     * Returns the font size in point size of the cell in the top-left corner of the range.
     */
    getFontSize(): number;
    /**
     * Returns the font sizes of the cells in the range.
     */
    getFontSizes(): number[][];
    /**
     * Returns the border info of the cells in the range.
     */
    getBorder(): IBorderData;
    getBorders(): IBorderData[][];
    /**
     * Returns the font style ('italic' or 'normal') of the cell in the top-left corner of the range.
     */
    getFontStyle(): FontItalic;
    /**
     * Returns the font styles of the cells in the range.
     */
    private _getFontStyles;
    /**
     * Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
     * If the cell has rich text, the return value according to the textRuns of the rich text,
     * when all styles of textRuns are bold, it will return FontWeight.BOLD,
     * otherwise return FontWeight.NORMAL.
     */
    getFontWeight(): FontWeight;
    /**
     * Returns the font weights of the cells in the range.
     */
    private _getFontWeights;
    /**
     * Returns the grid ID of the range's parent sheet.
     */
    getGridId(): string;
    /**
     * Returns the height of the range.
     */
    getHeight(): number;
    /**
     *     Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left corner of the range.
     */
    getHorizontalAlignment(): HorizontalAlign;
    /**
     *Returns the horizontal alignments of the cells in the range.
     */
    getHorizontalAlignments(): HorizontalAlign[][];
    /**
     * Returns the end column position.
     */
    getLastColumn(): number;
    /**
     *     Returns the end row position.
     */
    getLastRow(): number;
    /**
     * Returns the number of columns in this range.
     */
    getNumColumns(): number;
    /**
     * Returns the number of rows in this range.
     */
    getNumRows(): number;
    /**
     * Returns the Rich Text value for the top left cell of the range, or null if the cell value is not text.
     */
    getRichTextValue(): Nullable<IDocumentData | ''>;
    /**
     * Returns the Rich Text values for the cells in the range.
     */
    getRichTextValues(): Array<Array<Nullable<IDocumentData | ''>>>;
    /**
     * Returns the row position for this range.
     */
    getRowIndex(): number;
    /**
     * Returns the sheet this range belongs to.
     */
    getSheet(): Worksheet;
    /**
     * Returns the text direction for the top left cell of the range.
     */
    getTextDirection(): number;
    /**
     * Returns the text directions for the cells in the range.
     */
    getTextDirections(): number[][];
    /**
     * Returns the text rotation settings for the top left cell of the range.
     */
    getTextRotation(): ITextRotation;
    /**
     * Returns the text rotation settings for the cells in the range.
     */
    getTextRotations(): ITextRotation[][];
    /**
     *     Returns the text style for the top left cell of the range.
     */
    getTextStyle(): Nullable<IStyleData>;
    /**
     * Returns the text styles for the cells in the range.
     */
    getTextStyles(): Array<Array<Nullable<IStyleData>>>;
    /**
     * Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the range.
     */
    getVerticalAlignment(): VerticalAlign;
    /**
     * Returns the vertical alignments of the cells in the range.
     */
    getVerticalAlignments(): VerticalAlign[][];
    /**
     * Returns the width of the range in columns.
     */
    getWidth(): number;
    /**
     * Returns whether the text in the cell wraps.
     */
    getWrap(): BooleanNumber;
    /**
     * Returns the text wrapping strategies for the cells in the range.
     */
    getWrapStrategies(): WrapStrategy[][];
    /**
     * Returns the text wrapping strategy for the top left cell of the range.
     */
    getWrapStrategy(): WrapStrategy;
    forEach(action: (row: number, column: number) => void): void;
    /**
     *
     * @param arg Shorthand for the style that gets
     * @returns style value
     */
    private _getStyles;
}
export {};
