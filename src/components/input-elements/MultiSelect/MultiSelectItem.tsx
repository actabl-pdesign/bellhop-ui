"use client";
import { SelectedValueContext } from "contexts";
import React, { useContext } from "react";
import { isValueInArray, makeClassName, bellhopTwMerge } from "lib";
import { ListboxOption } from "@headlessui/react";

const makeMultiSelectItemClassName = makeClassName("MultiSelectItem");

export interface MultiSelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const MultiSelectItem = React.forwardRef<HTMLDivElement, MultiSelectItemProps>((props, ref) => {
  const { value, className, children, ...other } = props;

  const { selectedValue } = useContext(SelectedValueContext);
  const isSelected = isValueInArray(value, selectedValue);

  return (
    <ListboxOption
      className={bellhopTwMerge(
        makeMultiSelectItemClassName("root"),
        // common
        "flex justify-start items-center cursor-default text-bellhop-default p-2.5",
        // light
        // "data-[focus]:bg-bellhop-background-muted data-[focus]:text-bellhop-content-strong data-[select]ed:text-bellhop-content-strong data-[select]ed:bg-bellhop-background-muted text-bellhop-content-emphasis",
        "data-[focus]:bg-bellhop-background-muted data-[focus]:text-bellhop-content-strong data-[select]ed:text-bellhop-content-strong text-bellhop-content-emphasis",
        // dark
        "dark:data-[focus]:bg-dark-bellhop-background-muted dark:data-[focus]:text-dark-bellhop-content-strong dark:data-[select]ed:text-dark-bellhop-content-strong dark:data-[select]ed:bg-dark-bellhop-background-muted dark:text-dark-bellhop-content-emphasis",
        className,
      )}
      ref={ref}
      key={value}
      value={value}
      {...other}
    >
      <input
        type="checkbox"
        className={bellhopTwMerge(
          makeMultiSelectItemClassName("checkbox"),
          // common
          "flex-none focus:ring-none focus:outline-none cursor-pointer mr-2.5",
          // light
          "accent-bellhop-brand",
          // dark
          "dark:accent-dark-bellhop-brand",
        )}
        checked={isSelected}
        readOnly={true}
      />
      <span className="whitespace-nowrap truncate">{children ?? value}</span>
    </ListboxOption>
  );
});

MultiSelectItem.displayName = "MultiSelectItem";

export default MultiSelectItem;
