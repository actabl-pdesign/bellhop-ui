import { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    size?: number;
}
declare const X: ({ size, ...props }: Props) => import("react").JSX.Element;
export default X;
