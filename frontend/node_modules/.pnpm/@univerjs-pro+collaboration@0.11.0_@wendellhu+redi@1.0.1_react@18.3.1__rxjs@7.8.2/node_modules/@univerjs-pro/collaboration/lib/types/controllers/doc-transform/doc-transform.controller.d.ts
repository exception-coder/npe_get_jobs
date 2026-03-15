import { Disposable } from '@univerjs/core';
import { ITransformService } from '../../services/transform/transform.service';
/**
 * This controller register sheet transform algorithms to the transform service.
 */
export declare class DocTransformController extends Disposable {
    private readonly _transformService;
    constructor(_transformService: ITransformService);
}
