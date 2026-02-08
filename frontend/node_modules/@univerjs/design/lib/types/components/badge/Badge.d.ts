import { ReactNode } from 'react';
export interface IBadgeProps {
    className?: string;
    children: ReactNode;
    closable?: boolean;
    onClose?: () => void;
}
export declare function Badge(props: IBadgeProps): import("react/jsx-runtime").JSX.Element;
