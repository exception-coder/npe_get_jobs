import { ReactNode } from 'react';
interface IOption {
    label?: string | ReactNode;
    value?: string;
    disabled?: boolean;
}
export interface IMultipleSelectProps {
    className?: string;
    /**
     * The value of select
     */
    value: string[];
    /**
     * Whether the select is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The options of select
     * @default []
     */
    options?: IOption[];
    /**
     * The style of select
     * @default false
     */
    borderless?: boolean;
    /**
     * The callback function that is triggered when the value is changed
     */
    onChange: (values: string[]) => void;
}
export declare function MultipleSelect(props: IMultipleSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
