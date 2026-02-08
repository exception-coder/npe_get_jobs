import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Substitute extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(text: BaseValueObject, oldText: BaseValueObject, newText: BaseValueObject, instanceNum?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _getObjectString;
}
