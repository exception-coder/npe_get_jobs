import { default as React, Component } from 'react';
import { IUniverDocsUIConfig } from '../../controllers/config.schema';
interface IBaseDocContainerProps {
    config: IUniverDocsUIConfig;
    changeLocale: (locale: string) => void;
    methods?: any;
}
/**
 * One univerdoc instance DOM container
 */
export declare class DocContainer extends Component<IBaseDocContainerProps> {
    leftContentLeft: number;
    leftContentTop: number;
    rightBorderX: number;
    rightBorderY: number;
    splitLeftRef: React.RefObject<HTMLDivElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
    constructor(props: IBaseDocContainerProps);
    /**
     * split mouse down
     * @param e
     */
    handleSplitBarMouseDown: (e: React.MouseEvent) => void;
    /**
     * split mouse move
     * @param e
     */
    handleSplitBarMouseMove: (e: MouseEvent) => void;
    /**
     * split mouse up
     * @param e
     */
    handleSplitBarMouseUp: (e: MouseEvent) => void;
    getContentRef(): React.RefObject<HTMLDivElement | null>;
    getSplitLeftRef(): React.RefObject<HTMLDivElement | null>;
    /**
     * Modify Dom Skin
     */
    changeSkin(container: HTMLElement | string, skin: string): void;
}
export {};
