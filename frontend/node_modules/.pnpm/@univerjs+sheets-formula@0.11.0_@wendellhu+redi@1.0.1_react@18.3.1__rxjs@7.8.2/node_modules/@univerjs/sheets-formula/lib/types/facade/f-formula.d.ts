import { IDisposable, ILocales } from '@univerjs/core';
import { IFunctionInfo } from '@univerjs/engine-formula';
import { CalculationMode, IRegisterAsyncFunction, IRegisterFunction } from '@univerjs/sheets-formula';
import { FFormula } from '@univerjs/engine-formula/facade';
/**
 * @ignore
 */
export interface IFFormulaSheetsMixin {
    /**
     * Update the calculation mode of the formula. It will take effect the next time the Univer Sheet is constructed.
     * The calculation mode only handles formulas data when the workbook initializes data.
     * @param {CalculationMode} calculationMode - The calculation mode of the formula.
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.setInitialFormulaComputing(0);
     * ```
     */
    setInitialFormulaComputing(calculationMode: CalculationMode): void;
    /**
     * Register a custom synchronous formula function.
     * @param {string} name - The name of the function to register. This will be used in formulas (e.g., =MYFUNC()).
     * @param {IRegisterFunction} func - The implementation of the function.
     * @param {string} [description] - A string describing the function's purpose and usage.
     * @returns {IDisposable} A disposable object that will unregister the function when disposed.
     * @example
     * ```ts
     * // Register a simple greeting function
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerFunction(
     *   'HELLO',
     *   (name) => `Hello, ${name}!`,
     *   'A simple greeting function'
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue('World');
     * const cellA2 = fWorksheet.getRange('A2');
     * cellA2.setValue({ f: '=HELLO(A1)' });
     *
     * // A2 will display: "Hello, World!"
     * formulaEngine.calculationEnd((functionsExecutedState) => {
     *   if (functionsExecutedState === 3) {
     *     console.log(cellA2.getValue()); // Hello, World!
     *   }
     * })
     * ```
     * @example
     * ```ts
     * // Register a discount calculation function
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerFunction(
     *   'DISCOUNT',
     *   (price, discountPercent) => price * (1 - discountPercent / 100),
     *   'Calculates final price after discount'
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue(100);
     * const cellA2 = fWorksheet.getRange('A2');
     * cellA2.setValue({ f: '=DISCOUNT(A1, 20)' });
     *
     * // A2 will display: 80
     * formulaEngine.calculationEnd((functionsExecutedState) => {
     *   if (functionsExecutedState === 3) {
     *     console.log(cellA2.getValue()); // 80
     *   }
     * })
     * ```
     * @example
     * ```ts
     * // Registered formulas support lambda functions
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerFunction(
     *   'CUSTOMSUM',
     *   (...variants) => {
     *     let sum = 0;
     *     const last = variants[variants.length - 1];
     *
     *     if (last.isLambda && last.isLambda()) {
     *       variants.pop();
     *       const variantsList = variants.map((variant) => Array.isArray(variant) ? variant[0][0]: variant);
     *       sum += last.executeCustom(...variantsList).getValue();
     *     }
     *
     *     for (const variant of variants) {
     *       sum += Number(variant) || 0;
     *     }
     *
     *     return sum;
     *   },
     *   'Adds its arguments'
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue(1);
     * const cellA2 = fWorksheet.getRange('A2');
     * cellA2.setValue(2);
     * const cellA3 = fWorksheet.getRange('A3');
     * cellA3.setValue({ f: '=CUSTOMSUM(A1,A2,LAMBDA(x,y,x*y))' });
     *
     * // A3 will display: 5
     * formulaEngine.calculationEnd((functionsExecutedState) => {
     *   if (functionsExecutedState === 3) {
     *     console.log(cellA3.getValue()); // 5
     *   }
     * })
     * ```
     */
    registerFunction(name: string, func: IRegisterFunction, description?: string): IDisposable;
    /**
     * Register a custom synchronous formula function with localization support.
     * @param {string} name - The name of the function to register. This will be used in formulas (e.g., =MYFUNC()).
     * @param {IRegisterFunction} func - The implementation of the function.
     * @param {{ locales?: ILocales; description?: string | IFunctionInfo }} [options] - Object containing locales and description.
     * @param {ILocales} options.locales - Object containing locales.
     * @param {string | IFunctionInfo} options.description - Object containing description.
     * @returns {IDisposable} A disposable object that will unregister the function when disposed.
     * @example
     * ```js
     * // Register a simple greeting function
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerFunction(
     *   'HELLO',
     *   (name) => `Hello, ${name}!`,
     *   {
     *     description: 'customFunction.HELLO.description',
     *     locales: {
     *       'zhCN': {
     *         'customFunction': {
     *           'HELLO': {
     *             'description': '一个简单的问候函数'
     *           }
     *         }
     *       },
     *       'enUS': {
     *         'customFunction': {
     *           'HELLO': {
     *             'description': 'A simple greeting function'
     *           }
     *         }
     *       }
     *     }
     *   }
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue('World');
     * const cellA2 = fWorksheet.getRange('A2');
     * cellA2.setValue({ f: '=HELLO(A1)' });
     *
     * // A2 will display: "Hello, World!"
     * formulaEngine.calculationEnd((functionsExecutedState) => {
     *   if (functionsExecutedState === 3) {
     *     console.log(cellA2.getValue()); // Hello, World!
     *   }
     * })
     * ```
     */
    registerFunction(name: string, func: IRegisterFunction, { locales, description }: {
        locales?: ILocales;
        description?: string | IFunctionInfo;
    }): IDisposable;
    /**
     * Register a custom asynchronous formula function.
     * @param {string} name - The name of the function to register. This will be used in formulas (e.g., =ASYNCFUNC()).
     * @param {IRegisterAsyncFunction} func - The async implementation of the function.
     * @param {string} [description] - A string describing the function's purpose and usage.
     * @returns {IDisposable} A disposable object that will unregister the function when disposed.
     * @example
     * ```ts
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerAsyncFunction(
     *   'RANDOM_DELAYED',
     *   async () => {
     *     await new Promise(resolve => setTimeout(resolve, 500));
     *     return Math.random();
     *   },
     *   'Mock a random number generation function'
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue({ f: '=RANDOM_DELAYED()' });
     *
     * // After 0.5 second, A1 will display a random number
     * ```
     */
    registerAsyncFunction(name: string, func: IRegisterAsyncFunction, description?: string): IDisposable;
    /**
     * Register a custom asynchronous formula function with description.
     * @param {string} name - The name of the function to register. This will be used in formulas (e.g., =ASYNCFUNC()).
     * @param {IRegisterAsyncFunction} func - The async implementation of the function.
     * @param {{ locales?: ILocales; description?: string | IFunctionInfo }} [options] - Object containing locales and description.
     * @param {ILocales} options.locales - Object containing locales.
     * @param {string | IFunctionInfo} options.description - Object containing description.
     * @returns {IDisposable} A disposable object that will unregister the function when disposed.
     * @example
     * ```ts
     * // Mock a user score fetching function
     * const formulaEngine = univerAPI.getFormula();
     * formulaEngine.registerAsyncFunction(
     *   'FETCH_USER_SCORE',
     *   async (userId) => {
     *     await new Promise(resolve => setTimeout(resolve, 1000));
     *     // Mock fetching user score from database
     *     return userId * 10 + Math.floor(Math.random() * 20);
     *   },
     *   {
     *     description: 'customFunction.FETCH_USER_SCORE.description',
     *     locales: {
     *       'zhCN': {
     *         'customFunction': {
     *           'FETCH_USER_SCORE': {
     *             'description': '从数据库中获取用户分数'
     *           }
     *         }
     *       },
     *       'enUS': {
     *         'customFunction': {
     *           'FETCH_USER_SCORE': {
     *             'description': 'Mock fetching user score from database'
     *           }
     *         }
     *       }
     *     }
     *   }
     * );
     *
     * // Use the function in a cell
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cellA1 = fWorksheet.getRange('A1');
     * cellA1.setValue({ f: '=FETCH_USER_SCORE(42)' });
     *
     * // After 1 second, A1 will display a score
     * ```
     */
    registerAsyncFunction(name: string, func: IRegisterAsyncFunction, { locales, description }: {
        locales?: ILocales;
        description?: string | IFunctionInfo;
    }): IDisposable;
}
export declare class FFormulaSheetsMixin extends FFormula implements IFFormulaSheetsMixin {
    /**
     * RegisterFunction may be executed multiple times, triggering multiple formula forced refreshes.
     */
    private _debouncedFormulaCalculation;
    /**
     * Initialize the FUniver instance.
     * @ignore
     */
    _initialize(): void;
    setInitialFormulaComputing(calculationMode: CalculationMode): void;
    registerFunction(name: string, func: IRegisterFunction): IDisposable;
    registerFunction(name: string, func: IRegisterFunction, description: string): IDisposable;
    registerAsyncFunction(name: string, func: IRegisterAsyncFunction): IDisposable;
    registerAsyncFunction(name: string, func: IRegisterAsyncFunction, description: string): IDisposable;
}
declare module '@univerjs/engine-formula/facade' {
    interface FFormula extends IFFormulaSheetsMixin {
    }
}
