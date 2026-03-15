import { IFunctionInfo } from '@univerjs/engine-formula';
export interface IInputParamsProps {
    functionInfo: IFunctionInfo | null;
    onChange: (params: string[]) => void;
}
export declare function InputParams(props: IInputParamsProps): import("react/jsx-runtime").JSX.Element | null;
