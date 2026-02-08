import { ReactNode } from 'react';
interface ISpinProps {
    loading: boolean;
    children: ReactNode;
}
declare const Spin: ({ loading, children }: ISpinProps) => import("react/jsx-runtime").JSX.Element;
export default Spin;
