import { FC, ReactNode } from 'react';
type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export interface AvatarProps {
    size?: AvatarSize;
    className?: string;
    src?: string | null;
    alt?: string;
    /**
     * Display a contrast border around the avatar.
     */
    contrastBorder?: boolean;
    /**
     * Display a badge (i.e. company logo).
     */
    badge?: ReactNode;
    /**
     * Display a status indicator.
     */
    status?: "online" | "offline";
    /**
     * Display a verified tick icon.
     *
     * @default false
     */
    verified?: boolean;
    /**
     * The initials of the user to display if no image is available.
     */
    initials?: string;
    /**
     * An icon to display if no image is available.
     */
    placeholderIcon?: FC<{
        className?: string;
    }>;
    /**
     * A placeholder to display if no image is available.
     */
    placeholder?: ReactNode;
    /**
     * Whether the avatar should show a focus ring when the parent group is in focus.
     * For example, when the avatar is wrapped inside a link.
     *
     * @default false
     */
    focusable?: boolean;
}
export declare const Avatar: ({ contrastBorder, size, src, alt, initials, placeholder, placeholderIcon: PlaceholderIcon, badge, status, verified, focusable, className, }: AvatarProps) => import("react").JSX.Element;
export {};
