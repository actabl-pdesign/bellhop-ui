"use client";
import React, { useContext } from "react";

import { Disclosure } from "@headlessui/react";
import { ArrowUpHeadIcon } from "assets";
import { OpenContext } from "components/layout-elements/Accordion/Accordion";
import { makeClassName, bellhopTwMerge } from "lib";

const makeAccordionHeaderClassName = makeClassName("AccordionHeader");

const AccordionHeader = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { children, className, ...other } = props;

  const { isOpen } = useContext(OpenContext);

  return (
    <Disclosure.Button
      ref={ref}
      className={bellhopTwMerge(
        makeAccordionHeaderClassName("root"),
        // common
        "w-full flex items-center justify-between px-4 py-3",
        // light
        "text-bellhop-content-emphasis",
        // dark
        "dark:text-dark-bellhop-content-emphasis",
        className,
      )}
      {...other}
    >
      <div
        className={bellhopTwMerge(
          makeAccordionHeaderClassName("children"),
          "flex flex-1 text-inherit mr-4",
        )}
      >
        {children}
      </div>
      <div>
        <ArrowUpHeadIcon
          className={bellhopTwMerge(
            makeAccordionHeaderClassName("arrowIcon"),
            //common
            "h-5 w-5 -mr-1",
            // light
            "text-bellhop-content-subtle",
            // dark
            "dark:text-dark-bellhop-content-subtle",
            isOpen ? "transition-all" : "transition-all -rotate-180",
          )}
        />
      </div>
    </Disclosure.Button>
  );
});

AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;
