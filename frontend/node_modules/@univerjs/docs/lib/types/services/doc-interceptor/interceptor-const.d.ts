import { ICustomDecoration, ICustomDecorationForInterceptor, ICustomRange, ICustomRangeForInterceptor } from '@univerjs/core';
export declare const DOC_INTERCEPTOR_POINT: {
    CUSTOM_RANGE: import('@univerjs/core').IInterceptor<ICustomRangeForInterceptor, {
        index: number;
        unitId: string;
        customRanges: ICustomRange[];
    }>;
    CUSTOM_DECORATION: import('@univerjs/core').IInterceptor<ICustomDecorationForInterceptor, {
        index: number;
        unitId: string;
        customDecorations: ICustomDecoration[];
    }>;
};
