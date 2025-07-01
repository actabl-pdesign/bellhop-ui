"use client";
import React from "react";
import { ListboxOption } from "@headlessui/react";
import { makeClassName, bellhopTwMerge } from "lib";

const makeSelectItemClassName = makeClassName("SelectItem");

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  icon?: React.ElementType;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    const { value, icon, className, children, ...other } = props;

    const Icon = icon;

    return (
      <ListboxOption
        className={bellhopTwMerge(
          makeSelectItemClassName("root"),
          // common
          "flex justify-start items-center cursor-default font-medium text-bellhop-default border-0 px-2.5 py-2.5",
          // light
          "data-[focus]:bg-bellhop-brand-muted hover:bg-bellhop-brand hover:text-bellhop-brand-emphasis data-[focus]:text-bellhop-content-strong data-[selected]:text-bellhop-brand-emphasis data-[selected]:bg-bellhop-brand-muted text-bellhop-content-emphasis",
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
              makeSelectItemClassName("icon"),
              // common
              "flex-none w-5 h-5 mr-1.5",
              // light
              "text-bellhop-content-subtle data-[selected]:text-bellhop-brand-emphasis",
            )}
          />
        )}
        <span className="whitespace-nowrap truncate">{children ?? value}</span>
      </ListboxOption>
    );
  },
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
