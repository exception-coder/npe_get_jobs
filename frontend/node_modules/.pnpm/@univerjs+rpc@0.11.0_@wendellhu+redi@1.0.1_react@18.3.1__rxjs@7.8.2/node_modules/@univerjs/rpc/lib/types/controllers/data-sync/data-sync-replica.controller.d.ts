import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { IRemoteInstanceService } from '../../services/remote-instance/remote-instance.service';
import { IRPCChannelService } from '../../services/rpc/channel.service';
/**
 * This controller is responsible for syncing data from the worker thread to
 * the primary thread.
 */
export declare class DataSyncReplicaController extends Disposable {
    private readonly _injector;
    private readonly _remoteInstanceService;
    private readonly _commandService;
    private readonly _rpcChannelService;
    private _remoteSyncService;
    constructor(_injector: Injector, _remoteInstanceService: IRemoteInstanceService, _commandService: ICommandService, _rpcChannelService: IRPCChannelService);
    private _initRPCChannels;
    private _init;
}
