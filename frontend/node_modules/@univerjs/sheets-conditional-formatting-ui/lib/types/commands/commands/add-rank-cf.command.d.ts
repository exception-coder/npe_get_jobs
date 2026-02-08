import { ICommand, IRange } from '@univerjs/core';
import { IRankHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IAddRankCfParams {
    ranges: IRange[];
    stopIfTrue?: boolean;
    style: IRankHighlightCell['style'];
    isPercent: boolean;
    isBottom: boolean;
    value: number;
}
export declare const AddRankCfCommand: ICommand<IAddRankCfParams>;
export {};
