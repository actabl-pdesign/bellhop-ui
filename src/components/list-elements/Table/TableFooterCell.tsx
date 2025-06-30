import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableFooterCellClassName = makeClassName("TableFooterCell");

const TableFooterCell = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <>
      <th
        ref={ref}
        className={bellhopTwMerge(
          makeTableFooterCellClassName("root"),
          // common
          "top-0 px-4 py-3.5",
          // light
          "text-bellhop-content font-medium",
          // dark
          "dark:text-dark-bellhop-content",
          className,
        )}
        {...other}
      >
        {children}
      </th>
    </>
  );
});

TableFooterCell.displayName = "TableFooterCell";

export default TableFooterCell;
