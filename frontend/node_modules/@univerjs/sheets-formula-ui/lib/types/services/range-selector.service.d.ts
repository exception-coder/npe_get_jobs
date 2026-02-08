import { IUnitRangeName } from '@univerjs/core';
export interface IShowRangeSelectorDialogOptions {
    unitId: string;
    subUnitId: string;
    initialValue?: IUnitRangeName[];
    maxRangeCount?: number;
    supportAcrossSheet?: boolean;
    callback: (ranges: IUnitRangeName[]) => void;
}
export declare class GlobalRangeSelectorService {
    private _currentSelector$;
    currentSelector$: import('rxjs').Observable<IShowRangeSelectorDialogOptions | null>;
    showRangeSelectorDialog(opts: IShowRangeSelectorDialogOptions): Promise<IUnitRangeName[]>;
}
