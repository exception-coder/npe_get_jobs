import { IDefinedNamesServiceParam } from '@univerjs/engine-formula';
export interface IDefinedNameInputProps extends Omit<IDefinedNamesServiceParam, 'id'> {
    inputId: string;
    type?: string;
    state: boolean;
    confirm?: (param: IDefinedNamesServiceParam) => void;
    cancel?: () => void;
    id?: string;
}
export declare const DefinedNameInput: (props: IDefinedNameInputProps) => import("react/jsx-runtime").JSX.Element | undefined;
