// Types
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { VSliderTrack } from './VSliderTrack.js';
export type Tick = {
    value: number;
    position: number;
    label?: string;
};
type SliderProvide = {
    activeThumbRef: Ref<HTMLElement | undefined>;
    color: Ref<string | undefined>;
    decimals: Ref<number>;
    direction: Ref<'vertical' | 'horizontal'>;
    disabled: Ref<boolean>;
    elevation: Ref<number | string | undefined>;
    min: Ref<number>;
    max: Ref<number>;
    mousePressed: Ref<boolean>;
    noKeyboard: Ref<boolean>;
    numTicks: Ref<number>;
    onSliderMousedown: (e: MouseEvent) => void;
    onSliderTouchstart: (e: TouchEvent) => void;
    parseMouseMove: (e: MouseEvent | TouchEvent) => number | void;
    position: (val: number) => number;
    readonly: Ref<boolean>;
    rounded: Ref<boolean | number | string | undefined>;
    roundValue: (value: number) => number;
    thumbLabel: Ref<boolean | string | undefined>;
    showTicks: Ref<boolean | 'always'>;
    startOffset: Ref<number>;
    step: Ref<number>;
    thumbSize: Ref<number>;
    thumbColor: Ref<string | undefined>;
    thumbLabelColor: Ref<string | undefined>;
    trackColor: Ref<string | undefined>;
    trackFillColor: Ref<string | undefined>;
    trackSize: Ref<number>;
    ticks: Ref<readonly number[] | Record<string, string> | undefined>;
    tickSize: Ref<number>;
    trackContainerRef: Ref<VSliderTrack | undefined>;
    vertical: Ref<boolean>;
    parsedTicks: Ref<Tick[]>;
    hasLabels: Ref<boolean>;
    isReversed: Ref<boolean>;
    indexFromEnd: Ref<boolean>;
};
export declare const VSliderSymbol: InjectionKey<SliderProvide>;
export declare function getOffset(e: MouseEvent | TouchEvent, el: HTMLElement, direction: string): number;
export declare const makeSliderProps: <Defaults extends {
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    disabled?: unknown;
    error?: unknown;
    readonly?: unknown;
    max?: unknown;
    min?: unknown;
    step?: unknown;
    thumbColor?: unknown;
    thumbLabel?: unknown;
    thumbSize?: unknown;
    showTicks?: unknown;
    ticks?: unknown;
    tickSize?: unknown;
    color?: unknown;
    trackColor?: unknown;
    trackFillColor?: unknown;
    trackSize?: unknown;
    direction?: unknown;
    reverse?: unknown;
    noKeyboard?: unknown;
    ripple?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    elevation: unknown extends Defaults["elevation"] ? Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : Defaults["disabled"] | NonNullable<boolean | null>;
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : Defaults["readonly"] | NonNullable<boolean | null>;
    };
    max: unknown extends Defaults["max"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    min: unknown extends Defaults["min"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : Defaults["min"] | NonNullable<string | number>;
    };
    step: unknown extends Defaults["step"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["step"] ? string | number : string | number | Defaults["step"]>;
        default: unknown extends Defaults["step"] ? string | number : Defaults["step"] | NonNullable<string | number>;
    };
    thumbColor: unknown extends Defaults["thumbColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"]>;
        default: unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"];
    };
    thumbLabel: unknown extends Defaults["thumbLabel"] ? {
        type: PropType<"always" | boolean | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"always" | boolean | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["thumbLabel"] ? "always" | boolean | undefined : "always" | boolean | Defaults["thumbLabel"] | undefined>;
        default: unknown extends Defaults["thumbLabel"] ? "always" | boolean | undefined : Defaults["thumbLabel"] | NonNullable<"always" | boolean | undefined>;
    };
    thumbSize: unknown extends Defaults["thumbSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["thumbSize"] ? string | number : string | number | Defaults["thumbSize"]>;
        default: unknown extends Defaults["thumbSize"] ? string | number : Defaults["thumbSize"] | NonNullable<string | number>;
    };
    showTicks: unknown extends Defaults["showTicks"] ? {
        type: PropType<"always" | boolean>;
        default: boolean;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"always" | boolean>;
        default: boolean;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showTicks"] ? "always" | boolean : "always" | boolean | Defaults["showTicks"]>;
        default: unknown extends Defaults["showTicks"] ? "always" | boolean : Defaults["showTicks"] | NonNullable<"always" | boolean>;
    };
    ticks: unknown extends Defaults["ticks"] ? {
        type: PropType<readonly number[] | Record<number, string>>;
    } : Omit<{
        type: PropType<readonly number[] | Record<number, string>>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : readonly number[] | Record<number, string> | Defaults["ticks"]>;
        default: unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : Defaults["ticks"] | NonNullable<readonly number[] | Record<number, string>>;
    };
    tickSize: unknown extends Defaults["tickSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tickSize"] ? string | number : string | number | Defaults["tickSize"]>;
        default: unknown extends Defaults["tickSize"] ? string | number : Defaults["tickSize"] | NonNullable<string | number>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
    };
    trackFillColor: unknown extends Defaults["trackFillColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"]>;
        default: unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"];
    };
    trackSize: unknown extends Defaults["trackSize"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["trackSize"] ? string | number : string | number | Defaults["trackSize"]>;
        default: unknown extends Defaults["trackSize"] ? string | number : Defaults["trackSize"] | NonNullable<string | number>;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    noKeyboard: unknown extends Defaults["noKeyboard"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noKeyboard"] ? boolean : boolean | Defaults["noKeyboard"]>;
        default: unknown extends Defaults["noKeyboard"] ? boolean : boolean | Defaults["noKeyboard"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"]>;
        default: unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"];
    };
};
type SliderProps = ExtractPropTypes<ReturnType<typeof makeSliderProps>>;
type SliderData = {
    value: number;
};
export declare const useSteps: (props: SliderProps) => {
    min: import("vue").ComputedRef<number>;
    max: import("vue").ComputedRef<number>;
    step: import("vue").ComputedRef<number>;
    decimals: import("vue").ComputedRef<number>;
    roundValue: (value: string | number) => number;
};
export declare const useSlider: ({ props, steps, onSliderStart, onSliderMove, onSliderEnd, getActiveThumb, }: {
    props: SliderProps;
    steps: {
        min: import("vue").ComputedRef<number>;
        max: import("vue").ComputedRef<number>;
        step: import("vue").ComputedRef<number>;
        decimals: import("vue").ComputedRef<number>;
        roundValue: (value: string | number) => number;
    };
    onSliderEnd: (data: SliderData) => void;
    onSliderStart: (data: SliderData) => void;
    onSliderMove: (data: SliderData) => void;
    getActiveThumb: (e: MouseEvent | TouchEvent) => HTMLElement;
}) => SliderProvide;

