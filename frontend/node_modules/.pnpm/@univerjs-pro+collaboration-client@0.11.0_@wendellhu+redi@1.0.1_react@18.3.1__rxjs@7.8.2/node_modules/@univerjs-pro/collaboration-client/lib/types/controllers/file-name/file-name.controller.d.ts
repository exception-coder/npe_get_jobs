import { Disposable, IConfigService, IUniverInstanceService } from '@univerjs/core';
export declare const DEFAULT_FILE_NAME_KEY = "DEFAULT_FILE_NAME";
/**
 * This controller would change the current tab's title to the
 * currently focused unit's name.
 */
export declare class FileNameController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _configService;
    constructor(_univerInstanceService: IUniverInstanceService, _configService: IConfigService);
    private _init;
}
