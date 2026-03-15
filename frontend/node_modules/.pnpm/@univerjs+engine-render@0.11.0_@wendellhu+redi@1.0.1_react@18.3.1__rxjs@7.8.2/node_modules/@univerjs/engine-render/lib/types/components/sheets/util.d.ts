import { CellValueType, IPaddingData, IStyleBase, IStyleData, ITextRotation, ITextStyle, Nullable, TextDirection, DocumentDataModel, HorizontalAlign, VerticalAlign, WrapStrategy } from '@univerjs/core';
export interface ICellStyle {
    textRotation?: ITextRotation;
    textDirection?: Nullable<TextDirection>;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    wrapStrategy?: WrapStrategy;
    paddingData?: IPaddingData;
    cellValueType?: CellValueType;
}
export declare function createDocumentModelWithStyle(content: string, textStyle: ITextStyle, config?: ICellStyle): DocumentDataModel;
export declare function extractOtherStyle(style?: Nullable<IStyleData>): ICellStyle;
export declare function getFontFormat(format?: Nullable<IStyleData>): IStyleBase;
