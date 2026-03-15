import { IOperation } from '@univerjs/core';
import { DeviceInputEventType } from '@univerjs/engine-render';
import { KeyCode, MetaKeys } from '@univerjs/ui';
import { META_KEY_CTRL_AND_SHIFT } from '../../common/prompt';
export interface ISelectEditorFormulaOperationParam {
    eventType: DeviceInputEventType;
    keycode?: KeyCode;
    metaKey?: MetaKeys | typeof META_KEY_CTRL_AND_SHIFT;
    isSingleEditor?: boolean;
}
export declare const SelectEditorFormulaOperation: IOperation<ISelectEditorFormulaOperationParam>;
