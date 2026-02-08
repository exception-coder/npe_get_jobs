import { IRange } from '../../sheets/typedef';
import { DataValidationErrorStyle } from '../enum/data-validation-error-style';
import { DataValidationImeMode } from '../enum/data-validation-ime-mode';
import { DataValidationOperator } from '../enum/data-validation-operator';
import { DataValidationRenderMode } from '../enum/data-validation-render-mode';
import { DataValidationType } from '../enum/data-validation-type';
export interface IDataValidationRuleBase {
    /**
     * data validation type
     */
    type: DataValidationType | string;
    allowBlank?: boolean;
    /**
     * data validation creteria
     */
    formula1?: string;
    formula2?: string;
    operator?: DataValidationOperator;
}
export interface IDataValidationRuleOptions {
    imeMode?: DataValidationImeMode;
    /**
     * for list&listMultiple, show dropdown or not
     */
    showDropDown?: boolean;
    /**
     * validator error
     */
    showErrorMessage?: boolean;
    /**
     * custom error tips
     */
    error?: string;
    /**
     * reaction when validator error
     */
    errorStyle?: DataValidationErrorStyle;
    errorTitle?: string;
    /**
     * input prompt, not for using now.
     */
    showInputMessage?: boolean;
    prompt?: string;
    promptTitle?: string;
    /**
     * cell render mode of data validation, support TEXT, ARROW, CUSTOM
     */
    renderMode?: DataValidationRenderMode;
    /**
     * custom biz info
     */
    bizInfo?: {
        /**
         * show time in date picker
         */
        showTime?: boolean;
    };
}
export interface IDataValidationRule extends IDataValidationRuleBase, IDataValidationRuleOptions {
    uid: string;
    /**
     * @debt should using specific type cover sheet、doc、slide range type
     */
    ranges: any;
}
export interface ISheetDataValidationRule extends IDataValidationRule {
    ranges: IRange[];
}
export interface IDataValidationRuleInfo {
    rule: IDataValidationRule;
    unitId: string;
    subUnitId: string;
}
