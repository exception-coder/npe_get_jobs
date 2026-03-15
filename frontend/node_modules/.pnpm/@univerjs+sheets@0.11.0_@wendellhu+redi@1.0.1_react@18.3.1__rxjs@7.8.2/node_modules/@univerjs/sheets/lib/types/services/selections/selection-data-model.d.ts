import { ISelectionCell, Nullable, Workbook, Disposable } from '@univerjs/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ISelectionWithStyle } from '../../basics/selection';
import { SelectionMoveType } from './type';
/**
 * Origin name: WorkbookSelections
 * NOT Same as @univerjs/sheets-ui.SelectionRenderModel, that's data for SelectionControl in rendering.
 */
export declare class WorkbookSelectionModel extends Disposable {
    private readonly _workbook;
    /**
     * Selection data model for each worksheet.
     */
    private _worksheetSelections;
    private readonly _selectionMoveStart$;
    readonly selectionMoveStart$: Observable<Nullable<ISelectionWithStyle[]>>;
    private readonly _selectionMoving$;
    readonly selectionMoving$: Observable<Nullable<ISelectionWithStyle[]>>;
    readonly _selectionMoveEnd$: BehaviorSubject<ISelectionWithStyle[]>;
    readonly selectionMoveEnd$: Observable<ISelectionWithStyle[]>;
    private readonly _selectionSet$;
    readonly selectionSet$: Observable<ISelectionWithStyle[]>;
    selectionChanged$: Observable<ISelectionWithStyle[]>;
    private readonly _beforeSelectionMoveEnd$;
    readonly beforeSelectionMoveEnd$: Observable<ISelectionWithStyle[]>;
    constructor(_workbook: Workbook);
    dispose(): void;
    addSelections(sheetId: string, selectionDatas: ISelectionWithStyle[]): void;
    /**
     * Set selectionDatas to _worksheetSelections, and emit selectionDatas by type.
     * @param sheetId
     * @param selectionDatas
     * @param type
     */
    setSelections(sheetId: string, selectionDatas: ISelectionWithStyle[] | undefined, type: SelectionMoveType): void;
    getCurrentSelections(): Readonly<ISelectionWithStyle[]>;
    /**
     * @deprecated use `getSelectionsOfWorksheet` instead.
     * @param sheetId
     * @returns
     */
    getSelectionOfWorksheet(sheetId: string): ISelectionWithStyle[];
    getSelectionsOfWorksheet(sheetId: string): ISelectionWithStyle[];
    setSelectionsOfWorksheet(sheetId: string, selections: ISelectionWithStyle[]): void;
    deleteSheetSelection(sheetId: string): void;
    /** Clear all selections in this workbook. */
    clear(): void;
    private _getCurrentSelections;
    getCurrentLastSelection(): Readonly<Nullable<ISelectionWithStyle & {
        primary: ISelectionCell;
    }>>;
}
