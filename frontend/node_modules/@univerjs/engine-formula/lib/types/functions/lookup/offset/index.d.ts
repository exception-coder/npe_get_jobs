import { BaseFunction } from '../../base-function';
import { FunctionVariantType } from '../../../engine/reference-object/base-reference-object';
export declare class Offset extends BaseFunction {
    minParams: number;
    maxParams: number;
    needsReferenceObject: boolean;
    isAddress(): boolean;
    calculate(reference: FunctionVariantType, rows: FunctionVariantType, columns: FunctionVariantType, height?: FunctionVariantType, width?: FunctionVariantType): FunctionVariantType;
    private _handleSingleObject;
}
