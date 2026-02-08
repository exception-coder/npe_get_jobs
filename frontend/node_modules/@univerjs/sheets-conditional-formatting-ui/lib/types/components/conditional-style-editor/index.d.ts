import { IHighlightCell } from '@univerjs/sheets-conditional-formatting';
interface IConditionalStyleEditorProps {
    className?: string;
    style?: IHighlightCell['style'];
    onChange: (style: IHighlightCell['style']) => void;
}
export declare const ConditionalStyleEditor: (props: IConditionalStyleEditorProps) => import("react/jsx-runtime").JSX.Element;
export {};
