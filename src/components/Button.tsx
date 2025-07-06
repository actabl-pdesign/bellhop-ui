import { cva, type VariantProps } from "class-variance-authority"
import { Slot as SlotPrimitive } from "radix-ui"
import * as React from "react"

import { cn } from "../lib/utils"

const buttonVariants = cva(
  "focus-visible:border-indigo-500 focus-visible:ring-indigo-500/50 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 disabled:saturate-70 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700/90",
        destructive:
          "bg-red-600 hover:bg-red-700/90 focus-visible:ring-red-600/20 dark:focus-visible:ring-red-500/40 text-white",
        outline:
          "bg-transparent hover:bg-gray-200/80 text-gray-700 border border-gray-200",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300/80",
        ghost: "hover:bg-gray-200/90 text-gray-700",
        link: "text-indigo-600 underline-offset-4 !px-0 hover:underline",
      },
      size: {
        sm: "h-9 gap-1 px-3 has-[>svg]:px-2.5 has-[>svg]:gap-0.5",
        md: "h-10 gap-1.5 px-4 py-2 has-[>svg]:px-3 has-[>svg]:gap-0.5",
        lg: "h-11 text-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "sm",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
