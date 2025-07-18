import { ReactNode, Ref } from 'react';
import { LabelProps as AriaLabelProps } from 'react-aria-components';
interface LabelProps extends AriaLabelProps {
    children: ReactNode;
    isRequired?: boolean;
    tooltip?: string;
    tooltipDescription?: string;
    ref?: Ref<HTMLLabelElement>;
}
export declare const Label: {
    ({ isRequired, tooltip, tooltipDescription, className, ...props }: LabelProps): import("react").JSX.Element;
    displayName: string;
};
export {};
