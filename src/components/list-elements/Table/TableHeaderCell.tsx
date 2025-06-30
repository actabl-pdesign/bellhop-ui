import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableHeaderCellClassName = makeClassName("TableHeaderCell");

const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <>
      <th
        ref={ref}
        className={bellhopTwMerge(
          makeTableHeaderCellClassName("root"),
          // common
          "whitespace-nowrap text-left font-semibold top-0 px-4 py-3.5",
          // light
          "text-bellhop-content-strong",
          // dark
          "dark:text-dark-bellhop-content-strong",
          className,
        )}
        {...other}
      >
        {children}
      </th>
    </>
  );
});

TableHeaderCell.displayName = "TableHeaderCell";

export default TableHeaderCell;
