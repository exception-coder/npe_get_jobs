import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
import { BaseFunction } from '../../base-function';
export declare class Choose extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    calculate(indexNum: FunctionVariantType, ...variants: FunctionVariantType[]): FunctionVariantType;
}
