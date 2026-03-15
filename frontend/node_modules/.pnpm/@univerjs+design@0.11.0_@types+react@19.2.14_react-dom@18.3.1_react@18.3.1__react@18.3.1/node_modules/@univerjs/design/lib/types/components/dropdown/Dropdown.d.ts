import { ComponentProps, ReactNode } from 'react';
import { PopoverContent } from './PopoverPrimitive';
export interface IDropdownProps extends ComponentProps<typeof PopoverContent> {
    children: ReactNode;
    overlay: ReactNode;
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function Dropdown(props: IDropdownProps): import("react/jsx-runtime").JSX.Element;
