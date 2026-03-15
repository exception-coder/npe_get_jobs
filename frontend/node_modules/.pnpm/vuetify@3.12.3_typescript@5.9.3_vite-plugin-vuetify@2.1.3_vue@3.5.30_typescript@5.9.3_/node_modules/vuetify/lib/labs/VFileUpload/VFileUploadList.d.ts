// Types
import type { PropType } from 'vue';
export type VFileUploadListSlots = {
    default: {
        files: readonly File[];
        onClickRemove: (index: number) => void;
    };
    item: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
};
export declare const makeVFileUploadListProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    density?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    color?: unknown;
    variant?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    itemType?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
    activatable?: unknown;
    selectable?: unknown;
    activeStrategy?: unknown;
    selectStrategy?: unknown;
    openStrategy?: unknown;
    opened?: unknown;
    activated?: unknown;
    selected?: unknown;
    mandatory?: unknown;
    itemsRegistration?: unknown;
    baseColor?: unknown;
    activeColor?: unknown;
    activeClass?: unknown;
    bgColor?: unknown;
    disabled?: unknown;
    filterable?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    lines?: unknown;
    slim?: unknown;
    prependGap?: unknown;
    indent?: unknown;
    nav?: unknown;
    navigationStrategy?: unknown;
    navigationIndex?: unknown;
    "onClick:open"?: unknown;
    "onClick:select"?: unknown;
    "onUpdate:opened"?: unknown;
    clearable?: unknown;
    showSize?: unknown;
    files?: unknown;
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
    border: unknown extends Defaults["border"] ? {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    } : Omit<{
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
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
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    } : Omit<Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<any[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : Defaults["itemTitle"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : Defaults["itemTitle"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemChildren"] ? import("../../util/index.js").SelectItemKey : Defaults["itemChildren"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemChildren"] ? import("../../util/index.js").SelectItemKey : Defaults["itemChildren"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : Defaults["itemProps"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : Defaults["itemProps"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemType: unknown extends Defaults["itemType"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemType"] ? import("../../util/index.js").SelectItemKey : Defaults["itemType"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemType"] ? import("../../util/index.js").SelectItemKey : Defaults["itemType"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<import("../../util/index.js").ValueComparator> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? import("../../util/index.js").ValueComparator : import("../../util/index.js").ValueComparator | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? import("../../util/index.js").ValueComparator : import("../../util/index.js").ValueComparator | Defaults["valueComparator"];
    };
    activatable: unknown extends Defaults["activatable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"]>;
        default: unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    activeStrategy: unknown extends Defaults["activeStrategy"] ? PropType<import("../../composables/nested/nested.js").ActiveStrategyProp> : {
        type: PropType<unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : Defaults["activeStrategy"] | import("../../composables/nested/nested.js").ActiveStrategyProp>;
        default: unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : Defaults["activeStrategy"] | NonNullable<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    } : Omit<{
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : Defaults["selectStrategy"] | import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : Defaults["selectStrategy"] | NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    openStrategy: unknown extends Defaults["openStrategy"] ? {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    } : Omit<{
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openStrategy"] ? import("../../composables/nested/nested.js").OpenStrategyProp : Defaults["openStrategy"] | import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: unknown extends Defaults["openStrategy"] ? import("../../composables/nested/nested.js").OpenStrategyProp : Defaults["openStrategy"] | NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    };
    opened: unknown extends Defaults["opened"] ? null : {
        type: PropType<unknown extends Defaults["opened"] ? any : any>;
        default: unknown extends Defaults["opened"] ? any : any;
    };
    activated: unknown extends Defaults["activated"] ? null : {
        type: PropType<unknown extends Defaults["activated"] ? any : any>;
        default: unknown extends Defaults["activated"] ? any : any;
    };
    selected: unknown extends Defaults["selected"] ? null : {
        type: PropType<unknown extends Defaults["selected"] ? any : any>;
        default: unknown extends Defaults["selected"] ? any : any;
    };
    mandatory: unknown extends Defaults["mandatory"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"];
    };
    itemsRegistration: unknown extends Defaults["itemsRegistration"] ? {
        type: PropType<import("../../composables/nested/nested.js").ItemsRegistrationType>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/nested/nested.js").ItemsRegistrationType>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemsRegistration"] ? import("../../composables/nested/nested.js").ItemsRegistrationType : Defaults["itemsRegistration"] | import("../../composables/nested/nested.js").ItemsRegistrationType>;
        default: unknown extends Defaults["itemsRegistration"] ? import("../../composables/nested/nested.js").ItemsRegistrationType : Defaults["itemsRegistration"] | NonNullable<import("../../composables/nested/nested.js").ItemsRegistrationType>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    filterable: unknown extends Defaults["filterable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["filterable"] ? boolean : boolean | Defaults["filterable"]>;
        default: unknown extends Defaults["filterable"] ? boolean : boolean | Defaults["filterable"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    lines: unknown extends Defaults["lines"] ? Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    } : Omit<Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : "one" | "three" | "two" | false | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : Defaults["lines"] | NonNullable<"one" | "three" | "two" | false>;
    };
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    prependGap: unknown extends Defaults["prependGap"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["prependGap"] ? string | number : string | number | Defaults["prependGap"]>;
        default: unknown extends Defaults["prependGap"] ? string | number : Defaults["prependGap"] | NonNullable<string | number>;
    };
    indent: unknown extends Defaults["indent"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["indent"] ? string | number : string | number | Defaults["indent"]>;
        default: unknown extends Defaults["indent"] ? string | number : Defaults["indent"] | NonNullable<string | number>;
    };
    nav: unknown extends Defaults["nav"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"]>;
        default: unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"];
    };
    navigationStrategy: unknown extends Defaults["navigationStrategy"] ? {
        type: PropType<"focus" | "track">;
        default: string;
    } : Omit<{
        type: PropType<"focus" | "track">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["navigationStrategy"] ? "focus" | "track" : "focus" | "track" | Defaults["navigationStrategy"]>;
        default: unknown extends Defaults["navigationStrategy"] ? "focus" | "track" : Defaults["navigationStrategy"] | NonNullable<"focus" | "track">;
    };
    navigationIndex: unknown extends Defaults["navigationIndex"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["navigationIndex"] ? number : number | Defaults["navigationIndex"]>;
        default: unknown extends Defaults["navigationIndex"] ? number : number | Defaults["navigationIndex"];
    };
    "onClick:open": unknown extends Defaults["onClick:open"] ? PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: PropType<unknown extends Defaults["onClick:open"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:open"]>;
        default: unknown extends Defaults["onClick:open"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:open"];
    };
    "onClick:select": unknown extends Defaults["onClick:select"] ? PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: PropType<unknown extends Defaults["onClick:select"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:select"]>;
        default: unknown extends Defaults["onClick:select"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:select"];
    };
    "onUpdate:opened": unknown extends Defaults["onUpdate:opened"] ? PropType<(args_0: unknown) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:opened"] ? (args_0: unknown) => void : ((args_0: unknown) => void) | Defaults["onUpdate:opened"]>;
        default: unknown extends Defaults["onUpdate:opened"] ? (args_0: unknown) => void : ((args_0: unknown) => void) | Defaults["onUpdate:opened"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
    files: unknown extends Defaults["files"] ? PropType<File[]> : {
        type: PropType<unknown extends Defaults["files"] ? File[] : File[] | Defaults["files"]>;
        default: unknown extends Defaults["files"] ? File[] : File[] | Defaults["files"];
    };
};
export declare const VFileUploadList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        items: any[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        clearable: boolean;
        showSize: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        opened?: any;
        activated?: any;
        selected?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        navigationIndex?: number | undefined;
        "onClick:open"?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onUpdate:opened"?: ((args_0: unknown) => void) | undefined;
        files?: File[] | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                files: readonly File[];
                onClickRemove: (index: number) => void;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                files: readonly File[];
                onClickRemove: (index: number) => void;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        items: any[];
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        clearable: boolean;
        showSize: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        items: any[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        clearable: boolean;
        showSize: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        opened?: any;
        activated?: any;
        selected?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        navigationIndex?: number | undefined;
        "onClick:open"?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onUpdate:opened"?: ((args_0: unknown) => void) | undefined;
        files?: File[] | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                files: readonly File[];
                onClickRemove: (index: number) => void;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                files: readonly File[];
                onClickRemove: (index: number) => void;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        border: string | number | boolean;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        items: any[];
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        clearable: boolean;
        showSize: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    border: string | number | boolean;
    density: import("../../composables/density.js").Density;
    elevation: string | number;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    items: any[];
    itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    returnObject: boolean;
    activatable: boolean;
    selectable: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
    mandatory: boolean;
    itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
    disabled: boolean;
    filterable: boolean;
    lines: "one" | "three" | "two" | false;
    slim: boolean;
    nav: boolean;
    navigationStrategy: "focus" | "track";
    clearable: boolean;
    showSize: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    valueComparator?: import("../../util/index.js").ValueComparator | undefined;
    activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
    opened?: any;
    activated?: any;
    selected?: any;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    activeClass?: string | undefined;
    bgColor?: string | undefined;
    expandIcon?: import("../../composables/icons.js").IconValue | undefined;
    collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependGap?: string | number | undefined;
    indent?: string | number | undefined;
    navigationIndex?: number | undefined;
    "onClick:open"?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    "onClick:select"?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    "onUpdate:opened"?: ((args_0: unknown) => void) | undefined;
    files?: File[] | undefined;
} & {
    $children?: {
        default?: ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        files: readonly File[];
        onClickRemove: (index: number) => void;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            files: readonly File[];
            onClickRemove: (index: number) => void;
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        files: readonly File[];
        onClickRemove: (index: number) => void;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    border: string | number | boolean;
    density: import("../../composables/density.js").Density;
    elevation: string | number;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    items: any[];
    itemTitle: import("../../util/index.js").SelectItemKey;
    itemValue: import("../../util/index.js").SelectItemKey;
    itemChildren: import("../../util/index.js").SelectItemKey;
    itemProps: import("../../util/index.js").SelectItemKey;
    itemType: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    activatable: boolean;
    selectable: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
    mandatory: boolean;
    itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
    disabled: boolean;
    filterable: boolean;
    lines: "one" | "three" | "two" | false;
    slim: boolean;
    nav: boolean;
    navigationStrategy: "focus" | "track";
    clearable: boolean;
    showSize: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        files: readonly File[];
        onClickRemove: (index: number) => void;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemType: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<import("../../util/index.js").ValueComparator>;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    openStrategy: {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
    itemsRegistration: {
        type: PropType<import("../../composables/nested/nested.js").ItemsRegistrationType>;
        default: string;
    };
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    expandIcon: PropType<import("../../composables/icons.js").IconValue>;
    collapseIcon: PropType<import("../../composables/icons.js").IconValue>;
    lines: Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    };
    slim: BooleanConstructor;
    prependGap: (NumberConstructor | StringConstructor)[];
    indent: (NumberConstructor | StringConstructor)[];
    nav: BooleanConstructor;
    navigationStrategy: {
        type: PropType<"focus" | "track">;
        default: string;
    };
    navigationIndex: NumberConstructor;
    "onClick:open": PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    "onClick:select": PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    "onUpdate:opened": PropType<(args_0: unknown) => void>;
    clearable: BooleanConstructor;
    showSize: BooleanConstructor;
    files: PropType<File[]>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemType: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<import("../../util/index.js").ValueComparator>;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    openStrategy: {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
    itemsRegistration: {
        type: PropType<import("../../composables/nested/nested.js").ItemsRegistrationType>;
        default: string;
    };
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    expandIcon: PropType<import("../../composables/icons.js").IconValue>;
    collapseIcon: PropType<import("../../composables/icons.js").IconValue>;
    lines: Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"one" | "three" | "two" | false>;
        default: NonNullable<"one" | "three" | "two" | false>;
    };
    slim: BooleanConstructor;
    prependGap: (NumberConstructor | StringConstructor)[];
    indent: (NumberConstructor | StringConstructor)[];
    nav: BooleanConstructor;
    navigationStrategy: {
        type: PropType<"focus" | "track">;
        default: string;
    };
    navigationIndex: NumberConstructor;
    "onClick:open": PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    "onClick:select": PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    "onUpdate:opened": PropType<(args_0: unknown) => void>;
    clearable: BooleanConstructor;
    showSize: BooleanConstructor;
    files: PropType<File[]>;
}>>;
export type VFileUploadList = InstanceType<typeof VFileUploadList>;
