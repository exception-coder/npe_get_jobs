import { Disposable } from '@univerjs/core';
import { IThreadCommentDataSourceService } from '@univerjs/thread-comment';
import { ThreadCommentServerDataSource } from '../services/comment.data-source';
export declare class ThreadCommentDataSourceController extends Disposable {
    private readonly _threadCommentDataSourceService;
    private readonly _threadCommentDataSource;
    constructor(_threadCommentDataSourceService: IThreadCommentDataSourceService, _threadCommentDataSource: ThreadCommentServerDataSource);
    private _initDataSource;
}
