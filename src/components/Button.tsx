import { cva, type VariantProps } from "class-variance-authority"
import { Slot as SlotPrimitive } from "radix-ui"
import * as React from "react"

import { cn, focusRing } from "../lib/utils"

const buttonVariants = cva(
  [
    // base
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all",
    // disabled
    "disabled:pointer-events-none disabled:opacity-50 disabled:saturate-70",
    // svg styles
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // focus
    ...focusRing,
    // error state
    "aria-invalid:ring-red-500/20 aria-invalid:border-red-500"
  ],
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700/90",
        destructive:
          "bg-red-600 hover:bg-red-700/90 focus-visible:ring-red-600/20 dark:focus-visible:ring-red-500/40 text-white",
        outline:
          "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200",
        secondary: "bg-neutral-200 text-gray-800 hover:bg-neutral-300/80",
        ghost: "hover:bg-neutral-100 text-gray-800",
        link: "text-indigo-600 underline-offset-4 !px-0 hover:underline"
      },
      size: {
        small: "h-9 gap-1 px-3 py-2 has-[>svg]:px-2.5 has-[>svg]:gap-0.5",
        medium: "h-10 gap-1.5 px-4 py-2 has-[>svg]:px-3 has-[>svg]:gap-0.5",
        large: "h-11 text-md px-6 py-3 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "secondary",
      size: "small"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading,
  disabled,
  ariaLabel,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    ariaLabel?: string
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button"
  const isDisabled = disabled || loading

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      aria-disabled={isDisabled ? "true" : undefined}
      aria-label={ariaLabel}
      {...props}
    />
  )
}

export { Button, buttonVariants }
