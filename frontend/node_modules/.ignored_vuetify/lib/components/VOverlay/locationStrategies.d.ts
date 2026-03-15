import { Box } from '../../util/box.js';
// Types
import type { PropType, Ref } from 'vue';
import type { Anchor } from '../../util/index.js';
export interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
export type LocationStrategyFunction = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e?: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
export interface StrategyProps {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFunction;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    stickToTarget?: boolean;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
export declare const makeLocationStrategyProps: <Defaults extends {
    locationStrategy?: unknown;
    location?: unknown;
    origin?: unknown;
    offset?: unknown;
    stickToTarget?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    locationStrategy: unknown extends Defaults["locationStrategy"] ? {
        type: PropType<"connected" | "static" | LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<"connected" | "static" | LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["locationStrategy"] ? "connected" | "static" | LocationStrategyFunction : "connected" | "static" | LocationStrategyFunction | Defaults["locationStrategy"]>;
        default: unknown extends Defaults["locationStrategy"] ? "connected" | "static" | LocationStrategyFunction : Defaults["locationStrategy"] | NonNullable<"connected" | "static" | LocationStrategyFunction>;
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<Anchor>;
        default: string;
    } : Omit<{
        type: PropType<Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["location"] ? Anchor : Defaults["location"] | Anchor>;
        default: unknown extends Defaults["location"] ? Anchor : Defaults["location"] | NonNullable<Anchor>;
    };
    origin: unknown extends Defaults["origin"] ? {
        type: PropType<"auto" | "overlap" | Anchor>;
        default: string;
    } : Omit<{
        type: PropType<"auto" | "overlap" | Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["origin"] ? "auto" | "overlap" | Anchor : "auto" | "overlap" | Defaults["origin"] | Anchor>;
        default: unknown extends Defaults["origin"] ? "auto" | "overlap" | Anchor : Defaults["origin"] | NonNullable<"auto" | "overlap" | Anchor>;
    };
    offset: unknown extends Defaults["offset"] ? PropType<string | number | number[] | undefined> : {
        type: PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : Defaults["offset"] | NonNullable<string | number | number[] | undefined>;
    };
    stickToTarget: unknown extends Defaults["stickToTarget"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stickToTarget"] ? boolean : boolean | Defaults["stickToTarget"]>;
        default: unknown extends Defaults["stickToTarget"] ? boolean : boolean | Defaults["stickToTarget"];
    };
};
export declare function useLocationStrategies(props: StrategyProps, data: LocationStrategyData): {
    contentStyles: Ref<{}, {}>;
    updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
};
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
        flipped: {
            x: boolean;
            y: boolean;
        };
    } | undefined;
};

