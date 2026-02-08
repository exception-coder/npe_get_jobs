// Types
import type { EffectScope, PropType, Ref } from 'vue';
export interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    targetEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
export type ScrollStrategyFunction = (data: ScrollStrategyData, props: StrategyProps, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
export interface StrategyProps {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFunction;
    contained: boolean | undefined;
}
export declare const makeScrollStrategyProps: <Defaults extends {
    scrollStrategy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    scrollStrategy: unknown extends Defaults["scrollStrategy"] ? {
        type: PropType<"block" | "close" | "none" | "reposition" | ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | ScrollStrategyFunction : "block" | "close" | "none" | "reposition" | ScrollStrategyFunction | Defaults["scrollStrategy"]>;
        default: unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | ScrollStrategyFunction : Defaults["scrollStrategy"] | NonNullable<"block" | "close" | "none" | "reposition" | ScrollStrategyFunction>;
    };
};
export declare function useScrollStrategies(props: StrategyProps, data: ScrollStrategyData): void;
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps, scope: EffectScope): void;

