import { ComponentProps, ComponentPropsWithRef } from 'react';
import { FileIcon } from '@untitledui/file-icons';
import { FeaturedIcon as FeaturedIconbase } from '../../foundations/featured-icon/featured-icons';
import { BackgroundPatternProps } from '../../shared-assets/background-patterns';
import { Illustration as Illustrations } from '../../shared-assets/illustrations';
interface RootContextProps {
    size?: "sm" | "md" | "lg";
}
interface RootProps extends ComponentPropsWithRef<"div">, RootContextProps {
}
declare const Root: ({ size, ...props }: RootProps) => import("react").JSX.Element;
declare const FeaturedIcon: ({ color, theme, icon, size, ...props }: ComponentPropsWithRef<typeof FeaturedIconbase>) => import("react").JSX.Element;
declare const Illustration: ({ type, color, size, ...props }: ComponentPropsWithRef<typeof Illustrations>) => import("react").JSX.Element;
interface FileTypeIconProps extends ComponentPropsWithRef<"div"> {
    type?: ComponentProps<typeof FileIcon>["type"];
    theme?: ComponentProps<typeof FileIcon>["variant"];
}
declare const FileTypeIcon: ({ type, theme, ...props }: FileTypeIconProps) => import("react").JSX.Element;
interface HeaderProps extends ComponentPropsWithRef<"div"> {
    pattern?: "none" | BackgroundPatternProps["pattern"];
    patternSize?: "sm" | "md" | "lg";
}
declare const Header: ({ pattern, patternSize, ...props }: HeaderProps) => import("react").JSX.Element;
declare const Content: (props: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
declare const Footer: (props: ComponentPropsWithRef<"div">) => import("react").JSX.Element;
declare const Title: (props: ComponentPropsWithRef<"h1">) => import("react").JSX.Element;
declare const Description: (props: ComponentPropsWithRef<"p">) => import("react").JSX.Element;
declare const EmptyState: typeof Root & {
    Title: typeof Title;
    Header: typeof Header;
    Footer: typeof Footer;
    Content: typeof Content;
    Description: typeof Description;
    Illustration: typeof Illustration;
    FeaturedIcon: typeof FeaturedIcon;
    FileTypeIcon: typeof FileTypeIcon;
};
export { EmptyState };
