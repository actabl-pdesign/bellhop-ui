import { FC, RefAttributes } from 'react';
import { ButtonProps as AriaButtonProps, MenuItemProps as AriaMenuItemProps, MenuProps as AriaMenuProps, PopoverProps as AriaPopoverProps, SeparatorProps as AriaSeparatorProps, MenuTrigger as AriaMenuTrigger } from 'react-aria-components';
interface DropdownItemProps extends AriaMenuItemProps {
    /** The label of the item to be displayed. */
    label?: string;
    /** An addon to be displayed on the right side of the item. */
    addon?: string;
    /** If true, the item will not have any styles. */
    unstyled?: boolean;
    /** An icon to be displayed on the left side of the item. */
    icon?: FC<{
        className?: string;
    }>;
}
interface DropdownMenuProps<T extends object> extends AriaMenuProps<T> {
}
interface DropdownPopoverProps extends AriaPopoverProps {
}
export declare const Dropdown: {
    Root: typeof AriaMenuTrigger;
    Popover: (props: DropdownPopoverProps) => import("react").JSX.Element;
    Menu: <T extends object>(props: DropdownMenuProps<T>) => import("react").JSX.Element;
    Section: <T extends object>(props: import('react-aria-components').MenuSectionProps<T> & React.RefAttributes<HTMLElement>) => import('react').ReactElement | null;
    SectionHeader: (props: React.HTMLAttributes<HTMLElement> & React.RefAttributes<object>) => React.ReactElement | null;
    Item: ({ label, children, addon, icon: Icon, unstyled, ...props }: DropdownItemProps) => import("react").JSX.Element;
    Separator: (props: AriaSeparatorProps) => import("react").JSX.Element;
    DotsButton: (props: AriaButtonProps & RefAttributes<HTMLButtonElement>) => import("react").JSX.Element;
};
export {};
