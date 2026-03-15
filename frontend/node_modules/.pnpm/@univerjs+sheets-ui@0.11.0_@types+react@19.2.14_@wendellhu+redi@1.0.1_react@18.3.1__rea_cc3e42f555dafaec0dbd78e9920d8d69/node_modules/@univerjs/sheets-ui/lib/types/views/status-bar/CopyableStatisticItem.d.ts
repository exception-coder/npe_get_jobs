import { IFunctionNames } from '@univerjs/engine-formula';
import { FC } from 'react';
export interface IStatisticItem {
    name: IFunctionNames;
    value: number;
    show: boolean;
    disable: boolean;
    pattern: string | null;
}
export declare const functionDisplayNames: IFunctionNameMap;
interface IFunctionNameMap {
    [key: string]: string;
}
export declare const CopyableStatisticItem: FC<IStatisticItem>;
export declare function formatNumber(item: IStatisticItem): string | 0;
export {};
