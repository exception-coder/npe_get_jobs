import { ICommand, IOperation, IRange } from '@univerjs/core';
import { ISelectionWithStyle } from '../../basics/selection';
import { SelectionMoveType } from '../../services/selections/type';
export interface ISetSelectionsOperationParams {
    unitId: string;
    subUnitId: string;
    selections: ISelectionWithStyle[];
    type?: SelectionMoveType;
    /** If should scroll to the selected range. */
    reveal?: boolean;
    extra?: string;
}
/**
 * Set selections to SelectionModel(WorkbookSelectionModel) by selectionManagerService.
 */
export declare const SetSelectionsOperation: IOperation<ISetSelectionsOperationParams>;
export interface ISelectRangeCommandParams {
    unitId: string;
    subUnit: string;
    range: IRange;
    /** If should scroll to the selected range. */
    reveal?: boolean;
    extra?: string;
}
export declare const SelectRangeCommand: ICommand<ISelectRangeCommandParams>;
