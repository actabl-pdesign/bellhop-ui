import { DatePickerProps as AriaDatePickerProps, DateValue } from 'react-aria-components';
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
    /** The function to call when the apply button is clicked. */
    onApply?: () => void;
    /** The function to call when the cancel button is clicked. */
    onCancel?: () => void;
}
export declare const DatePicker: ({ value: valueProp, defaultValue, onChange, onApply, onCancel, ...props }: DatePickerProps) => import("react").JSX.Element;
export {};
