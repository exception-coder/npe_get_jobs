import { IWorkbenchOptions } from '../../controllers/ui/ui.controller';
export interface IUniverWorkbenchProps extends IWorkbenchOptions {
    mountContainer: HTMLElement;
    onRendered?: (containerElement: HTMLElement) => void;
}
export declare function DesktopWorkbench(props: IUniverWorkbenchProps): import("react/jsx-runtime").JSX.Element;
export declare function DesktopWorkbenchContent(props: IUniverWorkbenchProps): import("react/jsx-runtime").JSX.Element;
