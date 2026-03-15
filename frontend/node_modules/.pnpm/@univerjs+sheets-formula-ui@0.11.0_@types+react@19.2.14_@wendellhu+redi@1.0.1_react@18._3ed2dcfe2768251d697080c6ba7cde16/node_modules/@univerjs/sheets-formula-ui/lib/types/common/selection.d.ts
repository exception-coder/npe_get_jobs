import { ThemeService } from '@univerjs/core';
import { ISelectionStyle } from '@univerjs/sheets';
export declare const FORMULA_REF_SELECTION_PLUGIN_NAME = "formula_reference_selection_plugin_name";
export declare function genFormulaRefSelectionStyle(themeService: ThemeService, refColor: string, id: string): ISelectionStyle;
