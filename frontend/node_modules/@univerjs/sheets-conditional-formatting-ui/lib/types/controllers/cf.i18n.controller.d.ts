import { ReactNode } from 'react';
import { Disposable, LocaleService } from '@univerjs/core';
export declare class ConditionalFormattingI18nController extends Disposable {
    private _localeService;
    constructor(_localeService: LocaleService);
    private _initLocal;
    tWithReactNode(key: string, ...args: (ReactNode | string)[]): ReactNode[];
    private _findReplaceIndex;
}
