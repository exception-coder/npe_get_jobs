import { CSSProperties, MouseEvent, ReactNode } from 'react';
export interface IBaseSheetBarButtonProps {
    children?: ReactNode;
    /** Semantic DOM class */
    className?: string;
    /** Semantic DOM style */
    style?: CSSProperties;
    /**
     * Disabled state of button
     * @default false
     */
    disabled?: boolean;
    /** Set the handler to handle `click` event */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
/**
 * Button Component
 */
export declare function SheetBarButton(props: IBaseSheetBarButtonProps): import("react/jsx-runtime").JSX.Element;
