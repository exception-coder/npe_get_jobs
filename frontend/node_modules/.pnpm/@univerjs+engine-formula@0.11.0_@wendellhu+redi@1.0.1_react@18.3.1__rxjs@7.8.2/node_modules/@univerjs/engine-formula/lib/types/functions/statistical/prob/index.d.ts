import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Prob extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(xRange: BaseValueObject, probRange: BaseValueObject, lowerLimit: BaseValueObject, upperLimit?: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
    private _handleXRangeAndProbRange;
}
