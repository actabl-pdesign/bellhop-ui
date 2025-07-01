import React from "react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeTableClassName = makeClassName("Table");

const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>((props, ref) => {
  const { children, className, ...other } = props;

  return (
    <div
      className={bellhopTwMerge(
        makeTableClassName("root"),
        "overflow-auto",
        className,
      )}
    >
      <table
        ref={ref}
        className={bellhopTwMerge(
          makeTableClassName("table"),
          // common
          "w-full text-bellhop-default",
          // light
          "text-bellhop-content",
          // dark
          "dark:text-dark-bellhop-content",
        )}
        {...other}
      >
        {children}
      </table>
    </div>
  );
});

Table.displayName = "Table";

export default Table;
