import { FC, ReactNode, RefAttributes } from 'react';
import { SelectProps as AriaSelectProps } from 'react-aria-components';
import { ComboBox } from './combobox';
import { SelectItem } from './select-item';
export type SelectItemType = {
    id: string;
    label?: string;
    avatarUrl?: string;
    isDisabled?: boolean;
    supportingText?: string;
    icon?: FC | ReactNode;
};
export interface CommonProps {
    hint?: string;
    label?: string;
    tooltip?: string;
    size?: "sm" | "md";
    placeholder?: string;
}
interface SelectProps extends Omit<AriaSelectProps<SelectItemType>, "children" | "items">, RefAttributes<HTMLDivElement>, CommonProps {
    items?: SelectItemType[];
    popoverClassName?: string;
    placeholderIcon?: FC | ReactNode;
    children: ReactNode | ((item: SelectItemType) => ReactNode);
}
export declare const sizes: {
    sm: {
        root: string;
        shortcut: string;
    };
    md: {
        root: string;
        shortcut: string;
    };
};
export declare const SelectContext: import('react').Context<{
    size: "sm" | "md";
}>;
declare const Select: ({ placeholder, placeholderIcon, size, children, items, label, hint, tooltip, className, ...rest }: SelectProps) => import("react").JSX.Element;
declare const _Select: typeof Select & {
    ComboBox: typeof ComboBox;
    Item: typeof SelectItem;
};
export { _Select as Select };
