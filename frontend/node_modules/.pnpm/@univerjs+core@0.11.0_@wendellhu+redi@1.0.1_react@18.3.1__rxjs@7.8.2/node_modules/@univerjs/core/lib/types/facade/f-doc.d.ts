import { DocumentDataModel, Injector } from '@univerjs/core';
import { FBaseInitialable } from './f-base';
/**
 * @ignore
 * @hideconstructor
 */
export declare class FDoc extends FBaseInitialable {
    protected doc: DocumentDataModel;
    constructor(doc: DocumentDataModel, _injector: Injector);
}
