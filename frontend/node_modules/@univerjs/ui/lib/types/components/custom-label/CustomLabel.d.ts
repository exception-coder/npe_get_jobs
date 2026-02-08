import { ReactNode } from 'react';
import { Observable } from 'rxjs';
import { IMenuSelectorItem } from '../../services/menu/menu';
export type ICustomLabelProps<T = undefined> = {
    className?: string;
    value?: string | number | undefined;
    value$?: Observable<T>;
    onChange?(v: string | number): void;
    title?: ReactNode;
} & Pick<IMenuSelectorItem<unknown>, 'label' | 'icon'>;
/**
 * The component to render toolbar item label and menu item label.
 * @param props
 */
export declare function CustomLabel(props: ICustomLabelProps): import("react/jsx-runtime").JSX.Element;
