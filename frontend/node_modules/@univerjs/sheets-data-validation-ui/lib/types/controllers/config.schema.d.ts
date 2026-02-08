import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_DATA_VALIDATION_UI_PLUGIN_CONFIG_KEY = "sheets-data-validation-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsDataValidationUIConfig {
    menu?: MenuConfig;
    showEditOnDropdown?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsDataValidationUIConfig;
