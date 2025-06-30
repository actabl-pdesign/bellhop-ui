import { bellhopTwMerge } from "lib";
import React from "react";

import { getColorClassNames } from "lib";
import { colorPalette } from "lib/theme";
import { Color } from "../../../lib";

export interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: Color;
}

const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>((props, ref) => {
  const { color, children, className, ...other } = props;
  return (
    <p
      ref={ref}
      className={bellhopTwMerge(
        color
          ? getColorClassNames(color, colorPalette.lightText).textColor
          : "text-bellhop-content-emphasis dark:text-dark-bellhop-content-emphasis",
        className,
      )}
      {...other}
    >
      {children}
    </p>
  );
});

Subtitle.displayName = "Subtitle";

export default Subtitle;
