import type { I18n, useI18n } from 'vue-i18n';
import type { LocaleInstance } from '../../composables/locale.js';
type VueI18nAdapterParams = {
    i18n: I18n<any, {}, {}, string, false>;
    useI18n: typeof useI18n;
};
export declare function createVueI18nAdapter({ i18n, useI18n }: VueI18nAdapterParams): LocaleInstance;

