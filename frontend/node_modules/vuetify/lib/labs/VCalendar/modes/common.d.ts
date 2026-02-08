// Types
import type { CalendarEventParsed, CalendarEventVisual, CalendarTimestamp } from '../types.js';
export type GetRange = (event: CalendarEventParsed) => [number, number];
export declare function getVisuals(events: CalendarEventParsed[], minStart?: number): CalendarEventVisual[];
export interface ColumnGroup {
    start: number;
    end: number;
    visuals: CalendarEventVisual[];
}
export declare function hasOverlap(s0: number, e0: number, s1: number, e1: number, exclude?: boolean): boolean;
export declare function setColumnCount(groups: ColumnGroup[]): void;
export declare function getRange(event: CalendarEventParsed): [number, number];
export declare function getDayRange(event: CalendarEventParsed): [number, number];
export declare function getNormalizedRange(event: CalendarEventParsed, dayStart: number): [number, number];
export declare function getOpenGroup(groups: ColumnGroup[], start: number, end: number, timed: boolean): number;
export declare function getOverlapGroupHandler(firstWeekday: number): {
    groups: ColumnGroup[];
    min: number;
    max: number;
    reset: () => void;
    getVisuals: (day: CalendarTimestamp, dayEvents: CalendarEventParsed[], timed: boolean, reset?: boolean) => CalendarEventVisual[];
};
