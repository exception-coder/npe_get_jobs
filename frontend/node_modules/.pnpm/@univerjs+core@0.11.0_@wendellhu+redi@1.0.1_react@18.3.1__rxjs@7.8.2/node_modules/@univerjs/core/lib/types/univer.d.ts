import { Theme } from '@univerjs/themes';
import { IDisposable, Injector } from './common/di';
import { UnitModel, UnitType } from './common/unit';
import { LogLevel } from './services/log/log.service';
import { DependencyOverride } from './services/plugin/plugin-override';
import { Plugin, PluginCtor } from './services/plugin/plugin.service';
import { ILocales } from './shared';
import { IWorkbookData } from './sheets/typedef';
import { LocaleType } from './types/enum/locale-type';
import { IDocumentData, ISlideData } from './types/interfaces';
import { DocumentDataModel } from './docs/data-model/document-data-model';
import { Workbook } from './sheets/workbook';
import { SlideDataModel } from './slides/slide-model';
export interface IUniverConfig {
    /**
     * The theme of the Univer instance, default using the default theme.
     */
    theme?: Theme;
    /**
     * Whether to use dark mode.
     * @default false
     */
    darkMode?: boolean;
    /**
     * The locale of the Univer instance.
     */
    locale?: LocaleType;
    /**
     * The locales to be used
     */
    locales?: ILocales;
    /**
     * The log level of the Univer instance.
     */
    logLevel?: LogLevel;
    /**
     * The override dependencies of the Univer instance.
     */
    override?: DependencyOverride;
}
/**
 * @hideconstructor
 */
export declare class Univer implements IDisposable {
    private _startedTypes;
    private _injector;
    private get _univerInstanceService();
    private get _pluginService();
    private _disposingCallbacks;
    /**
     * Create a Univer instance.
     * @param config Configuration data for Univer
     * @param parentInjector An optional parent injector of the Univer injector. For more information, see https://redi.wendell.fun/docs/hierarchy.
     */
    constructor(config?: Partial<IUniverConfig>, parentInjector?: Injector);
    /**
     * @ignore
     */
    __getInjector(): Injector;
    /**
     * Register a callback function which will be called when this Univer instance is disposing.
     *
     * @ignore
     *
     * @param callback The callback function.
     * @returns To remove this callback function from this Univer instance's on disposing list.
     */
    onDispose(callback: () => void): IDisposable;
    dispose(): void;
    setLocale(locale: LocaleType): void;
    createUnit<T, U extends UnitModel>(type: UnitType, data: Partial<T>): U;
    /**
     * Create a univer sheet instance with internal dependency injection.
     *
     * @deprecated use `createUnit` instead
     */
    createUniverSheet(data: Partial<IWorkbookData>): Workbook;
    /**
     * @deprecated use `createUnit` instead
     */
    createUniverDoc(data: Partial<IDocumentData>): DocumentDataModel;
    /**
     * @deprecated use `createUnit` instead
     */
    createUniverSlide(data: Partial<ISlideData>): SlideDataModel;
    private _init;
    private _tryProgressToReady;
    /** Register a plugin into univer. */
    registerPlugin<T extends PluginCtor<Plugin>>(plugin: T, config?: ConstructorParameters<T>[0]): void;
    /**
     * Register multiple plugins into univer.
     * @param plugins An array of tuples, where each tuple contains a plugin constructor and its optional configuration.
     */
    registerPlugins<T extends readonly (readonly [PluginCtor<Plugin>] | readonly [PluginCtor<Plugin>, unknown])[]>(plugins: {
        readonly [K in keyof T]: T[K] extends readonly [infer P] ? P extends PluginCtor<Plugin> ? readonly [P] : T[K] : T[K] extends readonly [infer P, unknown] ? P extends PluginCtor<Plugin> ? readonly [P, ConstructorParameters<P>[0]?] : T[K] : T[K];
    }): void;
}
