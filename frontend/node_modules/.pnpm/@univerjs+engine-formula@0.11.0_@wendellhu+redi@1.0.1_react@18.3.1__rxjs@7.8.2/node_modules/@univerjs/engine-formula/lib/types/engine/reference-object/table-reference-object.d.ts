import { ISuperTable, TableOptionType } from '../../basics/common';
import { BaseReferenceObject } from './base-reference-object';
export declare class TableReferenceObject extends BaseReferenceObject {
    private _tableData;
    private _columnDataString;
    constructor(token: string, _tableData: ISuperTable, _columnDataString: string, tableOptionMap: Map<string, TableOptionType>);
    isTable(): boolean;
    private _stringToColumnData;
    private _columnHandler;
}
