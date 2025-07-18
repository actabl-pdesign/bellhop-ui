import { RefAttributes } from 'react';
import { PopoverProps as AriaPopoverProps } from 'react-aria-components';
interface PopoverProps extends AriaPopoverProps, RefAttributes<HTMLElement> {
    size: "sm" | "md";
}
export declare const Popover: (props: PopoverProps) => import("react").JSX.Element;
export {};
