import { BaseValueObject } from '../value-object/base-value-object';
import { ArrayValueObject } from '../value-object/array-value-object';
export declare function expandArrayValueObject(rowCount: number, columnCount: number, valueObject: BaseValueObject, defaultValue?: BaseValueObject): ArrayValueObject;
export declare function createNewArray(result: BaseValueObject[][], rowCount: number, columnCount: number, unitId?: string, sheetId?: string): ArrayValueObject;
