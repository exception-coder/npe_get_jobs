export interface FileFilterProps {
    filterByType?: string;
}
export type FileFilterResult = {
    accepted: File[];
    rejected: File[];
};
// Composables
export declare const makeFileFilterProps: <Defaults extends {
    filterByType?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    filterByType: unknown extends Defaults["filterByType"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["filterByType"] ? string : string | Defaults["filterByType"]>;
        default: unknown extends Defaults["filterByType"] ? string : string | Defaults["filterByType"];
    };
};
export declare function useFileFilter(props: FileFilterProps): {
    filterAccepted: (files: File[]) => FileFilterResult;
};
