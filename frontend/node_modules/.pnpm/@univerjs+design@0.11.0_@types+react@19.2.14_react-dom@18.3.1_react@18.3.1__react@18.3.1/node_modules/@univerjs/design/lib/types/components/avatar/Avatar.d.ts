import { VariantProps } from 'class-variance-authority';
import { CSSProperties, ReactNode } from 'react';
type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
declare const avatarVariants: (props?: ({
    shape?: "circle" | "square" | null | undefined;
    size?: "small" | "middle" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface IAvatarProps extends Omit<VariantProps<typeof avatarVariants>, 'size'> {
    children?: ReactNode;
    className?: string;
    /** Semantic DOM style */
    style?: CSSProperties;
    /** The title of the image avatar */
    title?: string;
    /** Image description */
    alt?: string;
    /**
     * The size of the avatar
     * @default 'middle'
     */
    size?: 'small' | 'middle' | number;
    /** The address of the image for an image avatar or image element */
    src?: string;
    /**
     * The fit of the image avatar
     * @default fill
     */
    fit?: ImageFit;
    /** Handler when img load error */
    onError?: () => void;
    /** Handler when img load success */
    onLoad?: () => void;
}
/**
 * Avatar Component
 */
export declare function Avatar(props: IAvatarProps): import("react/jsx-runtime").JSX.Element;
export {};
