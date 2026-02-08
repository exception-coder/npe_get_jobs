// Types
import type { InjectionKey, PropType, Ref } from 'vue';
export declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"]; // no xs
export type Breakpoint = typeof breakpoints[number];
export type DisplayBreakpoint = 'xs' | Breakpoint;
export type DisplayThresholds = {
    [key in DisplayBreakpoint]: number;
};
export interface DisplayProps {
    mobile?: boolean | null;
    mobileBreakpoint?: number | DisplayBreakpoint;
}
export interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
export interface InternalDisplayOptions {
    mobileBreakpoint: number | DisplayBreakpoint;
    thresholds: DisplayThresholds;
}
export type SSROptions = boolean | {
    clientWidth: number;
    clientHeight?: number;
};
export interface DisplayPlatform {
    android: boolean;
    ios: boolean;
    cordova: boolean;
    electron: boolean;
    chrome: boolean;
    edge: boolean;
    firefox: boolean;
    opera: boolean;
    win: boolean;
    mac: boolean;
    linux: boolean;
    touch: boolean;
    ssr: boolean;
}
export interface DisplayInstance {
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobile: Ref<boolean>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    /** @internal */
    ssr: boolean;
    update(): void;
}
export declare const DisplaySymbol: InjectionKey<DisplayInstance>;
export declare function createDisplay(options?: DisplayOptions, ssr?: SSROptions): DisplayInstance;
export declare const makeDisplayProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | DisplayBreakpoint>;
    };
};
export declare function useDisplay(props?: DisplayProps, name?: string): {
    xs: Ref<boolean, boolean>;
    sm: Ref<boolean, boolean>;
    md: Ref<boolean, boolean>;
    lg: Ref<boolean, boolean>;
    xl: Ref<boolean, boolean>;
    xxl: Ref<boolean, boolean>;
    smAndUp: Ref<boolean, boolean>;
    mdAndUp: Ref<boolean, boolean>;
    lgAndUp: Ref<boolean, boolean>;
    xlAndUp: Ref<boolean, boolean>;
    smAndDown: Ref<boolean, boolean>;
    mdAndDown: Ref<boolean, boolean>;
    lgAndDown: Ref<boolean, boolean>;
    xlAndDown: Ref<boolean, boolean>;
    name: Ref<DisplayBreakpoint, DisplayBreakpoint>;
    height: Ref<number, number>;
    width: Ref<number, number>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint, number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform, DisplayPlatform>;
    thresholds: Ref<DisplayThresholds, DisplayThresholds>;
    /** @internal */
    ssr: boolean;
    update(): void;
    displayClasses: Readonly<Ref<{
        [x: string]: boolean;
    }, {
        [x: string]: boolean;
    }>>;
    mobile: import("vue").ComputedRef<boolean>;
};
