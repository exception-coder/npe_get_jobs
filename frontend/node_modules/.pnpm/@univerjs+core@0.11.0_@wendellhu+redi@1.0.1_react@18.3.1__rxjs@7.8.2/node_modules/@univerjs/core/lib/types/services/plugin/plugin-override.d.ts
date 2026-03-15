import { Dependency, DependencyIdentifier, DependencyItem } from '../../common/di';
export type NullableDependencyPair<T> = [DependencyIdentifier<T>, DependencyItem<T> | null];
/**
 * Overrides the dependencies defined in the plugin. Only dependencies that are identified by `IdentifierDecorator` can be overridden.
 * If you override a dependency with `null`, the original dependency will be removed.
 */
export type DependencyOverride = NullableDependencyPair<any>[];
export declare function mergeOverrideWithDependencies(dependencies: Dependency[], override?: DependencyOverride): Dependency[];
