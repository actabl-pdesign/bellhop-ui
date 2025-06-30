import { bellhopTwMerge } from "lib";
import React from "react";

import { makeClassName } from "lib";

const makeListClassName = makeClassName("List");

const List = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  (props, ref) => {
    const { children, className, ...other } = props;
    return (
      <ul
        ref={ref}
        className={bellhopTwMerge(
          makeListClassName("root"),
          // common
          "w-full divide-y",
          // light
          "divide-bellhop-border text-bellhop-content-emphasis",
          className,
        )}
        {...other}
      >
        {children}
      </ul>
    );
  },
);

List.displayName = "List";

export default List;
