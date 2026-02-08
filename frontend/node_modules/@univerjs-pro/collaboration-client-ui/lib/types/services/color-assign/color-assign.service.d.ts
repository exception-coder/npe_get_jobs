import { Disposable } from '@univerjs/core';
export declare const BACKGROUND_TOKENS: string[];
/**
 * This service assign a color to each collaboration member.
 */
export declare class ColorAssignService extends Disposable {
    private _assignedColors;
    private _colorIndex;
    assignAColorForMemberID(memberID: string): string;
}
