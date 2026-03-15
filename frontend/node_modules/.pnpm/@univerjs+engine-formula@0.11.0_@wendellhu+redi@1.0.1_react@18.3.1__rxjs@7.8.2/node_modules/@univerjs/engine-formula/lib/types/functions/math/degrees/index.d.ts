import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Degrees extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(angle: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
