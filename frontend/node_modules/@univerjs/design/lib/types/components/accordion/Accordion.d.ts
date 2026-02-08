import { ReactNode } from 'react';
interface IAccordionItem {
    label: ReactNode;
    children: ReactNode;
}
export interface IAccordionProps {
    className?: string;
    items: IAccordionItem[];
}
export declare function Accordion(props: IAccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
