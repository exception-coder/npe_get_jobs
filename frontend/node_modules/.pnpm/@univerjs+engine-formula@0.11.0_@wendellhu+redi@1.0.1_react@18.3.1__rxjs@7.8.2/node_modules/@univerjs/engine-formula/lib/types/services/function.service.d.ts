import { IDisposable, Nullable, Disposable } from '@univerjs/core';
import { IFunctionInfo, IFunctionNames } from '../basics/function';
import { BaseFunction } from '../functions/base-function';
export interface IFunctionService {
    /**
     * Use register to register a function, new CustomFunction(inject, name)
     */
    registerExecutors(...functions: BaseFunction[]): void;
    getExecutors(): Map<IFunctionNames, BaseFunction>;
    /**
     * Obtain the operator of the function to reuse the calculation logic.
     * The argument type accepted by the function is: FunctionVariantType.
     * For instance, the sum formula capability is needed for the statistics bar.
     * You can obtain the calculation result by using
     * const sum = formulaService.getExecutor(FUNCTION_NAMES_MATH.SUM);
     * sum.calculate(new RangeReferenceObject(range, sheetId, unitId), ref2, re3).
     * @param functionName Function name, which can be obtained through the FUNCTION_NAMES enumeration.
     * @returns
     */
    getExecutor(functionToken: IFunctionNames): Nullable<BaseFunction>;
    hasExecutor(functionToken: IFunctionNames): boolean;
    unregisterExecutors(...functionTokens: IFunctionNames[]): void;
    registerDescriptions(...functions: IFunctionInfo[]): IDisposable;
    getDescriptions(): Map<IFunctionNames, IFunctionInfo>;
    getDescription(functionToken: IFunctionNames): Nullable<IFunctionInfo>;
    hasDescription(functionToken: IFunctionNames): boolean;
    unregisterDescriptions(...functionTokens: IFunctionNames[]): void;
    deleteFormulaAstCacheKey(...functionToken: IFunctionNames[]): void;
}
export declare const IFunctionService: import('@wendellhu/redi').IdentifierDecorator<FunctionService>;
export declare class FunctionService extends Disposable implements IFunctionService {
    private _functionExecutors;
    private _functionDescriptions;
    dispose(): void;
    registerExecutors(...functions: BaseFunction[]): void;
    getExecutors(): Map<IFunctionNames, BaseFunction>;
    getExecutor(functionToken: IFunctionNames): BaseFunction | undefined;
    hasExecutor(functionToken: IFunctionNames): boolean;
    unregisterExecutors(...functionTokens: IFunctionNames[]): void;
    registerDescriptions(...descriptions: IFunctionInfo[]): IDisposable;
    getDescriptions(): Map<IFunctionNames, IFunctionInfo>;
    getDescription(functionToken: IFunctionNames): IFunctionInfo | undefined;
    hasDescription(functionToken: IFunctionNames): boolean;
    unregisterDescriptions(...functionTokens: IFunctionNames[]): void;
    deleteFormulaAstCacheKey(...functionToken: IFunctionNames[]): void;
}
