import { IDisposable, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
export interface ILinkInfo {
    unitId: string;
    linkId: string;
    segmentId?: string;
    segmentPage?: number;
    startIndex: number;
    endIndex: number;
}
export declare class DocHyperLinkPopupService extends Disposable {
    private readonly _docCanvasPopupManagerService;
    private readonly _textSelectionManagerService;
    private readonly _univerInstanceService;
    private readonly _editingLink$;
    private readonly _showingLink$;
    readonly editingLink$: import('rxjs').Observable<Nullable<ILinkInfo>>;
    readonly showingLink$: import('rxjs').Observable<Nullable<ILinkInfo>>;
    private _editPopup;
    private _infoPopup;
    constructor(_docCanvasPopupManagerService: DocCanvasPopManagerService, _textSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService);
    get editing(): Nullable<ILinkInfo>;
    get showing(): Nullable<ILinkInfo>;
    showEditPopup(unitId: string, linkInfo: Nullable<ILinkInfo>): Nullable<IDisposable>;
    hideEditPopup(): void;
    showInfoPopup(info: ILinkInfo): Nullable<IDisposable>;
    hideInfoPopup(): void;
}
