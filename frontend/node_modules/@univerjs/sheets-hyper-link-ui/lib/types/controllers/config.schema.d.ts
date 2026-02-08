import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY = "sheets-hyper-link-ui.config";
export declare const configSymbol: unique symbol;
export interface IUrlHandler {
    navigateToOtherWebsite?: (url: string) => void;
}
export interface IUniverSheetsHyperLinkUIConfig {
    menu?: MenuConfig;
    urlHandler?: IUrlHandler;
}
export declare const defaultPluginConfig: IUniverSheetsHyperLinkUIConfig;
