import { ISocket } from '@univerjs/network';
import { FUniver } from '@univerjs/core/facade';
import { FNetwork } from './f-network';
/**
 * @ignore
 */
interface IFUniverNetworkMixin {
    /**
     * Get the network API of Univer, with the help of which you can send HTTP requests.
     */
    getNetwork(): FNetwork;
    /**
     * Set WebSocket URL for WebSocketService
     *
     * @param {string} url WebSocket URL
     * @returns {ISocket} WebSocket instance
     * @example
     * ```typescript
     * // Replace the URL with the address of your own WebSocket service
     * const ws = univerAPI.createSocket('ws://47.100.177.253:8449/ws');
     *
     * ws.open$.subscribe(() => {
     *   console.log('websocket opened');
     *   ws.send('hello');
     * });
     *
     * ws.message$.subscribe((message) => {
     *   console.log('websocket message', message);
     *   const content = JSON.parse(message.data).content;
     *   if (!content.includes('command')) {
     *     return;
     *   }
     *
     *   const commandInfo = JSON.parse(content);
     *   const { command, options } = commandInfo;
     *   const { id, params } = command;
     *
     *   // Upon receiving collaborative data, it is locally saved
     *   univerAPI.executeCommand(id, params, options);
     * });
     *
     * ws.close$.subscribe(() => {
     *   console.log('websocket closed');
     * });
     *
     * ws.error$.subscribe((error) => {
     *   console.log('websocket error', error);
     * });
     *
     * univerAPI.onCommandExecuted((command, options) => {
     *   // Only synchronize local mutations
     *   if (command.type !== 2 || options?.fromCollab || options?.onlyLocal || command.id === 'doc.mutation.rich-text-editing') {
     *     return;
     *   }
     *
     *   const commandInfo = JSON.stringify({ command, options: { fromCollab: true } });
     *   ws.send(commandInfo);
     * });
     * ```
     */
    createSocket(url: string): ISocket;
}
export declare class FUniverNetworkMixin extends FUniver implements IFUniverNetworkMixin {
    getNetwork(): FNetwork;
    createSocket(url: string): ISocket;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverNetworkMixin {
    }
}
export {};
