import { UniverFormulaEnginePlugin as n } from "@univerjs/engine-formula";
import { UniverRPCWorkerThreadPlugin as o } from "@univerjs/rpc";
import { UniverSheetsPlugin as i } from "@univerjs/sheets";
import { UniverRemoteSheetsFormulaPlugin as t } from "@univerjs/sheets-formula";
function g(r = {}) {
  const {
    formula: e
  } = r;
  return {
    plugins: [
      [i, { onlyRegisterFormulaRelatedMutations: !0 }],
      [n, { function: e == null ? void 0 : e.function }],
      o,
      t
    ]
  };
}
export {
  g as UniverSheetsCoreWorkerPreset
};
