type DataPoint = [number, number];
interface IRegressionResult {
    formula: string;
    execute: (x: number) => number;
    R2: number;
}
declare function linearRegression(data: DataPoint[]): IRegressionResult;
declare function exponentialRegression(data: DataPoint[]): IRegressionResult;
declare function logarithmicRegression(data: DataPoint[]): IRegressionResult;
declare function powerRegression(data: DataPoint[]): IRegressionResult;
declare function polynomialRegression(data: DataPoint[], degree: number): IRegressionResult;
declare function movingAverage(data: DataPoint[], period: number): (number | null)[];
export { exponentialRegression, linearRegression, logarithmicRegression, movingAverage, polynomialRegression, powerRegression, };
