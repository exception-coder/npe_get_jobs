import { IDisposable, Disposable } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export type ComputingStatus = boolean;
export declare class GlobalComputingStatusService extends Disposable {
    private _allSubjects;
    private readonly _computingStatus$;
    readonly computingStatus$: import('rxjs').Observable<boolean>;
    get computingStatus(): ComputingStatus;
    private _computingSubscription;
    dispose(): void;
    pushComputingStatusSubject(subject: BehaviorSubject<ComputingStatus>): IDisposable;
    private _updateComputingObservable;
}
