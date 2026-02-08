import api from './api';
declare const type: {
    api: typeof api;
    name: string;
    uri: string;
    create(): string;
    trim(op: import("./type").TextOp): import("./type").TextOp;
    checkOp(op: import("./type").TextOp): void;
    normalize(op: import("./type").TextOp): import("./type").TextOp;
    apply(doc: string, op: import("./type").TextOp): string;
    transform(op: import("./type").TextOp, other: import("./type").TextOp, side: "left" | "right"): import("./type").TextOp;
    compose(a: import("./type").TextOp, b: import("./type").TextOp): import("./type").TextOp;
    transformPosition(cursor: number, op: import("./type").TextOp): number;
    transformSelection(selection: number | [number, number], op: import("./type").TextOp): number | [number, number];
    invert?(op: import("./type").TextOp): import("./type").TextOp;
};
export declare const insert: (pos: number, text: string) => (string | number)[];
export declare const remove: (pos: number, textOrLen: string | number) => (number | {
    d: string | number;
})[];
export { default as makeType, TextOp, TextOpComponent, TextType, Rope } from './type';
export { type };
