// Types
import type { MaybeRefOrGetter } from 'vue';
export interface ChunksProps {
    chunkCount: number | string;
    chunkWidth: number | string;
    chunkGap: number | string;
}
// Composables
export declare const makeChunksProps: <Defaults extends {
    chunkCount?: unknown;
    chunkWidth?: unknown;
    chunkGap?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    chunkCount: unknown extends Defaults["chunkCount"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkCount"] ? string | number : string | number | Defaults["chunkCount"]>;
        default: unknown extends Defaults["chunkCount"] ? string | number : Defaults["chunkCount"] | NonNullable<string | number>;
    };
    chunkWidth: unknown extends Defaults["chunkWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkWidth"] ? string | number : string | number | Defaults["chunkWidth"]>;
        default: unknown extends Defaults["chunkWidth"] ? string | number : Defaults["chunkWidth"] | NonNullable<string | number>;
    };
    chunkGap: unknown extends Defaults["chunkGap"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["chunkGap"] ? string | number : string | number | Defaults["chunkGap"]>;
        default: unknown extends Defaults["chunkGap"] ? string | number : Defaults["chunkGap"] | NonNullable<string | number>;
    };
};
export declare function useChunks(props: ChunksProps, containerWidth: MaybeRefOrGetter<number | undefined>): {
    hasChunks: Readonly<import("vue").Ref<boolean, boolean>>;
    chunksMaskStyles: import("vue").ComputedRef<{
        maskRepeat?: undefined;
        maskImage?: undefined;
        maskSize?: undefined;
    } | {
        maskRepeat: string;
        maskImage: string;
        maskSize: string;
    }>;
    snapValueToChunk: (val: number) => number;
};
