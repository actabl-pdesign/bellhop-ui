import { CalendarCellProps as AriaCalendarCellProps } from 'react-aria-components';
interface CalendarCellProps extends AriaCalendarCellProps {
    /** Whether the calendar is a range calendar. */
    isRangeCalendar?: boolean;
    /** Whether the cell is highlighted. */
    isHighlighted?: boolean;
}
export declare const CalendarCell: ({ date, isHighlighted, ...props }: CalendarCellProps) => import("react").JSX.Element;
export {};
