import { Nullable, SheetSkeleton, Disposable, Injector } from '@univerjs/core';
export declare class SheetSkeletonService extends Disposable {
    readonly _injector: Injector;
    private _sheetSkeletonStore;
    constructor(_injector: Injector);
    getSkeleton(unitId: string, subUnitId: string): Nullable<SheetSkeleton>;
    setSkeleton(unitId: string, subUnitId: string, skeleton: SheetSkeleton): void;
    deleteSkeleton(unitId: string, subUnitId: string): void;
}
