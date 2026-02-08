import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class NegbinomDist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(numberF: BaseValueObject, numberS: BaseValueObject, probabilityS: BaseValueObject, cumulative: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
