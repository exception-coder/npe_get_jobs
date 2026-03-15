export declare type TextOpComponent = number | string | {
    d: number;
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
}
export interface Rope<Snap> {
    create(s: string): Snap;
    toString(doc: Snap): string;
    builder(doc: Snap): {
        skip(n: number): void;
        append(s: string): void;
        del(n: number): void;
        build(): Snap;
    };
}
export default function makeType<Snap>(ropeImpl: Rope<Snap>): TextType<Snap>;
