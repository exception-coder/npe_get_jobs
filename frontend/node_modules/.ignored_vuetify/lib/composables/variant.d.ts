// Types
import type { MaybeRefOrGetter, PropType } from 'vue';
export declare const allowedVariants: readonly ["elevated", "flat", "tonal", "outlined", "text", "plain"];
export type Variant = typeof allowedVariants[number];
export interface VariantProps {
    color?: string;
    variant: Variant;
}
export declare function genOverlays(isClickable: boolean, name: string): JSX.Element;
export declare const makeVariantProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
};
export declare function useVariant(props: MaybeRefOrGetter<VariantProps>, name?: string): {
    colorClasses: Readonly<import("vue").Ref<string[], string[]>>;
    colorStyles: Readonly<import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>>;
    variantClasses: Readonly<import("vue").Ref<string, string>>;
};
