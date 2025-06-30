import { bellhopTwMerge } from "lib";
import React from "react";

const Italic = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <i ref={ref} className={bellhopTwMerge("italic text-inherit", className)} {...other}>
      {children}
    </i>
  );
});

Italic.displayName = "Italic";

export default Italic;
