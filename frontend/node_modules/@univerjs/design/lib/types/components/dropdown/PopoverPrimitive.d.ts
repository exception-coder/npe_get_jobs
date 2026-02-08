import { ComponentProps } from 'react';
import { Anchor, Content, Root, Trigger } from '@radix-ui/react-popover';
declare function PopoverPrimitive({ ...props }: ComponentProps<typeof Root>): import("react/jsx-runtime").JSX.Element;
declare function PopoverTrigger({ ...props }: ComponentProps<typeof Trigger>): import("react/jsx-runtime").JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: ComponentProps<typeof Content>): import("react/jsx-runtime").JSX.Element;
declare function PopoverAnchor({ ...props }: ComponentProps<typeof Anchor>): import("react/jsx-runtime").JSX.Element;
export { PopoverAnchor, PopoverContent, PopoverPrimitive, PopoverTrigger };
