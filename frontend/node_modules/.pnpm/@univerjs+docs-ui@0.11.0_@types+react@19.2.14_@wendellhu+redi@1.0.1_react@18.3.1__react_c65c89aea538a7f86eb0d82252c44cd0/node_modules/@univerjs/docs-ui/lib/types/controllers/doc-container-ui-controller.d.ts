import { DocContainer } from '../views/doc-container/DocContainer';
import { IUniverDocsUIConfig } from './config.schema';
import { IConfigService, Injector, LocaleService } from '@univerjs/core';
export declare class DocContainerUIController {
    private readonly _localeService;
    private readonly _injector;
    private readonly _configService;
    private _docContainer?;
    constructor(_localeService: LocaleService, _injector: Injector, _configService: IConfigService);
    getUIConfig(): {
        injector: Injector;
        config: import('@univerjs/core').Nullable<IUniverDocsUIConfig>;
        changeLocale: (locale: string) => void;
        getComponent: (ref: DocContainer) => void;
    };
    getComponent: (ref: DocContainer) => void;
    /**
     * Change language
     * @param {string} lang new language
     *
     * e: {target: HTMLSelectElement } reference from  https://stackoverflow.com/a/48443771
     *
     */
    changeLocale: (locale: string) => void;
    getContentRef(): import('react').RefObject<HTMLDivElement | null>;
    UIDidMount(cb: Function): any;
    getDocContainer(): DocContainer | undefined;
}
