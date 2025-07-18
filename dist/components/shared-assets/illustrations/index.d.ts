import { HTMLAttributes } from 'react';
export interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    svgClassName?: string;
    childrenClassName?: string;
}
declare const types: Record<string, React.ComponentType<IllustrationProps>>;
export declare const Illustration: (props: IllustrationProps & {
    type: keyof typeof types;
}) => import("react").JSX.Element;
export {};
