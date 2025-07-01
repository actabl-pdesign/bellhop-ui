"use client";
import { Tab as HeadlessTab } from "@headlessui/react";
import {
  colorPalette,
  getColorClassNames,
  bellhopTwMerge,
  makeClassName,
} from "lib";
import React, { useContext } from "react";

import {
  TabVariant,
  TabVariantContext,
} from "components/input-elements/Tabs/TabList";
import { BaseColorContext } from "contexts";
import { Color } from "../../../lib/inputTypes";

const makeTabClassName = makeClassName("Tab");

function getVariantStyles(tabVariant: TabVariant, color?: Color) {
  switch (tabVariant) {
    case "line":
      return bellhopTwMerge(
        // common
        "data-[selected]:border-b-2 hover:border-b-2 border-transparent transition duration-100 -mb-px px-2 py-2",
        // light
        "hover:border-bellhop-content hover:text-bellhop-content-emphasis text-bellhop-content",
        // brand
        color
          ? getColorClassNames(color, colorPalette.border).selectBorderColor
          : [
              "data-[selected]:border-bellhop-brand data-[selected]:text-bellhop-brand",
            ],
      );
    case "pill":
      return bellhopTwMerge(
        // common
        "text-bellhop-content :hover:text-bellhop-content-strong border-transparent border rounded-bellhop-small px-2.5 py-1",
        // light
        "data-[selected]:bg-bellhop-background data-[selected]:shadow-bellhop-input [&:not([data-selected])]:hover:text-bellhop-content-emphasis data-[selected]:text-bellhop-content-emphasis [&:not([data-selected])]:text-bellhop-content-emphasis",
      );
  }
}

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { icon, className, children, ...other } = props;

  const variant = useContext(TabVariantContext);
  const color = useContext(BaseColorContext);
  const Icon = icon;
  return (
    <HeadlessTab
      ref={ref}
      className={bellhopTwMerge(
        makeTabClassName("root"),
        // common
        "flex whitespace-nowrap truncate max-w-xs outline-none data-focus-visible:ring text-bellhop-default transition duration-100",
        getVariantStyles(variant, color),
        className,
        color && getColorClassNames(color, colorPalette.text).selectTextColor,
      )}
      {...other}
    >
      {Icon ? (
        <Icon
          className={bellhopTwMerge(
            makeTabClassName("icon"),
            "flex-none h-4 w-4",
            children ? "mr-2" : "",
          )}
        />
      ) : null}
      {children ? <span>{children}</span> : null}
    </HeadlessTab>
  );
});

Tab.displayName = "Tab";

export default Tab;
