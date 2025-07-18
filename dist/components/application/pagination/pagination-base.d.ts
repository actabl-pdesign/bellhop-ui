import { CSSProperties, FC, ReactNode, default as React } from 'react';
type PaginationPage = {
    /** The type of the pagination item. */
    type: "page";
    /** The value of the pagination item. */
    value: number;
    /** Whether the pagination item is the current page. */
    isCurrent: boolean;
};
type PaginationEllipsisType = {
    type: "ellipsis";
    key: number;
};
type PaginationItemType = PaginationPage | PaginationEllipsisType;
interface PaginationContextType {
    /** The pages of the pagination. */
    pages: PaginationItemType[];
    /** The current page of the pagination. */
    currentPage: number;
    /** The total number of pages. */
    total: number;
    /** The function to call when the page changes. */
    onPageChange: (page: number) => void;
}
export interface PaginationRootProps {
    /** Number of sibling pages to show on each side of the current page */
    siblingCount?: number;
    /** Current active page number */
    page: number;
    /** Total number of pages */
    total: number;
    children: ReactNode;
    /** The style of the pagination root. */
    style?: CSSProperties;
    /** The class name of the pagination root. */
    className?: string;
    /** Callback function that's called when the page changes with the new page number. */
    onPageChange?: (page: number) => void;
}
interface TriggerRenderProps {
    isDisabled: boolean;
    onClick: () => void;
}
interface TriggerProps {
    /** The children of the trigger. Can be a render prop or a valid element. */
    children: ReactNode | ((props: TriggerRenderProps) => ReactNode);
    /** The style of the trigger. */
    style?: CSSProperties;
    /** The class name of the trigger. */
    className?: string | ((args: {
        isDisabled: boolean;
    }) => string);
    /** If true, the child element will be cloned and passed down the prop of the trigger. */
    asChild?: boolean;
    /** The direction of the trigger. */
    direction: "prev" | "next";
    /** The aria label of the trigger. */
    ariaLabel?: string;
}
interface PaginationItemRenderProps {
    isSelected: boolean;
    onClick: () => void;
    value: number;
    "aria-current"?: "page";
    "aria-label"?: string;
}
export interface PaginationItemProps {
    /** The value of the pagination item. */
    value: number;
    /** Whether the pagination item is the current page. */
    isCurrent: boolean;
    /** The children of the pagination item. Can be a render prop or a valid element. */
    children?: ReactNode | ((props: PaginationItemRenderProps) => ReactNode);
    /** The style object of the pagination item. */
    style?: CSSProperties;
    /** The class name of the pagination item. */
    className?: string | ((args: {
        isSelected: boolean;
    }) => string);
    /** The aria label of the pagination item. */
    ariaLabel?: string;
    /** If true, the child element will be cloned and passed down the prop of the item. */
    asChild?: boolean;
}
interface PaginationEllipsisProps {
    key: number;
    children?: ReactNode;
    style?: CSSProperties;
    className?: string | (() => string);
}
interface PaginationContextComponentProps {
    children: (pagination: PaginationContextType) => ReactNode;
}
export declare const Pagination: {
    Root: ({ total, siblingCount, page, onPageChange, children, style, className, }: PaginationRootProps) => React.JSX.Element;
    PrevTrigger: FC<Omit<TriggerProps, "direction">>;
    NextTrigger: FC<Omit<TriggerProps, "direction">>;
    Item: ({ value, isCurrent, children, style, className, ariaLabel, asChild, }: PaginationItemProps) => React.JSX.Element;
    Ellipsis: FC<PaginationEllipsisProps>;
    Context: FC<PaginationContextComponentProps>;
};
export {};
