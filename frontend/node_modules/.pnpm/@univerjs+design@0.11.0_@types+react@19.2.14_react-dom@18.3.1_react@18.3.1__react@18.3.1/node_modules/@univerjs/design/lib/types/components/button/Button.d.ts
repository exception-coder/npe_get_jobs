import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
export declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "text" | "primary" | "danger" | "ghost" | null | undefined;
    size?: "small" | "middle" | "large" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
export declare const Button: import('react').ForwardRefExoticComponent<IButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
