import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import * as React from "react";

import { cn, focusRing } from "../lib/utils";

const badgeVariants = cva(
  [
    // base
    "inline-flex items-center gap-x-1 whitespace-nowrap rounded-full font-medium",
    // focus styles (consistent with other components)
    ...focusRing,
  ],
  {
    variants: {
      variant: {
        solid: "ring-0 ring-transparent [--bg-opacity:70%]",
        soft: "ring-1 [--bg-opacity:20%]",
        outline: "!bg-transparent ring-[1.5px]",
      },
      color: {
        brand:
          "bg-indigo-200/[var(--bg-opacity)] text-indigo-700 ring-indigo-400",
        neutral:
          "bg-gray-300/[var(--bg-opacity)] text-gray-700 ring-gray-500/50",
        success:
          "bg-green-300/[var(--bg-opacity)] text-green-700 ring-green-400",
        error: "bg-red-300/[var(--bg-opacity)] text-red-700 ring-red-600/20",
        warning:
          "bg-amber-300/[var(--bg-opacity)] text-amber-700 ring-amber-400",
        purple:
          "bg-purple-300/[var(--bg-opacity)] text-purple-700 ring-purple-400",
        violet:
          "bg-violet-300/[var(--bg-opacity)] text-violet-700 ring-violet-400",
        rose: "bg-rose-300/[var(--bg-opacity)] text-rose-700 ring-rose-400",
        blue: "bg-blue-300/[var(--bg-opacity)] text-blue-700 ring-blue-400",
      },
      size: {
        large: "h-7 px-3 py-1 text-sm",
        medium: "h-6 px-2.5 py-1 text-sm",
        small: "h-5 px-2 py-0 text-xs",
      },
    },
    defaultVariants: {
      variant: "soft",
      color: "brand",
      size: "medium",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant, color, size }), className)}
      {...props}
    />
  );
}

Badge.displayName = "Badge";

export { Badge, badgeVariants };
