// Types
import type { PropType } from 'vue';
// Types
export interface InputAutocompleteProps {
    autocomplete: 'suppress' | string | undefined;
    name?: string;
}
// Composables
export declare const makeAutocompleteProps: <Defaults extends {
    autocomplete?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    autocomplete: unknown extends Defaults["autocomplete"] ? PropType<string> : {
        type: PropType<unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"]>;
        default: unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"];
    };
};
export declare function useAutocomplete(props: InputAutocompleteProps): {
    isSuppressing: Readonly<import("vue").Ref<boolean, boolean>>;
    fieldAutocomplete: Readonly<import("vue").Ref<string | undefined, string | undefined>>;
    fieldName: Readonly<import("vue").Ref<string | undefined, string | undefined>>;
    update: () => number;
};
