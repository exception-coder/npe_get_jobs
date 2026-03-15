import { ILanguagePack, ILocales, LanguageValue } from '../../shared/locale';
import { Subject } from 'rxjs';
import { Disposable } from '../../shared/lifecycle';
import { LocaleType } from '../../types/enum/locale-type';
/**
 * This service provides i18n and timezone / location features to other modules.
 */
export declare class LocaleService extends Disposable {
    private _currentLocale$;
    readonly currentLocale$: import('rxjs').Observable<LocaleType>;
    private get _currentLocale();
    private _locales;
    localeChanged$: Subject<void>;
    constructor();
    /**
     * Load more locales after init.
     *
     * @param locales - Locale object
     */
    load(locales: ILocales): void;
    /**
     * Translate a key to the current locale
     *
     * @param {string} key the key to translate
     * @param {string[]} args optional arguments to replace in the translated string
     * @returns {string} the translated string
     *
     * @example
     * const locales = {
     *   [LocaleType.EN_US]: {
     *     foo: {
     *       bar: 'Hello'
     *    }
     * }
     * t('foo.bar') => 'Hello'
     *
     * @example
     * const locales = {
     *   [LocaleType.EN_US]: {
     *     foo: {
     *       bar: 'Hello {0}'
     *    }
     * }
     * t('foo.bar', 'World') => 'Hello World'
     */
    t: (key: string, ...args: string[]) => string;
    setLocale(locale: LocaleType): void;
    getLocales(): ILanguagePack | undefined;
    getCurrentLocale(): LocaleType;
    resolveKeyPath(obj: ILanguagePack, keys: string[]): LanguageValue | null;
}
