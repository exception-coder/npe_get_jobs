import { IMutationInfo, IRange, IStyleData, Disposable, ICommandService, ILogService, IUndoRedoService, ObjectMatrix, ThemeService } from '@univerjs/core';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { Observable } from 'rxjs';
import { IMarkSelectionService } from '../mark-selection/mark-selection.service';
export interface IFormatPainterService {
    status$: Observable<FormatPainterStatus>;
    addHook(hooks: IFormatPainterHook): void;
    getHooks(): IFormatPainterHook[];
    setStatus(status: FormatPainterStatus): void;
    getStatus(): FormatPainterStatus;
    setSelectionFormat(format: ISelectionFormatInfo): void;
    getSelectionFormat(): ISelectionFormatInfo;
    applyFormatPainter(unitId: string, subUnitId: string, range: IRange): boolean;
}
export interface ISelectionFormatInfo {
    styles: ObjectMatrix<IStyleData>;
    merges: IRange[];
}
export interface IFormatPainterHook {
    id: string;
    isDefaultHook?: boolean;
    priority?: number;
    onStatusChange?(status: FormatPainterStatus): void;
    onApply?(unitId: string, subUnitId: string, range: IRange, format: ISelectionFormatInfo): {
        undos: IMutationInfo[];
        redos: IMutationInfo[];
    };
    onBeforeApply?(ctx: IFormatPainterBeforeApplyHookParams): boolean;
}
export declare enum FormatPainterStatus {
    OFF = 0,
    ONCE = 1,
    INFINITE = 2
}
export interface IFormatPainterBeforeApplyHookParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    redoMutationsInfo: IMutationInfo[];
    undoMutationsInfo: IMutationInfo[];
    format: ISelectionFormatInfo;
}
export declare const IFormatPainterService: import('@wendellhu/redi').IdentifierDecorator<IFormatPainterService>;
export declare class FormatPainterService extends Disposable implements IFormatPainterService {
    private readonly _selectionManagerService;
    private readonly _themeService;
    private readonly _markSelectionService;
    private readonly _logService;
    private readonly _commandService;
    private readonly _undoRedoService;
    readonly status$: Observable<FormatPainterStatus>;
    private _selectionFormat;
    private _markId;
    private readonly _status$;
    private _defaultHook;
    private _extendHooks;
    constructor(_selectionManagerService: SheetsSelectionsService, _themeService: ThemeService, _markSelectionService: IMarkSelectionService, _logService: ILogService, _commandService: ICommandService, _undoRedoService: IUndoRedoService);
    addHook(hook: IFormatPainterHook): void;
    getHooks(): IFormatPainterHook[];
    setStatus(status: FormatPainterStatus): void;
    getStatus(): FormatPainterStatus;
    setSelectionFormat(format: ISelectionFormatInfo): void;
    getSelectionFormat(): ISelectionFormatInfo;
    applyFormatPainter(unitId: string, subUnitId: string, range: IRange): boolean;
    private _updateRangeMark;
}
