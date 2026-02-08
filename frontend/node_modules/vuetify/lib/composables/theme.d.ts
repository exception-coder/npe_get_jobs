import type { App, DeepReadonly, InjectionKey, Ref } from 'vue';
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type ThemeOptions = false | {
    cspNonce?: string;
    defaultTheme?: 'light' | 'dark' | 'system' | (string & {});
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
    stylesheetId?: string;
    scope?: string;
    unimportant?: boolean;
};
export type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
export interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}
export interface ThemeInstance {
    change: (themeName: string) => void;
    cycle: (themeArray?: string[]) => void;
    toggle: (themeArray?: [string, string]) => void;
    readonly isDisabled: boolean;
    readonly isSystem: Readonly<Ref<boolean>>;
    readonly themes: Ref<Record<string, InternalThemeDefinition>>;
    readonly name: Readonly<Ref<string>>;
    readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
    readonly prefix: string;
    readonly themeClasses: Readonly<Ref<string | undefined>>;
    readonly styles: Readonly<Ref<string>>;
    readonly global: {
        readonly name: Ref<string>;
        readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    };
}
export declare const ThemeSymbol: InjectionKey<ThemeInstance>;
export declare const makeThemeProps: <Defaults extends {
    theme?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
};
// Composables
export declare function createTheme(options?: ThemeOptions): ThemeInstance & {
    install: (app: App) => void;
};
export declare function provideTheme(props: {
    theme?: string;
}): ThemeInstance;
export declare function useTheme(): ThemeInstance;

