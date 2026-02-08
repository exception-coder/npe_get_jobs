import { ComponentProps, ReactNode } from 'react';
import { HoverCardContent } from './HoverCardPrimitive';
export interface IHoverCardProps extends ComponentProps<typeof HoverCardContent> {
    children: ReactNode;
    overlay: ReactNode;
    disabled?: boolean;
    /**
     * Delay in milliseconds before the dropdown opens.
     * @default 200
     */
    openDelay?: number;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare function HoverCard(props: IHoverCardProps): import("react/jsx-runtime").JSX.Element;
