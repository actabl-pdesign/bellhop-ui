"use client";
import { ChevronDownIcon, CircleXIcon } from "lucide-react";

import { makeClassName, bellhopTwMerge } from "lib";
import React, { Children, isValidElement, useMemo, useRef } from "react";
import {
  constructValueToNameMapping,
  getSelectButtonColors,
  hasValue,
} from "../selectUtils";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useInternalState } from "hooks";

const makeSelectClassName = makeClassName("Select");

export interface SelectProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string;
  name?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.JSXElementConstructor<any>;
  enableClear?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    defaultValue = "",
    value,
    onValueChange,
    placeholder = "Select...",
    disabled = false,
    icon,
    enableClear = false,
    required,
    children,
    name,
    error = false,
    errorMessage,
    className,
    id,
    ...other
  } = props;
  const listboxButtonRef = useRef<HTMLButtonElement | null>(null);
  const childrenArray = Children.toArray(children); // @sev

  const [selectedValue, setSelectedValue] = useInternalState(
    defaultValue,
    value,
  );
  const Icon = icon;
  const valueToNameMapping = useMemo(() => {
    const reactElementChildren =
      React.Children.toArray(children).filter(isValidElement);
    const valueToNameMapping =
      constructValueToNameMapping(reactElementChildren);
    return valueToNameMapping;
  }, [children]);

  const handleReset = () => {
    setSelectedValue("");
    onValueChange?.("");
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
          title="select-hidden"
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
            const listboxButton = listboxButtonRef.current;
            if (listboxButton) listboxButton.focus();
          }}
        >
          <option className="hidden" value="" disabled hidden>
            {placeholder}
          </option>
          {childrenArray.map((child: any) => {
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
              <ListboxButton
                ref={listboxButtonRef}
                className={bellhopTwMerge(
                  // common
                  "w-full outline-none text-left whitespace-nowrap truncate rounded-bellhop-default focus:ring-2 transition duration-100 border pr-8 py-2",
                  // light
                  "shadow-bellhop-input focus:border-bellhop-ring focus:ring-bellhop-ring-focus",
                  Icon ? "pl-10" : "pl-3",
                  getSelectButtonColors(hasValue(value), disabled, error),
                )}
              >
                {Icon && (
                  <span
                    className={bellhopTwMerge(
                      "absolute inset-y-0 left-0 flex items-center ml-px pl-2.5",
                    )}
                  >
                    <Icon
                      className={bellhopTwMerge(
                        makeSelectClassName("Icon"),
                        // common
                        "flex-none h-5 w-5",
                        // light
                        "text-bellhop-content-subtle",
                      )}
                    />
                  </span>
                )}
                <span className="w-[90%] block truncate">
                  {value
                    ? (valueToNameMapping.get(value) ?? placeholder)
                    : placeholder}
                </span>
                <span
                  className={bellhopTwMerge(
                    "absolute inset-y-0 right-0 flex items-center mr-3",
                  )}
                >
                  <ChevronDownIcon
                    className={bellhopTwMerge(
                      makeSelectClassName("arrowDownIcon"),
                      // common
                      "flex-none h-5 w-5",
                      // light
                      "text-bellhop-content-subtle",
                    )}
                  />
                </span>
              </ListboxButton>
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
                  <CircleXIcon
                    className={bellhopTwMerge(
                      makeSelectClassName("clearIcon"),
                      // common
                      "flex-none h-4 w-4",
                      // light
                      "text-bellhop-content-subtle",
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
                    "z-10 w-[var(--button-width)] divide-y overflow-y-auto outline-none rounded-bellhop-default max-h-[228px]  border [--anchor-gap:4px]",
                    // light
                    "bg-bellhop-background shadow-bellhop-dropdown",
                  )}
                >
                  {children}
                </ListboxOptions>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
      {error && errorMessage ? (
        <p
          className={bellhopTwMerge(
            "errorMessage",
            "text-sm text-red-500 mt-1",
          )}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
