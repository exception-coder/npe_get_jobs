interface INode {
    id: string;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fixed?: boolean;
    [key: string]: any;
}
interface ILink {
    source: string;
    target: string;
    value?: number;
}
interface ILayoutOptions {
    iterations?: number;
    repulsion?: number;
    attraction?: number;
    theta?: number;
}
export declare function processEChartsGraphData(data: {
    nodes: INode[];
    links: ILink[];
}, canvasWidth?: number, canvasHeight?: number, options?: ILayoutOptions): {
    nodes: INode[];
    links: ILink[];
};
export {};
