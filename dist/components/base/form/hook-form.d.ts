import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Form as AriaForm } from 'react-aria-components';
import { Control, FieldPath, FieldValues, UseControllerReturn, UseFormReturn } from 'react-hook-form';
interface FormProps<TFieldValues extends FieldValues = FieldValues> extends ComponentPropsWithoutRef<typeof AriaForm> {
    form: UseFormReturn<TFieldValues>;
    children: ReactNode;
}
interface FormFieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
    name: TName;
    control: Control<TFieldValues>;
    children: ReactNode | ((control: UseControllerReturn<TFieldValues, TName>) => ReactNode);
}
export declare const useFormFieldContext: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import('react-hook-form').FieldError;
    id: string;
    name: string;
    control?: UseControllerReturn<FieldValues, string> | undefined;
};
export declare const HookForm: {
    <TFieldValues extends FieldValues = FieldValues>({ form, ...props }: FormProps<TFieldValues>): import("react").JSX.Element;
    displayName: string;
};
export declare const FormField: {
    <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ children, ...props }: FormFieldProps<TFieldValues, TName>): import("react").JSX.Element;
    displayName: string;
};
export {};
