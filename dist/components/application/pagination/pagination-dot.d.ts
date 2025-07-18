import { PaginationRootProps } from './pagination-base';
interface PaginationDotProps extends Omit<PaginationRootProps, "children"> {
    /** The size of the pagination dot. */
    size?: "md" | "lg";
    /** Whether the pagination uses brand colors. */
    isBrand?: boolean;
    /** Whether the pagination is displayed in a card. */
    framed?: boolean;
}
export declare const PaginationDot: ({ framed, className, size, isBrand, ...props }: PaginationDotProps) => import("react").JSX.Element;
export {};
