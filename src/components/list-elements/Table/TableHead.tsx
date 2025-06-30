import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableHeadClassName = makeClassName("TableHead");

const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <>
      <thead
        ref={ref}
        className={bellhopTwMerge(
          makeTableHeadClassName("root"),
          // common
          "text-left",
          // light
          "text-bellhop-content",
          // dark
          "dark:text-dark-bellhop-content",
          className,
        )}
        {...other}
      >
        {children}
      </thead>
    </>
  );
});

TableHead.displayName = "TableHead";

export default TableHead;
