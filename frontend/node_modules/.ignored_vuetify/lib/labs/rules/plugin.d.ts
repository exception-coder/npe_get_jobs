// Types
import type { App } from 'vue';
import type { RulesOptions } from './rules.js';
import type { LocaleInstance } from '../../composables/locale.js';
export interface RulesPlugin {
    install: (app: App) => void;
}
export declare function createRulesPlugin(rules: RulesOptions, locale: LocaleInstance): RulesPlugin;
