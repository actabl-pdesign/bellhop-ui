import { HTMLAttributes } from 'react';
import { DateValue } from 'react-aria-components';
interface RangePresetButtonProps extends HTMLAttributes<HTMLButtonElement> {
    value: {
        start: DateValue;
        end: DateValue;
    };
}
export declare const RangePresetButton: ({ value, className, children, ...props }: RangePresetButtonProps) => import("react").JSX.Element;
export {};
