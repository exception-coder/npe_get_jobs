export interface SizeProps {
    size?: string | number;
}
// Composables
export declare const makeSizeProps: <Defaults extends {
    size?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    size: unknown extends Defaults["size"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
};
export declare function useSize(props: SizeProps, name?: string): {
    sizeClasses: Readonly<import("vue").Ref<string | undefined, string | undefined>>;
    sizeStyles: Readonly<import("vue").Ref<{
        width: string | undefined;
        height: string | undefined;
    } | undefined, {
        width: string | undefined;
        height: string | undefined;
    } | undefined>>;
};
