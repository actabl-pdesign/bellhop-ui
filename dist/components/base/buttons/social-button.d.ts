import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ButtonProps as AriaButtonProps } from 'react-aria-components';
export declare const styles: {
    common: {
        root: string;
        icon: string;
    };
    sizes: {
        sm: {
            root: string;
        };
        md: {
            root: string;
        };
        lg: {
            root: string;
        };
    };
    colors: {
        gray: {
            root: string;
            icon: string;
        };
        black: {
            root: string;
            icon: string;
        };
        facebook: {
            root: string;
            icon: string;
        };
    };
};
interface CommonProps {
    social: "google" | "facebook" | "apple";
    disabled?: boolean;
    theme?: "brand" | "color" | "gray";
    size?: keyof typeof styles.sizes;
}
interface ButtonProps extends CommonProps, DetailedHTMLProps<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "slot">, HTMLButtonElement> {
    slot?: AriaButtonProps["slot"];
}
interface LinkProps extends CommonProps, DetailedHTMLProps<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color">, HTMLAnchorElement> {
}
export type SocialButtonProps = ButtonProps | LinkProps;
export declare const SocialButton: ({ size, theme, social, className, children, disabled, ...otherProps }: SocialButtonProps) => import("react").JSX.Element;
export {};
