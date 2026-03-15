import * as Components from 'vuetify/components';
import * as Directives from 'vuetify/directives';

declare function generateImports(source: string, options: Options): {
    code: string;
    source: string;
};

interface Options {
    autoImport?: ImportPluginOptions;
    styles?: true | 'none' | 'sass' | {
        configFile: string;
    };
}
interface ObjectImportPluginOptions {
    labs?: boolean;
    ignore?: (keyof typeof Components | keyof typeof Directives)[];
}
type ImportPluginOptions = boolean | ObjectImportPluginOptions;

declare function resolveVuetifyBase(): string;
declare function isObject(value: any): value is object;
declare function includes(arr: any[], val: any): boolean;
declare function normalizePath(p: string): string;
declare function toKebabCase(str?: string): string;
declare const transformAssetUrls: Record<string, string[]>;

export { type ImportPluginOptions, type ObjectImportPluginOptions, type Options, generateImports, includes, isObject, normalizePath, resolveVuetifyBase, toKebabCase, transformAssetUrls };
