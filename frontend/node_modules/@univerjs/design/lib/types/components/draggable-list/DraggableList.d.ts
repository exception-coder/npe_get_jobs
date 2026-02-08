import { ReactNode } from 'react';
import { ReactGridLayoutProps, default as RGL } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
export declare const ReactGridLayout: import('react').ComponentClass<ReactGridLayoutProps & RGL.WidthProviderProps, any>;
export interface IDraggableListProps<T> extends Omit<ReactGridLayoutProps, 'layout' | 'onLayoutChange' | 'cols' | 'isResizable'> {
    list: T[];
    onListChange: (list: T[]) => void;
    idKey: keyof T;
    itemRender: (item: T, index: number) => ReactNode;
}
export declare function DraggableList<T = any>(props: IDraggableListProps<T>): import("react/jsx-runtime").JSX.Element;
