import { ReactNode } from 'react';
import { AvatarProps } from './avatar';
interface AvatarLabelGroupProps extends AvatarProps {
    size: "sm" | "md" | "lg" | "xl";
    title: string | ReactNode;
    subtitle: string | ReactNode;
}
export declare const AvatarLabelGroup: ({ title, subtitle, className, ...props }: AvatarLabelGroupProps) => import("react").JSX.Element;
export {};
