import { CSSProperties, ReactNode } from 'react';
export interface IRadioGroupProps {
    children: ReactNode[];
    /**
     * The class name of the checkbox group
     */
    className?: string;
    /**
     * The style of the checkbox group
     */
    style?: CSSProperties;
    /**
     * Define which radio is selected
     */
    value: string;
    /**
     * Whether the radio is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Direction of the radio group
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * The callback function triggered when switching options
     */
    onChange: (value: string | number | boolean) => void;
}
/**
 * RadioGroup Component
 */
export declare function RadioGroup(props: IRadioGroupProps): import("react/jsx-runtime").JSX.Element;
