import { ReactNode } from 'react';
export interface IConfirmProps {
    children: ReactNode;
    /**
     * Whether the Confirm is visible.
     * @default false
     */
    visible?: boolean;
    /**
     * The title of the Confirm.
     */
    title?: React.ReactNode;
    /**
     * The text of the Confirm's confirm button.
     */
    cancelText?: string;
    /**
     * The text of the Confirm's cancel button.
     */
    confirmText?: string;
    /**
     * Callback when the Confirm is closed.
     */
    onClose?: () => void;
    /**
     * Callback when the Confirm is confirmed.
     */
    onConfirm?: () => void;
    /**
     * The width of the Confirm.
     */
    width?: number | string;
    /**
     * Whether to show the close button.
     * @default true
     */
    closable?: boolean;
}
export declare function Confirm(props: IConfirmProps): import("react/jsx-runtime").JSX.Element;
