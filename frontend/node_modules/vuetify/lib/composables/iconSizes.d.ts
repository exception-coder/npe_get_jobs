// Types
import type { ComputedGetter, PropType } from 'vue';
import type { VIconBtnSizes } from '../labs/VIconBtn/VIconBtn.js';
// Types
export interface IconSizeProps {
    iconSize?: VIconBtnSizes | number | string;
    iconSizes: [VIconBtnSizes, number][];
}
// Composables
export declare const makeIconSizeProps: <Defaults extends {
    iconSize?: unknown;
    iconSizes?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    iconSize: unknown extends Defaults["iconSize"] ? PropType<string | number> : {
        type: PropType<unknown extends Defaults["iconSize"] ? string | number : string | number | Defaults["iconSize"]>;
        default: unknown extends Defaults["iconSize"] ? string | number : Defaults["iconSize"] | NonNullable<string | number>;
    };
    iconSizes: unknown extends Defaults["iconSizes"] ? {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    } : Omit<{
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["iconSizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["iconSizes"]>;
        default: unknown extends Defaults["iconSizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["iconSizes"];
    };
};
export declare function useIconSizes(props: IconSizeProps, fallback: ComputedGetter<VIconBtnSizes | number | string | undefined>): {
    iconSize: import("vue").ComputedRef<number | VIconBtnSizes | undefined>;
};
