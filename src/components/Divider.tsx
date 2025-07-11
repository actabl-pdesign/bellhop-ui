import React from "react"

import { cx } from "../lib/utils"

const Divider = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, forwardedRef) => (
  <div
    ref={forwardedRef}
    className={cx(
      // base
      "mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm",
      // text color
      "text-gray-500",
      className
    )}
    {...props}
  >
    {children ? (
      <>
        <div
          className={cx(
            // base
            "h-[1px] w-full",
            // background color
            "bg-gray-200"
          )}
        />
        <div className="whitespace-nowrap text-inherit">{children}</div>
        <div
          className={cx(
            // base
            "h-[1px] w-full",
            // background color
            "bg-gray-200"
          )}
        />
      </>
    ) : (
      <div
        className={cx(
          // base
          "h-[1px] w-full",
          // background color
          "bg-gray-200"
        )}
      />
    )}
  </div>
))

Divider.displayName = "Divider"

export { Divider }
