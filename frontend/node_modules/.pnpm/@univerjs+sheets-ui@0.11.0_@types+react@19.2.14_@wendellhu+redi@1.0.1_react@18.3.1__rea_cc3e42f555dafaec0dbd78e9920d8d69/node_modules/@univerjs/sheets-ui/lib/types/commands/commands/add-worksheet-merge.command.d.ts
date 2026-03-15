import { ICommand, IRange, Dimension } from '@univerjs/core';
export interface IAddMergeCommandParams {
    value?: Dimension.ROWS | Dimension.COLUMNS;
    selections: IRange[];
    unitId: string;
    subUnitId: string;
    defaultMerge?: boolean;
}
export declare const AddWorksheetMergeCommand: ICommand;
export declare const AddWorksheetMergeAllCommand: ICommand;
export declare const AddWorksheetMergeVerticalCommand: ICommand;
export declare const AddWorksheetMergeHorizontalCommand: ICommand;
