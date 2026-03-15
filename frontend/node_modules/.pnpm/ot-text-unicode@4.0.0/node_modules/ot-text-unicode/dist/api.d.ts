import { TextOp } from './type';
export default function api(getSnapshot: () => string, submitOp: (op: TextOp, cb: () => {}) => void): {
    get: () => string;
    getLength(): number;
    insert(pos: number, text: string, callback: () => {}): void;
    remove(pos: number, lengthOrContent: number | string, callback: () => {}): void;
    _onOp(op: TextOp): void;
    onInsert: ((pos: number, s: string) => void) | null;
    onRemove: ((pos: number, amt: number) => void) | null;
};
