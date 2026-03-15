import { IValueOption } from '../../../services/menu/menu';
import { IMenuSchema } from '../../../services/menu/menu-manager.service';
interface IUITinyMenuGroupProps {
    item: IMenuSchema;
    onOptionSelect?: (option: IValueOption) => void;
}
export declare function UITinyMenuGroup(props: IUITinyMenuGroupProps): import("react/jsx-runtime").JSX.Element | null;
export {};
