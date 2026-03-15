import { IWorksheetData } from './typedef';
export declare const DEFAULT_WORKSHEET_ROW_COUNT_KEY = "DEFAULT_WORKSHEET_ROW_COUNT";
export declare const DEFAULT_WORKSHEET_ROW_COUNT = 1000;
export declare const DEFAULT_WORKSHEET_COLUMN_COUNT_KEY = "DEFAULT_WORKSHEET_COLUMN_COUNT";
export declare const DEFAULT_WORKSHEET_COLUMN_COUNT = 20;
export declare const DEFAULT_WORKSHEET_ROW_HEIGHT_KEY = "DEFAULT_WORKSHEET_ROW_HEIGHT";
export declare const DEFAULT_WORKSHEET_ROW_HEIGHT = 24;
export declare const DEFAULT_WORKSHEET_COLUMN_WIDTH_KEY = "DEFAULT_WORKSHEET_COLUMN_WIDTH";
export declare const DEFAULT_WORKSHEET_COLUMN_WIDTH = 88;
export declare const DEFAULT_WORKSHEET_ROW_TITLE_WIDTH_KEY = "DEFAULT_WORKSHEET_ROW_TITLE_WIDTH";
export declare const DEFAULT_WORKSHEET_ROW_TITLE_WIDTH = 46;
export declare const DEFAULT_WORKSHEET_COLUMN_TITLE_HEIGHT_KEY = "DEFAULT_WORKSHEET_COLUMN_TITLE_HEIGHT";
export declare const DEFAULT_WORKSHEET_COLUMN_TITLE_HEIGHT = 20;
/**
 * This function is used to merge the user passed in snapshot with the default snapshot
 * without changing the user's snapshot's reference.
 *
 * @param snapshot user passed in snapshot
 * @returns merged snapshot
 */
export declare function mergeWorksheetSnapshotWithDefault(snapshot: Partial<IWorksheetData>): IWorksheetData;
