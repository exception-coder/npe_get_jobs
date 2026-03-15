import { Observable } from 'rxjs';
/**
 * Tracks position and size changes of an element by monitoring:
 * - Ancestor scrolling and resizing
 * - Layout shifts
 * - Element's bounding rectangle changes
 *
 * @param containerElement
 * @returns Observable<void>
 */
export declare function observeClientRect(containerElement: HTMLElement): Observable<void>;
