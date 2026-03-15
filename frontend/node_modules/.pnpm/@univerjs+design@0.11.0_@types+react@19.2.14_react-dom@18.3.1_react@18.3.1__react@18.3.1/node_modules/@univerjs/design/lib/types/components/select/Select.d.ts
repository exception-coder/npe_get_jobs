import { ReactNode } from 'react';
interface IOption {
    label?: string | ReactNode;
    value?: string;
    disabled?: boolean;
    options?: IOption[];
}
export interface ISelectProps {
    className?: string;
    /**
     * The value of select
     */
    value: string;
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
    onChange: (value: string) => void;
}
export declare const selectClassName: string;
export declare function Select(props: ISelectProps): import("react/jsx-runtime").JSX.Element;
export {};
