import { IDisposable, ICommandService, IConfigService, Injector } from '@univerjs/core';
import { FormulaExecutedStateType, IExecutionInProgressParams, ISequenceNode, LexerTreeBuilder } from '@univerjs/engine-formula';
import { FBase } from '@univerjs/core/facade';
/**
 * This interface class provides methods to modify the behavior of the operation formula.
 * @hideconstructor
 */
export declare class FFormula extends FBase {
    protected readonly _commandService: ICommandService;
    protected readonly _injector: Injector;
    private _lexerTreeBuilder;
    protected readonly _configService: IConfigService;
    constructor(_commandService: ICommandService, _injector: Injector, _lexerTreeBuilder: LexerTreeBuilder, _configService: IConfigService);
    /**
     * @ignore
     */
    _initialize(): void;
    /**
     * The tree builder for formula string.
     * @type {LexerTreeBuilder}
     */
    get lexerTreeBuilder(): LexerTreeBuilder;
    /**
     * Offsets the formula
     * @param {string} formulaString - The formula string to offset
     * @param {number} refOffsetX - The offset column
     * @param {number} refOffsetY - The offset row
     * @param {boolean} [ignoreAbsolute] - Whether to ignore the absolute reference
     * @returns {string} The offset formula string
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * const result = formulaEngine.moveFormulaRefOffset('=SUM(A1,B2)', 1, 1);
     * console.log(result);
     * ```
     */
    moveFormulaRefOffset(formulaString: string, refOffsetX: number, refOffsetY: number, ignoreAbsolute?: boolean): string;
    /**
     * Resolves the formula string to a 'node' node
     * @param {string} formulaString - The formula string to resolve
     * @returns {Array<ISequenceNode | string>} The nodes of the formula string
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * const nodes = formulaEngine.sequenceNodesBuilder('=SUM(A1,B2)');
     * console.log(nodes);
     * ```
     */
    sequenceNodesBuilder(formulaString: string): (string | ISequenceNode)[];
    /**
     * Start the calculation of the formula.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.executeCalculation();
     * ```
     */
    executeCalculation(): void;
    /**
     * Stop the calculation of the formula.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.stopCalculation();
     * ```
     */
    stopCalculation(): void;
    /**
     * Listening calculation starts.
     * @param {Function} callback - The callback function to be called when the formula calculation starts.
     * @returns {IDisposable} The disposable instance.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.calculationStart((forceCalculation) => {
     *   console.log('Calculation start', forceCalculation);
     * });
     * ```
     */
    calculationStart(callback: (forceCalculation: boolean) => void): IDisposable;
    /**
     * Listening calculation ends.
     * @param {Function} callback - The callback function to be called when the formula calculation ends.
     * @returns {IDisposable} The disposable instance.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.calculationEnd((functionsExecutedState) => {
     *   console.log('Calculation end', functionsExecutedState);
     * });
     * ```
     */
    calculationEnd(callback: (functionsExecutedState: FormulaExecutedStateType) => void): IDisposable;
    /**
     * Wait for computing in the Univer instance to complete. Please note that this does not only include formula calculation,
     * but also other computing tasks, e.g. pivot table calculation.
     * @param {number} [timeout] The maximum time to wait for the computing to complete, in milliseconds. The default
     * value is 30,000 milliseconds.
     * @returns {Promise<boolean>} This method returns `true` if the computing is complete. If the timeout is reached, this
     * method returns `false`.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.whenComputingCompleteAsync(3000).then((isComplete) => {
     *   console.log('Computing complete:', isComplete);
     * });
     * ```
     */
    whenComputingCompleteAsync(timeout?: number): Promise<boolean>;
    /**
     * @deprecated Use `whenComputingCompleteAsync` instead.
     * @returns {Promise<void>} This method returns a promise that resolves when the calculation is complete.
     */
    onCalculationEnd(): Promise<void>;
    /**
     * Listening calculation processing.
     * @param {Function} callback - The callback function to be called when the formula calculation is in progress.
     * @returns {IDisposable} The disposable instance.
     *
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.calculationProcessing((stageInfo) => {
     *   console.log('Calculation processing', stageInfo);
     * });
     * ```
     */
    calculationProcessing(callback: (stageInfo: IExecutionInProgressParams) => void): IDisposable;
    /**
     * When a formula contains a circular reference, set the maximum number of iterations for the formula calculation.
     * @param {number} maxIteration The maximum number of iterations. The default value is 1.
     *
     * @example
     * ```ts
     * // Set the maximum number of iterations for the formula calculation to 5.
     * // The default value is 1.
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.setMaxIteration(5);
     * ```
     */
    setMaxIteration(maxIteration: number): void;
}
