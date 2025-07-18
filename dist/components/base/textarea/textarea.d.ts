import { ReactNode, Ref, default as React } from 'react';
import { TextAreaProps as AriaTextAreaProps, TextFieldProps as AriaTextFieldProps } from 'react-aria-components';
interface TextAreaBaseProps extends AriaTextAreaProps {
    ref?: Ref<HTMLTextAreaElement>;
}
export declare const TextAreaBase: {
    ({ className, ...props }: TextAreaBaseProps): React.JSX.Element;
    displayName: string;
};
interface TextFieldProps extends AriaTextAreaProps {
    label?: string;
    hint?: ReactNode;
    tooltip?: string;
    ref?: Ref<HTMLDivElement>;
    isInvalid?: AriaTextFieldProps["isInvalid"];
    isDisabled?: AriaTextFieldProps["isDisabled"];
    isRequired?: AriaTextFieldProps["isRequired"];
    isReadOnly?: AriaTextFieldProps["isReadOnly"];
    wrapperClassName?: AriaTextFieldProps["className"];
}
export declare const TextArea: {
    ({ label, hint, wrapperClassName, isDisabled, isInvalid, isRequired, isReadOnly, tooltip, value, defaultValue, ref, ...textAreaProps }: TextFieldProps): React.JSX.Element;
    displayName: string;
};
export {};
