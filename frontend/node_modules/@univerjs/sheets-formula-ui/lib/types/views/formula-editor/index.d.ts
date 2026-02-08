import { IKeyboardEventConfig } from '@univerjs/docs-ui';
import { KeyCode, MetaKeys } from '@univerjs/ui';
import { CSSProperties, ReactNode } from 'react';
import { FormulaSelectingType } from './hooks/use-formula-selection';
export interface IFormulaEditorProps {
    unitId: string;
    subUnitId: string;
    initValue: `=${string}`;
    autofocus?: boolean;
    onChange: (text: string) => void;
    errorText?: string | ReactNode;
    onVerify?: (res: boolean, result: string) => void;
    isFocus?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    isSupportAcrossSheet?: boolean;
    className?: string;
    editorId?: string;
    moveCursor?: boolean;
    onFormulaSelectingChange?: (isSelecting: FormulaSelectingType, isFocusing: boolean) => void;
    keyboardEventConfig?: IKeyboardEventConfig;
    onMoveInEditor?: (keyCode: KeyCode, metaKey?: MetaKeys) => void;
    resetSelectionOnBlur?: boolean;
    isSingle?: boolean;
    autoScrollbar?: boolean;
    /**
     * Disable selection when click formula editor
     */
    disableSelectionOnClick?: boolean;
    disableContextMenu?: boolean;
    style?: CSSProperties;
}
export interface IFormulaEditorRef {
    isClickOutSide: (e: MouseEvent) => boolean;
}
export declare const FormulaEditor: import('react').ForwardRefExoticComponent<IFormulaEditorProps & import('react').RefAttributes<IFormulaEditorRef>>;
