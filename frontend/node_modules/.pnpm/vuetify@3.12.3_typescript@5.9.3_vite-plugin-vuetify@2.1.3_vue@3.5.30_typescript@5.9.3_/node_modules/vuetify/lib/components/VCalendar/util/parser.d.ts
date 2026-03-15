// Types
import type { CalendarCategory, CalendarCategoryTextFunction } from '../types.js';
export declare function parsedCategoryText(category: CalendarCategory, categoryText: string | CalendarCategoryTextFunction | undefined): string;
export declare function getParsedCategories(categories: CalendarCategory | CalendarCategory[], categoryText: string | CalendarCategoryTextFunction | undefined): CalendarCategory[];
