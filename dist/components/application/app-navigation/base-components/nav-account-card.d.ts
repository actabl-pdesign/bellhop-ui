import { Placement } from '@react-types/overlays';
import { DialogProps as AriaDialogProps } from 'react-aria-components';
type NavAccountType = {
    /** Unique identifier for the nav item. */
    id: string;
    /** Name of the account holder. */
    name: string;
    /** Email address of the account holder. */
    email: string;
    /** Avatar image URL. */
    avatar: string;
    /** Online status of the account holder. This is used to display the online status indicator. */
    status: "online" | "offline";
};
export declare const NavAccountMenu: ({ className, accounts, selectedAccountId, ...dialogProps }: AriaDialogProps & {
    className?: string;
    accounts?: NavAccountType[];
    selectedAccountId?: string;
}) => import("react").JSX.Element;
export declare const NavAccountCard: ({ popoverPlacement, selectedAccountId, items, }: {
    popoverPlacement?: Placement;
    selectedAccountId?: string;
    items?: NavAccountType[];
}) => import("react").JSX.Element | null;
export {};
