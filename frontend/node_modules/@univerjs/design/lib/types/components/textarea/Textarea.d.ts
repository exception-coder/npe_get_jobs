import { ComponentProps } from 'react';
interface ITextareaProps extends ComponentProps<'textarea'> {
    className?: string;
    onResize?: (width: number, height: number) => void;
    onValueChange?: (value: string) => void;
}
export declare const Textarea: import('react').ForwardRefExoticComponent<Omit<ITextareaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export {};
