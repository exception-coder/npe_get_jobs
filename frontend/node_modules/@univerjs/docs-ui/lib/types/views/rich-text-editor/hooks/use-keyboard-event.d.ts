import { KeyCode, MetaKeys } from '@univerjs/ui';
import { Editor } from '../../../services/editor/editor';
export interface IKeyboardEventConfig {
    keyCodes: {
        keyCode: KeyCode;
        metaKey?: MetaKeys;
    }[];
    handler: (keyCode: KeyCode, metaKey?: MetaKeys) => void;
}
export declare function useKeyboardEvent(isNeed: boolean, config?: IKeyboardEventConfig, editor?: Editor): void;
