import * as LabelPrimitives from "@radix-ui/react-label"
import * as React from "react"

import { cx } from "../lib/utils"

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  disabled?: boolean
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitives.Root>,
  LabelProps
>(({ className, disabled, ...props }, forwardedRef) => (
  <LabelPrimitives.Root
    ref={forwardedRef}
    className={cx(
      // base
      "text-sm font-medium leading-none",
      // text color
      "text-gray-700",
      // disabled
      {
        "text-gray-400": disabled,
      },
      className,
    )}
    aria-disabled={disabled}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
