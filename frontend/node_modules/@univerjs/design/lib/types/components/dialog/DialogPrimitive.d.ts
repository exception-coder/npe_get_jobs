import { HTMLAttributes } from 'react';
declare const Dialog: import('react').FC<import('@radix-ui/react-dialog').DialogProps>;
declare const DialogTrigger: import('react').ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: import('react').FC<import('@radix-ui/react-dialog').DialogPortalProps>;
declare const DialogClose: import('react').ForwardRefExoticComponent<import('@radix-ui/react-dialog').DialogCloseProps & import('react').RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogOverlayProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
interface IDialogContentProps {
    closable?: boolean;
    onClickClose?: () => void;
}
declare const DialogContent: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & IDialogContentProps & import('react').RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogTitleProps & import('react').RefAttributes<HTMLHeadingElement>, "ref"> & import('react').RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-dialog').DialogDescriptionProps & import('react').RefAttributes<HTMLParagraphElement>, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, };
