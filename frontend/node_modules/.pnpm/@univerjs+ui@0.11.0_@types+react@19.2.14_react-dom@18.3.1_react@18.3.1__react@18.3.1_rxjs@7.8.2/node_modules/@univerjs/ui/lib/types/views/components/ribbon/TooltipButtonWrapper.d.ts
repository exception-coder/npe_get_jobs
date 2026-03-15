import { IDropdownProps, ITooltipProps } from '@univerjs/design';
import { ReactNode } from 'react';
import { IValueOption } from '../../../services/menu/menu';
export interface ITooltipWrapperRef {
    el: HTMLSpanElement | null;
}
export declare const TooltipWrapper: import('react').ForwardRefExoticComponent<ITooltipProps & import('react').RefAttributes<ITooltipWrapperRef>>;
export declare function DropdownWrapper(props: Omit<Partial<IDropdownProps>, 'overlay'> & {
    overlay: ReactNode;
    align?: 'start' | 'end' | 'center';
}): import("react/jsx-runtime").JSX.Element;
export declare function DropdownMenuWrapper({ menuId, slot, value, options, children, disabled, onOptionSelect, }: {
    menuId: string;
    slot?: boolean;
    value?: string | number;
    options: IValueOption[];
    children: ReactNode;
    disabled?: boolean;
    onOptionSelect: (option: IValueOption) => void;
}): import("react/jsx-runtime").JSX.Element;
