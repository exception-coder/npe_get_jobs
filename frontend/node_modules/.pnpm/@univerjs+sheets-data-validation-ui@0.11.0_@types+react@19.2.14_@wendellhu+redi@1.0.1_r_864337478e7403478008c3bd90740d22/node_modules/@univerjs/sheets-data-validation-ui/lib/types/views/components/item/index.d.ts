import { ISheetDataValidationRule } from '@univerjs/core';
export interface IDataValidationDetailProps {
    rule: ISheetDataValidationRule;
    onClick: () => void;
    unitId: string;
    subUnitId: string;
    disable?: boolean;
}
export declare const DataValidationItem: (props: IDataValidationDetailProps) => import("react/jsx-runtime").JSX.Element;
