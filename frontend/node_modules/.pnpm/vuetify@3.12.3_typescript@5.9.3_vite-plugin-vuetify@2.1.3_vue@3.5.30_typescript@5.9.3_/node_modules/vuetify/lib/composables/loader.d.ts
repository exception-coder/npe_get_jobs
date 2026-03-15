// Types
import type { ExtractPropTypes, SetupContext } from 'vue';
import type { SlotsToProps } from '../util/index.js';
export interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}
export interface LoaderProps {
    loading?: boolean | string;
}
// Composables
export declare const makeLoaderProps: <Defaults extends {
    loading?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
};
export declare function useLoader(props: LoaderProps, name?: string): {
    loaderClasses: Readonly<import("vue").Ref<{
        [x: string]: string | boolean | undefined;
    }, {
        [x: string]: string | boolean | undefined;
    }>>;
};
export declare function LoaderSlot(props: {
    absolute?: boolean;
    active: boolean;
    name: string;
    color?: string;
} & ExtractPropTypes<SlotsToProps<{
    default: LoaderSlotProps;
}>>, { slots }: SetupContext): JSX.Element;
