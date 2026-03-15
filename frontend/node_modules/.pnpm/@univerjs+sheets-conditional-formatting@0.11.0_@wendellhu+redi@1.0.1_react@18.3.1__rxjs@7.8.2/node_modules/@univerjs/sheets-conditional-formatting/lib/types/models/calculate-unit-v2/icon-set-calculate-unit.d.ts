import { Nullable } from '@univerjs/core';
import { CFNumberOperator } from '../../base/const';
import { IContext, BaseCalculateUnit } from './base-calculate-unit';
interface IConfigItem {
    operator: CFNumberOperator;
    value: number;
    iconType: string;
    iconId: string;
}
export declare class IconSetCalculateUnit extends BaseCalculateUnit<IConfigItem[]> {
    preComputing(_row: number, _col: number, context: IContext): void;
    protected getCellResult(row: number, col: number, preComputingResult: Nullable<IConfigItem[]>, context: IContext): {
        iconId: string;
        iconType: string;
        isShowValue: boolean;
    } | null | undefined;
}
export {};
