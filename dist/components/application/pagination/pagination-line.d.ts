import { PaginationRootProps } from './pagination-base';
interface PaginationLineProps extends Omit<PaginationRootProps, "children"> {
    /** The size of the pagination line. */
    size?: "md" | "lg";
    /** Whether the pagination is displayed in a card. */
    framed?: boolean;
}
export declare const PaginationLine: ({ framed, className, size, ...props }: PaginationLineProps) => import("react").JSX.Element;
export {};
