import { IContext, BaseCalculateUnit } from './base-calculate-unit';
import { ColorKit } from '@univerjs/core';
interface IConfigItem {
    value: number;
    color: ColorKit;
}
export declare class ColorScaleCalculateUnit extends BaseCalculateUnit<IConfigItem[], string> {
    preComputing(_row: number, _col: number, context: IContext): void;
    protected getCellResult(row: number, col: number, preComputingResult: IConfigItem[], context: IContext): string | null | undefined;
}
export {};
