import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Sumx2py2 extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(arrayX: BaseValueObject, arrayY: BaseValueObject): BaseValueObject;
    private _calculateSingleCell;
}
