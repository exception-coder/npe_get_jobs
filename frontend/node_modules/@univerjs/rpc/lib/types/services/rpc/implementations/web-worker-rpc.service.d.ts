import { IMessageProtocol } from '../rpc.service';
/**
 * Generate an `IMessageProtocol` on the web worker.
 */
export declare function createWebWorkerMessagePortOnWorker(): IMessageProtocol;
/**
 * Generate an `IMessageProtocol` on the main thread side.
 * @param worker The Web Worker object
 * @returns
 */
export declare function createWebWorkerMessagePortOnMain(worker: Worker): IMessageProtocol;
