import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Find extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(findText: BaseValueObject, withinText: BaseValueObject, startNum?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
