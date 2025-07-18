import { SelectHTMLAttributes } from 'react';
interface SelectorComponentProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    hint?: string;
    options: {
        label: string;
        value: string;
        disabled?: boolean;
    }[];
}
export declare const NativeSelect: ({ label, hint, options, className, ...props }: SelectorComponentProps) => import("react").JSX.Element;
export {};
