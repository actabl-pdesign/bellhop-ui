import { bellhopTwMerge } from "lib";
import React from "react";

import { getColorClassNames } from "lib";
import { Color } from "../../../lib";

export interface MetricProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Metric = React.forwardRef<HTMLParagraphElement, MetricProps>(
  (props, ref) => {
    const { color, children, className, ...other } = props;
    return (
      <p
        ref={ref}
        className={bellhopTwMerge(
          "font-semibold text-bellhop-metric",
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

Metric.displayName = "Metric";

export default Metric;
