import { DependencyOverride } from '@univerjs/core';
export declare const SHEETS_PLUGIN_CONFIG_KEY = "sheets.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsConfig {
    notExecuteFormula?: boolean;
    override?: DependencyOverride;
    /**
     * Only register the mutations related to the formula calculation. Especially useful for the
     * web worker environment or server-side-calculation.
     */
    onlyRegisterFormulaRelatedMutations?: true;
    /**
     * If the row style and column style be set both, and the row style should precede the column style or not.
     */
    isRowStylePrecedeColumnStyle?: boolean;
    /**
     * default false, auto height works for merged cells
     */
    autoHeightForMergedCells?: boolean;
    /**
     * Whether synchronize the frozen state to other users in real-time collaboration.
     * @default true
     */
    freezeSync?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsConfig;
