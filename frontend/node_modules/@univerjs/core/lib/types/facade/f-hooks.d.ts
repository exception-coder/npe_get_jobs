import { IDisposable, IUndoRedoItem, Injector, LifecycleService } from '@univerjs/core';
import { FBase } from './f-base';
/**
 * @hideconstructor
 */
export declare class FHooks extends FBase {
    protected readonly _injector: Injector;
    private readonly _lifecycleService;
    constructor(_injector: Injector, _lifecycleService: LifecycleService);
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
     */
    onStarting(callback: () => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
     */
    onReady(callback: () => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
     */
    onRendered(callback: () => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
     */
    onSteady(callback: () => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeUndo, (event) => {})` as instead
     */
    onBeforeUndo(callback: (action: IUndoRedoItem) => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.Undo, (event) => {})` as instead
     */
    onUndo(callback: (action: IUndoRedoItem) => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeRedo, (event) => {})` as instead
     */
    onBeforeRedo(callback: (action: IUndoRedoItem) => void): IDisposable;
    /**
     * @param callback
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.Redo, (event) => {})` as instead
     */
    onRedo(callback: (action: IUndoRedoItem) => void): IDisposable;
}
