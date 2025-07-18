import { ComponentPropsWithRef, HTMLAttributes, ReactNode, Ref, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { CellProps as AriaCellProps, ColumnProps as AriaColumnProps, RowProps as AriaRowProps, TableHeaderProps as AriaTableHeaderProps, TableProps as AriaTableProps, TableBody as AriaTableBody } from 'react-aria-components';
export declare const TableRowActionsDropdown: () => import("react").JSX.Element;
interface TableCardHeaderProps {
    /** The title of the table card header. */
    title: string;
    /** The badge displayed next to the title. */
    badge?: ReactNode;
    /** The description of the table card header. */
    description?: string;
    /** The content displayed after the title and badge. */
    contentTrailing?: ReactNode;
    /** The class name of the table card header. */
    className?: string;
}
interface TableRootProps extends AriaTableProps, Omit<ComponentPropsWithRef<"table">, "className" | "slot" | "style"> {
    size?: "sm" | "md";
    density?: "condensed" | "default" | "expanded";
}
declare const TableRoot: {
    ({ className, size, density, ...props }: TableRootProps): import("react").JSX.Element;
    displayName: string;
};
interface TableHeaderProps<T extends object> extends AriaTableHeaderProps<T>, Omit<ComponentPropsWithRef<"thead">, "children" | "className" | "slot" | "style"> {
    bordered?: boolean;
}
declare const TableHeader: {
    <T extends object>({ columns, children, bordered, className, ...props }: TableHeaderProps<T>): import("react").JSX.Element;
    displayName: string;
};
interface TableHeadProps extends AriaColumnProps, Omit<ThHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    label?: string;
    tooltip?: string;
}
declare const TableHead: {
    ({ className, tooltip, label, children, ...props }: TableHeadProps): import("react").JSX.Element;
    displayName: string;
};
interface TableRowProps<T extends object> extends AriaRowProps<T>, Omit<ComponentPropsWithRef<"tr">, "children" | "className" | "slot" | "style" | "id"> {
    highlightSelectedRow?: boolean;
}
declare const TableRow: {
    <T extends object>({ columns, children, className, highlightSelectedRow, ...props }: TableRowProps<T>): import("react").JSX.Element;
    displayName: string;
};
interface TableCellProps extends AriaCellProps, Omit<TdHTMLAttributes<HTMLTableCellElement>, "children" | "className" | "style" | "id"> {
    ref?: Ref<HTMLTableCellElement>;
}
declare const TableCell: {
    ({ className, children, ...props }: TableCellProps): import("react").JSX.Element;
    displayName: string;
};
declare const TableCard: {
    Root: ({ children, className, size, density, ...props }: HTMLAttributes<HTMLDivElement> & {
        size?: "sm" | "md";
        density?: "condensed" | "default" | "expanded";
    }) => import("react").JSX.Element;
    Header: ({ title, badge, description, contentTrailing, className, }: TableCardHeaderProps) => import("react").JSX.Element;
};
declare const Table: typeof TableRoot & {
    Body: typeof AriaTableBody;
    Cell: typeof TableCell;
    Head: typeof TableHead;
    Header: typeof TableHeader;
    Row: typeof TableRow;
};
export { Table, TableCard };
