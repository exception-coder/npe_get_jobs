import { Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { ISidebarService } from '@univerjs/ui';
export type ActiveCommentInfo = Nullable<{
    unitId: string;
    subUnitId: string;
    commentId: string;
    trigger?: string;
}>;
export declare class ThreadCommentPanelService extends Disposable {
    private readonly _sidebarService;
    private readonly _univerInstanceService;
    private _panelVisible;
    private _panelVisible$;
    private _activeCommentId;
    private _activeCommentId$;
    panelVisible$: import('rxjs').Observable<boolean>;
    activeCommentId$: import('rxjs').Observable<ActiveCommentInfo>;
    constructor(_sidebarService: ISidebarService, _univerInstanceService: IUniverInstanceService);
    private _init;
    get panelVisible(): boolean;
    get activeCommentId(): ActiveCommentInfo;
    setPanelVisible(visible: boolean): void;
    setActiveComment(commentInfo: ActiveCommentInfo): void;
}
