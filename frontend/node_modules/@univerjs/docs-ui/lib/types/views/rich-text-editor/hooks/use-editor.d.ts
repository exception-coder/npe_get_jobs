import { IDocumentData, Nullable } from '@univerjs/core';
import { RefObject } from 'react';
import { Editor } from '../../../services/editor/editor';
export interface IUseEditorProps {
    editorId: string;
    initialValue: Nullable<IDocumentData | string>;
    container: RefObject<HTMLDivElement>;
    autoFocus?: boolean;
    isSingle?: boolean;
}
export declare function useEditor(opts: IUseEditorProps): Editor | undefined;
