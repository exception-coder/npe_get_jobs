// Styles

// Types
import type { PropType } from 'vue';
import type { Period, VTimePickerViewMode } from './shared.js';
export declare const makeVTimePickerControlsProps: <Defaults extends {
    allowedHours?: unknown;
    allowedMinutes?: unknown;
    allowedSeconds?: unknown;
    max?: unknown;
    min?: unknown;
    ampm?: unknown;
    color?: unknown;
    disabled?: unknown;
    inputHints?: unknown;
    hour?: unknown;
    minute?: unknown;
    second?: unknown;
    period?: unknown;
    readonly?: unknown;
    useSeconds?: unknown;
    value?: unknown;
    viewMode?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    allowedHours: unknown extends Defaults["allowedHours"] ? PropType<import("./useTimeValidation.js").AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedHours"] ? import("./useTimeValidation.js").AllowFunction | number[] : import("./useTimeValidation.js").AllowFunction | number[] | Defaults["allowedHours"]>;
        default: unknown extends Defaults["allowedHours"] ? import("./useTimeValidation.js").AllowFunction | number[] : Defaults["allowedHours"] | NonNullable<import("./useTimeValidation.js").AllowFunction | number[]>;
    };
    allowedMinutes: unknown extends Defaults["allowedMinutes"] ? PropType<import("./useTimeValidation.js").AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedMinutes"] ? import("./useTimeValidation.js").AllowFunction | number[] : import("./useTimeValidation.js").AllowFunction | number[] | Defaults["allowedMinutes"]>;
        default: unknown extends Defaults["allowedMinutes"] ? import("./useTimeValidation.js").AllowFunction | number[] : Defaults["allowedMinutes"] | NonNullable<import("./useTimeValidation.js").AllowFunction | number[]>;
    };
    allowedSeconds: unknown extends Defaults["allowedSeconds"] ? PropType<import("./useTimeValidation.js").AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedSeconds"] ? import("./useTimeValidation.js").AllowFunction | number[] : import("./useTimeValidation.js").AllowFunction | number[] | Defaults["allowedSeconds"]>;
        default: unknown extends Defaults["allowedSeconds"] ? import("./useTimeValidation.js").AllowFunction | number[] : Defaults["allowedSeconds"] | NonNullable<import("./useTimeValidation.js").AllowFunction | number[]>;
    };
    max: unknown extends Defaults["max"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["max"] ? string : string | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string : string | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["min"] ? string : string | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string : string | Defaults["min"];
    };
    ampm: unknown extends Defaults["ampm"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"]>;
        default: unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    inputHints: unknown extends Defaults["inputHints"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inputHints"] ? boolean : boolean | Defaults["inputHints"]>;
        default: unknown extends Defaults["inputHints"] ? boolean : boolean | Defaults["inputHints"];
    };
    hour: unknown extends Defaults["hour"] ? PropType<string | number | null> : {
        type: PropType<unknown extends Defaults["hour"] ? string | number | null : string | number | Defaults["hour"] | null>;
        default: unknown extends Defaults["hour"] ? string | number | null : Defaults["hour"] | NonNullable<string | number | null>;
    };
    minute: unknown extends Defaults["minute"] ? PropType<string | number | null> : {
        type: PropType<unknown extends Defaults["minute"] ? string | number | null : string | number | Defaults["minute"] | null>;
        default: unknown extends Defaults["minute"] ? string | number | null : Defaults["minute"] | NonNullable<string | number | null>;
    };
    second: unknown extends Defaults["second"] ? PropType<string | number | null> : {
        type: PropType<unknown extends Defaults["second"] ? string | number | null : string | number | Defaults["second"] | null>;
        default: unknown extends Defaults["second"] ? string | number | null : Defaults["second"] | NonNullable<string | number | null>;
    };
    period: unknown extends Defaults["period"] ? PropType<Period> : {
        type: PropType<unknown extends Defaults["period"] ? Period : Defaults["period"] | Period>;
        default: unknown extends Defaults["period"] ? Period : Defaults["period"] | NonNullable<Period>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    useSeconds: unknown extends Defaults["useSeconds"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"]>;
        default: unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"];
    };
    value: unknown extends Defaults["value"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["value"] ? number : number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? number : number | Defaults["value"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? PropType<VTimePickerViewMode> : {
        type: PropType<unknown extends Defaults["viewMode"] ? VTimePickerViewMode : Defaults["viewMode"] | VTimePickerViewMode>;
        default: unknown extends Defaults["viewMode"] ? VTimePickerViewMode : Defaults["viewMode"] | NonNullable<VTimePickerViewMode>;
    };
};
export declare const VTimePickerControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        ampm: boolean;
        disabled: boolean;
        inputHints: boolean;
        readonly: boolean;
        useSeconds: boolean;
    } & {
        allowedHours?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        allowedMinutes?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        allowedSeconds?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        max?: string | undefined;
        min?: string | undefined;
        color?: string | undefined;
        hour?: string | number | null | undefined;
        minute?: string | number | null | undefined;
        second?: string | number | null | undefined;
        period?: Period | undefined;
        value?: number | undefined;
        viewMode?: VTimePickerViewMode | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:hour"?: ((v: number) => any) | undefined;
        "onUpdate:minute"?: ((v: number) => any) | undefined;
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:second"?: ((v: number) => any) | undefined;
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:period": (data: Period) => true;
        "update:viewMode": (data: VTimePickerViewMode) => true;
        "update:hour": (v: number) => true;
        "update:minute": (v: number) => true;
        "update:second": (v: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        ampm: boolean;
        disabled: boolean;
        inputHints: boolean;
        readonly: boolean;
        useSeconds: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        ampm: boolean;
        disabled: boolean;
        inputHints: boolean;
        readonly: boolean;
        useSeconds: boolean;
    } & {
        allowedHours?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        allowedMinutes?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        allowedSeconds?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
        max?: string | undefined;
        min?: string | undefined;
        color?: string | undefined;
        hour?: string | number | null | undefined;
        minute?: string | number | null | undefined;
        second?: string | number | null | undefined;
        period?: Period | undefined;
        value?: number | undefined;
        viewMode?: VTimePickerViewMode | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:hour"?: ((v: number) => any) | undefined;
        "onUpdate:minute"?: ((v: number) => any) | undefined;
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:second"?: ((v: number) => any) | undefined;
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
    }, {}, {}, {}, {}, {
        ampm: boolean;
        disabled: boolean;
        inputHints: boolean;
        readonly: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    ampm: boolean;
    disabled: boolean;
    inputHints: boolean;
    readonly: boolean;
    useSeconds: boolean;
} & {
    allowedHours?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
    allowedMinutes?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
    allowedSeconds?: import("./useTimeValidation.js").AllowFunction | number[] | undefined;
    max?: string | undefined;
    min?: string | undefined;
    color?: string | undefined;
    hour?: string | number | null | undefined;
    minute?: string | number | null | undefined;
    second?: string | number | null | undefined;
    period?: Period | undefined;
    value?: number | undefined;
    viewMode?: VTimePickerViewMode | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:hour"?: ((v: number) => any) | undefined;
    "onUpdate:minute"?: ((v: number) => any) | undefined;
    "onUpdate:period"?: ((data: Period) => any) | undefined;
    "onUpdate:second"?: ((v: number) => any) | undefined;
    "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:period": (data: Period) => true;
    "update:viewMode": (data: VTimePickerViewMode) => true;
    "update:hour": (v: number) => true;
    "update:minute": (v: number) => true;
    "update:second": (v: number) => true;
}, string, {
    ampm: boolean;
    disabled: boolean;
    inputHints: boolean;
    readonly: boolean;
    useSeconds: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    allowedHours: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    allowedMinutes: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    allowedSeconds: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    max: StringConstructor;
    min: StringConstructor;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    inputHints: BooleanConstructor;
    hour: PropType<string | number | null>;
    minute: PropType<string | number | null>;
    second: PropType<string | number | null>;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}, import("vue").ExtractPropTypes<{
    allowedHours: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    allowedMinutes: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    allowedSeconds: PropType<import("./useTimeValidation.js").AllowFunction | number[]>;
    max: StringConstructor;
    min: StringConstructor;
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    inputHints: BooleanConstructor;
    hour: PropType<string | number | null>;
    minute: PropType<string | number | null>;
    second: PropType<string | number | null>;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}>>;
export type VTimePickerControls = InstanceType<typeof VTimePickerControls>;
