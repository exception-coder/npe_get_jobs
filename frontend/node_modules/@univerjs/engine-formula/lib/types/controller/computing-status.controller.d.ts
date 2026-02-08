import { Disposable, ICommandService } from '@univerjs/core';
import { GlobalComputingStatusService } from '../services/global-computing-status.service';
/**
 * This controller monitors the calculating status of the formula engine,
 * and expose some internal status to the outside.
 *
 * @ignore
 */
export declare class ComputingStatusReporterController extends Disposable {
    private readonly _commandService;
    private readonly _globalComputingSrv;
    private _computingCompleted$;
    constructor(_commandService: ICommandService, _globalComputingSrv: GlobalComputingStatusService);
}
