"use client";

import type {
  ComponentPropsWithRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import { createContext, isValidElement, useContext } from "react";
import {
  ArrowDown,
  ChevronSelectorVertical,
  Copy01,
  Edit01,
  HelpCircle,
  Trash01,
} from "@untitledui/icons";
import type {
  CellProps as AriaCellProps,
  ColumnProps as AriaColumnProps,
  RowProps as AriaRowProps,
  TableHeaderProps as AriaTableHeaderProps,
  TableProps as AriaTableProps,
} from "react-aria-components";
import {
  Cell as AriaCell,
  Collection as AriaCollection,
  Column as AriaColumn,
  Group as AriaGroup,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  useTableOptions,
} from "react-aria-components";
import { Badge } from "@/components/base/badges/badges";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

export const TableRowActionsDropdown = () => (
  <Dropdown.Root>
    <Dropdown.DotsButton />

    <Dropdown.Popover className="w-min">
      <Dropdown.Menu>
        <Dropdown.Item icon={Edit01}>
          <span className="pr-4">Edit</span>
        </Dropdown.Item>
        <Dropdown.Item icon={Copy01}>
          <span className="pr-4">Copy link</span>
        </Dropdown.Item>
        <Dropdown.Item icon={Trash01}>
          <span className="pr-4">Delete</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Popover>
  </Dropdown.Root>
);

const TableContext = createContext<{
  size: "sm" | "md";
  density: "condensed" | "default" | "expanded";
}>({ size: "md", density: "default" });

const TableCardRoot = ({
  children,
  className,
  size = "md",
  density = "default",
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md";
  density?: "condensed" | "default" | "expanded";
}) => {
  return (
    <TableContext.Provider value={{ size, density }}>
      <div
        {...props}
        className={cx(
          "overflow-hidden bg-primary",
          className,
        )}
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};

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

const TableCardHeader = ({
  title,
  badge,
  description,
  contentTrailing,
  className,
}: TableCardHeaderProps) => {
  const { size, density } = useContext(TableContext);

  const getDensityPadding = () => {
    if (density === "condensed") {
      return size === "sm" ? "py-3 md:px-4" : "py-4 md:px-5";
    } else if (density === "expanded") {
      return size === "sm" ? "py-5 md:px-6" : "py-6 md:px-7";
    }
    return size === "sm" ? "py-3 md:px-5" : "py-4 md:px-6";
  };

  return (
    <div
      className={cx(
        "relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 md:flex-row",
        getDensityPadding(),
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <h2
            className={cx(
              "font-semibold text-primary",
              size === "sm" ? "text-md" : "text-lg",
            )}
          >
            {title}
          </h2>
          {badge ? (
            isValidElement(badge) ? (
              badge
            ) : (
              <Badge color="brand" size="sm" type="pill-color">
                {badge}
              </Badge>
            )
          ) : null}
        </div>
        {description && <p className="text-sm text-tertiary">{description}</p>}
      </div>
      {contentTrailing}
    </div>
  );
};

interface TableRootProps
  extends AriaTableProps,
    Omit<ComponentPropsWithRef<"table">, "className" | "slot" | "style"> {
  size?: "sm" | "md";
  density?: "condensed" | "default" | "expanded";
}

const TableRoot = ({
  className,
  size = "md",
  density = "default",
  ...props
}: TableRootProps) => {
  const context = useContext(TableContext);

  return (
    <TableContext.Provider
      value={{
        size: context?.size ?? size,
        density: context?.density ?? density,
      }}
    >
      <div className="overflow-x-auto">
        <AriaTable
          className={(state) =>
            cx(
              "w-full overflow-x-hidden",
              typeof className === "function" ? className(state) : className,
            )
          }
          {...props}
        />
      </div>
    </TableContext.Provider>
  );
};
TableRoot.displayName = "Table";

interface TableHeaderProps<T extends object>
  extends AriaTableHeaderProps<T>,
    Omit<
      ComponentPropsWithRef<"thead">,
      "children" | "className" | "slot" | "style"
    > {
  bordered?: boolean;
}

const TableHeader = <T extends object>({
  columns,
  children,
  bordered = true,
  className,
  ...props
}: TableHeaderProps<T>) => {
  const { size, density } = useContext(TableContext);
  const { selectionBehavior, selectionMode } = useTableOptions();

  const getDensityHeight = () => {
    if (density === "condensed") {
      return size === "sm" ? "h-7" : "h-8.5";
    } else if (density === "expanded") {
      return size === "sm" ? "h-10" : "h-11";
    }
    return size === "sm" ? "h-8.5" : "h-10";
  };

  return (
    <AriaTableHeader
      {...props}
      className={(state) =>
        cx(
          "relative bg-secondary",
          getDensityHeight(),

          // Row border—using an "after" pseudo-element to avoid the border taking up space.
          bordered &&
            "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent",

          typeof className === "function" ? className(state) : className,
        )
      }
    >
      {selectionBehavior === "toggle" && (
        <AriaColumn
          className={cx(
            "relative py-2 pr-0",
            density === "condensed"
              ? "pl-4"
              : density === "expanded"
                ? "pl-5"
                : "pl-4",
          )}
        >
          {selectionMode === "multiple" && (
            <div className="flex items-start">
              <Checkbox slot="selection" size="sm" />
            </div>
          )}
        </AriaColumn>
      )}
      <AriaCollection items={columns}>{children}</AriaCollection>
    </AriaTableHeader>
  );
};

TableHeader.displayName = "TableHeader";

interface TableHeadProps
  extends AriaColumnProps,
    Omit<
      ThHTMLAttributes<HTMLTableCellElement>,
      "children" | "className" | "style" | "id"
    > {
  label?: string;
  tooltip?: string;
}

const TableHead = ({
  className,
  tooltip,
  label,
  children,
  ...props
}: TableHeadProps) => {
  const { selectionBehavior } = useTableOptions();
  const { density } = useContext(TableContext);

  const getDensityPadding = () => {
    if (density === "condensed") {
      return "px-4 py-1.5";
    } else if (density === "expanded") {
      return "px-7 py-2.5";
    }
    return "px-5 py-2";
  };

  return (
    <AriaColumn
      {...props}
      className={(state) =>
        cx(
          "relative p-0 outline-hidden focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset",
          getDensityPadding(),
          selectionBehavior === "toggle" && "nth-2:pl-3",
          state.allowsSorting && "cursor-pointer",
          typeof className === "function" ? className(state) : className,
        )
      }
    >
      {(state) => (
        <AriaGroup className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            {label && (
              <span className="text-xs font-semibold whitespace-nowrap text-quaternary">
                {label}
              </span>
            )}
            {typeof children === "function" ? children(state) : children}
          </div>

          {tooltip && (
            <Tooltip title={tooltip} placement="top">
              <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
              </TooltipTrigger>
            </Tooltip>
          )}

          {state.allowsSorting &&
            (state.sortDirection ? (
              <ArrowDown
                className={cx(
                  "size-3 stroke-[3px] text-fg-quaternary",
                  state.sortDirection === "descending" && "rotate-180",
                )}
              />
            ) : (
              <ChevronSelectorVertical
                size={12}
                strokeWidth={3}
                className="text-fg-quaternary"
              />
            ))}
        </AriaGroup>
      )}
    </AriaColumn>
  );
};
TableHead.displayName = "TableHead";

interface TableRowProps<T extends object>
  extends AriaRowProps<T>,
    Omit<
      ComponentPropsWithRef<"tr">,
      "children" | "className" | "slot" | "style" | "id"
    > {
  highlightSelectedRow?: boolean;
}

const TableRow = <T extends object>({
  columns,
  children,
  className,
  highlightSelectedRow = true,
  ...props
}: TableRowProps<T>) => {
  const { size, density } = useContext(TableContext);
  const { selectionBehavior } = useTableOptions();

  const getDensityHeight = () => {
    if (density === "condensed") {
      return size === "sm" ? "h-9" : "h-12";
    } else if (density === "expanded") {
      return size === "sm" ? "h-14" : "h-16";
    }
    return size === "sm" ? "h-12" : "h-14";
  };

  return (
    <AriaRow
      {...props}
      className={(state) =>
        cx(
          "relative outline-focus-ring transition-colors after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2",
          getDensityHeight(),
          highlightSelectedRow && "selected:bg-indigo-50 selected:[&>td]:after:bg-indigo-200",

          // Row border—using an "after" pseudo-element to avoid the border taking up space.
          "[&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary last:[&>td]:after:hidden",

          typeof className === "function" ? className(state) : className,
        )
      }
    >
      {selectionBehavior === "toggle" && (
        <AriaCell
          className={cx(
            "relative py-1 pr-0",
            density === "condensed"
              ? "pl-"
              : density === "expanded"
                ? "pl-5"
                : "pl-4",
          )}
        >
          <div className="flex items-end">
            <Checkbox slot="selection" size="sm" />
          </div>
        </AriaCell>
      )}
      <AriaCollection items={columns}>{children}</AriaCollection>
    </AriaRow>
  );
};

TableRow.displayName = "TableRow";

interface TableCellProps
  extends AriaCellProps,
    Omit<
      TdHTMLAttributes<HTMLTableCellElement>,
      "children" | "className" | "style" | "id"
    > {
  ref?: Ref<HTMLTableCellElement>;
}

const TableCell = ({ className, children, ...props }: TableCellProps) => {
  const { size, density } = useContext(TableContext);
  const { selectionBehavior } = useTableOptions();

  const getDensityPadding = () => {
    if (density === "condensed") {
      return size === "sm" ? "px-3 py-1" : "px-4 py-2";
    } else if (density === "expanded") {
      return size === "sm" ? "px-4 py-2.5" : "px-4 py-5";
    }
    return size === "sm" ? "px-3.5 py-2" : "px-4 py-3";
  };

  return (
    <AriaCell
      {...props}
      className={(state) =>
        cx(
          "relative text-sm text-tertiary outline-focus-ring focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2",
          getDensityPadding(),
          selectionBehavior === "toggle" && "nth-2:pl-3",
          typeof className === "function" ? className(state) : className,
        )
      }
    >
      {children}
    </AriaCell>
  );
};
TableCell.displayName = "TableCell";

const TableCard = {
  Root: TableCardRoot,
  Header: TableCardHeader,
};

const Table = TableRoot as typeof TableRoot & {
  Body: typeof AriaTableBody;
  Cell: typeof TableCell;
  Head: typeof TableHead;
  Header: typeof TableHeader;
  Row: typeof TableRow;
};
Table.Body = AriaTableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;

export { Table, TableCard };
