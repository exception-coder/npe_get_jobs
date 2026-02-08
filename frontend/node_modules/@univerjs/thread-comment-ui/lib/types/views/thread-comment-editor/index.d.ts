import { IDocumentBody, IUser, UniverInstanceType } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
export interface IThreadCommentEditorProps {
    id?: string;
    comment?: Pick<IThreadComment, 'attachments' | 'text' | 'mentions'>;
    onSave?: (comment: Pick<IThreadComment, 'attachments' | 'text'>) => void;
    onCancel?: () => void;
    autoFocus?: boolean;
    unitId: string;
    subUnitId: string;
    type: UniverInstanceType;
}
export interface IThreadCommentEditorInstance {
    reply: (text: IDocumentBody) => void;
}
export declare const ThreadCommentEditor: import('react').ForwardRefExoticComponent<IThreadCommentEditorProps & import('react').RefAttributes<IThreadCommentEditorInstance>>;
export declare const ThreadCommentSuggestion: ({ active, user }: {
    active: boolean;
    user: IUser;
}) => import("react/jsx-runtime").JSX.Element;
