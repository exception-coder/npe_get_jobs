import { Editor } from '@univerjs/docs-ui';
import { RefObject } from 'react';
import { IRefSelection } from './use-highlight';
import { FormulaSelectingType } from './use-formula-selection';
export declare const useSheetSelectionChange: (isNeed: boolean, isFocus: boolean, isSelectingRef: RefObject<FormulaSelectingType>, unitId: string, subUnitId: string, refSelectionRef: React.MutableRefObject<IRefSelection[]>, isSupportAcrossSheet: boolean, listenSelectionSet: boolean, editor?: Editor, handleRangeChange?: ((refString: string, offset: number, isEnd: boolean, isModify?: boolean) => void)) => void;
