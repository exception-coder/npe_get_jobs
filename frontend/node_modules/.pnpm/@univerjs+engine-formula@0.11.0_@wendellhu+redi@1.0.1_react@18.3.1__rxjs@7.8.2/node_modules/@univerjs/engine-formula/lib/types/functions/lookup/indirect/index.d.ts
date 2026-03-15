import { BaseReferenceObject } from '../../../engine/reference-object/base-reference-object';
import { BaseValueObject } from '../../../engine/value-object/base-value-object';
import { BaseFunction } from '../../base-function';
export declare class Indirect extends BaseFunction {
    minParams: number;
    maxParams: number;
    isAddress(): boolean;
    calculate(refText: BaseValueObject, a1?: BaseValueObject): BaseValueObject | BaseReferenceObject;
    private _handleSingleObject;
    private _setDefault;
    /**
     * In Excel, to inject a defined name into a function that has positioning capabilities,
     * such as using the INDIRECT function to reference a named range,
     * you can write it as follows:
     * =INDIRECT("DefinedName1")
     */
    private _convertToDefinedName;
}
