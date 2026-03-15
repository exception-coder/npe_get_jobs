import { ErrorValueObject } from '../value-object/base-value-object';
import { BaseReferenceObject } from './base-reference-object';
export declare class RowReferenceObject extends BaseReferenceObject {
    constructor(token: string);
    isRow(): boolean;
    unionBy(referenceObject: BaseReferenceObject): ErrorValueObject | this;
}
