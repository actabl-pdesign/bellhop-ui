import { makeClassName, bellhopTwMerge } from "lib";
import React from "react";

const makeDividerClassName = makeClassName("Divider");

const Divider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <div
      ref={ref}
      className={bellhopTwMerge(
        makeDividerClassName("root"),
        // common
        "w-full mx-auto my-6 flex justify-between gap-3 items-center text-bellhop-default",
        // light
        "text-bellhop-content",
        // dark
        "dark:text-dark-bellhop-content",
        className,
      )}
      {...other}
    >
      {children ? (
        <>
          <div
            className={bellhopTwMerge(
              "w-full h-[1px] bg-bellhop-border dark:bg-dark-bellhop-border",
            )}
          />
          <div className={bellhopTwMerge("text-inherit whitespace-nowrap")}>
            {children}
          </div>
          <div
            className={bellhopTwMerge(
              "w-full h-[1px] bg-bellhop-border dark:bg-dark-bellhop-border",
            )}
          />
        </>
      ) : (
        <div
          className={bellhopTwMerge(
            "w-full h-[1px] bg-bellhop-border dark:bg-dark-bellhop-border",
          )}
        />
      )}
    </div>
  );
});

Divider.displayName = "Divider";

export default Divider;
