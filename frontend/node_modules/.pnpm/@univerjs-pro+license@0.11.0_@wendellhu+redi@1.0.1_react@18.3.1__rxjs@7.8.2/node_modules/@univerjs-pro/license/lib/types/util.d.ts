export declare const WORKER_INIT_LICENSE = "worker_init_ls_key";
export declare enum EnvironmentEnum {
    NODE_MAIN = "node-main",
    NODE_WORKER = "node-worker",
    BROWSER_MAIN = "browser-main",
    BROWSER_WORKER = "browser-worker",
    UNKNOWN = "unknown"
}
export declare function getEnvironment(): EnvironmentEnum;
