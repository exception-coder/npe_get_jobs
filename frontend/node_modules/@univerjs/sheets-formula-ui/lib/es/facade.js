import { FUniver as e } from "@univerjs/core/facade";
import { GlobalRangeSelectorService as r } from "@univerjs/sheets-formula-ui";
class t extends e {
  showRangeSelectorDialog(o) {
    return this._injector.get(r).showRangeSelectorDialog(o);
  }
}
e.extend(t);
export {
  t as FSheetsFormulaUIUniver
};
