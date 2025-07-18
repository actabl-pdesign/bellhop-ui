import { ReactNode, Ref } from 'react';
import { TextProps as AriaTextProps } from 'react-aria-components';
interface HintTextProps extends AriaTextProps {
    /** Indicates that the hint text is an error message. */
    isInvalid?: boolean;
    ref?: Ref<HTMLElement>;
    children: ReactNode;
}
export declare const HintText: {
    ({ isInvalid, className, ...props }: HintTextProps): import("react").JSX.Element;
    displayName: string;
};
export {};
