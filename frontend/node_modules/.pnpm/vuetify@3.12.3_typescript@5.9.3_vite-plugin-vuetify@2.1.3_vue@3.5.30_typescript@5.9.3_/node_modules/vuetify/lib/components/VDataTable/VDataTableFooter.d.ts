// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export declare const makeVDataTableFooterProps: <Defaults extends {
    color?: unknown;
    prevIcon?: unknown;
    nextIcon?: unknown;
    firstIcon?: unknown;
    lastIcon?: unknown;
    itemsPerPageText?: unknown;
    pageText?: unknown;
    firstPageLabel?: unknown;
    prevPageLabel?: unknown;
    nextPageLabel?: unknown;
    lastPageLabel?: unknown;
    itemsPerPageOptions?: unknown;
    showCurrentPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | IconValue>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | NonNullable<IconValue>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | IconValue>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | NonNullable<IconValue>;
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstIcon"] ? IconValue : Defaults["firstIcon"] | IconValue>;
        default: unknown extends Defaults["firstIcon"] ? IconValue : Defaults["firstIcon"] | NonNullable<IconValue>;
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["lastIcon"] ? IconValue : Defaults["lastIcon"] | IconValue>;
        default: unknown extends Defaults["lastIcon"] ? IconValue : Defaults["lastIcon"] | NonNullable<IconValue>;
    };
    itemsPerPageText: unknown extends Defaults["itemsPerPageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"]>;
        default: unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"];
    };
    pageText: unknown extends Defaults["pageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"]>;
        default: unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"];
    };
    firstPageLabel: unknown extends Defaults["firstPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"]>;
        default: unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"];
    };
    prevPageLabel: unknown extends Defaults["prevPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"]>;
        default: unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"];
    };
    nextPageLabel: unknown extends Defaults["nextPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"]>;
        default: unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"];
    };
    lastPageLabel: unknown extends Defaults["lastPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"]>;
        default: unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"];
    };
    itemsPerPageOptions: unknown extends Defaults["itemsPerPageOptions"] ? {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    } : Omit<{
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"]>;
        default: unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"];
    };
    showCurrentPage: unknown extends Defaults["showCurrentPage"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"]>;
        default: unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"];
    };
};
export declare const VDataTableFooter: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        prevIcon: IconValue;
        nextIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {
        color?: string | undefined;
    } & {
        $children?: {
            prepend?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        prevIcon: IconValue;
        nextIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        prevIcon: IconValue;
        nextIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {
        color?: string | undefined;
    } & {
        $children?: {
            prepend?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        prevIcon: IconValue;
        nextIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    prevIcon: IconValue;
    nextIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    itemsPerPageText: string;
    pageText: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
} & {
    color?: string | undefined;
} & {
    $children?: {
        prepend?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    prevIcon: IconValue;
    nextIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    itemsPerPageText: string;
    pageText: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    firstIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    firstIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}>>;
export type VDataTableFooter = InstanceType<typeof VDataTableFooter>;
