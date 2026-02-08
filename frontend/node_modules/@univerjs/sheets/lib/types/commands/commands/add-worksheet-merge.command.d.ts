import { ICommand, Injector, IRange, Dimension } from '@univerjs/core';
export interface IAddMergeCommandParams {
    value?: Dimension.ROWS | Dimension.COLUMNS;
    selections: IRange[];
    unitId: string;
    subUnitId: string;
}
export declare const AddWorksheetMergeCommand: ICommand;
export declare const AddWorksheetMergeAllCommand: ICommand;
export declare const AddWorksheetMergeVerticalCommand: ICommand;
export declare const AddWorksheetMergeHorizontalCommand: ICommand;
export declare function addMergeCellsUtil(injector: Injector, unitId: string, subUnitId: string, ranges: IRange[], defaultMerge: boolean): void;
