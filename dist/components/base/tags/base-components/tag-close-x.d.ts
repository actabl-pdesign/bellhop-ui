import { RefAttributes } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
interface TagCloseXProps extends AriaButtonProps, RefAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare const TagCloseX: ({ size, className, ...otherProps }: TagCloseXProps) => import("react").JSX.Element;
export {};
