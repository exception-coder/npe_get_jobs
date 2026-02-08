import { RefObject } from 'react';
export interface IUseClickOutSideOptions {
    handler: () => void;
}
export declare function useClickOutSide(ref: RefObject<HTMLElement>, opts: IUseClickOutSideOptions): void;
