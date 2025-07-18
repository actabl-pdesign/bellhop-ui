import { ReactNode } from 'react';
import { NavItemType } from '../config';
interface SidebarNavigationDualTierProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** Feature card to display. */
    featureCard?: ReactNode;
    /** List of items to display. */
    items: NavItemType[];
    /** List of footer items to display. */
    footerItems?: NavItemType[];
    /** Whether to hide the right side border. */
    hideBorder?: boolean;
}
export declare const SidebarNavigationDualTier: ({ activeUrl, hideBorder, items, footerItems, featureCard, }: SidebarNavigationDualTierProps) => import("react").JSX.Element;
export {};
