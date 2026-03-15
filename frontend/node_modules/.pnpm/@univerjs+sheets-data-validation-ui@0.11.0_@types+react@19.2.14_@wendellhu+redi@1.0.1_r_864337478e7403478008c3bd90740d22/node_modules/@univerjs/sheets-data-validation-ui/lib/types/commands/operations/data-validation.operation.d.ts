import { ICommand } from '@univerjs/core';
export declare const DATA_VALIDATION_PANEL = "DataValidationPanel";
export interface IOpenValidationPanelOperationParams {
    ruleId?: string;
    isAdd?: boolean;
}
export declare const OpenValidationPanelOperation: ICommand<IOpenValidationPanelOperationParams>;
export declare const CloseValidationPanelOperation: ICommand;
export declare const ToggleValidationPanelOperation: ICommand;
export interface IShowDataValidationDropdownParams {
    unitId: string;
    subUnitId: string;
    row: number;
    column: number;
}
export declare const ShowDataValidationDropdown: ICommand<IShowDataValidationDropdownParams>;
export declare const HideDataValidationDropdown: ICommand;
