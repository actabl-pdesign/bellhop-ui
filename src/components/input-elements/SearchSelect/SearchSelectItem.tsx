"use client";
import React from "react";

import { makeClassName, bellhopTwMerge } from "lib";

import { ComboboxOption } from "@headlessui/react";

const makeSearchSelectItemClassName = makeClassName("SearchSelectItem");

export interface SearchSelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  icon?: React.ElementType;
}

const SearchSelectItem = React.forwardRef<HTMLDivElement, SearchSelectItemProps>((props, ref) => {
  const { value, icon, className, children, ...other } = props;
  const Icon = icon;

  return (
    <ComboboxOption
      className={bellhopTwMerge(
        makeSearchSelectItemClassName("root"),
        // common
        "flex justify-start items-center cursor-default text-bellhop-default p-2.5",
        // light
        "data-[focus]:bg-bellhop-background-muted  data-[focus]:text-bellhop-content-strong data-[selected]:text-bellhop-content-strong data-[selected]:bg-bellhop-background-muted text-bellhop-content-emphasis",
        // dark
        "dark:data-[focus]:bg-dark-bellhop-background-muted  dark:data-[focus]:text-dark-bellhop-content-strong dark:data-[selected]:text-dark-bellhop-content-strong dark:data-[selected]:bg-dark-bellhop-background-muted dark:text-dark-bellhop-content-emphasis",
        className,
      )}
      ref={ref}
      key={value}
      value={value}
      {...other}
    >
      {Icon && (
        <Icon
          className={bellhopTwMerge(
            makeSearchSelectItemClassName("icon"),
            // common
            "flex-none h-5 w-5 mr-3",
            // light
            "text-bellhop-content-subtle",
            // dark
            "dark:text-dark-bellhop-content-subtle",
          )}
        />
      )}
      <span className="whitespace-nowrap truncate">{children ?? value}</span>
    </ComboboxOption>
  );
});

SearchSelectItem.displayName = "SearchSelectItem";

export default SearchSelectItem;
