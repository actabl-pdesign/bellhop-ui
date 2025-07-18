import { PropsWithChildren } from 'react';
import { CalendarProps as AriaCalendarProps, DateValue } from 'react-aria-components';
export declare const CalendarContextProvider: ({ children }: PropsWithChildren) => import("react").JSX.Element;
interface CalendarProps extends AriaCalendarProps<DateValue> {
    /** The dates to highlight. */
    highlightedDates?: DateValue[];
}
export declare const Calendar: ({ highlightedDates, className, ...props }: CalendarProps) => import("react").JSX.Element;
export {};
