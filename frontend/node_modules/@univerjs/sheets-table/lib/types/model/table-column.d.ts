import { IStyleData } from '@univerjs/core';
import { TableMetaType } from '../types/type';
import { TableColumnDataTypeEnum } from '../types/enum';
export declare class TableColumn {
    dataType: TableColumnDataTypeEnum;
    id: string;
    displayName: string;
    formula: string;
    meta: TableMetaType;
    style: IStyleData;
    constructor(id: string, name: string);
    getMeta(): TableMetaType;
    setMeta(meta: TableMetaType): void;
    getDisplayName(): string;
    toJSON(): {
        id: string;
        displayName: string;
        dataType: TableColumnDataTypeEnum;
        formula: string;
        meta: TableMetaType;
        style: IStyleData;
    };
    fromJSON(json: any): void;
}
