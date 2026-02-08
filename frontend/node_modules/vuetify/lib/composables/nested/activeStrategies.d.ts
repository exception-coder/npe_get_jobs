type ActiveStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    activated: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type ActiveStrategyTransformInFunction = (v: unknown | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
type ActiveStrategyTransformOutFunction = (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
export type ActiveStrategy = {
    activate: ActiveStrategyFunction;
    in: ActiveStrategyTransformInFunction;
    out: ActiveStrategyTransformOutFunction;
};
export declare const independentActiveStrategy: (mandatory?: boolean | undefined) => ActiveStrategy;
export declare const independentSingleActiveStrategy: (mandatory?: boolean | undefined) => ActiveStrategy;
export declare const leafActiveStrategy: (mandatory?: boolean | undefined) => ActiveStrategy;
export declare const leafSingleActiveStrategy: (mandatory?: boolean | undefined) => ActiveStrategy;

