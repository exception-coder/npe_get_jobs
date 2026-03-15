import { Direction, IOperation } from '@univerjs/core';
export interface IMoveCursorOperationParams {
    direction: Direction;
}
/**
 * The operation to move cursor in the current document.
 */
export declare const MoveCursorOperation: IOperation<IMoveCursorOperationParams>;
/**
 * The operation to move selection in the current document.
 */
export declare const MoveSelectionOperation: IOperation<IMoveCursorOperationParams>;
