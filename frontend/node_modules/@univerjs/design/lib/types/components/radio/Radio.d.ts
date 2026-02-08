import { ReactNode } from 'react';
export interface IRadioProps {
    children?: ReactNode;
    /**
     * Used for setting the currently selected value
     * @default false
     */
    checked?: boolean;
    /**
     * Used for setting the currently selected value
     */
    value?: string | number | boolean;
    /**
     * Specifies whether the radio is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Set the handler to handle `click` event
     */
    onChange?: (value: string | number | boolean) => void;
}
/**
 * Radio Component
 */
export declare function Radio(props: IRadioProps): import("react/jsx-runtime").JSX.Element;
