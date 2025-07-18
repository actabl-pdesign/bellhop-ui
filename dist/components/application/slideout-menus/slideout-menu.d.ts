import { ComponentPropsWithRef, ReactNode, RefAttributes } from 'react';
import { DialogProps as AriaDialogProps, ModalOverlayProps as AriaModalOverlayProps, ModalRenderProps as AriaModalRenderProps, DialogTrigger as AriaDialogTrigger } from 'react-aria-components';
interface ModalOverlayProps extends AriaModalOverlayProps, RefAttributes<HTMLDivElement> {
}
export declare const ModalOverlay: {
    (props: ModalOverlayProps): import("react").JSX.Element;
    displayName: string;
};
interface ModalProps extends AriaModalOverlayProps, RefAttributes<HTMLDivElement> {
}
export declare const Modal: {
    (props: ModalProps): import("react").JSX.Element;
    displayName: string;
};
interface DialogProps extends AriaDialogProps, RefAttributes<HTMLElement> {
}
export declare const Dialog: {
    (props: DialogProps): import("react").JSX.Element;
    displayName: string;
};
interface SlideoutMenuProps extends Omit<AriaModalOverlayProps, "children">, RefAttributes<HTMLDivElement> {
    children: ReactNode | ((children: AriaModalRenderProps & {
        close: () => void;
    }) => ReactNode);
    dialogClassName?: string;
}
declare const Menu: {
    ({ children, dialogClassName, ...props }: SlideoutMenuProps): import("react").JSX.Element;
    displayName: string;
};
declare const Content: {
    ({ role, ...props }: ComponentPropsWithRef<"div">): import("react").JSX.Element;
    displayName: string;
};
interface SlideoutHeaderProps extends ComponentPropsWithRef<"header"> {
    onClose?: () => void;
}
declare const Header: {
    ({ className, children, onClose, ...props }: SlideoutHeaderProps): import("react").JSX.Element;
    displayName: string;
};
declare const Footer: {
    (props: ComponentPropsWithRef<"footer">): import("react").JSX.Element;
    displayName: string;
};
declare const SlideoutMenu: typeof Menu & {
    Trigger: typeof AriaDialogTrigger;
    Content: typeof Content;
    Header: typeof Header;
    Footer: typeof Footer;
};
export { SlideoutMenu };
