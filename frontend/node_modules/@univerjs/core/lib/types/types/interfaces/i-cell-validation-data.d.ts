import { DataValidationStatus } from '../enum/data-validation-status';
import { IDataValidationRule } from './i-data-validation';
export interface ICellValidationData {
    ruleId: string;
    validStatus: DataValidationStatus;
    rule: IDataValidationRule;
    validator: any;
    isSkip?: boolean;
}
