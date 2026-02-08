import { BaseFunction } from '../../base-function';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
export declare class Fisherinv extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(y: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
