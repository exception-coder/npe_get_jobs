import { IAccessor, DataValidationOperator, DataValidationType } from '@univerjs/core';
export declare function createDefaultNewRule(accessor: IAccessor): {
    uid: string;
    type: DataValidationType;
    operator: DataValidationOperator;
    formula1: string;
    ranges: import('@univerjs/core').IRange[];
};
