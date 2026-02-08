import { FC } from 'react';
export interface ISheetNumfmtPanelProps {
    value: {
        defaultValue: number;
        defaultPattern: string;
        row: number;
        col: number;
    };
    onChange: (config: {
        type: 'change' | 'cancel' | 'confirm';
        value: string;
    }) => void;
}
export declare const SheetNumfmtPanel: FC<ISheetNumfmtPanelProps>;
