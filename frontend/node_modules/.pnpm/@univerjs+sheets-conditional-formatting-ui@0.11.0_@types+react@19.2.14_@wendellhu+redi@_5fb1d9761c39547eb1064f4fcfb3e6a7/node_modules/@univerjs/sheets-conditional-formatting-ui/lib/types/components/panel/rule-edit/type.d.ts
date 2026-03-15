import { InterceptorManager } from '@univerjs/core';
import { IConditionalFormattingRuleConfig } from '@univerjs/sheets-conditional-formatting';
export declare const beforeSubmit: import('@univerjs/core').IInterceptor<boolean, null>;
export declare const submit: import('@univerjs/core').IInterceptor<any, null>;
export interface IStyleEditorProps<S = any, R = IConditionalFormattingRuleConfig> {
    onChange: (style: S) => void;
    rule?: R;
    interceptorManager: InterceptorManager<{
        beforeSubmit: typeof beforeSubmit;
        submit: typeof submit;
    }>;
}
