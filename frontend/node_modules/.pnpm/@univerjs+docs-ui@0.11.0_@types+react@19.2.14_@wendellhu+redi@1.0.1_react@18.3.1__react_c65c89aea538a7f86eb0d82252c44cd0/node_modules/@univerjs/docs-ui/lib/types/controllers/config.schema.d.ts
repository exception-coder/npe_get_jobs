import { DependencyOverride } from '@univerjs/core';
import { MenuConfig } from '@univerjs/ui';
import { ILayout } from '../basics';
export declare const DOCS_UI_PLUGIN_CONFIG_KEY = "docs-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsUIConfig {
    menu?: MenuConfig;
    container?: HTMLElement | string;
    layout?: ILayout;
    override?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverDocsUIConfig;
