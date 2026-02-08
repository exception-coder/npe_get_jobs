import { BaseValueObject, ErrorValueObject } from '../engine/value-object/base-value-object';
type DatabaseValueType = string | number | null;
export declare function checkDatabase(database: BaseValueObject): {
    isError: boolean;
    errorObject: ErrorValueObject;
    databaseValues: DatabaseValueType[][];
} | {
    isError: boolean;
    errorObject: null;
    databaseValues: DatabaseValueType[][];
};
export declare function checkField(field: BaseValueObject, database: DatabaseValueType[][]): {
    isError: boolean;
    errorObject: ErrorValueObject;
    fieldIndex: number;
} | {
    isError: boolean;
    errorObject: null;
    fieldIndex: number;
};
export declare function checkCriteria(criteria: BaseValueObject): {
    isError: boolean;
    errorObject: ErrorValueObject;
    criteriaValues: DatabaseValueType[][];
} | {
    isError: boolean;
    errorObject: null;
    criteriaValues: DatabaseValueType[][];
};
export declare function isCriteriaMatch(criteria: DatabaseValueType[][], database: DatabaseValueType[][], databaseRowIndex: number): boolean;
export {};
