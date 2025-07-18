import { AvatarProps } from './avatar';
interface AvatarProfilePhotoProps extends AvatarProps {
    size: "sm" | "md" | "lg";
}
export declare const AvatarProfilePhoto: ({ contrastBorder, size, src, alt, initials, placeholder, placeholderIcon: PlaceholderIcon, verified, badge, status, className, }: AvatarProfilePhotoProps) => import("react").JSX.Element;
export {};
