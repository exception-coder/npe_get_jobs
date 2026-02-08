// Types
import type { PropType } from 'vue';
export declare const VDataTableColumn: import("vue").FunctionalComponent<Partial<{
    align: "center" | "end" | "start";
    fixed: "end" | "start" | boolean;
    lastFixed: boolean;
    firstFixedEnd: boolean;
    noPadding: boolean;
    empty: boolean;
    nowrap: boolean;
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<"center" | "end" | "start">;
        default: string;
    };
    fixed: {
        type: PropType<"end" | "start" | boolean>;
        default: boolean;
    };
    fixedOffset: (NumberConstructor | StringConstructor)[];
    fixedEndOffset: (NumberConstructor | StringConstructor)[];
    height: (NumberConstructor | StringConstructor)[];
    lastFixed: BooleanConstructor;
    firstFixedEnd: BooleanConstructor;
    noPadding: BooleanConstructor;
    indent: (NumberConstructor | StringConstructor)[];
    empty: BooleanConstructor;
    tag: StringConstructor;
    width: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    nowrap: BooleanConstructor;
}>>, "align" | "empty" | "firstFixedEnd" | "fixed" | "lastFixed" | "noPadding" | "nowrap">, {}, any, {}>;
