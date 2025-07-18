import { ReactNode } from 'react';
import { SwitchProps as AriaSwitchProps } from 'react-aria-components';
interface ToggleBaseProps {
    size?: "sm" | "md";
    className?: string;
    isHovered?: boolean;
    isFocusVisible?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
}
export declare const ToggleBase: ({ className, isHovered, isDisabled, isFocusVisible, isSelected, size, }: ToggleBaseProps) => import("react").JSX.Element;
interface ToggleProps extends AriaSwitchProps {
    size?: "sm" | "md";
    label?: string;
    hint?: ReactNode;
}
export declare const Toggle: ({ label, hint, className, size, ...ariaSwitchProps }: ToggleProps) => import("react").JSX.Element;
export {};
