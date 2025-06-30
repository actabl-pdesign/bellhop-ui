import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableFootClassName = makeClassName("TableFoot");

const TableFoot = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <tfoot
      ref={ref}
      className={bellhopTwMerge(
        makeTableFootClassName("root"),
        // common
        "text-left font-medium border-t-[1px] ",
        // light
        "text-bellhop-content border-bellhop-border",
        // dark
        "dark:text-dark-bellhop-content dark:border-dark-bellhop-border",
        className,
      )}
      {...other}
    >
      {children}
    </tfoot>
  );
});

TableFoot.displayName = "TableFoot";

export default TableFoot;
