import { ITableStringFilterInfo } from '../../types/type';
export declare const textEqual: (compareValue: string, expectedValue: string) => boolean;
export declare const textNotEqual: (compareValue: string, expectedValue: string) => boolean;
export declare const textContain: (compareValue: string, expectedValue: string) => boolean;
export declare const textNotContain: (compareValue: string, expectedValue: string) => boolean;
export declare const textStartWith: (compareValue: string, expectedValue: string) => boolean;
export declare const textEndWith: (compareValue: string, expectedValue: string) => boolean;
export declare function getTextFilterExecuteFunc(filter: ITableStringFilterInfo): (value: string) => boolean;
