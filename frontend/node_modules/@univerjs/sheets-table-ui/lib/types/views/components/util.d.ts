import { Injector } from '@univerjs/core';
import { ITableFilterItem, TableConditionTypeEnum, TableDateCompareTypeEnum, TableNumberCompareTypeEnum, TableStringCompareTypeEnum } from '@univerjs/sheets-table';
import { IConditionCompareTypeEnum, ConditionSubComponentEnum } from './type';
export declare function getCascaderListOptions(injector: Injector): ({
    value: TableConditionTypeEnum;
    label: string;
    children: {
        value: TableStringCompareTypeEnum;
        label: string;
    }[];
} | {
    value: TableConditionTypeEnum;
    label: string;
    children: {
        value: TableNumberCompareTypeEnum;
        label: string;
    }[];
} | {
    value: TableConditionTypeEnum;
    label: string;
    children: {
        value: TableDateCompareTypeEnum;
        label: string;
    }[];
})[];
export declare function getConditionDateSelect(injector: Injector, dateType?: TableDateCompareTypeEnum): {
    value: TableDateCompareTypeEnum;
    label: string;
}[];
export declare const datePickerSet: Set<IConditionCompareTypeEnum>;
export declare function getSubComponentType(type: TableConditionTypeEnum, compare?: TableStringCompareTypeEnum | TableNumberCompareTypeEnum | TableDateCompareTypeEnum): ConditionSubComponentEnum;
export declare function getInitConditionInfo(tableFilter?: ITableFilterItem): {
    type: TableConditionTypeEnum;
    compareType: TableStringCompareTypeEnum;
    info: {
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compare?: undefined;
} | {
    type: TableConditionTypeEnum.Date;
    compare: TableDateCompareTypeEnum.Between | TableDateCompareTypeEnum.NotBetween;
    info: {
        dateRange: [Date, Date] | undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.Date;
    compare: TableDateCompareTypeEnum.Today | TableDateCompareTypeEnum.Yesterday | TableDateCompareTypeEnum.Tomorrow | TableDateCompareTypeEnum.ThisWeek | TableDateCompareTypeEnum.LastWeek | TableDateCompareTypeEnum.NextWeek | TableDateCompareTypeEnum.ThisMonth | TableDateCompareTypeEnum.LastMonth | TableDateCompareTypeEnum.NextMonth | TableDateCompareTypeEnum.ThisYear | TableDateCompareTypeEnum.LastYear | TableDateCompareTypeEnum.NextYear;
    info: {
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.Date;
    compare: TableDateCompareTypeEnum.Equal | TableDateCompareTypeEnum.NotEqual | TableDateCompareTypeEnum.After | TableDateCompareTypeEnum.AfterOrEqual | TableDateCompareTypeEnum.Before | TableDateCompareTypeEnum.BeforeOrEqual | TableDateCompareTypeEnum.ThisQuarter | TableDateCompareTypeEnum.LastQuarter | TableDateCompareTypeEnum.NextQuarter | TableDateCompareTypeEnum.YearToDate | TableDateCompareTypeEnum.Quarter | TableDateCompareTypeEnum.Month | TableDateCompareTypeEnum.M1 | TableDateCompareTypeEnum.M2 | TableDateCompareTypeEnum.M3 | TableDateCompareTypeEnum.M4 | TableDateCompareTypeEnum.M5 | TableDateCompareTypeEnum.M6 | TableDateCompareTypeEnum.M7 | TableDateCompareTypeEnum.M8 | TableDateCompareTypeEnum.M9 | TableDateCompareTypeEnum.M10 | TableDateCompareTypeEnum.M11 | TableDateCompareTypeEnum.M12 | TableDateCompareTypeEnum.Q1 | TableDateCompareTypeEnum.Q2 | TableDateCompareTypeEnum.Q3 | TableDateCompareTypeEnum.Q4;
    info: {
        date: Date | [Date, Date] | undefined;
        dateRange?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.Date;
    compare: TableDateCompareTypeEnum;
    info: {
        dateSelect: TableDateCompareTypeEnum;
        dateRange?: undefined;
        date?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.Number;
    compare: TableNumberCompareTypeEnum.Between | TableNumberCompareTypeEnum.NotBetween;
    info: {
        numberRange: number | [number, number];
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.Number;
    compare: TableNumberCompareTypeEnum.Equal | TableNumberCompareTypeEnum.NotEqual | TableNumberCompareTypeEnum.GreaterThan | TableNumberCompareTypeEnum.GreaterThanOrEqual | TableNumberCompareTypeEnum.LessThan | TableNumberCompareTypeEnum.LessThanOrEqual | TableNumberCompareTypeEnum.Above | TableNumberCompareTypeEnum.Below | TableNumberCompareTypeEnum.TopN;
    info: {
        number: number | [number, number];
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum.String;
    compare: TableStringCompareTypeEnum;
    info: {
        string: string;
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
    };
    compareType?: undefined;
} | {
    type: TableConditionTypeEnum;
    compare: TableStringCompareTypeEnum;
    info: {
        dateRange?: undefined;
        date?: undefined;
        dateSelect?: undefined;
        numberRange?: undefined;
        number?: undefined;
        string?: undefined;
    };
    compareType?: undefined;
};
