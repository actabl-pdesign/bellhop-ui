"use client";

import { CalendarIcon, XCircleIcon } from "assets";
import { startOfMonth, startOfToday } from "date-fns";
import { bellhopTwMerge } from "lib";
import React, { ReactElement, useMemo, useState } from "react";
import { DateRange, DayPickerRangeProps } from "react-day-picker";
import {
  constructValueToNameMapping,
  getNodeText,
  getSelectButtonColors,
  hasValue,
} from "../selectUtils";
import {
  defaultOptions,
  formatSelectedDates,
  makeDateRangePickerClassName,
  parseEndDate,
  parseStartDate,
} from "./dateRangePickerUtils";

import { Calendar } from "components/input-elements/Calendar";
import { DateRangePickerItemProps } from "components/input-elements/DateRangePicker/DateRangePickerItem";
import { SelectItem } from "components/input-elements/Select";
import { enUS } from "date-fns/locale";
import { useInternalState } from "hooks";
import { Color } from "../../../lib/inputTypes";
import {
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
  Listbox,
  ListboxButton,
  ListboxOptions,
} from "@headlessui/react";

const TODAY = startOfToday();

export type Locale = typeof enUS;

export type DateRangePickerValue = {
  from?: Date;
  to?: Date;
  selectValue?: string;
};

