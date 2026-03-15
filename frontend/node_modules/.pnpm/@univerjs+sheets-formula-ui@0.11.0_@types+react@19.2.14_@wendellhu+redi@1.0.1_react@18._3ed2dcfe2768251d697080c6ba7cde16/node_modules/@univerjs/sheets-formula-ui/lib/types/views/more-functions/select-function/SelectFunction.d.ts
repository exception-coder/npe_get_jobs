import { IFunctionInfo } from '@univerjs/engine-formula';
export interface ISelectFunctionProps {
    onChange: (functionInfo: IFunctionInfo) => void;
}
export declare function SelectFunction(props: ISelectFunctionProps): import("react/jsx-runtime").JSX.Element;
