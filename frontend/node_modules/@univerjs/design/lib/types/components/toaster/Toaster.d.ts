import { ComponentProps } from 'react';
import { Toaster as Sonner, toast } from 'sonner';
export type IToasterProps = ComponentProps<typeof Sonner>;
declare function Toaster({ visibleToasts, ...props }: IToasterProps): import("react/jsx-runtime").JSX.Element;
export { toast, Toaster };
