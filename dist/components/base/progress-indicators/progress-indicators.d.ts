export interface ProgressBarProps {
    /**
     * The current value of the progress bar.
     */
    value: number;
    /**
     * The minimum value of the progress bar.
     * @default 0
     */
    min?: number;
    /**
     * The maximum value of the progress bar.
     * @default 100
     */
    max?: number;
    /**
     * Optional additional CSS class names for the progress bar container.
     */
    className?: string;
    /**
     * Optional additional CSS class names for the progress bar indicator element.
     */
    progressClassName?: string;
    /**
     * Optional function to format the displayed value.
     * It receives the raw value and the calculated percentage.
     */
    valueFormatter?: (value: number, valueInPercentage: number) => string | number;
}
/**
 * A basic progress bar component.
 */
export declare const ProgressBarBase: ({ value, min, max, className, progressClassName, }: ProgressBarProps) => import("react").JSX.Element;
type ProgressBarLabelPosition = "right" | "bottom" | "top-floating" | "bottom-floating";
export interface ProgressIndicatorWithTextProps extends ProgressBarProps {
    /**
     * Specifies the layout of the text relative to the progress bar.
     * - `right`: Text is displayed to the right of the progress bar.
     * - `bottom`: Text is displayed below the progress bar, aligned to the right.
     * - `top-floating`: Text is displayed in a floating tooltip above the progress indicator.
     * - `bottom-floating`: Text is displayed in a floating tooltip below the progress indicator.
     */
    labelPosition?: ProgressBarLabelPosition;
}
/**
 * A progress bar component that displays the value text in various configurable layouts.
 */
export declare const ProgressBar: ({ value, min, max, valueFormatter, labelPosition, className, progressClassName, }: ProgressIndicatorWithTextProps) => import("react").JSX.Element;
export {};
