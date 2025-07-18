import { ComponentPropsWithRef } from 'react';
import { OTPInput } from 'input-otp';
type PinInputContextType = {
    size: "sm" | "md" | "lg";
    disabled?: boolean;
    digits?: number;
    id: string;
};
export declare const usePinInputContext: () => PinInputContextType;
interface InputProps extends Omit<ComponentPropsWithRef<typeof OTPInput>, "size" | "maxLength" | "className"> {
    width?: number;
    inputClassName?: string;
}
interface RootProps extends ComponentPropsWithRef<"div"> {
    size?: "sm" | "md" | "lg";
    digits?: number;
    disabled?: boolean;
}
declare const Root: {
    ({ className, size, digits, disabled, ...props }: RootProps): import("react").JSX.Element;
    displayName: string;
};
declare const Group: {
    ({ inputClassName, containerClassName, width, ...props }: InputProps): import("react").JSX.Element;
    displayName: string;
};
declare const Slot: {
    ({ index, className, ...props }: ComponentPropsWithRef<"div"> & {
        index: number;
    }): import("react").JSX.Element;
    displayName: string;
};
declare const Separator: {
    (props: ComponentPropsWithRef<"p">): import("react").JSX.Element;
    displayName: string;
};
declare const Label: {
    ({ className, ...props }: ComponentPropsWithRef<"label">): import("react").JSX.Element;
    displayName: string;
};
declare const Description: {
    ({ className, ...props }: ComponentPropsWithRef<"p">): import("react").JSX.Element;
    displayName: string;
};
declare const PinInput: typeof Root & {
    Slot: typeof Slot;
    Label: typeof Label;
    Group: typeof Group;
    Separator: typeof Separator;
    Description: typeof Description;
};
export { PinInput };
