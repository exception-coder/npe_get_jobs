import { ICommand, Nullable } from '@univerjs/core';
import { IRectRangeWithStyle, ITextRangeWithStyle } from '@univerjs/engine-render';
import { DeleteDirection } from '../../types/delete-direction';
export interface IDeleteCustomBlockParams {
    direction: DeleteDirection;
    range: ITextRangeWithStyle;
    unitId: string;
    drawingId: string;
}
export declare const DeleteCustomBlockCommand: ICommand<IDeleteCustomBlockParams>;
interface IMergeTwoParagraphParams {
    direction: DeleteDirection;
    range: ITextRangeWithStyle;
}
export declare const MergeTwoParagraphCommand: ICommand<IMergeTwoParagraphParams>;
export declare const RemoveHorizontalLineCommand: ICommand;
export declare function getCursorWhenDelete(textRanges: Readonly<Nullable<ITextRangeWithStyle[]>>, rectRanges: readonly IRectRangeWithStyle[]): number;
export declare const DeleteLeftCommand: ICommand;
export declare const DeleteRightCommand: ICommand;
export declare const DeleteCurrentParagraphCommand: ICommand;
export {};
