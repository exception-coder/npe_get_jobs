import { Dependency, DependencyIdentifier, Injector } from '@wendellhu/redi';
export * from '@wendellhu/redi';
/**
 * Register the dependencies to the injector.
 * @param injector The injector to register the dependencies.
 * @param dependencies The dependencies to register.
 */
export declare function registerDependencies(injector: Injector, dependencies: Dependency[]): void;
/**
 * Touch a group of dependencies to ensure they are instantiated.
 * @param injector The injector to touch the dependencies.
 * @param dependencies The dependencies to touch.
 */
export declare function touchDependencies(injector: Injector, dependencies: [DependencyIdentifier<unknown>][]): void;
