"use client";

import type { DateInputProps as AriaDateInputProps } from "react-aria-components";
import {
  DateInput as AriaDateInput,
  DateSegment as AriaDateSegment,
} from "react-aria-components";
import { cx } from "@/utils/cx";

interface DateInputProps extends Omit<AriaDateInputProps, "children"> {}

export const DateInput = (props: DateInputProps) => {
  return (
    <AriaDateInput
      {...props}
      className={cx(
        "flex rounded-lg bg-primary h-8 px-2.5 py-1.5 text-sm ring-1 ring-primary ring-inset focus-within:ring-2 focus-within:ring-brand",
        typeof props.className === "string" && props.className,
      )}
    >
      {(segment) => (
        <AriaDateSegment
          segment={segment}
          className={cx(
            "rounded px-0.5 text-primary caret-transparent focus:bg-brand-solid focus:font-medium focus:text-white focus:outline-hidden",
            // The placeholder segment.
            segment.isPlaceholder && "text-placeholder uppercase",
            // The separator "/" segment.
            segment.type === "literal" && "text-fg-quaternary",
          )}
        />
      )}
    </AriaDateInput>
  );
};
