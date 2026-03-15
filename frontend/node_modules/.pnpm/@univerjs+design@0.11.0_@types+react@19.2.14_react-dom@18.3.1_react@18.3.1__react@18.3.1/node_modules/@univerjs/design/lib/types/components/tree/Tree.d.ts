import { CSSProperties, ReactNode } from 'react';
import './index.css';
export declare enum TreeSelectionMode {
    ONLY_LEAF_NODE = 0,
    ALL = 1
}
export interface ITreeNodeProps {
    title: string;
    key: string;
    children?: ITreeNodeProps[];
}
export interface IAttachTreeProps {
    level?: number;
    count?: number;
}
type ITreeItemProps = ITreeNodeProps & IAttachTreeProps;
export interface ITreeProps {
    data?: ITreeItemProps[];
    defaultExpandAll?: boolean;
    selectionMode?: TreeSelectionMode;
    valueGroup?: string[];
    onChange?: (node: ITreeNodeProps) => void;
    onExpend?: (value: string) => void;
    height?: number;
    itemHeight?: number;
    attachRender?: (node: ITreeItemProps) => ReactNode;
    treeNodeClassName?: string;
    style?: CSSProperties;
    defaultCache?: Map<string, string[]>;
}
/**
 * Tree Component
 */
export declare function Tree(props: ITreeProps): import("react/jsx-runtime").JSX.Element;
export {};
