import { IDocumentData } from '@univerjs/core';
import { CSSProperties, ReactNode, RefObject } from 'react';
import { Editor } from '../../services/editor/editor';
import { IKeyboardEventConfig } from './hooks';
export interface IRichTextEditorProps {
    className?: string;
    autoFocus?: boolean;
    onFocusChange?: (isFocus: boolean, newValue?: string) => void;
    initialValue?: IDocumentData | string;
    onClickOutside?: () => void;
    keyboardEventConfig?: IKeyboardEventConfig;
    moveCursor?: boolean;
    style?: CSSProperties;
    isSingle?: boolean;
    placeholder?: string;
    editorId?: string;
    onHeightChange?: (height: number) => void;
    onChange?: (data: IDocumentData, str: string) => void;
    maxHeight?: number;
    defaultHeight?: number;
    icon?: ReactNode;
    editorRef?: RefObject<Editor | null> | ((editor: Editor | null) => void);
}
export declare const RichTextEditor: (props: IRichTextEditorProps) => import("react/jsx-runtime").JSX.Element;
