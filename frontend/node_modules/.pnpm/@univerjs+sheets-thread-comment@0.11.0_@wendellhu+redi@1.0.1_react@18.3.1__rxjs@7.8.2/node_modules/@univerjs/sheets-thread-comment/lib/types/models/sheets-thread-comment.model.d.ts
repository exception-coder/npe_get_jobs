import { CommentUpdate, IThreadComment, ThreadCommentModel } from '@univerjs/thread-comment';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
export type SheetCommentUpdate = CommentUpdate & {
    row: number;
    column: number;
};
export declare class SheetsThreadCommentModel extends Disposable {
    private readonly _threadCommentModel;
    private readonly _univerInstanceService;
    private _matrixMap;
    private _locationMap;
    private _commentUpdate$;
    commentUpdate$: import('rxjs').Observable<SheetCommentUpdate>;
    constructor(_threadCommentModel: ThreadCommentModel, _univerInstanceService: IUniverInstanceService);
    private _init;
    private _ensureCommentMatrix;
    private _ensureCommentLocationMap;
    private _addCommentToMatrix;
    private _deleteCommentFromMatrix;
    private _ensure;
    private _initData;
    private _addComment;
    private _initUpdateTransform;
    getByLocation(unitId: string, subUnitId: string, row: number, column: number): string | undefined;
    getAllByLocation(unitId: string, subUnitId: string, row: number, column: number): IThreadComment[];
    getComment(unitId: string, subUnitId: string, commentId: string): IThreadComment | undefined;
    getCommentWithChildren(unitId: string, subUnitId: string, row: number, column: number): import('@univerjs/core').Nullable<import('@univerjs/thread-comment').IThreadInfo>;
    showCommentMarker(unitId: string, subUnitId: string, row: number, column: number): boolean;
    getSubUnitAll(unitId: string, subUnitId: string): IThreadComment[];
}
