import { ComponentType, HTMLAttributes, ReactNode, Ref } from 'react';
import { TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
export interface InputBaseProps extends TextFieldProps {
    /** Tooltip message on hover. */
    tooltip?: string;
    /**
     * Input size.
     * @default "sm"
     */
    size?: "sm" | "md";
    /** Placeholder text. */
    placeholder?: string;
    /** Class name for the icon. */
    iconClassName?: string;
    /** Class name for the input. */
    inputClassName?: string;
    /** Class name for the input wrapper. */
    wrapperClassName?: string;
    /** Class name for the tooltip. */
    tooltipClassName?: string;
    /** Keyboard shortcut to display. */
    shortcut?: string | boolean;
    ref?: Ref<HTMLInputElement>;
    groupRef?: Ref<HTMLDivElement>;
    /** Icon component to display on the left side of the input. */
    icon?: ComponentType<HTMLAttributes<HTMLOrSVGElement>>;
}
export declare const InputBase: {
    ({ size, placeholder, icon: Icon, isRequired, isDisabled, isInvalid, tooltip, shortcut, ref, groupRef, wrapperClassName, tooltipClassName, inputClassName, iconClassName, ...inputProps }: Omit<InputBaseProps, "label" | "hint">): import("react").JSX.Element;
    displayName: string;
};
interface BaseProps {
    /** Label text for the input */
    label?: string;
    /** Helper text displayed below the input */
    hint?: ReactNode;
}
interface TextFieldProps extends BaseProps, AriaTextFieldProps, Pick<InputBaseProps, "size" | "wrapperClassName" | "inputClassName" | "iconClassName" | "tooltipClassName"> {
    ref?: Ref<HTMLDivElement>;
}
export declare const TextField: {
    ({ className, ...props }: TextFieldProps): import("react").JSX.Element;
    displayName: string;
};
interface InputProps extends InputBaseProps, BaseProps {
    /** Whether to hide required indicator from label */
    hideRequiredIndicator?: boolean;
}
export declare const Input: {
    ({ size, placeholder, icon: Icon, label, hint, shortcut, hideRequiredIndicator, className, ref, groupRef, tooltip, iconClassName, inputClassName, wrapperClassName, tooltipClassName, ...props }: InputProps): import("react").JSX.Element;
    displayName: string;
};
export {};
