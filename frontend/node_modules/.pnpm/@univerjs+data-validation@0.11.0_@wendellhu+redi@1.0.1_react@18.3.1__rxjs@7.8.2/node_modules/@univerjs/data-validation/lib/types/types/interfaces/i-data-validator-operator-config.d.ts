import { DataValidationOperator } from '@univerjs/core';
export interface IDataValidatorOperatorConfig {
    operator: DataValidationOperator;
    text: string;
    placeholder1?: string;
    placeholder2?: string;
    formulaCount: 1 | 2;
}
