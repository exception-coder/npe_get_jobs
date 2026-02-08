import { Nullable } from '../shared';
import { CellValueType, TextDirection, HorizontalAlign, VerticalAlign, WrapStrategy } from '../types/enum';
import { IPaddingData, IStyleBase, IStyleData, ITextRotation, ITextStyle } from '../types/interfaces';
import { IRange, IUnitRange } from './typedef';
import { DocumentDataModel } from '../docs';
export interface IFontLocale {
    fontList: string[];
    defaultFontSize: number;
}
export declare const isRangesEqual: (oldRanges: IRange[], ranges: IRange[]) => boolean;
export declare const isUnitRangesEqual: (oldRanges: IUnitRange[], ranges: IUnitRange[]) => boolean;
export declare const DEFAULT_PADDING_DATA: {
    t: number;
    b: number;
    l: number;
    r: number;
};
export declare const getDefaultBaselineOffset: (fontSize: number) => {
    sbr: number;
    sbo: number;
    spr: number;
    spo: number;
};
export interface ICellStyle {
    textRotation?: ITextRotation;
    textDirection?: Nullable<TextDirection>;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    wrapStrategy?: WrapStrategy;
    paddingData?: IPaddingData;
    cellValueType?: CellValueType;
}
export declare const VERTICAL_ROTATE_ANGLE = 90;
export declare function createDocumentModelWithStyle(content: string, textStyle: ITextStyle, config?: ICellStyle): DocumentDataModel;
export declare function extractOtherStyle(style?: Nullable<IStyleData>): ICellStyle;
/**
 * Pick font style from cell style.
 * @param format
 * @returns {IStyleBase} style
 */
export declare function getFontFormat(format?: Nullable<IStyleData>): IStyleBase;
export declare function addLinkToDocumentModel(documentModel: DocumentDataModel, linkUrl: string, linkId: string): void;
export declare function isNotNullOrUndefined<T>(value: T | null | undefined): value is T;
