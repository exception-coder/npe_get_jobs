import { IWorkbenchOptions } from '../../controllers/ui/ui.controller';
export interface IUniverAppProps extends IWorkbenchOptions {
    mountContainer: HTMLElement;
    onRendered?: (container: HTMLElement) => void;
}
export declare function MobileWorkbench(props: IUniverAppProps): import("react/jsx-runtime").JSX.Element;
