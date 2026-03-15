import { Plugin } from 'vite';
import { Options } from '@vuetify/loader-shared';
export { transformAssetUrls } from '@vuetify/loader-shared';

declare function vuetify(_options?: Options): Plugin[];
declare namespace vuetify {
    var transformAssetUrls: Record<string, string[]>;
}

export = vuetify;
export { vuetify as default };
