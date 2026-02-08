import { CSSProperties, ReactNode } from 'react';
export interface ICheckboxProps {
    children?: ReactNode;
    /**
     * The class name of the checkbox group
     */
    className?: string;
    /**
     * The style of the checkbox group
     */
    style?: CSSProperties;
    /**
     * Used for setting the currently selected value
     * @default false
     */
    checked?: boolean;
    /**
     * Used for setting the checkbox to indeterminate
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Used for setting the currently selected value
     * Only used when the checkbox is in a group
     */
    value?: string | number | boolean;
    /**
     * Specifies whether the checkbox is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Set the handler to handle `click` event
     */
    onChange?: (value: string | number | boolean) => void;
    contentClassName?: string;
}
/**
 * Checkbox Component
 */
export declare function Checkbox(props: ICheckboxProps): import("react/jsx-runtime").JSX.Element;
