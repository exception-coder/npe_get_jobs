import { Editor } from '@univerjs/docs-ui';
import { ISequenceNode } from '@univerjs/engine-formula';
interface ISearchFunctionProps {
    isFocus: boolean;
    sequenceNodes: (string | ISequenceNode)[];
    onSelect: (data: {
        text: string;
        offset: number;
    }) => void;
    onChange?: (functionName: string) => void;
    editor: Editor;
    onClose?: () => void;
}
export declare const SearchFunction: import('react').ForwardRefExoticComponent<ISearchFunctionProps & import('react').RefAttributes<HTMLElement>>;
export {};
