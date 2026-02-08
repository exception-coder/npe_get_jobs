import { IRange, Disposable, ILogService, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { INumfmtService } from './type';
export declare class NumfmtService extends Disposable implements INumfmtService {
    private _resourceManagerService;
    private _univerInstanceService;
    private _logService;
    constructor(_resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService, _logService: ILogService);
    getValue(unitId: string, subUnitId: string, row: number, col: number): {
        pattern: string;
    } | null | undefined;
    deleteValues(unitId: string, subUnitId: string, values: IRange[]): void;
    setValues(unitId: string, subUnitId: string, values: Array<{
        ranges: IRange[];
        pattern: string;
    }>): void;
}
