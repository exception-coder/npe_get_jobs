/**
 * VHotkey Component
 *
 * Purpose: Renders keyboard shortcuts in a visually consistent and accessible way.
 * This component handles the complex logic of displaying keyboard combinations
 * across different platforms (Mac vs PC) and display modes (icons, symbols, text).
 *
 * Why it exists:
 * - Provides consistent visual representation of keyboard shortcuts
 * - Handles platform-specific key differences (Cmd vs Ctrl, Option vs Alt)
 * - Supports multiple display modes for different design needs
 * - Encapsulates complex key parsing and rendering logic
 * - Used throughout the command palette for instruction display
 *
 * Key Mapping Structure:
 * The keyMap uses a simple object structure where each key has:
 * - `default`: Required configuration for all platforms
 * - `mac`: Optional Mac-specific overrides
 * Each config can specify `symbol`, `icon`, and `text` representations.
 *
 * Example:
 * ```
 * ctrl: {
 *   mac: { symbol: '⌃', icon: '$ctrl', text: 'Control' },
 *   default: { text: 'Ctrl', icon: '$ctrl' }
 * }
 * ```
 */
// Styles

// Types
import type { PropType } from 'vue';
// Display mode types for different visual representations
type DisplayMode = 'icon' | 'symbol' | 'text';
// Extended variant type that includes our custom 'contained' variant
type HotkeyVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain' | 'contained';
type KeyConfig = {
    symbol?: string;
    icon?: string;
    text: string;
};
type PlatformKeyConfig = {
    mac?: KeyConfig;
    default: KeyConfig;
};
type KeyMapConfig = Record<string, PlatformKeyConfig>;
export declare const hotkeyMap: KeyMapConfig;
export declare const makeVHotkeyProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    keys?: unknown;
    displayMode?: unknown;
    keyMap?: unknown;
    platform?: unknown;
    inline?: unknown;
    disabled?: unknown;
    prefix?: unknown;
    suffix?: unknown;
    variant?: unknown;
    color?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
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
    keys: unknown extends Defaults["keys"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["keys"] ? string : string | Defaults["keys"]>;
        default: unknown extends Defaults["keys"] ? string : string | Defaults["keys"];
    };
    displayMode: unknown extends Defaults["displayMode"] ? {
        type: PropType<DisplayMode>;
        default: string;
    } : Omit<{
        type: PropType<DisplayMode>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["displayMode"] ? DisplayMode : Defaults["displayMode"] | DisplayMode>;
        default: unknown extends Defaults["displayMode"] ? DisplayMode : Defaults["displayMode"] | NonNullable<DisplayMode>;
    };
    keyMap: unknown extends Defaults["keyMap"] ? {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    } : Omit<{
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["keyMap"] ? KeyMapConfig : KeyMapConfig | Defaults["keyMap"]>;
        default: unknown extends Defaults["keyMap"] ? KeyMapConfig : KeyMapConfig | Defaults["keyMap"];
    };
    platform: unknown extends Defaults["platform"] ? {
        type: PropType<"auto" | "mac" | "pc">;
        default: string;
    } : Omit<{
        type: PropType<"auto" | "mac" | "pc">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["platform"] ? "auto" | "mac" | "pc" : "auto" | "mac" | "pc" | Defaults["platform"]>;
        default: unknown extends Defaults["platform"] ? "auto" | "mac" | "pc" : Defaults["platform"] | NonNullable<"auto" | "mac" | "pc">;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? HotkeyVariant : Defaults["variant"] | HotkeyVariant>;
        default: unknown extends Defaults["variant"] ? HotkeyVariant : Defaults["variant"] | NonNullable<HotkeyVariant>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
};
export declare const VHotkey: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
        platform: "auto" | "mac" | "pc";
        inline: boolean;
        disabled: boolean;
        variant: HotkeyVariant;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        keys?: string | undefined;
        prefix?: string | undefined;
        suffix?: string | undefined;
        color?: string | undefined;
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
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
        platform: "auto" | "mac" | "pc";
        inline: boolean;
        disabled: boolean;
        variant: HotkeyVariant;
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
        platform: "auto" | "mac" | "pc";
        inline: boolean;
        disabled: boolean;
        variant: HotkeyVariant;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        keys?: string | undefined;
        prefix?: string | undefined;
        suffix?: string | undefined;
        color?: string | undefined;
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
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
        platform: "auto" | "mac" | "pc";
        inline: boolean;
        disabled: boolean;
        variant: HotkeyVariant;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    displayMode: DisplayMode;
    keyMap: KeyMapConfig;
    platform: "auto" | "mac" | "pc";
    inline: boolean;
    disabled: boolean;
    variant: HotkeyVariant;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    keys?: string | undefined;
    prefix?: string | undefined;
    suffix?: string | undefined;
    color?: string | undefined;
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
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    displayMode: DisplayMode;
    keyMap: KeyMapConfig;
    platform: "auto" | "mac" | "pc";
    inline: boolean;
    disabled: boolean;
    variant: HotkeyVariant;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    keys: StringConstructor;
    displayMode: {
        type: PropType<DisplayMode>;
        default: string;
    };
    keyMap: {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    };
    platform: {
        type: PropType<"auto" | "mac" | "pc">;
        default: string;
    };
    inline: BooleanConstructor;
    disabled: BooleanConstructor;
    prefix: StringConstructor;
    suffix: StringConstructor;
    variant: {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    keys: StringConstructor;
    displayMode: {
        type: PropType<DisplayMode>;
        default: string;
    };
    keyMap: {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    };
    platform: {
        type: PropType<"auto" | "mac" | "pc">;
        default: string;
    };
    inline: BooleanConstructor;
    disabled: BooleanConstructor;
    prefix: StringConstructor;
    suffix: StringConstructor;
    variant: {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
}>>;
export type VHotkey = InstanceType<typeof VHotkey>;
export type { KeyConfig, PlatformKeyConfig, KeyMapConfig, DisplayMode };
