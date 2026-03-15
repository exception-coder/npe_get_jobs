import { ErrorValueObject } from '../engine/value-object/base-value-object';
export declare function calculateCoupdaybs(settlementSerialNumber: number, maturitySerialNumber: number, frequency: number, basis: number): number;
export declare function calculateCoupdays(settlementSerialNumber: number, maturitySerialNumber: number, frequency: number, basis: number): number;
export declare function calculateCoupncd(settlementSerialNumber: number, maturitySerialNumber: number, frequency: number): number;
export declare function calculateCoupnum(settlementSerialNumber: number, maturitySerialNumber: number, frequency: number): number;
export declare function calculateCouppcd(settlementSerialNumber: number, maturitySerialNumber: number, frequency: number): number;
export declare function calculateDuration(settlementSerialNumber: number, maturitySerialNumber: number, coupon: number, yld: number, frequency: number, basis: number): number;
export declare function calculatePMT(rate: number, nper: number, pv: number, fv: number, type: number): number;
export declare function calculateFV(rate: number, nper: number, pmt: number, pv: number, type: number): number;
export declare function calculateIPMT(rate: number, per: number, nper: number, pv: number, fv: number, type: number): number;
export declare function calculateNpv(rate: number, values: number[]): number;
export declare function calculateOddFPrice(settlementSerialNumber: number, maturitySerialNumber: number, issueSerialNumber: number, firstCouponSerialNumber: number, rate: number, yld: number, redemption: number, frequency: number, basis: number): number;
export declare function validDaysBetweenIsWholeFrequencyByTwoDate(date1SerialNumber: number, date2SerialNumber: number, frequency: number): boolean;
export declare function validCouppcdIsGte0ByTwoDate(date1SerialNumber: number, date2SerialNumber: number, frequency: number): boolean;
export declare function getDateSerialNumberByMonths(serialNumber: number, months: number, returnLastDay: boolean): number;
interface IIterFFunctionType {
    (x: number): number;
}
export declare function getResultByGuessIterF(guess: number, iterF: IIterFFunctionType): number | ErrorValueObject;
export declare function calculatePrice(settlementSerialNumber: number, maturitySerialNumber: number, rate: number, yld: number, redemption: number, frequency: number, basis: number): number;
export declare function calculateDDB(cost: number, salvage: number, life: number, period: number, factor: number): number;
export {};
