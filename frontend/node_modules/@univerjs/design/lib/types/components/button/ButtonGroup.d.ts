import { ReactElement } from 'react';
import { IButtonProps } from './Button';
export interface IButtonGroupProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    children: ReactElement<IButtonProps>[];
}
export declare const ButtonGroup: ({ className, orientation, children, }: IButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
