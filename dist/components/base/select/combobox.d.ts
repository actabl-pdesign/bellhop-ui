import { RefAttributes } from 'react';
import { ComboBoxProps as AriaComboBoxProps, ListBoxProps as AriaListBoxProps } from 'react-aria-components';
import { CommonProps, SelectItemType } from './select';
interface ComboBoxProps extends Omit<AriaComboBoxProps<SelectItemType>, "children" | "items">, RefAttributes<HTMLDivElement>, CommonProps {
    shortcut?: boolean;
    items?: SelectItemType[];
    popoverClassName?: string;
    shortcutClassName?: string;
    children: AriaListBoxProps<SelectItemType>["children"];
}
export declare const ComboBox: ({ placeholder, shortcut, size, children, items, shortcutClassName, ...otherProps }: ComboBoxProps) => import("react").JSX.Element;
export {};
