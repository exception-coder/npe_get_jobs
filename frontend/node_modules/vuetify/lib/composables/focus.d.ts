// Types
export interface FocusProps {
    focused: boolean;
    'onUpdate:focused': ((focused: boolean) => any) | undefined;
}
// Composables
export declare const makeFocusProps: <Defaults extends {
    focused?: unknown;
    "onUpdate:focused"?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    "onUpdate:focused": unknown extends Defaults["onUpdate:focused"] ? import("vue").PropType<(args_0: boolean) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
};
export declare function useFocus(props: FocusProps, name?: string): {
    focusClasses: Readonly<import("vue").Ref<{
        [x: string]: boolean;
    }, {
        [x: string]: boolean;
    }>>;
    isFocused: import("vue").Ref<boolean, boolean> & {
        readonly externalValue: boolean;
    };
    focus: () => void;
    blur: () => void;
};
