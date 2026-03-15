import { IMutation } from '@univerjs/core';
import { ISheetNote } from '../../models/sheets-note.model';
export interface IUpdateNoteMutationParams {
    unitId: string;
    sheetId: string;
    row: number;
    col: number;
    note: ISheetNote;
    silent?: boolean;
}
export declare const UpdateNoteMutation: IMutation<IUpdateNoteMutationParams>;
export interface IRemoveNoteMutationParams {
    unitId: string;
    sheetId: string;
    row: number;
    col: number;
    silent?: boolean;
}
export declare const RemoveNoteMutation: IMutation<IRemoveNoteMutationParams>;
export interface IToggleNotePopupMutationParams {
    unitId: string;
    sheetId: string;
    row: number;
    col: number;
    silent?: boolean;
}
export declare const ToggleNotePopupMutation: IMutation<IToggleNotePopupMutationParams>;
export interface IUpdateNotePositionMutationParams {
    unitId: string;
    sheetId: string;
    row: number;
    col: number;
    newPosition: {
        row: number;
        col: number;
    };
    silent?: boolean;
}
export declare const UpdateNotePositionMutation: IMutation<IUpdateNotePositionMutationParams>;
