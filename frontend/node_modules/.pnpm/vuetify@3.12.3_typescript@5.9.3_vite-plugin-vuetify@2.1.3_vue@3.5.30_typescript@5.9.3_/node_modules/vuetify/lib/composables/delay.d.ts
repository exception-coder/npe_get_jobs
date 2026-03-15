// Types
export interface DelayProps {
    closeDelay?: number | string;
    openDelay?: number | string;
}
// Composables
export declare const makeDelayProps: <Defaults extends {
    closeDelay?: unknown;
    openDelay?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
};
export declare function useDelay(props: DelayProps, cb?: (value: boolean) => void): {
    clearDelay: () => void;
    runOpenDelay: () => Promise<unknown>;
    runCloseDelay: (options?: {
        minDelay: number;
    } | undefined) => Promise<unknown>;
};
