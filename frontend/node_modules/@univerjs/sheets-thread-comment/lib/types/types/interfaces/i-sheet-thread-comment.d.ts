import { IThreadComment } from '@univerjs/thread-comment';
export interface ISheetThreadComment extends IThreadComment {
    row: number;
    column: number;
}
