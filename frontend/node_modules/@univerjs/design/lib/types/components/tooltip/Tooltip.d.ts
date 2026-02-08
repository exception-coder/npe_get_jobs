import { ReactNode } from 'react';
export interface ITooltipProps {
    /**
     * The trigger element
     */
    children: ReactNode;
    /**
     * The class name of the tooltip
     */
    className?: string;
    /**
     * Whether the tooltip is a child of the trigger element
     * @default false
     */
    asChild?: boolean;
    /**
     * The content of the tooltip
     * @description If not set, the tooltip will not be displayed. Although it can be set to ReactNode, it is recommended to use string.
     */
    title?: ReactNode;
    /**
     * The placement of the tooltip
     * @default 'bottom'
     */
    placement?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * Whether the tooltip is displayed when the content is ellipsis
     * @default false
     */
    showIfEllipsis?: boolean;
    /**
     * Whether the tooltip is visible
     * @description If not set, the tooltip will be controlled by the component itself
     */
    visible?: boolean;
    /**
     * Callback when the visibility of the tooltip changes
     */
    onVisibleChange?: (visible: boolean) => void;
}
export declare function Tooltip(props: ITooltipProps): import("react/jsx-runtime").JSX.Element;
