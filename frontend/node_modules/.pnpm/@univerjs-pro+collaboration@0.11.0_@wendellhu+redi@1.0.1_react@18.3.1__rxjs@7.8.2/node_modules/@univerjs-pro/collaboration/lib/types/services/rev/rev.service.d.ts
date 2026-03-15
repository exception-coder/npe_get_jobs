import { IUniverInstanceService } from '@univerjs/core';
/** Some special mutations. It a changeset contains the following mutations it should create a snapshot immediately. */
export declare const SINGLE_SNAPSHOT_MUTATIONS: Set<string>;
export declare const SINGLE_HISTORY_MUTATIONS: Set<string>;
/**
 * This service provide util functions to get revision number of a document or increment the revision number.
 */
export declare class RevisionService {
    private readonly _univerInstanceService;
    constructor(_univerInstanceService: IUniverInstanceService);
    /**
     * Get the current revision of a document.
     * @param unitId
     */
    getCurrentRevOfUnit(unitId: string): number;
    /**
     * Increment the revision number of a document.
     * @param unitId
     * @returns The revision number after increment.
     */
    incrementRevOfUnit(unitId: string): number;
    setRevOfUnit(unitId: string, rev: number): void;
}
