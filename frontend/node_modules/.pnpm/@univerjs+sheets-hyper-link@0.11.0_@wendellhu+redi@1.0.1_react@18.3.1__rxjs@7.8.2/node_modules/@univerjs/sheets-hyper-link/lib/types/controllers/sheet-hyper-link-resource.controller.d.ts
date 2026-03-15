import { Disposable, IResourceManagerService } from '@univerjs/core';
import { HyperLinkModel } from '../models/hyper-link.model';
export declare class SheetsHyperLinkResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _hyperLinkModel;
    constructor(_resourceManagerService: IResourceManagerService, _hyperLinkModel: HyperLinkModel);
    private _initSnapshot;
}
