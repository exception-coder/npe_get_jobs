import { IAccessor, UniverInstanceType } from '@univerjs/core';
import { Observable } from 'rxjs';
export declare function getMenuHiddenObservable(accessor: IAccessor, targetUniverType: UniverInstanceType, matchUnitId?: string, needHideUnitId?: string | string[]): Observable<boolean>;
export declare function getHeaderFooterMenuHiddenObservable(accessor: IAccessor): Observable<boolean>;
