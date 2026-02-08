import { ICommand } from '@univerjs/core';
/**
 * It is used to set the bold style of selections or one cell, need to distinguish between
 *  **selection state** and **edit state**. If you are in the selective state,
 *  you need to set the style on the cell and the style on the rich text(p textRuns) at the same time,
 *  and if it is only in edit state, then you only need to set the style of the rich text(p textRuns)
 */
export declare const SetRangeBoldCommand: ICommand;
export declare const SetRangeItalicCommand: ICommand;
export declare const SetRangeUnderlineCommand: ICommand;
export declare const SetRangeStrickThroughCommand: ICommand;
export declare const SetRangeSubscriptCommand: ICommand;
export declare const SetRangeSuperscriptCommand: ICommand;
export declare const SetRangeFontSizeCommand: ICommand;
export declare const SetRangeFontFamilyCommand: ICommand;
export declare const SetRangeTextColorCommand: ICommand;
export declare const ResetRangeTextColorCommand: ICommand;
