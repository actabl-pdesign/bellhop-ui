"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeAccordionBodyClassName = makeClassName("AccordionBody");

const AccordionBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { children, className, ...other } = props;
  return (
    <Disclosure.Panel
      ref={ref}
      className={bellhopTwMerge(
        makeAccordionBodyClassName("root"),
        // common
        "w-full text-bellhop-default px-4 pb-3",
        // light
        "text-bellhop-content",
        // dark
        "dark:text-dark-bellhop-content",
        className,
      )}
      {...other}
    >
      {children}
    </Disclosure.Panel>
  );
});

AccordionBody.displayName = "AccordionBody";

export default AccordionBody;
