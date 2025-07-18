import { FC, PropsWithChildren, ReactNode, RefAttributes } from 'react';
import { ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components';
export declare const styles: {
    common: {
        root: string;
        icon: string;
    };
    sizes: {
        sm: {
            root: string;
            icon: string;
        };
    };
};
type ButtonSize = keyof typeof styles.sizes;
interface ButtonGroupItemProps extends ToggleButtonProps, RefAttributes<HTMLButtonElement> {
    iconLeading?: FC<{
        className?: string;
    }> | ReactNode;
    iconTrailing?: FC<{
        className?: string;
    }> | ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const ButtonGroupItem: ({ iconLeading: IconLeading, iconTrailing: IconTrailing, children, className, ...otherProps }: PropsWithChildren<ButtonGroupItemProps>) => import("react").JSX.Element;
interface ButtonGroupProps extends Omit<ToggleButtonGroupProps, "orientation">, RefAttributes<HTMLDivElement> {
    size?: ButtonSize;
    className?: string;
}
export declare const ButtonGroup: ({ children, size, className, ...otherProps }: ButtonGroupProps) => import("react").JSX.Element;
export {};
