import { IStyleData, Nullable } from '@univerjs/core';
import { IContext, BaseCalculateUnit } from './base-calculate-unit';
import { CFSubRuleType } from '../../base/const';
interface IConfig {
    value: any;
    type: CFSubRuleType;
}
export declare class HighlightCellCalculateUnit extends BaseCalculateUnit<Nullable<IConfig>, Nullable<IStyleData>> {
    preComputing(row: number, col: number, context: IContext): void;
    protected getCellResult(row: number, col: number, preComputingResult: Nullable<IConfig>, context: IContext): import('@univerjs/core').IStyleBase;
}
export {};
