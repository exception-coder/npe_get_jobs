import { Observable } from 'rxjs';
import { Nullable } from '../shared';
import { IStyleData } from '../types/interfaces';
import { CustomData, IRangeType, IWorkbookData, IWorksheetData } from './typedef';
import { UnitModel, UniverInstanceType } from '../common/unit';
import { ILogService } from '../services/log/log.service';
import { Styles } from './styles';
import { Worksheet } from './worksheet';
export declare function getWorksheetUID(workbook: Workbook, worksheet: Worksheet): string;
/**
 * Access and create Univer Sheets files
 */
export declare class Workbook extends UnitModel<IWorkbookData, UniverInstanceType.UNIVER_SHEET> {
    private readonly _logService;
    type: UniverInstanceType.UNIVER_SHEET;
    private readonly _sheetCreated$;
    readonly sheetCreated$: Observable<Worksheet>;
    private readonly _sheetDisposed$;
    readonly sheetDisposed$: Observable<Worksheet>;
    private readonly _activeSheet$;
    private get _activeSheet();
    readonly activeSheet$: Observable<Nullable<Worksheet>>;
    /**
     * sheets list
     * @private
     */
    private _worksheets;
    /**
     * Common style
     * @private
     */
    private _styles;
    /**
     * number format
     * @private
     */
    private _snapshot;
    private _unitId;
    private _count;
    private readonly _name$;
    readonly name$: Observable<string>;
    get name(): string;
    static isIRangeType(range: IRangeType | IRangeType[]): boolean;
    constructor(workbookData: Partial<IWorkbookData> | undefined, _logService: ILogService);
    dispose(): void;
    /**
     * Create a clone of the current snapshot.
     * Call resourceLoaderService.saveWorkbook to save the data associated with the current plugin if needed.
     * @memberof Workbook
     */
    save(): IWorkbookData;
    /**
     * Get current snapshot reference.
     * Call resourceLoaderService.saveWorkbook to save the data associated with the current plugin if needed.
     * @return {*}  {IWorkbookData}
     * @memberof Workbook
     */
    getSnapshot(): IWorkbookData;
    /** @deprecated use use name property instead */
    getName(): string;
    setName(name: string): void;
    getUnitId(): string;
    getRev(): number;
    incrementRev(): void;
    setRev(rev: number): void;
    /**
     * Add a Worksheet into Workbook.
     */
    addWorksheet(id: string, index: number, worksheetSnapshot: Partial<IWorksheetData>): boolean;
    getSheetOrders(): Readonly<string[]>;
    getWorksheets(): Map<string, Worksheet>;
    getActiveSpreadsheet(): Workbook;
    getStyles(): Styles;
    addStyles(styles: Record<string, Nullable<IStyleData>>): void;
    removeStyles(ids: string[]): void;
    getConfig(): IWorkbookData;
    getIndexBySheetId(sheetId: string): number;
    /**
     * Get the active sheet.
     */
    getActiveSheet(): Worksheet;
    getActiveSheet(allowNull: true): Nullable<Worksheet>;
    /**
     * If there is no active sheet, the first sheet would
     * be set active.
     * @returns
     */
    ensureActiveSheet(): Worksheet;
    /**
     * ActiveSheet should not be null!
     * There is at least one sheet in a workbook. You can not delete all sheets in a workbook.
     * @param worksheet
     */
    setActiveSheet(worksheet: Worksheet): void;
    removeSheet(sheetId: string): boolean;
    getActiveSheetIndex(): number;
    getSheetSize(): number;
    getSheets(): Worksheet[];
    getSheetsName(): string[];
    getSheetIndex(sheet: Worksheet): number;
    getSheetBySheetName(name: string): Nullable<Worksheet>;
    getSheetBySheetId(sheetId: string): Nullable<Worksheet>;
    getSheetByIndex(index: number): Nullable<Worksheet>;
    getHiddenWorksheets(): string[];
    getUnhiddenWorksheets(): string[];
    load(config: IWorkbookData): void;
    /**
     * Check if sheet name is unique
     * @param name sheet name
     * @returns True if sheet name is unique
     */
    checkSheetName(name: string): boolean;
    /**
     *  Check whether the sheet name is unique and generate a new unique sheet name
     * @param name sheet name
     * @returns Unique sheet name
     */
    uniqueSheetName(name?: string): string;
    /**
     * Automatically generate new sheet name
     * @param name sheet name
     * @returns New sheet name
     */
    generateNewSheetName(name: string): string;
    /**
     * Get Default Sheet
     */
    private _parseWorksheetSnapshots;
    /**
     * Get custom metadata of workbook
     * @returns {CustomData | undefined} custom metadata
     */
    getCustomMetadata(): CustomData | undefined;
    /**
     * Set custom metadata of workbook
     * @param {CustomData | undefined} custom custom metadata
     */
    setCustomMetadata(custom: CustomData | undefined): void;
}
