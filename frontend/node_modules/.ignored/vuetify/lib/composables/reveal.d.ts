// Types
import type { PropType } from 'vue';
// Types
export interface RevealProps {
    reveal: boolean | {
        duration?: number;
    };
}
// Composables
export declare const makeRevealProps: <Defaults extends {
    reveal?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    reveal: unknown extends Defaults["reveal"] ? {
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number | undefined;
        }>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["reveal"] ? boolean | {
            duration?: number | undefined;
        } : boolean | {
            duration?: number | undefined;
        } | Defaults["reveal"]>;
        default: unknown extends Defaults["reveal"] ? boolean | {
            duration?: number | undefined;
        } : Defaults["reveal"] | NonNullable<boolean | {
            duration?: number | undefined;
        }>;
    };
};
export declare function useReveal(props: RevealProps): {
    duration: Readonly<import("vue").Ref<number, number>>;
    state: import("vue").ShallowRef<string, string>;
};
