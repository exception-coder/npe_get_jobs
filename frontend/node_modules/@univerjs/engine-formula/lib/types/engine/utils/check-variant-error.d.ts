import { BaseValueObject } from '../value-object/base-value-object';
export declare function checkVariantErrorIsArray(variant: BaseValueObject): BaseValueObject;
export declare function checkVariantsErrorIsArray(...variants: BaseValueObject[]): {
    isError: boolean;
    errorObject: BaseValueObject;
    variants?: undefined;
} | {
    isError: boolean;
    variants: BaseValueObject[];
    errorObject?: undefined;
};
export declare function checkVariantsErrorIsArrayOrBoolean(...variants: BaseValueObject[]): {
    isError: boolean;
    errorObject: BaseValueObject;
    variants?: undefined;
} | {
    isError: boolean;
    variants: BaseValueObject[];
    errorObject?: undefined;
};
export declare function checkVariantsErrorIsNullorArrayOrBoolean(...variants: BaseValueObject[]): {
    isError: boolean;
    errorObject: BaseValueObject;
    variants?: undefined;
} | {
    isError: boolean;
    variants: BaseValueObject[];
    errorObject?: undefined;
};
export declare function checkVariantsErrorIsStringToNumber(...variants: BaseValueObject[]): {
    isError: boolean;
    errorObject: BaseValueObject;
    variants?: undefined;
} | {
    isError: boolean;
    variants: BaseValueObject[];
    errorObject?: undefined;
};
