import { IDisposable, Disposable } from '@univerjs/core';
import { createElement, useEffect, useRef } from 'react';
type ComponentFramework = string;
export interface IComponentOptions {
    framework?: ComponentFramework;
}
export interface IComponent<T = any> {
    framework: string;
    component: any;
}
export type ComponentType<T = any> = any;
export type ComponentList = Map<string, IComponent>;
export declare class ComponentManager extends Disposable {
    private _components;
    private _componentsReverse;
    constructor();
    register(name: string, component: ComponentType, options?: IComponentOptions): IDisposable;
    getKey(component: ComponentType): string | undefined;
    reactUtils: {
        createElement: typeof createElement;
        useEffect: typeof useEffect;
        useRef: typeof useRef;
    };
    private _handler;
    setHandler(framework: string, handler: (component: IComponent['component'], name?: string) => any): void;
    get(name: string): any;
    delete(name: string): void;
}
export {};
