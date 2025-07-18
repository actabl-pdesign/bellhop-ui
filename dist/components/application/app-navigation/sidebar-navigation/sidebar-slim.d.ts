import { NavItemDividerType, NavItemType } from '../config';
interface SidebarNavigationSlimProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType | NavItemDividerType)[];
    /** List of footer items to display. */
    footerItems?: (NavItemType | NavItemDividerType)[];
    /** Whether to hide the border. */
    hideBorder?: boolean;
    /** Whether to hide the right side border. */
    hideRightBorder?: boolean;
}
export declare const SidebarNavigationSlim: ({ activeUrl, items, footerItems, hideBorder, hideRightBorder, }: SidebarNavigationSlimProps) => import("react").JSX.Element;
export {};
