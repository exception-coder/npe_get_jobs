import { UniverRenderingContext, Layer } from '@univerjs/engine-render';
export declare class SelectionLayer extends Layer {
    render(ctx?: UniverRenderingContext, isMaxLayer?: boolean): this;
    _afterRender(startTime: number): void;
}
