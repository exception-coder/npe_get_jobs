import { CSSProperties, ReactNode } from 'react';
export interface IDialogProps {
    children: ReactNode;
    /**
     * The style of the dialog.
     */
    style?: CSSProperties;
    /**
     * Whether the dialog is visible.
     * @default false
     */
    open?: boolean;
    /**
     * The width of the dialog.
     */
    width?: number | string;
    /**
     * The title of the dialog.
     */
    title?: ReactNode;
    /**
     * Whether the dialog can be dragged. If a dialog is draggable, the backdrop would be hidden and
     * the wrapper container would not response to user's mouse events.
     *
     * @default false
     */
    draggable?: boolean;
    /**
     * The default position of the dialog.
     */
    defaultPosition?: {
        x: number;
        y: number;
    };
    /**
     * Whether the dialog should be destroyed on close.
     * @default false
     */
    destroyOnClose?: boolean;
    /**
     * Whether the dialog should preserve its position on destroy.
     * @default false
     */
    preservePositionOnDestroy?: boolean;
    /**
     * The footer of the dialog.
     */
    footer?: ReactNode;
    /**
     *  Whether the dialog should show a mask.
     */
    mask?: boolean;
    /**
     * additional className for dialog
     */
    className?: string;
    /**
     * whether show close button
     */
    closable?: boolean;
    /**
     * whether click mask to close, default is true
     */
    maskClosable?: boolean;
    /**
     * whether support press esc to close
     * @default true
     */
    keyboard?: boolean;
    /**
     * The callback function when the open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * The callback function when the dialog is closed.
     */
    onClose?: () => void;
    showOk?: boolean;
    showCancel?: boolean;
    onOk?: () => void;
    onCancel?: () => void;
}
export declare function Dialog(props: IDialogProps): import("react/jsx-runtime").JSX.Element;
