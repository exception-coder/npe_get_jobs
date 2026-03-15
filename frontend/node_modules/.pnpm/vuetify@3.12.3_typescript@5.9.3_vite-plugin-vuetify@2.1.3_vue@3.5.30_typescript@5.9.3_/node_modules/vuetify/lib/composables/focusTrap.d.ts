// Types
import type { Ref } from 'vue';
// Types
export interface FocusTrapProps {
    retainFocus: boolean;
    captureFocus: boolean;
    disableInitialFocus?: boolean;
}
// Composables
export declare const makeFocusTrapProps: <Defaults extends {
    retainFocus?: unknown;
    captureFocus?: unknown;
    disableInitialFocus?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    retainFocus: unknown extends Defaults["retainFocus"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"]>;
        default: unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"];
    };
    captureFocus: unknown extends Defaults["captureFocus"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"]>;
        default: unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"];
    };
    disableInitialFocus: unknown extends Defaults["disableInitialFocus"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disableInitialFocus"] ? boolean : boolean | Defaults["disableInitialFocus"]>;
        default: unknown extends Defaults["disableInitialFocus"] ? boolean : boolean | Defaults["disableInitialFocus"];
    };
};
export declare function useFocusTrap(props: FocusTrapProps, { isActive, localTop, activatorEl, contentEl }: {
    isActive: Ref<boolean>;
    localTop: Readonly<Ref<boolean>>;
    activatorEl?: Readonly<Ref<HTMLElement | undefined>>;
    contentEl: Readonly<Ref<HTMLElement | undefined>>;
}): void;
