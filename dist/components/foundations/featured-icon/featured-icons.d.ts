import { FC, ReactNode, Ref } from 'react';
interface FeaturedIconProps {
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    className?: string;
    icon?: FC<{
        className?: string;
    }> | ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    color: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "modern";
}
export declare const FeaturedIcon: (props: FeaturedIconProps) => import("react").JSX.Element;
export {};
