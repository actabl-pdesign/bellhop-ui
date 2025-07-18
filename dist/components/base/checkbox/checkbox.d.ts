import { ReactNode, Ref } from 'react';
import { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
export interface CheckboxBaseProps {
    size?: "sm" | "md";
    className?: string;
    isFocusVisible?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
}
export declare const CheckboxBase: {
    ({ className, isSelected, isDisabled, isIndeterminate, size, isFocusVisible, }: CheckboxBaseProps): import("react").JSX.Element;
    displayName: string;
};
interface CheckboxProps extends AriaCheckboxProps {
    ref?: Ref<HTMLLabelElement>;
    size?: "sm" | "md";
    label?: ReactNode;
    hint?: ReactNode;
}
export declare const Checkbox: {
    ({ label, hint, size, className, ...ariaCheckboxProps }: CheckboxProps): import("react").JSX.Element;
    displayName: string;
};
export {};
