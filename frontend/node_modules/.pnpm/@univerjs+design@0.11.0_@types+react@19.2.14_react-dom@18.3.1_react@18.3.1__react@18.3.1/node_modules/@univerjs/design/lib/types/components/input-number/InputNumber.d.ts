import { InputHTMLAttributes, KeyboardEvent } from 'react';
export interface IInputNumberProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'defaultValue' | 'size'> {
    value?: number | null;
    defaultValue?: number;
    size?: 'mini' | 'small';
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    formatter?: (value: string | number | undefined) => string;
    parser?: (displayValue: string | undefined) => string;
    controls?: boolean;
    className?: string;
    inputClassName?: string;
    controlsClassName?: string;
    onChange?: (value: number | null) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
    allowEmpty?: boolean;
}
export declare const InputNumber: import('react').ForwardRefExoticComponent<IInputNumberProps & import('react').RefAttributes<HTMLInputElement>>;
