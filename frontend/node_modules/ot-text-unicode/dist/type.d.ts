export declare type TextOpComponent = number | string | {
    d: number | string;
};
export declare type TextOp = TextOpComponent[];
export interface TextType<R> {
    name: string;
    uri: string;
    create(): R;
    trim(op: TextOp): TextOp;
    checkOp(op: TextOp): void;
    normalize(op: TextOp): TextOp;
    apply(doc: R, op: TextOp): R;
    transform(op: TextOp, other: TextOp, side: 'left' | 'right'): TextOp;
    compose(a: TextOp, b: TextOp): TextOp;
    transformPosition(cursor: number, op: TextOp): number;
    transformSelection(selection: number | [number, number], op: TextOp): number | [number, number];
    invert?(op: TextOp): TextOp;
    [k: string]: any;
}
export interface Rope<Snap> {
    /** Create a snapshot from the given javascript string */
    create(s: string): Snap;
    /** Convert a snapshot into a javascript string */
    toString(doc: Snap): string;
    /** Create or update a document snapshot by walking the document */
    builder(doc: Snap): {
        skip(n: number): void;
        append(s: string): void;
        del(n: number): void;
        build(): Snap;
    };
    /** Equivalent to String.slice in javascript, but using UTF8 offsets. */
    slice(doc: Snap, start: number, end?: number): string;
}
export declare function eachOp(op: TextOp, fn: (c: TextOpComponent, prePos: number, postPos: number) => void): void;
export declare const dlen: (d: number | string) => number;
export declare const uniSlice: (s: string, startUni: number, endUni?: number | undefined) => string;
export default function makeType<Snap>(ropeImpl: Rope<Snap>): TextType<Snap>;
