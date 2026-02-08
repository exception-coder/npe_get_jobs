// Types
import type { Ref } from 'vue';
type RoundedValue = boolean | string | number | null | undefined;
export interface RoundedProps {
    rounded?: RoundedValue;
    tile?: boolean;
}
type RoundedData = {
    roundedClasses: Ref<string[]>;
};
// Composables
export declare const makeRoundedProps: <Defaults extends {
    rounded?: unknown;
    tile?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
};
export declare function useRounded(props: RoundedProps | Ref<RoundedValue>, name?: string): RoundedData;

