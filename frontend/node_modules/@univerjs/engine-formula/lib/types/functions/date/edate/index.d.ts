import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
/**
 * TODO@Dushusir: support plaine text date: =EDATE("2020-1-1",1), =EDATE("2020/1/1",1) and other formats
 */
export declare class Edate extends BaseFunction {
    minParams: number;
    maxParams: number;
    calculate(startDate: BaseValueObject, months: BaseValueObject): BaseValueObject;
}
