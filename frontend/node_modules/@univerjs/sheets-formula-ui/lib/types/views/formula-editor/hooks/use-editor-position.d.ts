import { BehaviorSubject } from 'rxjs';
export declare function useEditorPosition(editorId: string, ready: boolean, deps?: any[]): readonly [BehaviorSubject<{
    left: number;
    top: number;
    right: number;
    bottom: number;
}>, () => DOMRect | undefined];
