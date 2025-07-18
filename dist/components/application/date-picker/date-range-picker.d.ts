import { DateRangePickerProps as AriaDateRangePickerProps, DateValue } from 'react-aria-components';
interface DateRangePickerProps extends AriaDateRangePickerProps<DateValue> {
    /** The function to call when the apply button is clicked. */
    onApply?: () => void;
    /** The function to call when the cancel button is clicked. */
    onCancel?: () => void;
}
export declare const DateRangePicker: ({ value: valueProp, defaultValue, onChange, onApply, onCancel, ...props }: DateRangePickerProps) => import("react").JSX.Element;
export {};
