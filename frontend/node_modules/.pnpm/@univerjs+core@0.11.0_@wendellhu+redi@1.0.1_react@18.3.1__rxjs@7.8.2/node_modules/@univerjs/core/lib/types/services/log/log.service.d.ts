import { Disposable } from '../../shared/lifecycle';
export declare enum LogLevel {
    SILENT = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    VERBOSE = 4
}
type ArgsType = any[];
export interface ILogService {
    debug(...args: ArgsType): void;
    log(...args: ArgsType): void;
    warn(...args: ArgsType): void;
    error(...args: ArgsType): void;
    deprecate(...args: ArgsType): void;
    setLogLevel(enabled: LogLevel): void;
}
export declare const ILogService: import('@wendellhu/redi').IdentifierDecorator<ILogService>;
export declare class DesktopLogService extends Disposable implements ILogService {
    private _logLevel;
    private _deduction;
    dispose(): void;
    debug(...args: ArgsType): void;
    log(...args: ArgsType): void;
    warn(...args: ArgsType): void;
    error(...args: ArgsType): void;
    deprecate(...args: ArgsType): void;
    setLogLevel(logLevel: LogLevel): void;
    private _log;
    private _logWithDeduplication;
}
export {};
