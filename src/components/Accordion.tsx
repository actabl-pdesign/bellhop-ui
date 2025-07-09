import * as AccordionPrimitives from "@radix-ui/react-accordion"
import React from "react"

import { ChevronDownIcon } from "lucide-react"
import { cx, focusInput } from "../lib/utils"

const Accordion = AccordionPrimitives.Root

Accordion.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={cx(
        // base
        "group flex flex-1 cursor-pointer items-center justify-between px-2 py-3 text-left text-sm font-semibold leading-none [&[data-state=open]>svg]:rotate-180",
        // text color
        "text-gray-800",
        // hover
        "hover:bg-gray-100",
        // disabled
        "data-disabled:cursor-default data-disabled:text-gray-400",
        //focus
        "focus-visible:outline-hidden focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className={cx(
          // base
          "size-4 shrink-0 transition-transform duration-200",
          // text color
          "text-gray-400",
          // disabled
          "group-data-disabled:text-gray-300"
        )}
        aria-hidden="true"
        focusable="false"
      />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
))

AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={cx(
      "data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open transform-gpu"
    )}
    {...props}
  >
    <div
      className={cx(
        // base
        "overflow-hidden px-2 pb-4 pt-1 text-sm",
        // text color
        "text-gray-700",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitives.Content>
))

AccordionContent.displayName = "AccordionContent"

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "overflow-hidden border-b first:mt-0",
      // border color
      "border-gray-200",
      // focus
      ...focusInput,
      className
    )}
    {...props}
  />
))

AccordionItem.displayName = "AccordionItem"

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
