import { Disposable, ICommandService } from '@univerjs/core';
/**
 * This controller register sheet transform algorithms to the transform service.
 */
export declare class RevisionController extends Disposable {
    private _commandService;
    constructor(_commandService: ICommandService);
}
