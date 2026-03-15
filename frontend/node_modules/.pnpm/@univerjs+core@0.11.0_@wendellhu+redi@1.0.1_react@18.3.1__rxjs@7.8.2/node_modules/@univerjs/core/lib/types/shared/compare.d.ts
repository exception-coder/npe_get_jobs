import { ITextRun } from '../types/interfaces/i-document-data';
interface AnyObject {
    [key: number | string]: AnyObject | AnyObject[] | Array<[number | string]> | any;
}
export declare function deepCompare(arg1: AnyObject, arg2: AnyObject): boolean;
export declare function isSameStyleTextRun(tr1: ITextRun, tr2: ITextRun): boolean;
export declare function checkForSubstrings(searchString: string, substrings: string[]): boolean;
export {};
