import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Npv extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsLocale: boolean;
    calculate(rate: BaseValueObject, ...variants: BaseValueObject[]): BaseValueObject;
    private _handleSingleObject;
    private _getValues;
}
