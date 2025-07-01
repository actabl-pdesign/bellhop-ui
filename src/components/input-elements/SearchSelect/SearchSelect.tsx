"use client";
import { useInternalState } from "hooks";
import React, { isValidElement, useMemo, useRef } from "react";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { ArrowDownHeadIcon, XCircleIcon } from "assets";
import { makeClassName, bellhopTwMerge } from "lib";
import {
  constructValueToNameMapping,
  getFilteredOptions,
  getSelectButtonColors,
  hasValue,
} from "../selectUtils";

const makeSearchSelectClassName = makeClassName("SearchSelect");

export interface SearchSelectProps
  extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  name?: string;
  searchValue?: string;
  onSearchValueChange?: (value: string) => void;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ElementType | React.JSXElementConstructor<any>;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  enableClear?: boolean;
  children: React.ReactNode;
  autoComplete?: string;
}

const makeSelectClassName = makeClassName("SearchSelect");

const SearchSelect = React.forwardRef<HTMLInputElement, SearchSelectProps>(
  (props, ref) => {
    const {
      defaultValue = "",
      searchValue,
      onSearchValueChange,
      value,
      onValueChange,
      placeholder = "Select...",
      disabled = false,
      icon,
      enableClear = true,
      name,
      required,
      error = false,
      errorMessage,
      children,
      className,
      id,
      autoComplete = "off",
      ...other
    } = props;
    const comboboxInputRef = useRef<HTMLInputElement | null>(null);

    const [searchQuery, setSearchQuery] = useInternalState("", searchValue);
    const [selectedValue, setSelectedValue] = useInternalState(
      defaultValue,
      value,
    );

    const Icon = icon;

    const { reactElementChildren, valueToNameMapping } = useMemo(() => {
      const reactElementChildren =
        React.Children.toArray(children).filter(isValidElement);
      const valueToNameMapping =
        constructValueToNameMapping(reactElementChildren);
      return { reactElementChildren, valueToNameMapping };
    }, [children]);

    const filteredOptions = useMemo(
      () => getFilteredOptions(searchQuery ?? "", reactElementChildren),
      [searchQuery, reactElementChildren],
    );

    const handleReset = () => {
      setSelectedValue("");
      setSearchQuery("");
      onValueChange?.("");
      onSearchValueChange?.("");
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
            title="search-select-hidden"
            required={required}
            className={bellhopTwMerge(
              "h-full w-full absolute left-0 top-0 -z-10 opacity-0",
            )}
            value={selectedValue}
            onChange={(e) => {
              e.preventDefault();
            }}
            name={name}
            disabled={disabled}
            id={id}
            onFocus={() => {
              const comboboxInput = comboboxInputRef.current;
              if (comboboxInput) comboboxInput.focus();
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
          <Combobox
            as="div"
            ref={ref}
            defaultValue={selectedValue}
            value={selectedValue}
            onChange={
              ((value: string) => {
                onValueChange?.(value);
                setSelectedValue(value);
              }) as any
            }
            disabled={disabled}
            id={id}
            {...other}
          >
            {({ value }) => (
              <>
                <ComboboxButton className="w-full">
                  {Icon && (
                    <span
                      className={bellhopTwMerge(
                        "absolute inset-y-0 left-0 flex items-center ml-px pl-2.5",
                      )}
                    >
                      <Icon
                        className={bellhopTwMerge(
                          makeSearchSelectClassName("Icon"),
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

                  <ComboboxInput
                    ref={comboboxInputRef}
                    className={bellhopTwMerge(
                      // common
                      "w-full outline-none text-left whitespace-nowrap truncate rounded-bellhop-default focus:ring-2 transition duration-100 text-bellhop-default pr-14 border py-2",
                      // light
                      "border-bellhop-border shadow-bellhop-input focus:border-bellhop-brand-subtle focus:ring-bellhop-brand-muted",
                      // dark
                      "dark:border-dark-bellhop-border dark:shadow-dark-bellhop-input dark:focus:border-dark-bellhop-brand-subtle dark:focus:ring-dark-bellhop-brand-muted",
                      Icon ? "pl-10" : "pl-3",
                      disabled
                        ? "placeholder:text-bellhop-content-subtle dark:placeholder:text-bellhop-content-subtle"
                        : "placeholder:text-bellhop-content dark:placeholder:text-bellhop-content",
                      getSelectButtonColors(hasValue(value), disabled, error),
                    )}
                    placeholder={placeholder}
                    onChange={(event) => {
                      onSearchValueChange?.(event.target.value);
                      setSearchQuery(event.target.value);
                    }}
                    displayValue={(value: string) =>
                      valueToNameMapping.get(value) ?? ""
                    }
                    autoComplete={autoComplete}
                  />
                  <div
                    className={bellhopTwMerge(
                      "absolute inset-y-0 right-0 flex items-center pr-2.5",
                    )}
                  >
                    <ArrowDownHeadIcon
                      className={bellhopTwMerge(
                        makeSearchSelectClassName("arrowDownIcon"),
                        // common
                        "flex-none h-5 w-5",
                        // light
                        "!text-bellhop-content-subtle",
                        // dark
                        "!dark:text-dark-bellhop-content-subtle",
                      )}
                    />
                  </div>
                </ComboboxButton>

                {enableClear && selectedValue ? (
                  <button
                    type="button"
                    className={bellhopTwMerge(
                      "absolute inset-y-0 right-0 flex items-center mr-8",
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleReset();
                    }}
                  >
                    <XCircleIcon
                      className={bellhopTwMerge(
                        makeSelectClassName("clearIcon"),
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
                {filteredOptions.length > 0 && (
                  <Transition
                    enter="transition ease duration-100 transform"
                    enterFrom="opacity-0 -translate-y-4"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-100 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-4"
                  >
                    <ComboboxOptions
                      anchor="bottom start"
                      className={bellhopTwMerge(
                        // common
                        "z-10 divide-y w-[var(--button-width)] overflow-y-auto outline-none rounded-bellhop-default text-bellhop-default max-h-[228px] border [--anchor-gap:4px]",
                        // light
                        "bg-bellhop-background border-bellhop-border divide-bellhop-border shadow-bellhop-dropdown",
                        // dark
                        "dark:bg-dark-bellhop-background dark:border-dark-bellhop-border dark:divide-dark-bellhop-border dark:shadow-dark-bellhop-dropdown",
                      )}
                    >
                      {filteredOptions}
                    </ComboboxOptions>
                  </Transition>
                )}
              </>
            )}
          </Combobox>
        </div>
        {error && errorMessage ? (
          <p
            className={bellhopTwMerge(
              "errorMessage",
              "text-sm text-rose-500 mt-1",
            )}
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  },
);

SearchSelect.displayName = "SearchSelect";

export default SearchSelect;
