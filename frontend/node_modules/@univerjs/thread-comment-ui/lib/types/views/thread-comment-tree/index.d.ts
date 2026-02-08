import { IUser, UniverInstanceType } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
export interface IThreadCommentTreeProps {
    full?: boolean;
    id?: string;
    unitId: string;
    subUnitId: string;
    type: UniverInstanceType;
    refStr?: string;
    showEdit?: boolean;
    onClick?: () => void;
    showHighlight?: boolean;
    onClose?: () => void;
    getSubUnitName: (subUnitId: string) => string;
    prefix?: string;
    autoFocus?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onAddComment?: (comment: IThreadComment) => boolean;
    onDeleteComment?: (comment: IThreadComment) => boolean;
    onResolve?: (resolved: boolean) => void;
    style?: React.CSSProperties;
}
export interface IThreadCommentItemProps {
    item: IThreadComment;
    unitId: string;
    subUnitId: string;
    onEditingChange?: (editing: boolean) => void;
    editing?: boolean;
    onClick?: () => void;
    resolved?: boolean;
    onReply: (user: IUser | undefined) => void;
    isRoot?: boolean;
    onClose?: () => void;
    onAddComment?: (comment: IThreadComment) => boolean;
    onDeleteComment?: (comment: IThreadComment) => boolean;
    type: UniverInstanceType;
}
export declare const ThreadCommentTree: (props: IThreadCommentTreeProps) => import("react/jsx-runtime").JSX.Element;
