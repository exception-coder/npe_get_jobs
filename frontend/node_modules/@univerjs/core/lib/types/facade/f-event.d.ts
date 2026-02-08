import { CommandType, IDocumentData, IExecutionOptions, LifecycleStages, UniverInstanceType } from '@univerjs/core';
import { FDoc } from './f-doc';
/**
 * Base interface for all event parameters
 * @interface IEventBase
 * @ignore
 */
export interface IEventBase {
    /** Flag to cancel the event if supported */
    cancel?: boolean;
}
/**
 * Event interface triggered when a document is created
 * @interface IDocCreatedParam
 * @augments {IEventBase}
 */
export interface IDocCreatedParam extends IEventBase {
    /** Unique identifier of the document unit */
    unitId: string;
    /** Type identifier for document instances */
    type: UniverInstanceType.UNIVER_DOC;
    /** The created document instance */
    doc: FDoc;
    /** Reference to the document unit */
    unit: FDoc;
}
/**
 * Event interface triggered when a document is disposed
 * @interface IDocDisposedEvent
 * @augments {IEventBase}
 */
export interface IDocDisposedEvent extends IEventBase {
    /** Unique identifier of the disposed document unit */
    unitId: string;
    /** Type identifier for document instances */
    unitType: UniverInstanceType.UNIVER_DOC;
    /** Final state snapshot of the disposed document */
    snapshot: IDocumentData;
}
/**
 * Event interface for lifecycle stage changes
 * @interface ILifeCycleChangedEvent
 * @augments {IEventBase}
 */
export interface ILifeCycleChangedEvent extends IEventBase {
    /** Current stage of the lifecycle */
    stage: LifecycleStages;
}
/**
 * Event interface for command execution
 * @interface ICommandEvent
 * @augments {IEventBase}
 */
export interface ICommandEvent extends IEventBase {
    /** Parameters passed to the command */
    params: any;
    /** Unique identifier of the command */
    id: string;
    /** Type of the command */
    type: CommandType;
    /** optional execution options for the command */
    options?: IExecutionOptions;
}
/**
 * @hideconstructor
 */
export declare class FEventName {
    /**
     * @ignore
     */
    static _instance: FEventName | null;
    static get(): FEventName;
    /**
     * @ignore
     */
    static extend(source: any): void;
    constructor();
    /**
     * Event fired when a document is created
     * @see {@link IDocCreatedParam}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.DocCreated, (params) => {
     *   const { unitId, type, doc, unit } = params;
     *   console.log('doc created', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get DocCreated(): "DocCreated";
    /**
     * Event fired when a document is disposed
     * @see {@link IDocDisposedEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.DocDisposed, (params) => {
     *   const { unitId, unitType, snapshot } = params;
     *   console.log('doc disposed', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get DocDisposed(): "DocDisposed";
    /**
     * Event fired when life cycle is changed
     * @see {@link ILifeCycleChangedEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
     *   const { stage } = params;
     *   console.log('life cycle changed', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get LifeCycleChanged(): "LifeCycleChanged";
    /**
     * Event fired when a redo command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.Redo, (event) => {
     *   const { params, id, type } = event;
     *   console.log('redo command executed', event);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get Redo(): "Redo";
    /**
     * Event fired when an undo command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.Undo, (event) => {
     *   const { params, id, type } = event;
     *   console.log('undo command executed', event);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get Undo(): "Undo";
    /**
     * Event fired before a redo command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeRedo, (event) => {
     *   const { params, id, type } = event;
     *   console.log('before redo command executed', event);
     *
     *   // Cancel the redo operation
     *   event.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get BeforeRedo(): "BeforeRedo";
    /**
     * Event fired before an undo command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeUndo, (event) => {
     *   const { params, id, type } = event;
     *   console.log('before undo command executed', event);
     *
     *   // Cancel the undo operation
     *   event.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get BeforeUndo(): "BeforeUndo";
    /**
     * Event fired when a command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event) => {
     *   const { params, id, type, options } = event;
     *   console.log('command executed', event);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get CommandExecuted(): "CommandExecuted";
    /**
     * Event fired before a command is executed
     * @see {@link ICommandEvent}
     * @example
     * ```ts
     * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeCommandExecute, (event) => {
     *   const { params, id, type, options } = event;
     *   console.log('before command executed', event);
     *
     *   // Cancel the command execution
     *   event.cancel = true;
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    get BeforeCommandExecute(): "BeforeCommandExecute";
}
export interface IEventParamConfig {
    LifeCycleChanged: ILifeCycleChangedEvent;
    DocDisposed: IDocDisposedEvent;
    DocCreated: IDocCreatedParam;
    Redo: ICommandEvent;
    Undo: ICommandEvent;
    BeforeRedo: ICommandEvent;
    BeforeUndo: ICommandEvent;
    CommandExecuted: ICommandEvent;
    BeforeCommandExecute: ICommandEvent;
}
