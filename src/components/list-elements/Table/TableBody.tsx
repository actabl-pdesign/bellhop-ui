import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableBodyClassName = makeClassName("TableBody");

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <>
      <tbody
        ref={ref}
        className={bellhopTwMerge(
          makeTableBodyClassName("root"),
          // common
          "align-top divide-y",
          // light
          "divide-bellhop-border",
          // dark
          "dark:divide-dark-bellhop-border",
          className,
        )}
        {...other}
      >
        {children}
      </tbody>
    </>
  );
});

TableBody.displayName = "TableBody";

export default TableBody;
