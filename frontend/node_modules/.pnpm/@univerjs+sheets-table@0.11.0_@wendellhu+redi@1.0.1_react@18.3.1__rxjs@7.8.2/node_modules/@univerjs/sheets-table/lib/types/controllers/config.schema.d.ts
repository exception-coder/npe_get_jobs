import { IRangeThemeStyleJSON } from '@univerjs/sheets';
import { BorderStyleTypes } from '@univerjs/core';
export interface ITableDefaultThemeStyle {
    name: string;
    style: Omit<IRangeThemeStyleJSON, 'name'>;
}
export declare const tableDefaultBorderStyle: {
    s: BorderStyleTypes;
    cl: {
        rgb: string;
    };
};
export declare const SHEETS_TABLE_PLUGIN_CONFIG_KEY = "sheets-table.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsTableConfig {
    userThemes?: ITableDefaultThemeStyle[];
    defaultThemeIndex?: number;
}
export declare const defaultPluginConfig: IUniverSheetsTableConfig;
