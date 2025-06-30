"use client";
import React, { createContext } from "react";

import { BaseColorContext } from "contexts";

import { Tab } from "@headlessui/react";
import { makeClassName, bellhopTwMerge, Color } from "lib";

const makeTabListClassName = makeClassName("TabList");

export type TabVariant = "line" | "pill";

export const TabVariantContext = createContext<TabVariant>("line");

const variantStyles: { [key in TabVariant]: string } = {
  line: bellhopTwMerge(
    // common
    "flex border-b space-x-4",
    // light
    "border-bellhop-border",
  ),
  pill: bellhopTwMerge(
    // common
    "inline-flex p-0.5 rounded-bellhop-default space-x-1.5",
    // light
    "bg-bellhop-secondary-muted",
  ),
};

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  variant?: TabVariant;
  children: React.ReactElement[] | React.ReactElement;
}

const TabList = React.forwardRef<HTMLDivElement, TabListProps>((props, ref) => {
  const { color, variant = "line", children, className, ...other } = props;

  return (
    <Tab.List
      ref={ref}
      className={bellhopTwMerge(
        makeTabListClassName("root"),
        "justify-start overflow-x-clip",
        variantStyles[variant],
        className,
      )}
      {...other}
    >
      <TabVariantContext.Provider value={variant}>
        <BaseColorContext.Provider value={color}>{children}</BaseColorContext.Provider>
      </TabVariantContext.Provider>
    </Tab.List>
  );
});

TabList.displayName = "TabList";

export default TabList;
