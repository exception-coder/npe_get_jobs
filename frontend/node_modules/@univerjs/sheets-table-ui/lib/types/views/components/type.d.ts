import { TableConditionTypeEnum, TableDateCompareTypeEnum, TableNumberCompareTypeEnum, TableStringCompareTypeEnum } from '@univerjs/sheets-table';
export declare enum ConditionSubComponentEnum {
    DatePicker = "DatePicker",
    DateRange = "DateRange",
    Input = "Input",
    Inputs = "Inputs",
    Select = "Select",
    None = "None"
}
export type IConditionCompareTypeEnum = TableStringCompareTypeEnum | TableDateCompareTypeEnum | TableNumberCompareTypeEnum;
export type ITableConditionTypeEnumWithoutLogic = Exclude<TableConditionTypeEnum, TableConditionTypeEnum.Logic>;
export interface IConditionInfo {
    type: ITableConditionTypeEnumWithoutLogic;
    compare: IConditionCompareTypeEnum;
    info: IConditionExpect;
}
export interface IConditionExpect {
    date?: Date;
    dateRange?: [Date, Date];
    dateSelect?: string;
    number?: number;
    numberRange?: [number?, number?];
    string?: string;
}
