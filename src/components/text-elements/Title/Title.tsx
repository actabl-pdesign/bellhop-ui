import { bellhopTwMerge } from "lib";
import React from "react";

import { getColorClassNames } from "lib";
import { Color } from "../../../lib";

export interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Title = React.forwardRef<HTMLParagraphElement, TitleProps>(
  (props, ref) => {
    const { color, children, className, ...other } = props;
    return (
      <p
        ref={ref}
        className={bellhopTwMerge(
          // common
          "font-medium text-bellhop-title",
          color
            ? getColorClassNames(color).textColor
            : "text-bellhop-content-strong",
          className,
        )}
        {...other}
      >
        {children}
      </p>
    );
  },
);

Title.displayName = "Title";

export default Title;
