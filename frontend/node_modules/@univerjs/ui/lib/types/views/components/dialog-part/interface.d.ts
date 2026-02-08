import { IDialogProps } from '@univerjs/design';
import { ICustomLabelProps } from '../../../components/custom-label/CustomLabel';
export type IDialogPartMethodOptions = {
    id: string;
    children?: ICustomLabelProps;
    title?: ICustomLabelProps;
    footer?: ICustomLabelProps;
} & Omit<IDialogProps, 'children' | 'title' | 'footer'>;
