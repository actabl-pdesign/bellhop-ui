import { ReactNode, Ref } from 'react';
import { RadioGroupProps as AriaRadioGroupProps, RadioProps as AriaRadioProps } from 'react-aria-components';
export interface RadioGroupContextType {
    size?: "sm" | "md";
}
export interface RadioButtonBaseProps {
    size?: "sm" | "md";
    className?: string;
    isFocusVisible?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
}
export declare const RadioButtonBase: {
    ({ className, isFocusVisible, isSelected, isDisabled, size, }: RadioButtonBaseProps): import("react").JSX.Element;
    displayName: string;
};
interface RadioButtonProps extends AriaRadioProps {
    size?: "sm" | "md";
    label?: ReactNode;
    hint?: ReactNode;
    ref?: Ref<HTMLLabelElement>;
}
export declare const RadioButton: {
    ({ label, hint, className, size, ...ariaRadioProps }: RadioButtonProps): import("react").JSX.Element;
    displayName: string;
};
interface RadioGroupProps extends RadioGroupContextType, AriaRadioGroupProps {
    children: ReactNode;
    className?: string;
}
export declare const RadioGroup: ({ children, className, size, ...props }: RadioGroupProps) => import("react").JSX.Element;
export {};
