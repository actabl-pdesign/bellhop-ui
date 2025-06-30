"use client";
import React, { isValidElement, useMemo, useRef, useState } from "react";
import { SelectedValueContext } from "contexts";
import { useInternalState } from "hooks";
import { ArrowDownHeadIcon, SearchIcon, XCircleIcon } from "assets";
import XIcon from "assets/XIcon";
import { makeClassName, bellhopTwMerge } from "lib";
import { getFilteredOptions, getSelectButtonColors } from "../selectUtils";
import { Listbox, ListboxButton, ListboxOptions, Transition } from "@headlessui/react";

const makeMultiSelectClassName = makeClassName("MultiSelect");

export interface MultiSelectProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string[];
  name?: string;
  value?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  placeholderSearch?: string;
  disabled?: boolean;
  icon?: React.ElementType | React.JSXElementConstructor<any>;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

const MultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>((props, ref) => {
  const {
    defaultValue = [],
    value,
    onValueChange,
    placeholder = "Select...",
    placeholderSearch = "Search",
    disabled = false,
    icon,
    children,
    className,
    required,
    name,
    error = false,
    errorMessage,
    id,
    ...other
  } = props;
  const listboxButtonRef = useRef<HTMLButtonElement | null>(null);

  const Icon = icon;

  const [selectedValue, setSelectedValue] = useInternalState(defaultValue, value);

  const { reactElementChildren, optionsAvailable } = useMemo(() => {
    const reactElementChildren = React.Children.toArray(children).filter(isValidElement);
    const optionsAvailable = getFilteredOptions("", reactElementChildren);
    return { reactElementChildren, optionsAvailable };
  }, [children]);

  const [searchQuery, setSearchQuery] = useState("");

  // checked if there are selected options
  // used the same code from the previous version
  const selectedItems = selectedValue ?? [];
  const hasSelection = selectedItems.length > 0;

  const filteredOptions = useMemo(
    () => (searchQuery ? getFilteredOptions(searchQuery, reactElementChildren) : optionsAvailable),
    [searchQuery, reactElementChildren, optionsAvailable],
  );

  const handleReset = () => {
    setSelectedValue([]);
    onValueChange?.([]);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className={bellhopTwMerge(
        // common
        "w-full min-w-[10rem] text-bellhop-default",
        className,
      )}
    >
      <div className="relative">
        <select
          title="multi-select-hidden"
          required={required}
          className={bellhopTwMerge("h-full w-full absolute left-0 top-0 -z-10 opacity-0")}
          value={selectedValue}
          onChange={(e) => {
            e.preventDefault();
          }}
          name={name}
          disabled={disabled}
          multiple
          id={id}
          onFocus={() => {
            const listboxButton = listboxButtonRef.current;
            if (listboxButton) listboxButton.focus();
          }}
        >
          <option className="hidden" value="" disabled hidden>
            {placeholder}
          </option>
          {filteredOptions.map((child: any) => {
            const value = child.props.value;
            const name = child.props.children;
            return (
              <option className="hidden" key={value} value={value}>
                {name}
              </option>
            );
          })}
        </select>
        <Listbox
          as="div"
          ref={ref}
          defaultValue={selectedValue}
          value={selectedValue}
          onChange={
            ((values: string[]) => {
              onValueChange?.(values);
              setSelectedValue(values);
            }) as any
          }
          disabled={disabled}
          id={id}
          multiple
          {...other}
        >
          {({ value }) => (
            <>
              <ListboxButton
                className={bellhopTwMerge(
                  // common
                  "w-full outline-none text-left whitespace-nowrap truncate rounded-bellhop-default focus:ring-2 transition duration-100 border pr-8 py-1.5",
                  // light
                  "border-bellhop-border shadow-bellhop-input focus:border-bellhop-brand-subtle focus:ring-bellhop-brand-muted",
                  // dark
                  "dark:border-dark-bellhop-border dark:shadow-dark-bellhop-input dark:focus:border-dark-bellhop-brand-subtle dark:focus:ring-dark-bellhop-brand-muted",
                  Icon ? "pl-11 -ml-0.5" : "pl-3",
                  getSelectButtonColors(value.length > 0, disabled, error),
                )}
                ref={listboxButtonRef}
              >
                {Icon && (
                  <span
                    className={bellhopTwMerge(
                      "absolute inset-y-0 left-0 flex items-center ml-px pl-2.5",
                    )}
                  >
                    <Icon
                      className={bellhopTwMerge(
                        makeMultiSelectClassName("Icon"),
                        // common
                        "flex-none h-5 w-5",
                        // light
                        "text-bellhop-content-subtle",
                        // dark
                        "dark:text-dark-bellhop-content-subtle",
                      )}
                    />
                  </span>
                )}
                <div className="h-6 flex items-center">
                  {value.length > 0 ? (
                    <div className="flex flex-nowrap overflow-x-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none] gap-x-1 mr-5 -ml-1.5 relative">
                      {optionsAvailable
                        .filter((option) => value.includes(option.props.value))
                        .map((option, index) => {
                          return (
                            <div
                              key={index}
                              className={bellhopTwMerge(
                                "max-w-[100px] lg:max-w-[200px] flex justify-center items-center pl-2 pr-1.5 py-1 font-medium",
                                "rounded-bellhop-small",
                                "bg-bellhop-background-muted dark:bg-dark-bellhop-background-muted",
                                "bg-bellhop-background-subtle dark:bg-dark-bellhop-background-subtle",
                                "text-bellhop-content-default dark:text-dark-bellhop-content-default",
                                "text-bellhop-content-emphasis dark:text-dark-bellhop-content-emphasis",
                              )}
                            >
                              <div className="text-xs truncate ">
                                {option.props.children ?? option.props.value}
                              </div>
                              <div
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newValue = value.filter((v) => v !== option.props.value);
                                  onValueChange?.(newValue);
                                  setSelectedValue(newValue);
                                }}
                              >
                                <XIcon
                                  className={bellhopTwMerge(
                                    makeMultiSelectClassName("clearIconItem"),
                                    // common
                                    "cursor-pointer rounded-bellhop-full w-3.5 h-3.5 ml-2",
                                    // light
                                    "text-bellhop-content-subtle hover:text-bellhop-content",
                                    // dark
                                    "dark:text-dark-bellhop-content-subtle dark:hover:text-bellhop-content",
                                  )}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  ) : (
                    <span>{placeholder}</span>
                  )}
                </div>
                <span
                  className={bellhopTwMerge("absolute inset-y-0 right-0 flex items-center mr-2.5")}
                >
                  <ArrowDownHeadIcon
                    className={bellhopTwMerge(
                      makeMultiSelectClassName("arrowDownIcon"),
                      // common
                      "flex-none h-5 w-5",
                      // light
                      "text-bellhop-content-subtle",
                      // dark
                      "dark:text-dark-bellhop-content-subtle",
                    )}
                  />
                </span>
              </ListboxButton>

              {hasSelection && !disabled ? (
                <button
                  type="button"
                  className={bellhopTwMerge("absolute inset-y-0 right-0 flex items-center mr-8")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleReset();
                  }}
                >
                  <XCircleIcon
                    className={bellhopTwMerge(
                      makeMultiSelectClassName("clearIconAllItems"),
                      // common
                      "flex-none h-4 w-4",
                      // light
                      "text-bellhop-content-subtle",
                      // dark
                      "dark:text-dark-bellhop-content-subtle",
                    )}
                  />
                </button>
              ) : null}
              <Transition
                enter="transition ease duration-100 transform"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
              >
                <ListboxOptions
                  anchor="bottom start"
                  className={bellhopTwMerge(
                    // common
                    "z-10 divide-y w-[var(--button-width)] overflow-y-auto outline-none rounded-bellhop-default max-h-[228px]  border [--anchor-gap:4px]",
                    // light
                    "bg-bellhop-background border-bellhop-border divide-bellhop-border shadow-bellhop-dropdown",
                    // dark
                    "dark:bg-dark-bellhop-background dark:border-dark-bellhop-border dark:divide-dark-bellhop-border dark:shadow-dark-bellhop-dropdown",
                  )}
                >
                  <div
                    className={bellhopTwMerge(
                      // common
                      "flex items-center w-full px-2.5",
                      // light
                      "bg-bellhop-background-muted",
                      // dark
                      "dark:bg-dark-bellhop-background-muted",
                    )}
                  >
                    <span>
                      <SearchIcon
                        className={bellhopTwMerge(
                          // common
                          "flex-none w-4 h-4 mr-2",
                          // light
                          "text-bellhop-content-subtle",
                          // dark
                          "dark:text-dark-bellhop-content-subtle",
                        )}
                      />
                    </span>
                    <input
                      name="search"
                      type="input"
                      autoComplete="off"
                      placeholder={placeholderSearch}
                      className={bellhopTwMerge(
                        // common
                        "w-full focus:outline-none focus:ring-none bg-transparent text-bellhop-default py-2",
                        // light
                        "text-bellhop-content-emphasis",
                        // dark
                        "dark:text-dark-bellhop-content-subtle",
                      )}
                      onKeyDown={(e) => {
                        if (e.code === "Space" && (e.target as HTMLInputElement).value !== "") {
                          e.stopPropagation();
                        }
                      }}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      value={searchQuery}
                    />
                  </div>
                  <SelectedValueContext.Provider
                    {...{ onBlur: { handleResetSearch } }}
                    value={{ selectedValue: value }}
                  >
                    {filteredOptions}
                  </SelectedValueContext.Provider>
                </ListboxOptions>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
      {error && errorMessage ? (
        <p className={bellhopTwMerge("errorMessage", "text-sm text-rose-500 mt-1")}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
});

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
