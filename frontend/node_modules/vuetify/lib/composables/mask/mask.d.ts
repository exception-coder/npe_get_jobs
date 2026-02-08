// Types
import type { PropType } from 'vue';
export interface MaskProps {
    mask: string | MaskOptions | undefined;
}
export interface MaskOptions {
    mask: string;
    tokens: Record<string, MaskItem>;
}
export declare const makeMaskProps: <Defaults extends {
    mask?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mask: unknown extends Defaults["mask"] ? PropType<string | MaskOptions> : {
        type: PropType<unknown extends Defaults["mask"] ? string | MaskOptions : string | MaskOptions | Defaults["mask"]>;
        default: unknown extends Defaults["mask"] ? string | MaskOptions : Defaults["mask"] | NonNullable<string | MaskOptions>;
    };
};
export type MaskItem = {
    convert?: (char: string) => string;
} & ({
    pattern?: never;
    test: (char: string) => boolean;
} | {
    pattern: RegExp;
    test?: never;
});
export declare const defaultDelimiters: RegExp;
export declare function isMaskDelimiter(char: string): boolean;
export declare function useMask(props: MaskProps): {
    isValid: (text: string) => boolean;
    isComplete: (text: string) => boolean;
    mask: (text: string | null | undefined) => string;
    unmask: (text: string | null) => string | null;
};
