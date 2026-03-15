import { ITextRange, Nullable, Disposable } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
import { ISidebarService } from '@univerjs/ui';
export declare class DocThreadCommentService extends Disposable {
    private readonly _sidebarService;
    private readonly _threadCommentPanelService;
    private _addingComment$;
    readonly addingComment$: import('rxjs').Observable<Nullable<IThreadComment & ITextRange>>;
    get addingComment(): Nullable<IThreadComment & ITextRange>;
    constructor(_sidebarService: ISidebarService, _threadCommentPanelService: ThreadCommentPanelService);
    startAdd(comment: IThreadComment & ITextRange): void;
    endAdd(): void;
}
