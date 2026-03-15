// Types
import type { CSSProperties, PropType } from 'vue';
import type { Anchor } from '../util/index.js';
export interface LocationProps {
    location: Anchor | null | undefined;
}
export declare const makeLocationProps: <Defaults extends {
    location?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    location: unknown extends Defaults["location"] ? PropType<Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? Anchor | null : Defaults["location"] | Anchor | null>;
        default: unknown extends Defaults["location"] ? Anchor | null : Defaults["location"] | NonNullable<Anchor | null>;
    };
};
export declare function useLocation(props: LocationProps, opposite?: boolean, offset?: (side: string) => number): {
    locationStyles: import("vue").ComputedRef<CSSProperties>;
};
