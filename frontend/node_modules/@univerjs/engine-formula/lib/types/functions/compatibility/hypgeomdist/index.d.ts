import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Hypgeomdist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(sampleS: BaseValueObject, numberSample: BaseValueObject, populationS: BaseValueObject, numberPop: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
