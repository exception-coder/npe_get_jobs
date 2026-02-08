import { IDocumentBody } from '@univerjs/core';
export interface IThreadCommentMention {
    label: string;
    id: string;
    icon?: string;
}
export interface IBaseComment {
    id: string;
    threadId: string;
    dT: string;
    updateT?: string;
    personId: string;
    text: IDocumentBody;
    attachments?: string[];
    updated?: boolean;
    mentions?: string[];
    parentId?: string;
    resolved?: boolean;
    unitId: string;
    subUnitId: string;
    children?: IBaseComment[];
}
export interface IThreadComment extends IBaseComment {
    ref: string;
}
