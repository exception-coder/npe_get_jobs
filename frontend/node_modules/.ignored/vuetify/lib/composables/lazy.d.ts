// Types
import type { Ref } from 'vue';
export declare const makeLazyProps: <Defaults extends {
    eager?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
};
export declare function useLazy(props: {
    eager: boolean;
}, active: Ref<boolean>): {
    isBooted: import("vue").ShallowRef<boolean, boolean>;
    hasContent: Readonly<Ref<boolean, boolean>>;
    onAfterLeave: () => void;
};
