import { MenuConfig } from '@univerjs/ui';
export declare const DOCS_HYPER_LINK_UI_PLUGIN_CONFIG_KEY = "docs-hyper-link-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsHyperLinkUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsHyperLinkUIConfig;
