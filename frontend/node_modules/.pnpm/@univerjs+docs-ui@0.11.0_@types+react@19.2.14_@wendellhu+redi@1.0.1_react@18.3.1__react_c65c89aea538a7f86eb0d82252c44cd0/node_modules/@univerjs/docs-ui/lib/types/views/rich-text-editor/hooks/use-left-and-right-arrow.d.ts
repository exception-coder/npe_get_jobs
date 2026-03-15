import { Editor } from '../../../services/editor/editor';
import { KeyCode, MetaKeys } from '@univerjs/ui';
export declare const useLeftAndRightArrow: (isNeed: boolean, selectingMode: boolean, editor?: Editor, onMoveInEditor?: (keyCode: KeyCode, metaKey?: MetaKeys) => void) => void;
