import { DetailedReactHTMLElement, ReactNode, RefAttributes } from 'react';
import { ButtonProps as AriaButtonProps, TooltipProps as AriaTooltipProps, TooltipTriggerComponentProps as AriaTooltipTriggerComponentProps } from 'react-aria-components';
interface TooltipProps extends AriaTooltipTriggerComponentProps, Omit<AriaTooltipProps, "children"> {
    /**
     * The title of the tooltip.
     */
    title: ReactNode;
    /**
     * The description of the tooltip.
     */
    description?: ReactNode;
    /**
     * Whether to show the arrow on the tooltip.
     *
     * @default false
     */
    arrow?: boolean;
    /**
     * Delay in milliseconds before the tooltip is shown.
     *
     * @default 300
     */
    delay?: number;
}
export declare const Tooltip: ({ title, description, children, arrow, delay, closeDelay, trigger, isDisabled, isOpen, defaultOpen, offset, crossOffset, placement, onOpenChange, ...tooltipProps }: TooltipProps) => import("react").JSX.Element;
type TooltipTriggerProps = (AriaButtonProps & RefAttributes<HTMLButtonElement> & {
    /**
     * If true, the tooltip trigger props will be passed down to the child element
     * instead of wrapping the child element in a button.
     */
    asChild?: never;
}) | {
    /**
     * If true, the tooltip trigger props will be passed down to the child element
     * instead of wrapping the child element in a button.
     */
    asChild: true;
    isDisabled?: boolean;
    children: Omit<DetailedReactHTMLElement<any, any>, "ref">;
};
export declare const TooltipTrigger: (props: TooltipTriggerProps) => import("react").JSX.Element;
export {};
