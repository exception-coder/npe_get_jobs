// Types
import type { Ref } from 'vue';
// Types
export interface DateFormatProps {
    inputFormat?: string;
}
export declare const makeDateFormatProps: <Defaults extends {
    inputFormat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    inputFormat: unknown extends Defaults["inputFormat"] ? {
        type: StringConstructor;
        validator: (v: string) => boolean;
    } : Omit<{
        type: StringConstructor;
        validator: (v: string) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["inputFormat"] ? string : string | Defaults["inputFormat"]>;
        default: unknown extends Defaults["inputFormat"] ? string : string | Defaults["inputFormat"];
    };
};
export declare function useDateFormat(props: DateFormatProps, locale: Ref<string>): {
    isValid: (text: string) => boolean;
    parseDate: (dateString: string) => unknown;
    formatDate: (value: unknown) => string;
    parserFormat: Readonly<Ref<string, string>>;
};
