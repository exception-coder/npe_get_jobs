import { IDisposable } from '../../common/di';
import { Nullable } from '../../shared/types';
import { Observable } from 'rxjs';
/**
 * IConfig provides universal configuration for the whole application.
 */
export declare const IConfigService: import('@wendellhu/redi').IdentifierDecorator<IConfigService>;
interface IConfigOptions {
    /**
     * Whether the configuration is read-only.
     * Not implemented yet.
     * @ignore
     */
    readonly?: boolean;
    /**
     * Whether to merge the configuration with the existing one.
     * @default false
     */
    merge?: boolean;
}
export interface IConfigService {
    getConfig<T>(id: string | symbol): Nullable<T>;
    setConfig(id: string | symbol, value: unknown, options?: IConfigOptions): void;
    deleteConfig(id: string): boolean;
    subscribeConfigValue$<T = unknown>(key: string): Observable<T>;
}
export declare class ConfigService implements IConfigService, IDisposable {
    private _configChanged$;
    readonly configChanged$: Observable<{
        [key: string]: unknown;
    }>;
    private readonly _config;
    dispose(): void;
    getConfig<T>(id: string | symbol): Nullable<T>;
    setConfig(id: string, value: unknown, options?: IConfigOptions): void;
    deleteConfig(id: string | symbol): boolean;
    subscribeConfigValue$<T = unknown>(key: string): Observable<T>;
}
export {};
