import { HTMLAttributes, ReactNode } from 'react';
import { InputBaseProps } from './input';
interface InputPrefixProps extends HTMLAttributes<HTMLDivElement> {
    /** The position of the prefix. */
    position?: "leading" | "trailing";
    /** The size of the prefix. */
    size?: "sm" | "md";
    /** Indicates that the prefix is disabled. */
    isDisabled?: boolean;
}
export declare const InputPrefix: ({ position, size, isDisabled, children, ...props }: InputPrefixProps) => import("react").JSX.Element;
interface InputGroupProps extends Omit<InputBaseProps, "type" | "icon" | "placeholder" | "tooltip" | "shortcut" | `${string}ClassName`> {
    /** A prefix text that is displayed in the same box as the input.*/
    prefix?: string;
    /** A leading addon that is displayed with visual separation from the input. */
    leadingAddon?: ReactNode;
    /** A trailing addon that is displayed with visual separation from the input. */
    trailingAddon?: ReactNode;
    /** The class name to apply to the input group. */
    className?: string;
    /** The children of the input group (i.e `<InputBase />`) */
    children: ReactNode;
}
export declare const InputGroup: {
    ({ size, prefix, leadingAddon, trailingAddon, label, hint, children, ...props }: InputGroupProps): import("react").JSX.Element;
    Prefix: ({ position, size, isDisabled, children, ...props }: InputPrefixProps) => import("react").JSX.Element;
    displayName: string;
};
export {};
