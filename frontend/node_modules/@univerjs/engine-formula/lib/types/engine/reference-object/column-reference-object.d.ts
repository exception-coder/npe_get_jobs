import { ErrorValueObject } from '../value-object/base-value-object';
import { BaseReferenceObject } from './base-reference-object';
export declare class ColumnReferenceObject extends BaseReferenceObject {
    constructor(token: string);
    isColumn(): boolean;
    unionBy(referenceObject: BaseReferenceObject): ErrorValueObject | this;
}
