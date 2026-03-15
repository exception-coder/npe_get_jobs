import { Nullable, ICommandService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IDocSelectionInnerParam, IRectRangeWithStyle, ISuccinctDocRangeParam, ITextRangeWithStyle } from '@univerjs/engine-render';
interface IDocSelectionManagerSearchParam {
    unitId: string;
    subUnitId: string;
}
export interface IRefreshSelectionParam extends IDocSelectionManagerSearchParam {
    docRanges: ISuccinctDocRangeParam[];
    isEditing: boolean;
    options?: {
        [key: string]: boolean;
    };
}
export interface ITextSelectionManagerInsertParam extends IDocSelectionManagerSearchParam, IDocSelectionInnerParam {
}
/**
 * This service is for text selection.
 */
export declare class DocSelectionManagerService extends RxDisposable {
    private readonly _commandService;
    private readonly _univerInstanceService;
    private _currentSelection;
    private readonly _textSelectionInfo;
    private readonly _textSelection$;
    readonly textSelection$: import('rxjs').Observable<ITextSelectionManagerInsertParam>;
    private readonly _refreshSelection$;
    readonly refreshSelection$: import('rxjs').Observable<Nullable<IRefreshSelectionParam>>;
    constructor(_commandService: ICommandService, _univerInstanceService: IUniverInstanceService);
    private _listenCurrentUnit;
    __getCurrentSelection(): Nullable<IDocSelectionManagerSearchParam>;
    getSelectionInfo(params?: Nullable<IDocSelectionManagerSearchParam>): IDocSelectionInnerParam | undefined;
    refreshSelection(params?: Nullable<IDocSelectionManagerSearchParam>): void;
    __TEST_ONLY_setCurrentSelection(param: IDocSelectionManagerSearchParam): void;
    getTextRanges(params?: Nullable<IDocSelectionManagerSearchParam>): Readonly<Nullable<ITextRangeWithStyle[]>>;
    getRectRanges(params?: Nullable<IDocSelectionManagerSearchParam>): Readonly<Nullable<IRectRangeWithStyle[]>>;
    getDocRanges(params?: Nullable<IDocSelectionManagerSearchParam>): ITextRangeWithStyle[];
    getActiveTextRange(): Nullable<ITextRangeWithStyle>;
    /**
     *
     * @deprecated
     */
    getActiveRectRange(): Nullable<ITextRangeWithStyle>;
    __TEST_ONLY_add(textRanges: ITextRangeWithStyle[], isEditing?: boolean): void;
    /**
     * @deprecated pls use replaceDocRanges.
     */
    replaceTextRanges(docRanges: ISuccinctDocRangeParam[], isEditing?: boolean, options?: {
        [key: string]: boolean;
    }): void;
    replaceDocRanges(docRanges: ISuccinctDocRangeParam[], params?: Nullable<IDocSelectionManagerSearchParam>, isEditing?: boolean, options?: {
        [key: string]: boolean;
    }): void;
    __replaceTextRangesWithNoRefresh(textSelectionInfo: IDocSelectionInnerParam, search: IDocSelectionManagerSearchParam): void;
    dispose(): void;
    private _setCurrentSelectionNotRefresh;
    private _getTextRanges;
    private _refresh;
    private _replaceByParam;
    private _addByParam;
}
export {};
