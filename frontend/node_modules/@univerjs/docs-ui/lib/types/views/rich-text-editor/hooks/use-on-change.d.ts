import { IDocumentData } from '@univerjs/core';
import { Editor } from '../../../services/editor/editor';
export declare function useOnChange(editor: Editor | undefined, onChange: (data: IDocumentData, str: string) => void): void;
