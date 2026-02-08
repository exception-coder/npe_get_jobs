import { Nullable } from '@univerjs/core';
import { Editor, IRichTextEditorProps } from '@univerjs/docs-ui';
export interface IRangeSelectorInstance {
    editor: Nullable<Editor>;
    blur: () => void;
    focus: () => void;
    changePopupVisible: (visible: boolean) => void;
    verify: () => boolean;
}
export interface IRangeSelectorProps extends IRichTextEditorProps {
    unitId: string;
    subUnitId: string;
    maxRangeCount?: number;
    supportAcrossSheet?: boolean;
    selectorRef?: React.RefObject<IRangeSelectorInstance>;
    onVerify?: (res: boolean, rangeText: string) => void;
    onRangeSelectorDialogVisibleChange?: (visible: boolean) => void;
}
