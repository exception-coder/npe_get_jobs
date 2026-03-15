import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Normsdist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(z: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
