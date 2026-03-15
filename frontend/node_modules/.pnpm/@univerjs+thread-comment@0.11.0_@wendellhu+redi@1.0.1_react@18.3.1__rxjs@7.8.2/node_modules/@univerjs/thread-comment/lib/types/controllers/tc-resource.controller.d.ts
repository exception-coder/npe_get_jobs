import { IThreadComment } from '../types/interfaces/i-thread-comment';
import { Disposable, IResourceManagerService } from '@univerjs/core';
import { ThreadCommentModel } from '../models/thread-comment.model';
import { IThreadCommentDataSourceService } from '../services/tc-datasource.service';
export type UnitThreadCommentJSON = Record<string, IThreadComment[]>;
export declare const SHEET_UNIVER_THREAD_COMMENT_PLUGIN = "SHEET_UNIVER_THREAD_COMMENT_PLUGIN";
export declare class ThreadCommentResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _threadCommentModel;
    private readonly _threadCommentDataSourceService;
    constructor(_resourceManagerService: IResourceManagerService, _threadCommentModel: ThreadCommentModel, _threadCommentDataSourceService: IThreadCommentDataSourceService);
    private _initSnapshot;
}
