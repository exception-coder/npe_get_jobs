import { Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRPCChannelService } from '@univerjs/rpc';
export declare class UniverSheetsFilterUIWorkerPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _rpcChannelService;
    static type: UniverInstanceType;
    static pluginName: string;
    constructor(_config: unknown, _injector: Injector, _rpcChannelService: IRPCChannelService);
    onStarting(): void;
    onReady(): void;
}
