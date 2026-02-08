import { ITreeNodeProps } from './Tree';
export declare const findNodePathFromTree: (tree: ITreeNodeProps[], key: string) => string[];
export declare const createCacheWithFindNodePathFromTree: (tree: ITreeNodeProps[], defaultCache?: Map<string, string[]>) => {
    findNodePathFromTreeWithCache: (key: string) => string[];
    reset: (newTree?: ITreeNodeProps[]) => void;
};
export declare const findSubTreeFromPath: (tree: ITreeNodeProps[], path: string[]) => ITreeNodeProps[];
export declare const findNodeFromPath: (tree: ITreeNodeProps[], _path: string[]) => ITreeNodeProps | undefined;
export declare const mergeTreeSelected: (treeData: ITreeNodeProps[], treeSelected: string[], path: string[]) => string[];
export declare const isIntermediated: (treeSelected: Set<string>, node: ITreeNodeProps) => boolean;
export declare const filterLeafNode: (tree: ITreeNodeProps[], keyList: string[]) => ITreeNodeProps[];
