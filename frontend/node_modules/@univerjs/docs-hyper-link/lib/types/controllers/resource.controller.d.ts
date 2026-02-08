import { Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
export declare const DOC_HYPER_LINK_PLUGIN = "DOC_HYPER_LINK_PLUGIN";
export declare class DocHyperLinkResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _univerInstanceService;
    constructor(_resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService);
    private _init;
}
