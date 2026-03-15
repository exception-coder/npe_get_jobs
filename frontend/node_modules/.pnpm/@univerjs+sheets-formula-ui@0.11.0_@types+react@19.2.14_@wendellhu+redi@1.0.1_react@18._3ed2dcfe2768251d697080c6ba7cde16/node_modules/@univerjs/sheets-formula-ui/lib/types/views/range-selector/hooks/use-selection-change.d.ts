import { IUnitRangeName } from '@univerjs/core';
interface IRangeSelectorSelectionChangeProps {
    supportAcrossSheet?: boolean;
    keepSheetReference?: boolean;
    unitId: string;
    subUnitId: string;
    onChange: (ranges: IUnitRangeName[], isStart: boolean) => void;
}
export declare function useRangeSelectorSelectionChange(opts: IRangeSelectorSelectionChangeProps): void;
export {};
