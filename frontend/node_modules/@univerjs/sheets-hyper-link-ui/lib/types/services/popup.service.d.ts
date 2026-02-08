import { ICustomRange, INeedCheckDisposable, Nullable, Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { IBoundRectNoAngle } from '@univerjs/engine-render';
import { ISheetLocationBase } from '@univerjs/sheets';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IEditorBridgeService, SheetCanvasPopManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
import { HyperLinkEditSourceType } from '../types/enums/edit-source';
export interface IHyperLinkPopup {
    unitId: string;
    subUnitId: string;
    disposable: INeedCheckDisposable;
    row: number;
    col: number;
    editPermission?: boolean;
    copyPermission?: boolean;
    customRange?: Nullable<ICustomRange>;
    type: HyperLinkEditSourceType;
    showAll?: boolean;
}
interface IHyperLinkEditing {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
    customRangeId?: string;
    type: HyperLinkEditSourceType;
}
interface IHyperLinkPopupOptions extends ISheetLocationBase {
    editPermission?: boolean;
    copyPermission?: boolean;
    customRange?: Nullable<ICustomRange>;
    customRangeRect?: Nullable<IBoundRectNoAngle>;
    showAll?: boolean;
    type: HyperLinkEditSourceType;
}
export declare class SheetsHyperLinkPopupService extends Disposable {
    private readonly _sheetCanvasPopManagerService;
    private readonly _injector;
    private readonly _univerInstanceService;
    private readonly _editorBridgeService;
    private readonly _textSelectionManagerService;
    private readonly _docCanvasPopManagerService;
    private readonly _zenZoneService;
    private _currentPopup;
    private _currentPopup$;
    currentPopup$: import('rxjs').Observable<IHyperLinkPopup | null>;
    private _currentEditingPopup;
    private _currentEditing$;
    currentEditing$: import('rxjs').Observable<(IHyperLinkEditing & {
        customRange?: ICustomRange;
        label?: string;
    }) | null>;
    private _isKeepVisible;
    get currentPopup(): IHyperLinkPopup | null;
    get currentEditing(): (IHyperLinkEditing & {
        customRange?: ICustomRange;
        label?: string;
    }) | null;
    constructor(_sheetCanvasPopManagerService: SheetCanvasPopManagerService, _injector: Injector, _univerInstanceService: IUniverInstanceService, _editorBridgeService: IEditorBridgeService, _textSelectionManagerService: DocSelectionManagerService, _docCanvasPopManagerService: DocCanvasPopManagerService, _zenZoneService: IZenZoneService);
    setIsKeepVisible(v: boolean): void;
    getIsKeepVisible(): boolean;
    showPopup(location: IHyperLinkPopupOptions): void;
    hideCurrentPopup(type?: HyperLinkEditSourceType, force?: boolean): void;
    dispose(): void;
    private _getEditingRange;
    private get _editPopup();
    startAddEditing(link: IHyperLinkEditing): void;
    startEditing(link: Required<IHyperLinkEditing>): void;
    endEditing(type?: HyperLinkEditSourceType): void;
}
export {};
