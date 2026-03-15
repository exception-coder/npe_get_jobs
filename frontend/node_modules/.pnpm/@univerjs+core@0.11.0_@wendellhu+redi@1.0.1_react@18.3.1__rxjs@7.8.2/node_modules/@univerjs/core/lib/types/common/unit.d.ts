import { UniverType } from '@univerjs/protocol';
import { Observable } from 'rxjs';
import { Disposable } from '../shared/lifecycle';
export { UniverType as UniverInstanceType } from '@univerjs/protocol';
export type UnitType = UniverType | number;
/**
 * The base class for all units.
 */
export declare abstract class UnitModel<D = object, T extends UnitType = UnitType> extends Disposable {
    abstract readonly type: T;
    abstract getUnitId(): string;
    abstract name$: Observable<string>;
    abstract setName(name: string): void;
    abstract getSnapshot(): D;
    /** Get revision of the unit's snapshot. Note that revision should start from 1. */
    abstract getRev(): number;
    /** Increment the current revision. */
    abstract incrementRev(): void;
    /** Set revision of the current snapshot. */
    abstract setRev(rev: number): void;
}
