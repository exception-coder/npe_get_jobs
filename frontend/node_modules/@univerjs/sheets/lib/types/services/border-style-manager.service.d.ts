import { IDisposable, BorderStyleTypes, BorderType } from '@univerjs/core';
export interface IBorderInfo {
    type: BorderType;
    color: string | undefined;
    style: BorderStyleTypes;
    activeBorderType: boolean;
}
/**
 * This service is for managing settings border style status.
 */
export declare class BorderStyleManagerService implements IDisposable {
    private readonly _borderInfo;
    private readonly _borderInfo$;
    readonly borderInfo$: import('rxjs').Observable<IBorderInfo>;
    dispose(): void;
    setType(type: BorderType): void;
    setColor(color: string): void;
    setStyle(style: BorderStyleTypes): void;
    setActiveBorderType(status: boolean): void;
    getBorderInfo(): Readonly<IBorderInfo>;
    private _refresh;
}
