import type { CalendarEventOverlapMode } from '../types.js';
/**
 * Variation of column mode where events can be stacked. The priority of this
 * mode is to stack events together taking up the least amount of space while
 * trying to ensure the content of the event is always visible as well as its
 * start and end. A sibling column has intersecting event content and must be
 * placed beside each other. Non-sibling columns are offset by 5% from the
 * previous column. The width is scaled by 1.7 so the events overlap and
 * whitespace is reduced. If there is a hole in columns the event width is
 * scaled up so it intersects with the next column. The columns have equal
 * width in the space they are given. If the event doesn't have any to the
 * right of it that intersect with it's content it's right side is extended
 * to the right side.
 */
export declare const stack: CalendarEventOverlapMode;
