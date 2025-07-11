import * as PopoverPrimitives from "@radix-ui/react-popover"
import * as React from "react"

import { cx } from "../lib/utils"

const Popover = (
  props: React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Root>
) => {
  return <PopoverPrimitives.Root {...props} />
}

Popover.displayName = "Popover"

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Trigger>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Trigger ref={forwardedRef} {...props} />
})

PopoverTrigger.displayName = "PopoverTrigger"

const PopoverAnchor = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Anchor>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Anchor>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Anchor ref={forwardedRef} {...props} />
})

PopoverAnchor.displayName = "PopoverAnchor"

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitives.Close>
>((props, forwardedRef) => {
  return <PopoverPrimitives.Close ref={forwardedRef} {...props} />
})

PopoverClose.displayName = "PopoverClose"

type ContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitives.Content
>

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitives.Content>,
  ContentProps
>(
  (
    {
      className,
      sideOffset = 10,
      side = "bottom",
      align = "center",
      collisionPadding,
      ...props
    }: ContentProps,
    forwardedRef
  ) => {
    return (
      <PopoverPrimitives.Portal>
        <PopoverPrimitives.Content
          ref={forwardedRef}
          sideOffset={sideOffset}
          side={side}
          align={align}
          collisionPadding={collisionPadding}
          avoidCollisions
          className={cx(
            // base
            "bellhop-body max-h-[var(--radix-popper-available-height)] min-w-60 overflow-hidden rounded-md border p-2.5 shadow-md",
            // border color
            "border-gray-200",
            // text color
            "text-gray-800",
            // background color
            "bg-white",
            // transition
            "will-change-[transform,opacity]",
            "data-[state=closed]:animate-hide",
            "data-[state=open]:data-[side=bottom]:animate-slideDownAndFade data-[state=open]:data-[side=left]:animate-slideLeftAndFade data-[state=open]:data-[side=right]:animate-slideRightAndFade data-[state=open]:data-[side=top]:animate-slideUpAndFade",

            className
          )}
          // https://github.com/radix-ui/primitives/issues/1159
          onWheel={event => {
            event.stopPropagation()
            const isScrollingDown = event.deltaY > 0
            if (isScrollingDown) {
              event.currentTarget.dispatchEvent(
                new KeyboardEvent("keydown", { key: "ArrowDown" })
              )
            } else {
              event.currentTarget.dispatchEvent(
                new KeyboardEvent("keydown", { key: "ArrowUp" })
              )
            }
          }}
          {...props}
        />
      </PopoverPrimitives.Portal>
    )
  }
)
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
