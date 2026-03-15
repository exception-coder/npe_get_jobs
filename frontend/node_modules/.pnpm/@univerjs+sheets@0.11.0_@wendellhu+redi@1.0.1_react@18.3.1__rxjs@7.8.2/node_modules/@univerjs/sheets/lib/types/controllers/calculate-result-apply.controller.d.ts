import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
export declare class CalculateResultApplyController extends Disposable {
    private _univerInstanceService;
    private readonly _commandService;
    constructor(_univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    private _initialize;
    /**
     * Priority that mainly deals with number format in unitData
     * @param unitId
     * @param sheetId
     * @param cellData
     * @returns
     */
    private _getMergedCellData;
}
