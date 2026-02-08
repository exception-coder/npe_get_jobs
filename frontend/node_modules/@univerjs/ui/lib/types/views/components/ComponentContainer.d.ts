import { Injector } from '@univerjs/core';
import { ComponentType, ReactNode } from 'react';
import { ComponentRenderer } from '../../services/parts/parts.service';
export interface IComponentContainerProps {
    components?: Set<ComponentType>;
    fallback?: ReactNode;
    sharedProps?: Record<string, unknown>;
}
export declare function ComponentContainer(props: IComponentContainerProps): ReactNode;
/**
 * Get a set of render functions to render components of a part.
 *
 * @param part The part name.
 * @param injector The injector to get the service. It is optional. However, you should not change this prop in a given
 * component.
 */
export declare function useComponentsOfPart(part: string, injector?: Injector): Set<ComponentRenderer>;
