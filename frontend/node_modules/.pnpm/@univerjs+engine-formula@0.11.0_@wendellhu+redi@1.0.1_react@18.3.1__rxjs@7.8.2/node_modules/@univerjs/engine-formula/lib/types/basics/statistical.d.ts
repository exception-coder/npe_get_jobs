import { BaseValueObject, ErrorValueObject } from '../engine/value-object/base-value-object';
export declare function betaCDF(x: number, alpha: number, beta: number): number;
export declare function betaPDF(x: number, alpha: number, beta: number): number;
export declare function betaINV(probability: number, alpha: number, beta: number): number;
export declare function binomialCDF(x: number, trials: number, probability: number): number;
export declare function binomialPDF(x: number, trials: number, probability: number): number;
export declare function chisquareCDF(x: number, degFreedom: number): number;
export declare function chisquarePDF(x: number, degFreedom: number): number;
export declare function chisquareINV(probability: number, degFreedom: number): number;
export declare function centralFCDF(x: number, degFreedom1: number, degFreedom2: number): number;
export declare function centralFPDF(x: number, degFreedom1: number, degFreedom2: number): number;
export declare function centralFINV(probability: number, degFreedom1: number, degFreedom2: number): number;
export declare function exponentialCDF(x: number, lambda: number): number;
export declare function exponentialPDF(x: number, lambda: number): number;
export declare function forecastLinear(x: number, knownYs: number[], knownXs: number[]): number;
export declare function gamma(x: number): number;
export declare function gammaCDF(x: number, alpha: number, beta: number): number;
export declare function gammaPDF(x: number, alpha: number, beta: number): number;
export declare function gammaINV(probability: number, alpha: number, beta: number): number;
export declare function gammaln(x: number): number;
export declare function hypergeometricCDF(x: number, n: number, M: number, N: number): number;
export declare function hypergeometricPDF(x: number, n: number, M: number, N: number): number;
export declare function lognormalCDF(x: number, mean: number, standardDev: number): number;
export declare function lognormalPDF(x: number, mean: number, standardDev: number): number;
export declare function lognormalINV(probability: number, mean: number, standardDev: number): number;
export declare function negbinomialCDF(numberF: number, numberS: number, probabilityS: number): number;
export declare function negbinomialPDF(numberF: number, numberS: number, probabilityS: number): number;
export declare function normalCDF(x: number, mean: number, standardDev: number): number;
export declare function normalPDF(x: number, mean: number, standardDev: number): number;
export declare function normalINV(probability: number, mean: number, standardDev: number): number;
export declare function poissonCDF(x: number, mean: number): number;
export declare function poissonPDF(x: number, mean: number): number;
export declare function studentTCDF(x: number, degFreedom: number): number;
export declare function studentTPDF(x: number, degFreedom: number): number;
export declare function studentTINV(probability: number, degFreedom: number): number;
export declare function getTwoArrayNumberValues(array1: BaseValueObject, array2: BaseValueObject, count: number, array1ColumnCount: number, array2ColumnCount: number): {
    isError: boolean;
    errorObject: ErrorValueObject;
    array1Values: number[];
    array2Values: number[];
    noCalculate: boolean;
} | {
    isError: boolean;
    errorObject: null;
    array1Values: number[];
    array2Values: number[];
    noCalculate: boolean;
};
export declare function checkKnownsArrayDimensions(knownYs: BaseValueObject, knownXs?: BaseValueObject, newXs?: BaseValueObject): {
    isError: boolean;
    errorObject: ErrorValueObject;
} | {
    isError: boolean;
    errorObject: null;
};
export declare function getKnownsArrayValues(array: BaseValueObject): number[][] | ErrorValueObject;
export declare function getSerialNumbersByRowsColumns(rowCount: number, columnCount: number): number[][];
export declare function getSlopeAndIntercept(knownXsValues: number[], knownYsValues: number[], constb: number, isExponentialTransform: boolean): {
    slope: any;
    intercept: number;
    Y: number[];
};
export declare function getKnownsArrayCoefficients(knownYsValues: number[][], knownXsValues: number[][], newXsValues: number[][], constb: number, isExponentialTransform: boolean): ErrorValueObject | {
    coefficients: number[][];
    Y: number[][];
    X: number[][];
    newX: number[][];
    XTXInverse: number[][];
};
