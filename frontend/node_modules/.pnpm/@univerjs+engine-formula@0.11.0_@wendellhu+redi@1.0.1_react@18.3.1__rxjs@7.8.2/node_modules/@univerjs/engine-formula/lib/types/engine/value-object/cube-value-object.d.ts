import { ArrayValueObject } from './array-value-object';
import { BaseValueObject } from './base-value-object';
import { NumberValueObject } from './primitive-object';
export declare class CubeValueObject extends BaseValueObject {
    static create(values: ArrayValueObject[]): CubeValueObject;
    isCube(): boolean;
    private _values;
    constructor(values: ArrayValueObject[]);
    dispose(): void;
    getCubeValues(): ArrayValueObject[];
    getCubeCount(): number;
    sum(): NumberValueObject;
    max(): NumberValueObject;
    min(): NumberValueObject;
    count(): NumberValueObject;
    countA(): NumberValueObject;
    countBlank(): NumberValueObject;
}
