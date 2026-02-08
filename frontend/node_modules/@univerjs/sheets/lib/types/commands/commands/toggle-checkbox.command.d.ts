import { ICommand } from '@univerjs/core';
export interface IToggleCellCheckboxCommandParams {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
    paragraphIndex: number;
}
export declare const ToggleCellCheckboxCommand: ICommand<IToggleCellCheckboxCommandParams>;
