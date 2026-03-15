// Styles

// Types
import type { PropType } from 'vue';
import type { VTimePickerViewMode } from './shared.js';
type Period = 'am' | 'pm';
export declare const makeVTimePickerControlsProps: <Defaults extends {
    ampm?: unknown;
    color?: unknown;
    disabled?: unknown;
    hour?: unknown;
    minute?: unknown;
    second?: unknown;
    period?: unknown;
    readonly?: unknown;
    useSeconds?: unknown;
    value?: unknown;
    viewMode?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    hour: unknown extends Defaults["hour"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["hour"] ? number : number | Defaults["hour"]>;
        default: unknown extends Defaults["hour"] ? number : number | Defaults["hour"];
    };
    minute: unknown extends Defaults["minute"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["minute"] ? number : number | Defaults["minute"]>;
        default: unknown extends Defaults["minute"] ? number : number | Defaults["minute"];
    };
    second: unknown extends Defaults["second"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["second"] ? number : number | Defaults["second"]>;
        default: unknown extends Defaults["second"] ? number : number | Defaults["second"];
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
        readonly: boolean;
        useSeconds: boolean;
    } & {
        color?: string | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
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
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:period": (data: Period) => true;
        "update:viewMode": (data: VTimePickerViewMode) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        ampm: boolean;
        disabled: boolean;
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
        readonly: boolean;
        useSeconds: boolean;
    } & {
        color?: string | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
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
        "onUpdate:period"?: ((data: Period) => any) | undefined;
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
    }, {}, {}, {}, {}, {
        ampm: boolean;
        disabled: boolean;
        readonly: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    ampm: boolean;
    disabled: boolean;
    readonly: boolean;
    useSeconds: boolean;
} & {
    color?: string | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    second?: number | undefined;
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
    "onUpdate:period"?: ((data: Period) => any) | undefined;
    "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:period": (data: Period) => true;
    "update:viewMode": (data: VTimePickerViewMode) => true;
}, string, {
    ampm: boolean;
    disabled: boolean;
    readonly: boolean;
    useSeconds: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}, import("vue").ExtractPropTypes<{
    ampm: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}>>;
export type VTimePickerControls = InstanceType<typeof VTimePickerControls>;

