import { IBullet, ILists, LocaleService, Nullable } from '@univerjs/core';
import { IDocumentSkeletonBullet } from '../../../../../basics/i-document-skeleton-cached';
export declare function dealWithBullet(bullet?: IBullet, lists?: ILists, listLevelAncestors?: Array<Nullable<IDocumentSkeletonBullet>>, localeService?: LocaleService): IDocumentSkeletonBullet | undefined;
export declare function getDefaultBulletSke(listId: string, startIndex?: number): IDocumentSkeletonBullet;
