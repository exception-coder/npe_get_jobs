import { FEnum } from '@univerjs/core/facade';
import { TableColumnFilterTypeEnum, TableConditionTypeEnum, TableDateCompareTypeEnum, TableNumberCompareTypeEnum, TableStringCompareTypeEnum } from '@univerjs/sheets-table';
/**
 * @ignore
 */
export interface ITableEnumMixin {
    TableColumnFilterTypeEnum: typeof TableColumnFilterTypeEnum;
    TableConditionTypeEnum: typeof TableConditionTypeEnum;
    TableNumberCompareTypeEnum: typeof TableNumberCompareTypeEnum;
    TableStringCompareTypeEnum: typeof TableStringCompareTypeEnum;
    TableDateCompareTypeEnum: typeof TableDateCompareTypeEnum;
}
export declare class TableEnum extends FEnum implements ITableEnumMixin {
    get TableColumnFilterTypeEnum(): typeof TableColumnFilterTypeEnum;
    get TableConditionTypeEnum(): typeof TableConditionTypeEnum;
    get TableNumberCompareTypeEnum(): typeof TableNumberCompareTypeEnum;
    get TableStringCompareTypeEnum(): typeof TableStringCompareTypeEnum;
    get TableDateCompareTypeEnum(): typeof TableDateCompareTypeEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends ITableEnumMixin {
    }
}
