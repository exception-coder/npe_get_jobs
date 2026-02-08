import { IUnitRangeName, Nullable } from '@univerjs/core';
import { Editor, IRichTextEditorProps } from '@univerjs/docs-ui';
import { ISelectionWithStyle } from '@univerjs/sheets';
export interface IRangeSelectorInstance {
    editor: Nullable<Editor>;
    blur: () => void;
    focus: () => void;
    showDialog: (ranges: IUnitRangeName[]) => void;
    hideDialog: () => void;
    verify: () => boolean;
    getValue: () => string;
}
export interface IRangeSelectorProps extends IRichTextEditorProps {
    unitId: string;
    subUnitId: string;
    maxRangeCount?: number;
    supportAcrossSheet?: boolean;
    /**
     * always return range ref with sheet name, default: false
     */
    keepSheetReference?: boolean;
    selectorRef?: React.RefObject<IRangeSelectorInstance | null>;
    onVerify?: (res: boolean, rangeText: string) => void;
    onRangeSelectorDialogVisibleChange?: (visible: boolean) => void;
    hideEditor?: boolean;
    forceShowDialogWhenSelectionChanged?: boolean;
    resetRange?: ISelectionWithStyle[];
}
export interface IRangeSelectorDialogProps {
    visible: boolean;
    initialValue: IUnitRangeName[];
    unitId: string;
    subUnitId: string;
    maxRangeCount?: number;
    supportAcrossSheet?: boolean;
    keepSheetReference?: boolean;
    onConfirm: (ranges: IUnitRangeName[]) => void;
    onClose: () => void;
    onShowBySelection?: (ranges: IUnitRangeName[]) => boolean;
}
export declare function RangeSelectorDialog(props: IRangeSelectorDialogProps): import("react/jsx-runtime").JSX.Element;
export declare function parseRanges(rangeString: string): IUnitRangeName[];
export declare function stringifyRanges(ranges: IUnitRangeName[]): string;
export declare function RangeSelector(props: IRangeSelectorProps): import("react/jsx-runtime").JSX.Element;
