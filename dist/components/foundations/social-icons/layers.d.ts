import { SVGProps } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
    size?: number;
}
declare const Layers: ({ size, ...props }: Props) => import("react").JSX.Element;
export default Layers;
