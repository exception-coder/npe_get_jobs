// Types
import type { Period } from './shared.js';
export declare function pad(n: string | number, length?: number): string;
export declare function convert24to12(hour: number): number;
export declare function convert12to24(hour: number, period: Period): number;
export declare function extractInteger(v: string): number | null;
export declare function incrementHour(hour: number, increment: boolean, period: Period | null): {
    value: number;
    togglePeriod?: undefined;
} | {
    value: number;
    togglePeriod: boolean;
};
export declare function incrementMinuteOrSecond(val: number, increment: boolean): number;
