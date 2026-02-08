import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Negbinomdist extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(numberF: BaseValueObject, numberS: BaseValueObject, probabilityS: BaseValueObject): BaseValueObject;
    private _handleSingleObject;
}
