import { DependencyOverride } from '@univerjs/core';
export declare const NETWORK_PLUGIN_CONFIG_KEY = "network.config";
export declare const configSymbol: unique symbol;
export interface IUniverNetworkConfig {
    /**
     * Use fetch instead of XMLHttpRequest. By default, Univer will use fetch on Node.js and XMLHttpRequest in browser.
     */
    useFetchImpl?: boolean;
    /**
     * Build in dependencies that can be overridden:
     *
     * - {@link HTTPService}
     * - {@link IHTTPImplementation}
     */
    override?: DependencyOverride;
    /**
     * Force to use a new instance of {@link HTTPService} and {@link IHTTPImplementation} even if
     * an ancestor injector already has them registered.
     */
    forceUseNewInstance?: boolean;
}
export declare const defaultPluginConfig: IUniverNetworkConfig;
