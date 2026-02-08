import { VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
type InputProps = InputHTMLAttributes<HTMLInputElement>;
export declare const inputVariants: (props?: ({
    size?: "small" | "middle" | "large" | "mini" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IInputProps extends Pick<InputProps, 'onFocus' | 'onBlur'>, VariantProps<typeof inputVariants> {
    autoFocus?: boolean;
    className?: string;
    style?: React.CSSProperties;
    type?: HTMLInputElement['type'];
    placeholder?: string;
    value?: string;
    allowClear?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (value: string) => void;
    inputClass?: string;
    inputStyle?: React.CSSProperties;
    slot?: React.ReactNode;
}
export declare const Input: import('react').ForwardRefExoticComponent<IInputProps & import('react').RefAttributes<HTMLInputElement>>;
export {};
