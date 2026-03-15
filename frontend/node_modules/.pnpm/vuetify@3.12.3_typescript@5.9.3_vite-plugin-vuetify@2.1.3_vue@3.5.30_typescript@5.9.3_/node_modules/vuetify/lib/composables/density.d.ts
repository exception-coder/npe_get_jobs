// Types
import type { PropType } from 'vue';
// typeof allowedDensities[number] evaluates to any
// when generating api types for whatever reason.
export type Density = null | 'default' | 'comfortable' | 'compact';
export interface DensityProps {
    density?: Density;
}
// Composables
export declare const makeDensityProps: <Defaults extends {
    density?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    density: unknown extends Defaults["density"] ? {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? Density : Defaults["density"] | Density>;
        default: unknown extends Defaults["density"] ? Density : Defaults["density"] | NonNullable<Density>;
    };
};
export declare function useDensity(props: DensityProps, name?: string): {
    densityClasses: Readonly<import("vue").Ref<string, string>>;
};
