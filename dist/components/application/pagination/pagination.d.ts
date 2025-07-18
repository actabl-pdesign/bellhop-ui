import { PaginationRootProps } from './pagination-base';
interface PaginationProps extends Partial<Omit<PaginationRootProps, "children">> {
    /** Whether the pagination buttons are rounded. */
    rounded?: boolean;
}
export declare const PaginationPageDefault: ({ rounded, page, total, className, ...props }: PaginationProps) => import("react").JSX.Element;
export declare const PaginationPageMinimalCenter: ({ rounded, page, total, className, ...props }: PaginationProps) => import("react").JSX.Element;
export declare const PaginationCardDefault: ({ rounded, page, total, ...props }: PaginationProps) => import("react").JSX.Element;
interface PaginationCardMinimalProps {
    /** The current page. */
    page?: number;
    /** The total number of pages. */
    total?: number;
    /** The alignment of the pagination. */
    align?: "left" | "center" | "right";
    /** The class name of the pagination component. */
    className?: string;
    /** The function to call when the page changes. */
    onPageChange?: (page: number) => void;
}
export declare const PaginationCardMinimal: ({ page, total, align, onPageChange, className, }: PaginationCardMinimalProps) => import("react").JSX.Element;
export {};
