import { CSSProperties, PropsWithChildren, ReactNode } from 'react';
export interface IFormLayoutProps {
    label?: ReactNode;
    desc?: ReactNode;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    contentStyle?: CSSProperties;
    error?: string;
    collapsable?: boolean;
    defaultCollapsed?: boolean;
}
export declare const FormLayout: (props: IFormLayoutProps) => import("react/jsx-runtime").JSX.Element;
export type IFormDualColumnLayoutProps = PropsWithChildren;
/**
 * A dual columns layout component for the form.
 * @param props props of the component
 */
export declare const FormDualColumnLayout: (props: IFormDualColumnLayoutProps) => import("react/jsx-runtime").JSX.Element;
