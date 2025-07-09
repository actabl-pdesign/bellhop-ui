"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cloneElement, isValidElement, useMemo } from "react"

import { cn } from "../lib/utils"

const featuredIconVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-indigo-200 text-primary",
        neutral: "bg-gray-200 text-gray-600",
        danger: "bg-red-200 text-red-600",
        warning: "bg-amber-200 text-amber-600",
        success: "bg-green-200 text-green-600",
        info: "bg-indigo-200 text-primary",
        purple: "bg-purple-200 text-purple-600",
        outline: "bg-white text-gray-600 border border-gray-200 rounded-lg"
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

export interface FeaturedIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featuredIconVariants> {
  icon: React.ReactNode
}

const FeaturedIcon = React.forwardRef<HTMLDivElement, FeaturedIconProps>(
  ({ className, variant, size, icon, ...props }, ref) => {
    // Determine the icon size based on the container size
    const iconSize = useMemo(() => {
      switch (size) {
        case "sm":
          return "h-4 w-4"
        case "md":
          return "h-5 w-5"
        default:
          return "h-5 w-5"
      }
    }, [size])

    // Clone the icon element to apply the correct size
    const clonedIcon = isValidElement(icon)
      ? cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: cn(
            iconSize,
            (icon.props as { className?: string })?.className
          )
        })
      : null

    return (
      <div
        ref={ref}
        className={cn(featuredIconVariants({ variant, size }), className)}
        {...props}
      >
        {clonedIcon || icon}
      </div>
    )
  }
)
FeaturedIcon.displayName = "FeaturedIcon"

export { FeaturedIcon }
