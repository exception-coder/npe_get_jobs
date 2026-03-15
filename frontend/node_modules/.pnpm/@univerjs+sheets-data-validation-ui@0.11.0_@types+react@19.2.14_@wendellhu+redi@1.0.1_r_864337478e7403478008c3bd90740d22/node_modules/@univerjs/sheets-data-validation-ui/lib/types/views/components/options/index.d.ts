import { IDataValidationRuleOptions } from '@univerjs/core';
export interface IDataValidationOptionsParams {
    value: IDataValidationRuleOptions;
    onChange: (value: IDataValidationRuleOptions) => void;
    extraComponent?: string;
}
export declare function DataValidationOptions(props: IDataValidationOptionsParams): import("react/jsx-runtime").JSX.Element;