export interface DateRangePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
  value?: DateRangePickerValue;
  defaultValue?: DateRangePickerValue;
  onValueChange?: (value: DateRangePickerValue) => void;
  enableSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  selectPlaceholder?: string;
  disabled?: boolean;
  color?: Color;
  locale?: Locale;
  enableClear?: boolean;
  displayFormat?: string;
  enableYearNavigation?: boolean;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  disabledDates?: Date[];
  children?: React.ReactElement[] | React.ReactElement;
}

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      onValueChange,
      enableSelect = true,
      minDate,
      maxDate,
      placeholder = "Select range",
      selectPlaceholder = "Select range",
      disabled = false,
      locale = enUS,
      enableClear = true,
      displayFormat,
      children,
      className,
      enableYearNavigation = false,
      weekStartsOn = 0,
      disabledDates,
      ...other
    } = props;

    const [selectedValue, setSelectedValue] = useInternalState(
      defaultValue,
      value,
    );
    const [isCalendarButtonFocused, setIsCalendarButtonFocused] =
      useState(false);
    const [isSelectButtonFocused, setIsSelectButtonFocused] = useState(false);

    const disabledDays = useMemo(() => {
      const disabledDays = [];
      if (minDate) disabledDays.push({ before: minDate });
      if (maxDate) disabledDays.push({ after: maxDate });
      return [...disabledDays, ...(disabledDates ?? [])];
    }, [minDate, maxDate, disabledDates]);

    const selectValues = useMemo(() => {
      const selectValues = new Map<
        string,
        Omit<DateRangePickerItemProps, "value"> & { text: string }
      >();

      if (children) {
        React.Children.forEach(
          children as ReactElement[],
          (child: React.ReactElement<DateRangePickerItemProps>) => {
            selectValues.set(child.props.value, {
              text: (getNodeText(child) ?? child.props.value) as string,
              from: child.props.from,
              to: child.props.to,
            });
          },
        );
      } else {
        defaultOptions.forEach((option) => {
          selectValues.set(option.value, {
            text: option.text,
            from: option.from,
            to: TODAY,
          });
        });
      }
      return selectValues;
    }, [children]);

    const valueToNameMapping = useMemo(() => {
      if (children) {
        return constructValueToNameMapping(children);
      }
      const valueToNameMapping = new Map<string, string>();
      defaultOptions.forEach((option) =>
        valueToNameMapping.set(option.value, option.text),
      );
      return valueToNameMapping;
    }, [children]);

    const selectedSelectValue = selectedValue?.selectValue || "";
    const selectedStartDate = parseStartDate(
      selectedValue?.from,
      minDate,
      selectedSelectValue,
      selectValues,
    );
    const selectedEndDate = parseEndDate(
      selectedValue?.to,
      maxDate,
      selectedSelectValue,
      selectValues,
    );
    const formattedSelection =
      !selectedStartDate && !selectedEndDate
        ? placeholder
        : formatSelectedDates(
            selectedStartDate,
            selectedEndDate,
            locale,
            displayFormat,
          );
    const defaultMonth = startOfMonth(
      selectedEndDate ?? selectedStartDate ?? maxDate ?? TODAY,
    );

    const isClearEnabled = enableClear && !disabled;

    const handleSelectClick = (value: string) => {
      const { from, to } = selectValues.get(value)!;
      const toDate = to ?? TODAY;
      onValueChange?.({ from, to: toDate, selectValue: value });
      setSelectedValue({ from, to: toDate, selectValue: value });
    };

    const handleReset = () => {
      onValueChange?.({});
      setSelectedValue({});
    };

    return (
      <div
        ref={ref}
        className={bellhopTwMerge(
          "w-full min-w-[10rem] relative flex justify-between text-bellhop-default max-w-sm shadow-bellhop-input dark:shadow-dark-bellhop-input rounded-bellhop-default",
          className,
        )}
        {...other}
      >
        <Popover
          as="div"
          className={bellhopTwMerge(
            "w-full",
            enableSelect
              ? "rounded-l-bellhop-default"
              : "rounded-bellhop-default",
            isCalendarButtonFocused &&
              "ring-2 ring-bellhop-brand-muted dark:ring-dark-bellhop-brand-muted z-10",
          )}
        >
          <div className="relative w-full">
            <PopoverButton
              onFocus={() => setIsCalendarButtonFocused(true)}
              onBlur={() => setIsCalendarButtonFocused(false)}
              disabled={disabled}
              className={bellhopTwMerge(
                // common
                "w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-l-bellhop-default flex flex-nowrap border pl-3 py-2",
                // light
                "rounded-l-bellhop-default border-bellhop-border text-bellhop-content-emphasis focus:border-bellhop-brand-subtle focus:ring-bellhop-brand-muted",
                // dark
                "dark:border-dark-bellhop-border dark:text-dark-bellhop-content-emphasis dark:focus:border-dark-bellhop-brand-subtle dark:focus:ring-dark-bellhop-brand-muted",
                enableSelect
                  ? "rounded-l-bellhop-default"
                  : "rounded-bellhop-default",
                isClearEnabled ? "pr-8" : "pr-4",
                getSelectButtonColors(
                  hasValue<Date>(selectedStartDate || selectedEndDate),
                  disabled,
                ),
              )}
            >
              <CalendarIcon
                className={bellhopTwMerge(
                  makeDateRangePickerClassName("calendarIcon"),
                  "flex-none shrink-0 h-5 w-5 -ml-0.5 mr-2",
                  // light
                  "text-bellhop-content-subtle",
                  // light
                  "dark:text-dark-bellhop-content-subtle",
                )}
                aria-hidden="true"
              />
              <p className="truncate">{formattedSelection}</p>
            </PopoverButton>
            {isClearEnabled && selectedStartDate ? (
              <button
                type="button"
                className={bellhopTwMerge(
                  "absolute outline-none inset-y-0 right-0 flex items-center transition duration-100 mr-4",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleReset();
                }}
              >
                <XCircleIcon
                  className={bellhopTwMerge(
                    makeDateRangePickerClassName("clearIcon"),
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
          </div>
          <Transition
            enter="transition ease duration-100 transform"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-100 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <PopoverPanel
              anchor="bottom start"
              focus={true}
              className={bellhopTwMerge(
                // common
                "min-w-min divide-y overflow-y-auto outline-none rounded-bellhop-default p-3 border [--anchor-gap:4px]",
                // light
                "bg-bellhop-background border-bellhop-border divide-bellhop-border shadow-bellhop-dropdown",
                // dark
                "dark:bg-dark-bellhop-background dark:border-dark-bellhop-border dark:divide-dark-bellhop-border dark:shadow-dark-bellhop-dropdown",
              )}
            >
              <Calendar<DayPickerRangeProps>
                mode="range"
                showOutsideDays={true}
                defaultMonth={defaultMonth}
                selected={{
                  from: selectedStartDate,
                  to: selectedEndDate,
                }}
                onSelect={
                  ((v: DateRange) => {
                    onValueChange?.({ from: v?.from, to: v?.to });
                    setSelectedValue({ from: v?.from, to: v?.to });
                  }) as any
                }
                locale={locale}
                disabled={disabledDays}
                enableYearNavigation={enableYearNavigation}
                classNames={{
                  day_range_middle: bellhopTwMerge(
                    "!rounded-none aria-selected:!bg-bellhop-background-subtle aria-selected:dark:!bg-dark-bellhop-background-subtle aria-selected:!text-bellhop-content aria-selected:dark:!bg-dark-bellhop-background-subtle",
                  ),
                  day_range_start:
                    "rounded-r-none rounded-l-bellhop-small aria-selected:text-bellhop-brand-inverted dark:aria-selected:text-dark-bellhop-brand-inverted",
                  day_range_end:
                    "rounded-l-none rounded-r-bellhop-small aria-selected:text-bellhop-brand-inverted dark:aria-selected:text-dark-bellhop-brand-inverted",
                }}
                weekStartsOn={weekStartsOn}
                {...props}
              />
            </PopoverPanel>
          </Transition>
        </Popover>
        {enableSelect && (
          <Listbox
            as="div"
            className={bellhopTwMerge(
              "w-48 -ml-px rounded-r-bellhop-default",
              isSelectButtonFocused &&
                "ring-2 ring-bellhop-brand-muted dark:ring-dark-bellhop-brand-muted z-10",
            )}
            value={selectedSelectValue}
            onChange={handleSelectClick}
            disabled={disabled}
          >
            {({ value }) => (
              <>
                <ListboxButton
                  onFocus={() => setIsSelectButtonFocused(true)}
                  onBlur={() => setIsSelectButtonFocused(false)}
                  className={bellhopTwMerge(
                    // common
                    "w-full outline-none text-left whitespace-nowrap truncate rounded-r-bellhop-default transition duration-100 border px-4 py-2",
                    // light
                    "border-bellhop-border text-bellhop-content-emphasis focus:border-bellhop-brand-subtle",
                    // dark
                    "dark:border-dark-bellhop-border  dark:text-dark-bellhop-content-emphasis dark:focus:border-dark-bellhop-brand-subtle",
                    getSelectButtonColors(hasValue<string>(value), disabled),
                  )}
                >
                  {value
                    ? (valueToNameMapping.get(value) ?? selectPlaceholder)
                    : selectPlaceholder}
                </ListboxButton>
                <Transition
                  enter="transition ease duration-100 transform"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease duration-100 transform"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <ListboxOptions
                    anchor="bottom end"
                    className={bellhopTwMerge(
                      // common
                      "[--anchor-gap:4px] divide-y overflow-y-auto outline-none border min-w-44",
                      // light
                      "shadow-bellhop-dropdown bg-bellhop-background border-bellhop-border divide-bellhop-border rounded-bellhop-default",
                      // dark
                      "dark:shadow-dark-bellhop-dropdown dark:bg-dark-bellhop-background dark:border-dark-bellhop-border dark:divide-dark-bellhop-border",
                    )}
                  >
                    {children ??
                      defaultOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.text}
                        </SelectItem>
                      ))}
                  </ListboxOptions>
                </Transition>
              </>
            )}
          </Listbox>
        )}
      </div>
    );
  },
);

DateRangePicker.displayName = "DateRangePicker";

export default DateRangePicker;
