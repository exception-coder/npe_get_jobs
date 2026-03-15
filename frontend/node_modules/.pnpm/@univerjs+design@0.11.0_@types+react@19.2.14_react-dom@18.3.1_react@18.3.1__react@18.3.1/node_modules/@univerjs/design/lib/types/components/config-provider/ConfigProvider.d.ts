import { ReactNode } from 'react';
export interface IConfigProviderProps {
    children: ReactNode;
    locale?: any;
    mountContainer: HTMLElement | null;
}
export declare const ConfigContext: import('react').Context<Omit<IConfigProviderProps, "children">>;
export declare function ConfigProvider(props: IConfigProviderProps): import("react/jsx-runtime").JSX.Element;
