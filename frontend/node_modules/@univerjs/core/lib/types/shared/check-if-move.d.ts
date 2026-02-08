import { ITransformState } from '../types/interfaces/i-drawing';
import { Nullable } from './types';
export declare const MOVE_BUFFER_VALUE = 2;
export declare const ROTATE_BUFFER_VALUE = 1;
export declare function checkIfMove(transform: Nullable<ITransformState>, previousTransform: Nullable<ITransformState>): boolean;
