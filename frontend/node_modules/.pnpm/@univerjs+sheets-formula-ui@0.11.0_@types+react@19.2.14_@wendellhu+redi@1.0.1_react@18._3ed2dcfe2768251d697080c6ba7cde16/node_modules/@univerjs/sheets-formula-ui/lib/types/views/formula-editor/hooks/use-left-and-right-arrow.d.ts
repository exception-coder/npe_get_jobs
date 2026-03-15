import { Editor } from '@univerjs/docs-ui';
import { KeyCode, MetaKeys } from '@univerjs/ui';
import { FormulaSelectingType } from './use-formula-selection';
export declare const useLeftAndRightArrow: (isNeed: boolean, shouldMoveSelection: FormulaSelectingType, editor?: Editor, onMoveInEditor?: (keyCode: KeyCode, metaKey?: MetaKeys) => void) => void;
