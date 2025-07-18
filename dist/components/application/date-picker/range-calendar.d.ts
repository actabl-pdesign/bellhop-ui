import { PropsWithChildren } from 'react';
import { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from 'react-aria-components';
export declare const RangeCalendarContextProvider: ({ children, }: PropsWithChildren) => import("react").JSX.Element;
interface RangeCalendarProps extends AriaRangeCalendarProps<DateValue> {
    /** The dates to highlight. */
    highlightedDates?: DateValue[];
    /** The date presets to display. */
    presets?: Record<string, {
        label: string;
        value: {
            start: DateValue;
            end: DateValue;
        };
    }>;
}
export declare const RangeCalendar: ({ highlightedDates, presets, ...props }: RangeCalendarProps) => import("react").JSX.Element;
export {};
