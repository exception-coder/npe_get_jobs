import { IOperation } from '@univerjs/core';
import { IEditorBridgeServiceVisibleParam } from '../../services/editor-bridge.service';
export declare const SetCellEditVisibleOperation: IOperation<IEditorBridgeServiceVisibleParam>;
export declare const SetCellEditVisibleWithF2Operation: IOperation<IEditorBridgeServiceVisibleParam>;
/**
 * When the editor is not clicked to change the cursor,
 * the arrow keys will exit editing and move the cell.
 *
 * @deprecated Should not use operation as an event.
 */
export declare const SetCellEditVisibleArrowOperation: IOperation<IEditorBridgeServiceVisibleParam>;
