import { HTMLAttributes } from 'react';
interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    svgClassName?: string;
    childrenClassName?: string;
}
export declare const CelebrateIllustration: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<IllustrationProps, "size">) => import("react").JSX.Element;
export {};
