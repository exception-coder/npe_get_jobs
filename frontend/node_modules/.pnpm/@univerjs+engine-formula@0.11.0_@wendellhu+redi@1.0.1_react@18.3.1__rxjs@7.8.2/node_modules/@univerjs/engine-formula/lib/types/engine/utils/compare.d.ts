import { compareToken } from '../../basics/token';
/**
 * For SearchType
 */
export declare enum ArrayBinarySearchType {
    MIN = 0,// Ascending order
    MAX = 1
}
/**
 * For MatchType
 */
export declare enum ArrayOrderSearchType {
    NORMAL = 0,// Exact match.
    MIN = 1,// Exact match. If none found, return the next smaller item.
    MAX = 2
}
export declare function getCompare(): (x: string, y: string) => number;
export declare function isWildcard(str: string): boolean;
export declare function isMatchWildcard(currentValue: string, value: string): boolean;
export declare function replaceWildcard(value: string): string;
export declare function compareWithWildcard(currentValue: string, value: string, operator: compareToken): boolean;
export declare function escapeRegExp(str: string): string;
export declare function getMatchModeValue(matchModeValue: number): ArrayOrderSearchType;
export declare function getSearchModeValue(searchModeValue: number): ArrayBinarySearchType;
