import { ComponentType } from 'react';
import { RibbonType } from '../../../controllers/ui/ui.controller';
interface IRibbonProps {
    ribbonType: RibbonType;
    headerMenuComponents?: Set<ComponentType>;
    headerMenu?: boolean;
}
export declare function Ribbon(props: IRibbonProps): import("react/jsx-runtime").JSX.Element;
export {};
