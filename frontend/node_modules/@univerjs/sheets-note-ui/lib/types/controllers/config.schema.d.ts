import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_NOTE_UI_PLUGIN_CONFIG_KEY = "sheets-note-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsNoteUIConfig {
    menu?: MenuConfig;
    defaultNoteSize?: {
        width: number;
        height: number;
    };
}
export declare const defaultPluginConfig: IUniverSheetsNoteUIConfig;
