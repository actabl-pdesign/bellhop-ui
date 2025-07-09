import * as LabelPrimitives from "@radix-ui/react-label"
import * as React from "react"

import { cx } from "../lib/utils"

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {
  children?: React.ReactNode
  disabled?: boolean
  required?: boolean
  error?: boolean
  variant?: "optional"
  htmlFor?: string
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitives.Root>,
  LabelProps
>(
  (
    { className, disabled, required, error, variant, ...props },
    forwardedRef
  ) => (
    <LabelPrimitives.Root
      ref={forwardedRef}
      className={cx(
        // base
        "block text-sm font-medium leading-none",
        // text color
        error ? "text-red-600" : "text-neutral-700",
        // disabled
        {
          "text-gray-400": disabled
        },
        // required indicator
        {
          'after:ml-1 after:text-red-500 after:content-["*"]': required
        },
        // optional indicator
        {
          'after:ml-1 after:text-gray-400 after:content-["(optional)"]':
            variant === "optional" && !required
        },
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
)
Label.displayName = "Label"

export { Label }
