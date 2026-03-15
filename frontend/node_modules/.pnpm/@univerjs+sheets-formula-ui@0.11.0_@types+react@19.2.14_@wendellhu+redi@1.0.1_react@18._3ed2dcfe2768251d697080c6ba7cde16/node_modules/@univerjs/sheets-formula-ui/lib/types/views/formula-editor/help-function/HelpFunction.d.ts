import { Editor } from '@univerjs/docs-ui';
interface IHelpFunctionProps {
    onParamsSwitch?: (index: number) => void;
    onClose?: () => void;
    editor: Editor;
    isFocus: boolean;
    formulaText: string;
}
export declare function HelpFunction(props: IHelpFunctionProps): import("react/jsx-runtime").JSX.Element | null;
export {};
