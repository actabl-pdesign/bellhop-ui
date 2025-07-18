import { FC, ReactNode } from 'react';
type NavItem = {
    /** Label text for the nav item. */
    label: string;
    /** URL to navigate to when the nav item is clicked. */
    href: string;
    /** Whether the nav item is currently active. */
    current?: boolean;
    /** Icon component to display. */
    icon?: FC<{
        className?: string;
    }>;
    /** Badge to display. */
    badge?: ReactNode;
    /** List of sub-items to display. */
    items?: NavItem[];
};
interface HeaderNavigationBaseProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItem[];
    /** List of sub-items to display. */
    subItems?: NavItem[];
    /** Content to display in the trailing position. */
    trailingContent?: ReactNode;
    /** Whether to show the avatar dropdown. */
    showAvatarDropdown?: boolean;
    /** Whether to hide the bottom border. */
    hideBorder?: boolean;
}
export declare const HeaderNavigationBase: ({ activeUrl, items, subItems, trailingContent, showAvatarDropdown, hideBorder, }: HeaderNavigationBaseProps) => import("react").JSX.Element;
export {};
