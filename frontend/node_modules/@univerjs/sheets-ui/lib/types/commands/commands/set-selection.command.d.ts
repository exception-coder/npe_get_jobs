import { ICommand, Direction } from '@univerjs/core';
import { KeyCode } from '@univerjs/ui';
export declare enum JumpOver {
    moveStopeOne = 0,
    moveGap = 1,
    moveStepPage = 2,
    moveStepEnd = 3
}
export interface IMoveSelectionCommandParams {
    direction: Direction;
    jumpOver?: JumpOver;
    nextStep?: number;
    extra?: string;
    fromCurrentSelection?: boolean;
}
export interface IMoveSelectionEnterAndTabCommandParams {
    direction: Direction;
    keycode: KeyCode;
    extra?: string;
    fromCurrentSelection?: boolean;
}
/**
 * Move selection (Mainly by keyboard arrow keys, For Tab and Enter key, check @MoveSelectionEnterAndTabCommand)
 */
export declare const MoveSelectionCommand: ICommand<IMoveSelectionCommandParams>;
/**
 * Move selection for enter and tab.
 */
export declare const MoveSelectionEnterAndTabCommand: ICommand<IMoveSelectionEnterAndTabCommandParams>;
export interface IExpandSelectionCommandParams {
    direction: Direction;
    jumpOver?: JumpOver;
    nextStep?: number;
    extra?: string;
}
export declare const ExpandSelectionCommand: ICommand<IExpandSelectionCommandParams>;
export interface ISelectAllCommandParams {
    expandToGapFirst?: boolean;
    loop?: boolean;
}
/**
 * This command expand selection to all neighbor ranges. If there are no neighbor ranges. Select the whole sheet.
 */
export declare const SelectAllCommand: ICommand<ISelectAllCommandParams>;
