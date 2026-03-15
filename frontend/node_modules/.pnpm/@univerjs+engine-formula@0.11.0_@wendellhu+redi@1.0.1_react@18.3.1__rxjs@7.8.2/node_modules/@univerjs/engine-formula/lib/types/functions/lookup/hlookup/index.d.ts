import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Hlookup extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(lookupValue: BaseValueObject, tableArray: BaseValueObject, rowIndexNum: BaseValueObject, rangeLookup?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
