import { ICommandInfo, IRange } from '@univerjs/core';
import { IDeleteRangeMoveLeftCommandParams, DeleteRangeMoveLeftCommandId } from '../../commands/commands/delete-range-move-left.command';
import { IDeleteRangeMoveUpCommandParams, DeleteRangeMoveUpCommandId } from '../../commands/commands/delete-range-move-up.command';
import { InsertRangeMoveDownCommandParams, InsertRangeMoveDownCommandId } from '../../commands/commands/insert-range-move-down.command';
import { InsertRangeMoveRightCommandParams, InsertRangeMoveRightCommandId } from '../../commands/commands/insert-range-move-right.command';
import { IInsertColCommandParams, IInsertRowCommandParams, InsertColCommandId, InsertRowCommandId } from '../../commands/commands/insert-row-col.command';
import { IMoveRangeCommandParams, MoveRangeCommandId } from '../../commands/commands/move-range.command';
import { IMoveColsCommandParams, IMoveRowsCommandParams, MoveColsCommandId, MoveRowsCommandId } from '../../commands/commands/move-rows-cols.command';
import { IRemoveRowColCommandParams, RemoveColCommandId, RemoveRowCommandId } from '../../commands/commands/remove-row-col.command';
import { IReorderRangeCommandParams, ReorderRangeCommandId } from '../../commands/commands/reorder-range.command';
export type IMoveRowsCommand = ICommandInfo<IMoveRowsCommandParams> & {
    id: typeof MoveRowsCommandId;
};
export type IMoveColsCommand = ICommandInfo<IMoveColsCommandParams> & {
    id: typeof MoveColsCommandId;
};
export type IMoveRangeCommand = ICommandInfo<IMoveRangeCommandParams> & {
    id: typeof MoveRangeCommandId;
};
export type IInsertRowCommand = ICommandInfo<IInsertRowCommandParams> & {
    id: typeof InsertRowCommandId;
};
export type IInsertColCommand = ICommandInfo<IInsertColCommandParams> & {
    id: typeof InsertColCommandId;
};
export type IRemoveRowColCommand = ICommandInfo<IRemoveRowColCommandParams> & {
    id: typeof RemoveColCommandId | typeof RemoveRowCommandId;
};
export type IDeleteRangeMoveLeftCommand = ICommandInfo<IDeleteRangeMoveLeftCommandParams> & {
    id: typeof DeleteRangeMoveLeftCommandId;
};
export type IDeleteRangeMoveUpCommand = ICommandInfo<IDeleteRangeMoveUpCommandParams> & {
    id: typeof DeleteRangeMoveUpCommandId;
};
export type IInsertRangeMoveDownCommand = ICommandInfo<InsertRangeMoveDownCommandParams> & {
    id: typeof InsertRangeMoveDownCommandId;
};
export type IInsertRangeMoveRightCommand = ICommandInfo<InsertRangeMoveRightCommandParams> & {
    id: typeof InsertRangeMoveRightCommandId;
};
export type IReorderRangeCommand = ICommandInfo<IReorderRangeCommandParams> & {
    id: typeof ReorderRangeCommandId;
};
export type EffectRefRangeParams = IMoveRangeCommand | IInsertRowCommand | IInsertColCommand | IRemoveRowColCommand | IDeleteRangeMoveLeftCommand | IDeleteRangeMoveUpCommand | IInsertRangeMoveDownCommand | IInsertRangeMoveRightCommand | IMoveColsCommand | IMoveRowsCommand | IReorderRangeCommand;
export declare const EffectRefRangId: {
    readonly MoveRangeCommandId: "sheet.command.move-range";
    readonly InsertRowCommandId: "sheet.command.insert-row";
    readonly InsertColCommandId: "sheet.command.insert-col";
    readonly RemoveColCommandId: "sheet.command.remove-col";
    readonly RemoveRowCommandId: "sheet.command.remove-row";
    readonly DeleteRangeMoveLeftCommandId: "sheet.command.delete-range-move-left";
    readonly DeleteRangeMoveUpCommandId: "sheet.command.delete-range-move-up";
    readonly InsertRangeMoveDownCommandId: "sheet.command.insert-range-move-down";
    readonly InsertRangeMoveRightCommandId: "sheet.command.insert-range-move-right";
    readonly MoveColsCommandId: "sheet.command.move-cols";
    readonly MoveRowsCommandId: "sheet.command.move-rows";
    readonly ReorderRangeCommandId: "sheet.command.reorder-range";
};
export declare enum OperatorType {
    Set = 0,
    Delete = 1,
    HorizontalMove = 2,
    VerticalMove = 3,
    Unknown = 4
}
export interface IDeleteOperator {
    type: OperatorType.Delete;
}
export interface ISetOperator {
    type: OperatorType.Set;
    range: IRange;
}
export interface IHorizontalMoveOperator {
    type: OperatorType.HorizontalMove;
    step: number;
    length?: number;
}
export interface IVerticalMoveOperator {
    type: OperatorType.VerticalMove;
    step: number;
    length?: number;
}
export interface IUnknownOperator {
    type: OperatorType.Unknown;
    commandInfo: EffectRefRangeParams;
}
export type IOperator = IDeleteOperator | IVerticalMoveOperator | IHorizontalMoveOperator | IUnknownOperator | ISetOperator;
