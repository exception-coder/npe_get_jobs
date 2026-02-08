import { DisposableCollection, Disposable, InterceptorManager } from '@univerjs/core';
import { Documents, DocumentSkeleton, Engine, IBoundRectNoAngle, Scene } from '@univerjs/engine-render';
export interface IDocPrintContext {
    unitId: string;
    scene: Scene;
    engine: Engine;
    root: HTMLElement;
    skeleton: DocumentSkeleton;
}
export interface IDocPrintDomtContext extends IDocPrintContext {
    offset: {
        x: number;
        y: number;
    };
    bound: IBoundRectNoAngle;
}
export interface IDocPrintComponentContext extends IDocPrintContext {
    documents: Documents;
}
export declare class DocPrintInterceptorService extends Disposable {
    private _printComponentMap;
    readonly interceptor: InterceptorManager<{
        PRINTING_COMPONENT_COLLECT: import('@univerjs/core').IInterceptor<undefined, IDocPrintComponentContext>;
        PRINTING_DOM_COLLECT: import('@univerjs/core').IInterceptor<DisposableCollection, IDocPrintDomtContext>;
    }>;
    constructor();
    registerPrintComponent(componentKey: string, printingComponentKey: string): void;
    getPrintComponent(componentKey: string): string | undefined;
}
