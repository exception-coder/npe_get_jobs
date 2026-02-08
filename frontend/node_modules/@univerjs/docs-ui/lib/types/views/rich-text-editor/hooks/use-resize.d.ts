import { Editor } from '../../../services/editor/editor';
interface IUseResizeReturn {
    resize: () => void;
    checkScrollBar: () => void;
}
export declare const useResize: (editor?: Editor, isSingle?: boolean, autoScrollbar?: boolean, autoScroll?: boolean) => IUseResizeReturn;
export {};
