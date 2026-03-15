// Types
import type { Ref } from 'vue';
export interface ElevationProps {
    elevation?: number | string | null;
}
// Composables
export declare const makeElevationProps: <Defaults extends {
    elevation?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
};
type ElevationData = {
    elevationClasses: Ref<string[]>;
};
export declare function useElevation(props: ElevationProps | Ref<number | string | undefined>): ElevationData;

