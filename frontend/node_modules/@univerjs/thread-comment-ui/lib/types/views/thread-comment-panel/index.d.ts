import { Nullable, UniverInstanceType } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
import { Observable } from 'rxjs';
import { IThreadCommentTreeProps } from '../thread-comment-tree';
export interface IThreadCommentPanelProps {
    unitId: string;
    subUnitId$: Observable<string | undefined>;
    type: UniverInstanceType;
    onAdd: () => void;
    getSubUnitName: (subUnitId: string) => string;
    onResolve?: (id: string, resolved: boolean) => void;
    sortComments?: (comments: IThreadComment[]) => IThreadComment[];
    onItemLeave?: (comment: IThreadComment) => void;
    onItemEnter?: (comment: IThreadComment) => void;
    disableAdd?: boolean;
    tempComment?: Nullable<IThreadComment>;
    onAddComment?: IThreadCommentTreeProps['onAddComment'];
    onDeleteComment?: IThreadCommentTreeProps['onDeleteComment'];
    showComments?: string[];
}
export declare const ThreadCommentPanel: (props: IThreadCommentPanelProps) => import("react/jsx-runtime").JSX.Element;
