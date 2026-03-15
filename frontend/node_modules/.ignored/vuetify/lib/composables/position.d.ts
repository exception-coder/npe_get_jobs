// Types
import type { PropType } from 'vue';
declare const positionValues: readonly ["static", "relative", "fixed", "absolute", "sticky"];
type Position = typeof positionValues[number];
export interface PositionProps {
    position: Position | undefined;
}
// Composables
export declare const makePositionProps: <Defaults extends {
    position?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    position: unknown extends Defaults["position"] ? {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
};
export declare function usePosition(props: PositionProps, name?: string): {
    positionClasses: Readonly<import("vue").Ref<string | undefined, string | undefined>>;
};

