// Types
import type { PropType } from 'vue';
import type { VTimePickerViewMode } from './shared.js';
export type AllowFunction = (val: number) => boolean;
export declare const makeTimeValidationProps: <Defaults extends {
    allowedHours?: unknown;
    allowedMinutes?: unknown;
    allowedSeconds?: unknown;
    max?: unknown;
    min?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    allowedHours: unknown extends Defaults["allowedHours"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedHours"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedHours"]>;
        default: unknown extends Defaults["allowedHours"] ? AllowFunction | number[] : Defaults["allowedHours"] | NonNullable<AllowFunction | number[]>;
    };
    allowedMinutes: unknown extends Defaults["allowedMinutes"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedMinutes"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedMinutes"]>;
        default: unknown extends Defaults["allowedMinutes"] ? AllowFunction | number[] : Defaults["allowedMinutes"] | NonNullable<AllowFunction | number[]>;
    };
    allowedSeconds: unknown extends Defaults["allowedSeconds"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedSeconds"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedSeconds"]>;
        default: unknown extends Defaults["allowedSeconds"] ? AllowFunction | number[] : Defaults["allowedSeconds"] | NonNullable<AllowFunction | number[]>;
    };
    max: unknown extends Defaults["max"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["max"] ? string : string | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string : string | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["min"] ? string : string | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string : string | Defaults["min"];
    };
};
export interface TimeValidationProps {
    allowedHours?: AllowFunction | number[];
    allowedMinutes?: AllowFunction | number[];
    allowedSeconds?: AllowFunction | number[];
    min?: string;
    max?: string;
}
export declare function useTimeValidation(props: TimeValidationProps): {
    isAllowedHour: import("vue").ComputedRef<(val: number) => boolean>;
    isAllowedMinute: import("vue").ComputedRef<(hour24hr: number | null, val: number) => boolean>;
    isAllowedSecond: import("vue").ComputedRef<(hour24hr: number | null, minute: number | null, val: number) => boolean>;
    findNextAllowed: (type: VTimePickerViewMode, value: number, increment: boolean, currentHour?: number | null, currentMinute?: number | null) => number;
};
