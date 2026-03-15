import { KeyCode } from '@univerjs/ui';
export declare function useKeyEventConfig(isRefSelecting: React.MutableRefObject<0 | 1 | 2>, unitId: string): {
    keyCodes: {
        keyCode: KeyCode;
    }[];
    handler: (keycode: KeyCode) => void;
};
export declare function useIsFocusing(editorId: string): boolean | undefined;
