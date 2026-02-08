import { Worksheet, Disposable, IUniverInstanceService } from '@univerjs/core';
import { RenderManagerService } from '@univerjs/engine-render';
import { ISetWorksheetColWidthMutationParams } from '@univerjs/sheets';
import { ISetWorksheetColIsAutoWidthCommandParams } from '../commands/commands/set-worksheet-auto-col-width.command';
export declare const AFFECT_LAYOUT_STYLES: string[];
export declare const createAutoColWidthUndoMutationsByRedos: (params: ISetWorksheetColWidthMutationParams, worksheet: Worksheet) => ISetWorksheetColWidthMutationParams;
export declare class AutoWidthController extends Disposable {
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    constructor(_renderManagerService: RenderManagerService, _univerInstanceService: IUniverInstanceService);
    getUndoRedoParamsOfColWidth(params: Required<ISetWorksheetColIsAutoWidthCommandParams>): {
        undos: {
            id: string;
            params: ISetWorksheetColWidthMutationParams;
        }[];
        redos: {
            id: string;
            params: ISetWorksheetColWidthMutationParams;
        }[];
    };
}
