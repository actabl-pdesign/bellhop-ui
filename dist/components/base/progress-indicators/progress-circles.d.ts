interface ProgressBarProps {
    value: number;
    min?: number;
    max?: number;
    size: "xxs" | "xs" | "sm" | "md" | "lg";
    label?: string;
    valueFormatter?: (value: number, valueInPercentage: number) => string | number;
}
export declare const ProgressBarCircle: ({ value, min, max, size, label, valueFormatter, }: ProgressBarProps) => import("react").JSX.Element;
export declare const ProgressBarHalfCircle: ({ value, min, max, size, label, valueFormatter, }: ProgressBarProps) => import("react").JSX.Element;
export {};
