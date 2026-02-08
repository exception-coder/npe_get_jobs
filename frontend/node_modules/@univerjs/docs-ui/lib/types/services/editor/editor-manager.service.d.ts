import { IDisposable, IDocumentBody, Nullable, Disposable, ICommandService, IContextService, Injector, IUndoRedoService, IUniverInstanceService } from '@univerjs/core';
import { ISuccinctDocRangeParam, IRenderManagerService } from '@univerjs/engine-render';
import { Observable } from 'rxjs';
import { IEditorConfigParams, Editor } from './editor';
import { DocSelectionManagerService } from '@univerjs/docs';
export interface IEditorSetValueParam {
    editorUnitId: string;
    body: IDocumentBody;
}
export interface IEditorInputFormulaParam {
    editorUnitId: string;
    formulaString: string;
}
export interface IEditorService {
    getEditor(id?: string): Readonly<Nullable<Editor>>;
    register(config: IEditorConfigParams, container: HTMLDivElement): IDisposable;
    getAllEditor(): Map<string, Editor>;
    isEditor(editorUnitId: string): boolean;
    isSheetEditor(editorUnitId: string): boolean;
    blur$: Observable<unknown>;
    blur(force?: boolean): void;
    focus$: Observable<ISuccinctDocRangeParam>;
    focus(editorUnitId: string): void;
    getFocusId(): Nullable<string>;
    getFocusEditor(): Readonly<Nullable<Editor>>;
}
export declare class EditorService extends Disposable implements IEditorService, IDisposable {
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _docSelectionManagerService;
    private readonly _contextService;
    private readonly _commandService;
    private readonly _undoRedoService;
    private readonly _injector;
    private _editors;
    private _focusEditorUnitId;
    private readonly _blur$;
    readonly blur$: Observable<unknown>;
    private readonly _focus$;
    readonly focus$: Observable<ISuccinctDocRangeParam>;
    constructor(_univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _docSelectionManagerService: DocSelectionManagerService, _contextService: IContextService, _commandService: ICommandService, _undoRedoService: IUndoRedoService, _injector: Injector);
    private _initUniverFocusListener;
    private _blurSheetEditor;
    private _setFocusId;
    getFocusId(): Nullable<string>;
    getFocusEditor(): Readonly<Nullable<Editor>>;
    isEditor(editorUnitId: string): boolean;
    isSheetEditor(editorUnitId: string): boolean;
    blur(force?: boolean): void;
    focus(editorUnitId: string): void;
    dispose(): void;
    getEditor(id?: string): Readonly<Nullable<Editor>>;
    getAllEditor(): Map<string, Editor>;
    register(config: IEditorConfigParams, container: HTMLDivElement): IDisposable;
    private _unRegister;
    private _getCurrentEditorUnitId;
    private _getBlank;
}
export declare const IEditorService: import('@wendellhu/redi').IdentifierDecorator<IEditorService>;
