import { IContext, BaseCalculateUnit } from './base-calculate-unit';
interface IConfig {
    min: number;
    max: number;
    startPoint: number;
}
export declare class DataBarCalculateUnit extends BaseCalculateUnit<IConfig> {
    preComputing(row: number, col: number, context: IContext): void;
    protected getCellResult(row: number, col: number, preComputingResult: IConfig, context: IContext): {
        color: string;
        startPoint: number;
        value: number;
        isGradient: boolean;
        isShowValue: boolean;
    } | undefined;
}
export {};
