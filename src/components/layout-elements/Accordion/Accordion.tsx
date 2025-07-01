"use client";
import { Disclosure } from "@headlessui/react";
import { RootStylesContext } from "contexts";
import { makeClassName, bellhopTwMerge } from "lib";
import React, { createContext, useContext } from "react";

const makeAccordionClassName = makeClassName("Accordion");

interface OpenContextValue {
  isOpen: boolean;
}
export const OpenContext = createContext<OpenContextValue>({
  isOpen: false,
});

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { defaultOpen = false, children, className, ...other } = props;

    const rootStyles =
      useContext(RootStylesContext) ??
      bellhopTwMerge("rounded-bellhop-default border");
    return (
      <Disclosure
        as="div"
        ref={ref}
        className={bellhopTwMerge(
          makeAccordionClassName("root"),
          // common
          "overflow-hidden",
          // light
          "bg-bellhop-background border-bellhop-border",
          // dark
          "dark:bg-dark-bellhop-background dark:border-dark-bellhop-border",
          rootStyles,
          className,
        )}
        defaultOpen={defaultOpen}
        {...other}
      >
        {({ open }) => (
          <OpenContext.Provider value={{ isOpen: open }}>
            {children}
          </OpenContext.Provider>
        )}
      </Disclosure>
    );
  },
);

Accordion.displayName = "Accordion";

export default Accordion;
