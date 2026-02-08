import { CSSProperties, ReactNode } from 'react';
export interface ICheckboxGroupProps {
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
     * Define which checkbox is selected
     */
    value: Array<string | number | boolean>;
    /**
     * Whether the checkbox is disabled
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
    onChange: (value: Array<string | number | boolean>) => void;
}
/**
 * CheckboxGroup Component
 */
export declare function CheckboxGroup(props: ICheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
