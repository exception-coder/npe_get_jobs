import { ITextRangeParam, Nullable } from '@univerjs/core';
import { INodePosition } from './interfaces';
export interface ITextSelectionStyle {
    strokeWidth: number;
    stroke: string;
    strokeActive: string;
    fill: string;
}
export declare const NORMAL_TEXT_SELECTION_PLUGIN_STYLE: ITextSelectionStyle;
export interface ITextRangeWithStyle extends ITextRangeParam {
    startNodePosition?: Nullable<INodePosition>;
    endNodePosition?: Nullable<INodePosition>;
    style?: ITextSelectionStyle;
}
export interface IRectRangeWithStyle extends ITextRangeWithStyle {
    startRow: number;
    startColumn: number;
    endRow: number;
    endColumn: number;
    tableId: string;
    spanEntireRow: boolean;
    spanEntireColumn: boolean;
    spanEntireTable: boolean;
}
export type ISuccinctDocRangeParam = Pick<ITextRangeWithStyle, 'startOffset' | 'endOffset' | 'segmentId' | 'segmentPage' | 'style' | 'rangeType'>;
export interface IDocSelectionInnerParam {
    textRanges: ITextRangeWithStyle[];
    rectRanges: IRectRangeWithStyle[];
    segmentId: string;
    isEditing: boolean;
    style: ITextSelectionStyle;
    segmentPage: number;
    options?: {
        [key: string]: boolean;
    };
}
