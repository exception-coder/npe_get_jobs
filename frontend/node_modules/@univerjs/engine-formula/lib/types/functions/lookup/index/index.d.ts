import { BaseReferenceObject, FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
/**
 * The result of the INDEX function is a reference and is interpreted as such by other formulas. Depending on the formula, the return value of INDEX may be used as a reference or as a value.
 *
 * =INDEX(A2:A5,2,1):A1 same as =A1:A3
 *
 * We refer to Google Sheets and set both rowNum and columnNum to optional
 *
 */
export declare class Index extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(reference: FunctionVariantType, rowNum: FunctionVariantType, columnNum?: FunctionVariantType, areaNum?: FunctionVariantType): BaseValueObject | BaseReferenceObject;
    private _handleSingleObject;
    private _getReferenceCounts;
    private _calculateReferenceObject;
    private _calculateArrayObject;
}
