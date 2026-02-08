import { IConfirmProps } from '@univerjs/design';
import { ICustomLabelProps } from '../../../components/custom-label/CustomLabel';
export interface IConfirmChildrenProps {
    hooks: {
        beforeConfirm?: () => Record<string, any>;
        beforeClose?: () => Record<string, any>;
    };
}
export interface IContextConfirmProps extends IConfirmProps {
    children: React.ReactElement<IConfirmChildrenProps>;
    onClose?: (result?: Record<string, any>) => void;
    onConfirm?: (result?: Record<string, any>) => void;
}
export type IConfirmPartMethodOptions = {
    id: string;
    children?: ICustomLabelProps | string;
    title?: ICustomLabelProps;
} & Omit<IContextConfirmProps, 'children' | 'title'>;
