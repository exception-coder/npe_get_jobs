import { FBase as f, FUniver as d } from "@univerjs/core/facade";
import { Inject as c, ICommandService as p, Injector as _, IConfigService as C } from "@univerjs/core";
import { LexerTreeBuilder as v, SetFormulaCalculationStartMutation as l, SetFormulaCalculationStopMutation as S, SetFormulaCalculationNotificationMutation as m, GlobalComputingStatusService as x, ENGINE_FORMULA_CYCLE_REFERENCE_COUNT as h } from "@univerjs/engine-formula";
import { firstValueFrom as g, race as E, filter as F, timer as B, map as I } from "rxjs";
var T = Object.getOwnPropertyDescriptor, N = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? T(t, r) : t, a = e.length - 1, u; a >= 0; a--)
    (u = e[a]) && (o = u(o) || o);
  return o;
}, n = (e, t) => (r, i) => t(r, i, e);
let s = class extends f {
  constructor(e, t, r, i) {
    super(), this._commandService = e, this._injector = t, this._lexerTreeBuilder = r, this._configService = i, this._initialize();
  }
  /**
   * @ignore
   */
  _initialize() {
  }
  /**
   * The tree builder for formula string.
   * @type {LexerTreeBuilder}
   */
  get lexerTreeBuilder() {
    return this._lexerTreeBuilder;
  }
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
  moveFormulaRefOffset(e, t, r, i) {
    return this._lexerTreeBuilder.moveFormulaRefOffset(e, t, r, i);
  }
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
  sequenceNodesBuilder(e) {
    return this._lexerTreeBuilder.sequenceNodesBuilder(e) || [];
  }
  /**
   * Start the calculation of the formula.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.executeCalculation();
   * ```
   */
  executeCalculation() {
    this._commandService.executeCommand(l.id, { commands: [], forceCalculation: !0 }, { onlyLocal: !0 });
  }
  /**
   * Stop the calculation of the formula.
   *
   * @example
   * ```ts
   * const formulaEngine = univerAPI.getFormula();
   * formulaEngine.stopCalculation();
   * ```
   */
  stopCalculation() {
    this._commandService.executeCommand(S.id, {});
  }
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
  calculationStart(e) {
    return this._commandService.onCommandExecuted((t) => {
      if (t.id === l.id) {
        const r = t.params;
        e(r.forceCalculation);
      }
    });
  }
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
  calculationEnd(e) {
    return this._commandService.onCommandExecuted((t) => {
      if (t.id !== m.id)
        return;
      const r = t.params;
      r.functionsExecutedState !== void 0 && e(r.functionsExecutedState);
    });
  }
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
  whenComputingCompleteAsync(e) {
    const t = this._injector.get(x);
    return t.computingStatus ? Promise.resolve(!0) : g(E(
      t.computingStatus$.pipe(F((r) => r)),
      B(e != null ? e : 3e4).pipe(I(() => !1))
    ));
  }
  /**
   * @deprecated Use `whenComputingCompleteAsync` instead.
   * @returns {Promise<void>} This method returns a promise that resolves when the calculation is complete.
   */
  onCalculationEnd() {
    return new Promise((e, t) => {
      const r = setTimeout(() => {
        t(new Error("Calculation end timeout"));
      }, 3e4), i = this.calculationEnd(() => {
        clearTimeout(r), i.dispose(), e();
      });
    });
  }
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
  calculationProcessing(e) {
    return this._commandService.onCommandExecuted((t) => {
      if (t.id !== m.id)
        return;
      const r = t.params;
      r.stageInfo !== void 0 && e(r.stageInfo);
    });
  }
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
  setMaxIteration(e) {
    this._configService.setConfig(h, e);
  }
};
s = N([
  n(0, c(p)),
  n(1, c(_)),
  n(2, c(v)),
  n(3, C)
], s);
class O extends d {
  getFormula() {
    return this._injector.createInstance(s);
  }
}
d.extend(O);
export {
  s as FFormula
};
