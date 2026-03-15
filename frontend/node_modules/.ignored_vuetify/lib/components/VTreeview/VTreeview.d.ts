// Types
import type { PropType } from 'vue';
import type { VTreeviewChildrenSlots } from './VTreeviewChildren.js';
import type { InternalListItem } from '../VList/VList.js';
import type { GenericProps, IndentLinesVariant } from '../../util/index.js';
export declare const makeVTreeviewProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
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
    activatable?: unknown;
    selectable?: unknown;
    activeStrategy?: unknown;
    selectStrategy?: unknown;
    opened?: unknown;
    activated?: unknown;
    selected?: unknown;
    mandatory?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    itemType?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
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
    "onClick:open"?: unknown;
    "onClick:select"?: unknown;
    "onUpdate:opened"?: unknown;
    hideActions?: unknown;
    fluid?: unknown;
    loadChildren?: unknown;
    loadingIcon?: unknown;
    openOnClick?: unknown;
    indeterminateIcon?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    selectedColor?: unknown;
    separateRoots?: unknown;
    openAll?: unknown;
    indentLines?: unknown;
    search?: unknown;
    modelValue?: unknown;
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
    customFilter: unknown extends Defaults["customFilter"] ? PropType<import("../../types.js").FilterFunction> : {
        type: PropType<unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | import("../../composables/filter.js").FilterKeys>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | import("../../composables/filter.js").FilterMode>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | NonNullable<import("../../composables/filter.js").FilterMode>;
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
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
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof import("../../util/index.js").deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
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
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    lines: unknown extends Defaults["lines"] ? {
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    } : Omit<{
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : "one" | "three" | "two" | false | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? "one" | "three" | "two" | false : Defaults["lines"] | NonNullable<"one" | "three" | "two" | false>;
    };
    slim: unknown extends Defaults["slim"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
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
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
    loadChildren: unknown extends Defaults["loadChildren"] ? PropType<(item: unknown) => Promise<void>> : {
        type: PropType<unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"]>;
        default: unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"];
    };
    loadingIcon: unknown extends Defaults["loadingIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"]>;
        default: unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    indeterminateIcon: unknown extends Defaults["indeterminateIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["indeterminateIcon"] ? import("../../composables/icons.js").IconValue : Defaults["indeterminateIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["indeterminateIcon"] ? import("../../composables/icons.js").IconValue : Defaults["indeterminateIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["falseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["falseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : Defaults["trueIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : Defaults["trueIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    selectedColor: unknown extends Defaults["selectedColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"]>;
        default: unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"];
    };
    separateRoots: unknown extends Defaults["separateRoots"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["separateRoots"] ? boolean : boolean | Defaults["separateRoots"]>;
        default: unknown extends Defaults["separateRoots"] ? boolean : boolean | Defaults["separateRoots"];
    };
    openAll: unknown extends Defaults["openAll"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openAll"] ? boolean : boolean | Defaults["openAll"]>;
        default: unknown extends Defaults["openAll"] ? boolean : boolean | Defaults["openAll"];
    };
    indentLines: unknown extends Defaults["indentLines"] ? PropType<boolean | IndentLinesVariant> : {
        type: PropType<unknown extends Defaults["indentLines"] ? boolean | IndentLinesVariant : boolean | Defaults["indentLines"] | IndentLinesVariant>;
        default: unknown extends Defaults["indentLines"] ? boolean | IndentLinesVariant : Defaults["indentLines"] | NonNullable<boolean | IndentLinesVariant>;
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? ArrayConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"];
    };
};
export declare const VTreeview: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        mandatory: boolean;
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        disabled: boolean;
        filterable: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        hideActions: boolean;
        fluid: boolean;
        loadingIcon: string;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        separateRoots: boolean;
        openAll: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        opened?: any;
        activated?: any;
        selected?: any;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
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
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: import("../../composables/icons.js").IconValue | undefined;
        trueIcon?: import("../../composables/icons.js").IconValue | undefined;
        selectedColor?: string | undefined;
        indentLines?: boolean | IndentLinesVariant | undefined;
        search?: string | undefined;
        modelValue?: unknown[] | undefined;
    } & {
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:opened": (val: unknown) => true;
        "update:activated": (val: unknown) => true;
        "update:selected": (val: unknown) => true;
        "update:modelValue": (val: unknown) => true;
        "click:open": (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        "click:select": (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
    }, "$children" | "items" | "v-slot:append" | "v-slot:default" | "v-slot:divider" | "v-slot:header" | "v-slot:item" | "v-slot:prepend" | "v-slot:subheader" | "v-slot:subtitle" | "v-slot:title" | "v-slot:toggle" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        mandatory: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        disabled: boolean;
        filterable: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        hideActions: boolean;
        fluid: boolean;
        loadingIcon: string;
        openOnClick: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        separateRoots: boolean;
        openAll: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot & {
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot & {
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot & {
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        } & {
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
            item: unknown;
            internalItem: InternalListItem<unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
            item: unknown;
            internalItem: InternalListItem<unknown>;
            loading: boolean;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subheader: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
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
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        mandatory: boolean;
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        disabled: boolean;
        filterable: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        hideActions: boolean;
        fluid: boolean;
        loadingIcon: string;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        separateRoots: boolean;
        openAll: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        opened?: any;
        activated?: any;
        selected?: any;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
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
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: import("../../composables/icons.js").IconValue | undefined;
        trueIcon?: import("../../composables/icons.js").IconValue | undefined;
        selectedColor?: string | undefined;
        indentLines?: boolean | IndentLinesVariant | undefined;
        search?: string | undefined;
        modelValue?: unknown[] | undefined;
    } & {
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        mandatory: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        disabled: boolean;
        filterable: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        hideActions: boolean;
        fluid: boolean;
        loadingIcon: string;
        openOnClick: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        separateRoots: boolean;
        openAll: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    activatable: boolean;
    selectable: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    mandatory: boolean;
    itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemChildren: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    returnObject: boolean;
    disabled: boolean;
    filterable: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    lines: "one" | "three" | "two" | false;
    slim: boolean;
    hideActions: boolean;
    fluid: boolean;
    loadingIcon: string;
    indeterminateIcon: import("../../composables/icons.js").IconValue;
    separateRoots: boolean;
    openAll: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    customFilter?: import("../../types.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
    opened?: any;
    activated?: any;
    selected?: any;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    activeClass?: string | undefined;
    bgColor?: string | undefined;
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
    loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    openOnClick?: boolean | undefined;
    falseIcon?: import("../../composables/icons.js").IconValue | undefined;
    trueIcon?: import("../../composables/icons.js").IconValue | undefined;
    selectedColor?: string | undefined;
    indentLines?: boolean | IndentLinesVariant | undefined;
    search?: string | undefined;
    modelValue?: unknown[] | undefined;
} & {
    "onClick:open"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onUpdate:activated"?: ((val: unknown) => any) | undefined;
    "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
    "onUpdate:opened"?: ((val: unknown) => any) | undefined;
    "onUpdate:selected"?: ((val: unknown) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:opened": (val: unknown) => true;
    "update:activated": (val: unknown) => true;
    "update:selected": (val: unknown) => true;
    "update:modelValue": (val: unknown) => true;
    "click:open": (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
    "click:select": (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
}, "$children" | "items" | "v-slot:append" | "v-slot:default" | "v-slot:divider" | "v-slot:header" | "v-slot:item" | "v-slot:prepend" | "v-slot:subheader" | "v-slot:subtitle" | "v-slot:title" | "v-slot:toggle" | "v-slots">, string, {
    style: import("vue").StyleValue;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    activatable: boolean;
    selectable: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    mandatory: boolean;
    itemTitle: import("../../util/index.js").SelectItemKey;
    itemValue: import("../../util/index.js").SelectItemKey;
    itemChildren: import("../../util/index.js").SelectItemKey;
    itemProps: import("../../util/index.js").SelectItemKey;
    itemType: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    disabled: boolean;
    filterable: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    lines: "one" | "three" | "two" | false;
    slim: boolean;
    hideActions: boolean;
    fluid: boolean;
    loadingIcon: string;
    openOnClick: boolean;
    indeterminateIcon: import("../../composables/icons.js").IconValue;
    separateRoots: boolean;
    openAll: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../VList/VListItem.js").ListItemSlot & {
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../VList/VListItem.js").ListItemSlot & {
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: import("../VList/VListItem.js").ListItemTitleSlot & {
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
        props: {
            onClick: (e: PointerEvent) => void;
        };
    } & {
        loading: boolean;
    } & {
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
        item: unknown;
        internalItem: InternalListItem<unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
        item: unknown;
        internalItem: InternalListItem<unknown>;
        loading: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    divider: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subheader: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: T[] | undefined;
}, slots: VTreeviewChildrenSlots<T>) => GenericProps<{
    items?: T[] | undefined;
}, VTreeviewChildrenSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    customFilter: PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
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
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
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
    valueComparator: PropType<typeof import("../../util/index.js").deepEqual>;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    lines: {
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    hideActions: BooleanConstructor;
    fluid: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    falseIcon: PropType<import("../../composables/icons.js").IconValue>;
    trueIcon: PropType<import("../../composables/icons.js").IconValue>;
    selectedColor: StringConstructor;
    separateRoots: BooleanConstructor;
    openAll: BooleanConstructor;
    indentLines: PropType<boolean | IndentLinesVariant>;
    search: StringConstructor;
    modelValue: ArrayConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    customFilter: PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
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
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
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
    valueComparator: PropType<typeof import("../../util/index.js").deepEqual>;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    filterable: BooleanConstructor;
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    lines: {
        type: PropType<"one" | "three" | "two" | false>;
        default: string;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
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
    hideActions: BooleanConstructor;
    fluid: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    falseIcon: PropType<import("../../composables/icons.js").IconValue>;
    trueIcon: PropType<import("../../composables/icons.js").IconValue>;
    selectedColor: StringConstructor;
    separateRoots: BooleanConstructor;
    openAll: BooleanConstructor;
    indentLines: PropType<boolean | IndentLinesVariant>;
    search: StringConstructor;
    modelValue: ArrayConstructor;
}>>;
export type VTreeview = InstanceType<typeof VTreeview>;
