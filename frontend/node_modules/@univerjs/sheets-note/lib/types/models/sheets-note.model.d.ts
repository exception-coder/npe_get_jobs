import { Nullable, Disposable, ObjectMatrix } from '@univerjs/core';
import { ISheetLocationBase } from '@univerjs/sheets';
export interface ISheetNote {
    width: number;
    height: number;
    note: string;
    show?: boolean;
}
export type ISheetNoteChange = {
    unitId: string;
    sheetId: string;
    row: number;
    col: number;
    silent?: boolean;
} & ({
    type: 'update';
    note: Nullable<ISheetNote>;
    oldNote: Nullable<ISheetNote>;
} | {
    type: 'ref';
    newPosition: {
        row: number;
        col: number;
    };
    note: ISheetNote;
});
export declare class SheetsNoteModel extends Disposable {
    private _noteMatrix;
    private readonly _change$;
    readonly change$: import('rxjs').Observable<ISheetNoteChange>;
    private _ensureNoteMatrix;
    getSheetShowNotes$(unitId: string, sheetId: string): import('rxjs').Observable<{
        loc: ISheetLocationBase;
        note: ISheetNote;
    }[]>;
    getCellNoteChange$(unitId: string, sheetId: string, row: number, col: number): import('rxjs').Observable<Nullable<ISheetNote>>;
    updateNote(unitId: string, sheetId: string, row: number, col: number, note: ISheetNote, silent?: boolean): void;
    removeNote(unitId: string, sheetId: string, row: number, col: number, silent?: boolean): void;
    toggleNotePopup(unitId: string, sheetId: string, row: number, col: number, silent?: boolean): void;
    updateNotePosition(unitId: string, sheetId: string, row: number, col: number, newRow: number, newCol: number, silent?: boolean): void;
    getNote(unitId: string, sheetId: string, row: number, col: number): Nullable<ISheetNote>;
    getUnitNotes(unitId: string): Map<string, ObjectMatrix<ISheetNote>> | undefined;
    getSheetNotes(unitId: string, sheetId: string): ObjectMatrix<ISheetNote> | undefined;
    getNotes(): Map<string, Map<string, ObjectMatrix<ISheetNote>>>;
    deleteUnitNotes(unitId: string): void;
}
