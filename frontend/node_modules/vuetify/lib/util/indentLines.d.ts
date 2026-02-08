// Types
export type IndentLinesVariant = 'default' | 'simple';
export type IndentLineType = 'leaf' | 'last-leaf' | 'line' | 'leaf-link' | 'none';
export type IndentLinesOptions = {
    depth: number;
    isLast: boolean;
    isLastGroup: boolean;
    leafLinks: boolean;
    separateRoots: boolean;
    parentIndentLines: IndentLineType[] | undefined;
    variant: IndentLinesVariant | undefined;
};
export type IndentLines = {
    leaf: IndentLineType[] | undefined;
    node: IndentLineType[] | undefined;
    children: IndentLineType[] | undefined;
};
export declare function getIndentLines({ depth, isLast, isLastGroup, leafLinks, separateRoots, parentIndentLines, variant }: IndentLinesOptions): IndentLines;
