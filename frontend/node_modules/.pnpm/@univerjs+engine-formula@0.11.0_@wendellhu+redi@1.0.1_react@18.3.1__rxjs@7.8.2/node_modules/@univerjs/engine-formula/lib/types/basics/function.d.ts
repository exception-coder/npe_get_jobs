import { BooleanNumber } from '@univerjs/core';
import { FUNCTION_NAMES_ARRAY } from '../functions/array/function-names';
import { FUNCTION_NAMES_COMPATIBILITY } from '../functions/compatibility/function-names';
import { FUNCTION_NAMES_CUBE } from '../functions/cube/function-names';
import { FUNCTION_NAMES_DATABASE } from '../functions/database/function-names';
import { FUNCTION_NAMES_DATE } from '../functions/date/function-names';
import { FUNCTION_NAMES_ENGINEERING } from '../functions/engineering/function-names';
import { FUNCTION_NAMES_FINANCIAL } from '../functions/financial/function-names';
import { FUNCTION_NAMES_INFORMATION } from '../functions/information/function-names';
import { FUNCTION_NAMES_LOGICAL } from '../functions/logical/function-names';
import { FUNCTION_NAMES_LOOKUP } from '../functions/lookup/function-names';
import { FUNCTION_NAMES_MATH } from '../functions/math/function-names';
import { FUNCTION_NAMES_META } from '../functions/meta/function-names';
import { FUNCTION_NAMES_STATISTICAL } from '../functions/statistical/function-names';
import { FUNCTION_NAMES_TEXT } from '../functions/text/function-names';
import { FUNCTION_NAMES_UNIVER } from '../functions/univer/function-names';
import { FUNCTION_NAMES_WEB } from '../functions/web/function-names';
/**
 * Function type, refer to https://support.microsoft.com/en-us/office/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb
 */
export declare enum FunctionType {
    /**
     * Financial Functions
     */
    Financial = 0,
    /**
     * Date and Time Functions
     */
    Date = 1,
    /**
     * Math and Trigonometry Functions
     */
    Math = 2,
    /**
     * Statistical Functions
     */
    Statistical = 3,
    /**
     * Lookup and Reference Functions
     */
    Lookup = 4,
    /**
     * Database Functions
     */
    Database = 5,
    /**
     * Text Functions
     */
    Text = 6,
    /**
     * Logical Functions
     */
    Logical = 7,
    /**
     * Information Functions
     */
    Information = 8,
    /**
     * Engineering Functions
     */
    Engineering = 9,
    /**
     * Cube Functions
     */
    Cube = 10,
    /**
     * Compatibility Functions
     */
    Compatibility = 11,
    /**
     * Web Functions
     */
    Web = 12,
    /**
     * Array Functions
     */
    Array = 13,
    /**
     * Univer-specific functions
     */
    Univer = 14,
    /**
     * User-defined functions
     */
    User = 15,
    /**
     * Defined name
     */
    DefinedName = 16
}
export interface IFunctionParam {
    /**
     * Function name, with internationalization
     */
    name: string;
    /**
     * Detailed description of function, with internationalization
     */
    detail: string;
    /**
     * Function example
     */
    example: string;
    /**
     * Is it optional
     *
     * true: required
     * false: optional
     */
    require: BooleanNumber;
    /**
     * Whether it is repeatable, in the case of repeatability, the maximum parameter of m is generally set to 255, such as [1,255]
     *
     * true: repeatable
     * false: not repeatable
     */
    repeat: BooleanNumber;
}
export interface IFunctionInfo {
    /**
     * Function name
     */
    functionName: string;
    /**
     * Alias function name
     */
    aliasFunctionName?: string;
    /**
     * Function type
     */
    functionType: FunctionType;
    /**
     * Detailed description
     */
    description: string;
    /**
     * Concise abstract
     */
    abstract: string;
    /**
     * Function params
     */
    functionParameter: IFunctionParam[];
}
export type IFunctionNames = string | FUNCTION_NAMES_ARRAY | FUNCTION_NAMES_COMPATIBILITY | FUNCTION_NAMES_CUBE | FUNCTION_NAMES_DATABASE | FUNCTION_NAMES_DATE | FUNCTION_NAMES_ENGINEERING | FUNCTION_NAMES_FINANCIAL | FUNCTION_NAMES_INFORMATION | FUNCTION_NAMES_LOGICAL | FUNCTION_NAMES_LOOKUP | FUNCTION_NAMES_MATH | FUNCTION_NAMES_META | FUNCTION_NAMES_STATISTICAL | FUNCTION_NAMES_TEXT | FUNCTION_NAMES_UNIVER | FUNCTION_NAMES_WEB;
