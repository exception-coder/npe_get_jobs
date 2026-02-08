// Types
export interface BorderProps {
    border?: boolean | number | string;
}
// Composables
export declare const makeBorderProps: <Defaults extends {
    border?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
};
export declare function useBorder(props: BorderProps, name?: string): {
    borderClasses: import("vue").ComputedRef<string | string[]>;
};
