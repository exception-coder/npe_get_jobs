import { DependencyOverride } from '@univerjs/core';
import { MenuConfig } from '../services/menu/menu';
import { IWorkbenchOptions } from './ui/ui.controller';
export declare const UI_PLUGIN_CONFIG_KEY = "ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverUIConfig extends IWorkbenchOptions {
    /** Disable auto focus when Univer bootstraps. */
    disableAutoFocus?: true;
    override?: DependencyOverride;
    menu?: MenuConfig;
    popupRootId?: string;
    /**
     * The fallback avatar for user.
     */
    avatarFallback?: string;
}
export declare const defaultPluginConfig: IUniverUIConfig;
