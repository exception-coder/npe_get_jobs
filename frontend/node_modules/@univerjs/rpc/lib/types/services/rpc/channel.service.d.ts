import { IDisposable } from '@univerjs/core';
import { IChannel, IMessageProtocol } from './rpc.service';
export interface IRPCChannelService {
    requestChannel(name: string): IChannel;
    registerChannel(name: string, channel: IChannel): void;
}
export declare const IRPCChannelService: import('@wendellhu/redi').IdentifierDecorator<IRPCChannelService>;
/**
 * This service is responsible for managing the RPC channels.
 */
export declare class ChannelService implements IDisposable {
    private readonly _client;
    private readonly _server;
    constructor(_messageProtocol: IMessageProtocol);
    dispose(): void;
    requestChannel(name: string): IChannel;
    registerChannel(name: string, channel: IChannel): void;
}
