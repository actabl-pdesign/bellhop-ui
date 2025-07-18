import { HTMLAttributes } from 'react';
interface LogoProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "ActablSymbol" | "AlSymbol" | "PsSymbol" | "HeSymbol" | "TrSymbol" | "ActablFull";
    svgClassName?: string;
    childrenClassName?: string;
}
export declare const ActablLogos: ({ variant, svgClassName, ...otherProps }: LogoProps) => import("react").JSX.Element;
export declare const ActablSymbol: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export declare const AlSymbol: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export declare const HeSymbol: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export declare const PsSymbol: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export declare const TrSymbol: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export declare const ActablFull: ({ className, svgClassName, childrenClassName, ...otherProps }: Omit<LogoProps, "variant">) => import("react").JSX.Element;
export {};
