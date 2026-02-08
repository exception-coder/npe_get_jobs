import { DocumentDataModel, ICommandService, IDocumentData, Injector, IPosition, IUndoRedoService, IUniverInstanceService, Nullable, Disposable } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { IDocSelectionInnerParam, IRender, ISuccinctDocRangeParam, ITextRangeWithStyle } from '@univerjs/engine-render';
import { Observable } from 'rxjs';
import { IEditorInputConfig, DocSelectionRenderService } from '../selection/doc-selection-render.service';
interface IEditorEvent {
    target: IEditor;
    data: IDocumentData;
}
interface IEditorInputEvent extends IEditorEvent {
    content: string;
    isComposing: boolean;
}
interface IEditor {
    change$: Observable<IEditorEvent>;
    input$: Observable<IEditorInputEvent>;
    paste$: Observable<IEditorInputConfig>;
    focus$: Observable<IEditorInputConfig>;
    blur$: Observable<IEditorInputConfig>;
    selectionChange$: Observable<IDocSelectionInnerParam>;
    isFocus(): boolean;
    focus(): void;
    blur(): void;
    select(): void;
    setSelectionRanges(ranges: ISuccinctDocRangeParam[]): void;
    getSelectionRanges(): ITextRangeWithStyle[];
    getEditorId(): string;
    getDocumentData(): IDocumentData;
    setDocumentData(data: IDocumentData): void;
    clearUndoRedoHistory(): void;
}
export interface IEditorStateParams extends Partial<IPosition> {
    visible?: boolean;
}
export interface IEditorCanvasStyle {
    fontSize?: number;
}
export interface IEditorConfigParams {
    initialSnapshot: IDocumentData;
    cancelDefaultResizeListener?: boolean;
    canvasStyle?: IEditorCanvasStyle;
    autofocus?: boolean;
    readonly?: boolean;
    backScrollOffset?: number;
    editorUnitId?: string;
    scrollBar?: boolean;
}
export interface IEditorOptions extends IEditorConfigParams, IEditorStateParams {
    render: IRender;
    editorDom: HTMLDivElement;
}
export declare class Editor extends Disposable implements IEditor {
    private _param;
    private _univerInstanceService;
    private _docSelectionManagerService;
    private _commandService;
    private _undoRedoService;
    private _injector;
    private readonly _change$;
    change$: Observable<IEditorEvent>;
    private readonly _input$;
    input$: Observable<IEditorInputEvent>;
    private readonly _paste$;
    paste$: Observable<IEditorInputConfig>;
    private readonly _focus$;
    focus$: Observable<IEditorInputConfig>;
    private readonly _blur$;
    blur$: Observable<IEditorInputConfig>;
    private readonly _selectionChange$;
    selectionChange$: Observable<IDocSelectionInnerParam>;
    constructor(_param: IEditorOptions, _univerInstanceService: IUniverInstanceService, _docSelectionManagerService: DocSelectionManagerService, _commandService: ICommandService, _undoRedoService: IUndoRedoService, _injector: Injector);
    get docSelectionRenderService(): DocSelectionRenderService;
    private _listenSelection;
    isFocus(): boolean;
    /**
     * @deprecated use `IEditorService.focus` as instead. this is for internal usage.
     */
    focus(): void;
    /**
     * @deprecated use `IEditorService.blur` as instead. this is for internal usage.
     */
    blur(): void;
    select(): void;
    setSelectionRanges(ranges: ISuccinctDocRangeParam[], shouldFocus?: boolean): void;
    getSelectionRanges(): ITextRangeWithStyle[];
    getCursorPosition(): number;
    getEditorId(): string;
    getDocumentData(): IDocumentData;
    getDocumentDataModel(): DocumentDataModel;
    setDocumentData(data: IDocumentData, textRanges: Nullable<ITextRangeWithStyle[]>): void;
    replaceText(text: string, resetCursor?: boolean | ITextRangeWithStyle[]): void;
    clearUndoRedoHistory(): void;
    dispose(): void;
    /**
     * @deprecated use getEditorId.
     */
    get editorUnitId(): string | undefined;
    /**
     * @deprecated @TODO: @JOCS remove this in the future.
     */
    get params(): IEditorOptions;
    get cancelDefaultResizeListener(): boolean | undefined;
    get render(): IRender;
    isReadOnly(): boolean;
    getBoundingClientRect(): DOMRect;
    get editorDOM(): HTMLDivElement;
    isVisible(): boolean | undefined;
    getSkeleton(): import('@univerjs/engine-render').DocumentSkeleton | undefined;
    isSheetEditor(): boolean;
    /**
     * @deprecated use getDocumentData.
     */
    getValue(): string;
    /**
     * @deprecated use getDocumentData.
     */
    getBody(): import('@univerjs/core').IDocumentBody | undefined;
    /**
     * @deprecated.
     */
    update(param: Partial<IEditorOptions>): void;
    /**
     * @deprecated.
     */
    updateCanvasStyle(): void;
    private _getDocDataModel;
    private _getEditorId;
}
export {};
