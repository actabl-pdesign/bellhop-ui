import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "../lib/utils"

const spinnerVariants = cva(
  "animate-spin rounded-full border-gray-200 border-t-indigo-600", // Use effective base colors directly
  {
    variants: {
      size: {
        small: "h-5 w-5 border-[2.5px]",
        medium: "h-6 w-6 border-[3px]",
        large: "h-8 w-8 border-[3px]"
      },
      show: {
        true: "flex",
        false: "hidden"
      }
    },
    defaultVariants: {
      size: "medium",
      show: true
    }
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

export function Spinner({ className, size, show, label }: SpinnerProps) {
  return (
    <div
      className={cn(spinnerVariants({ size, show }), className)}
      role="status"
      aria-label={label || "Loading"}
    >
      <span className="sr-only">{label || "Loading"}</span>
    </div>
  )
}
