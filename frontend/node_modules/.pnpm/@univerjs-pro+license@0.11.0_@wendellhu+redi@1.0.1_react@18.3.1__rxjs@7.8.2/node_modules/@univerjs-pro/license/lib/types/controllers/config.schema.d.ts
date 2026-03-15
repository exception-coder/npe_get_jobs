export declare const COMMON_CONFIG_KEY = "common.config";
export declare const LS_CONFIG_KEY = "ls.config";
export declare const configSymbol: unique symbol;
export interface IUniverLicenseInputConfig {
    license?: string;
}
export interface IUniverLicenseConfig {
    ls?: string;
    pbk?: string;
    stv?: boolean;
}
export declare const defaultPluginConfig: IUniverLicenseInputConfig;
