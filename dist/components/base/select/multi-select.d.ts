import { FocusEventHandler, PointerEventHandler, RefAttributes, RefObject } from 'react';
import { ComboBoxProps as AriaComboBoxProps, GroupProps as AriaGroupProps, ListBoxProps as AriaListBoxProps, Key } from 'react-aria-components';
import { ListData } from 'react-stately';
import { IconComponentType } from '../badges/badge-types';
import { SelectItemType } from './select';
import { SelectItem } from './select-item';
interface ComboBoxValueProps extends AriaGroupProps {
    size: "sm" | "md";
    shortcut?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    shortcutClassName?: string;
    placeholderIcon?: IconComponentType | null;
    ref?: RefObject<HTMLDivElement | null>;
    onFocus?: FocusEventHandler;
    onPointerEnter?: PointerEventHandler;
}
interface MultiSelectProps extends Omit<AriaComboBoxProps<SelectItemType>, "children" | "items">, RefAttributes<HTMLDivElement> {
    hint?: string;
    label?: string;
    tooltip?: string;
    size?: "sm" | "md";
    placeholder?: string;
    shortcut?: boolean;
    items?: SelectItemType[];
    popoverClassName?: string;
    shortcutClassName?: string;
    selectedItems: ListData<SelectItemType>;
    placeholderIcon?: IconComponentType | null;
    children: AriaListBoxProps<SelectItemType>["children"];
    onItemCleared?: (key: Key) => void;
    onItemInserted?: (key: Key) => void;
}
export declare const MultiSelectBase: ({ name, items, children, className, size, selectedItems, onItemCleared, onItemInserted, shortcut, placeholder, ...props }: MultiSelectProps) => import("react").JSX.Element;
export declare const MultiSelectTagsValue: ({ size, isDisabled, shortcut, placeholder, shortcutClassName, placeholderIcon: Icon, ...otherProps }: ComboBoxValueProps) => import("react").JSX.Element;
declare const MultiSelect: typeof MultiSelectBase & {
    Item: typeof SelectItem;
};
export { MultiSelect as MultiSelect };
