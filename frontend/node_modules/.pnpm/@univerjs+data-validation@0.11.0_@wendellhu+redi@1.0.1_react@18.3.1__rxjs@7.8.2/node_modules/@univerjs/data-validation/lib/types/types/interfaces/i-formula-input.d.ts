import { IFormulaValidResult } from '../../validators/base-data-validator';
export interface IFormulaValue {
    formula1?: string;
    formula2?: string;
}
export interface IFormulaInputProps {
    isTwoFormula?: boolean;
    value?: IFormulaValue;
    onChange?: (value?: IFormulaValue) => void;
    unitId: string;
    subUnitId: string;
    showError?: boolean;
    validResult?: IFormulaValidResult;
    ruleId: string;
}
export type FormulaInputType = React.ComponentType<IFormulaInputProps>;
