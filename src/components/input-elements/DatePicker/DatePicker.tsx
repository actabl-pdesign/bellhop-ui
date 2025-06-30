"use client";
import { bellhopTwMerge } from "lib";
import React, { useMemo } from "react";
import { DayPickerSingleProps } from "react-day-picker";

import { startOfMonth, startOfToday } from "date-fns";
import { enUS } from "date-fns/locale";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { CalendarIcon, XCircleIcon } from "assets";
import { Calendar } from "components/input-elements/Calendar";
import { makeDatePickerClassName } from "components/input-elements/DatePicker/datePickerUtils";
import { useInternalState } from "hooks";
import { Color } from "../../../lib/inputTypes";
import { formatSelectedDates } from "../DateRangePicker/dateRangePickerUtils";
import { getSelectButtonColors, hasValue } from "../selectUtils";

const TODAY = startOfToday();

export type Locale = typeof enUS;

export type DatePickerValue = Date | undefined;

export interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "defaultValue"> {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (value: DatePickerValue) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
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

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onValueChange,
    minDate,
    maxDate,
    placeholder = "Select date",
    disabled = false,
    locale = enUS,
    enableClear = true,
    displayFormat,
    className,
    enableYearNavigation = false,
    weekStartsOn = 0,
    disabledDates,
    ...other
  } = props;

  const [selectedValue, setSelectedValue] = useInternalState<Date | undefined>(defaultValue, value);

  const disabledDays = useMemo(() => {
    const disabledDays = [];
    if (minDate) disabledDays.push({ before: minDate });
    if (maxDate) disabledDays.push({ after: maxDate });
    return [...disabledDays, ...(disabledDates ?? [])];
  }, [minDate, maxDate, disabledDates]);

  const formattedSelection = !selectedValue
    ? placeholder
    : formatSelectedDates(selectedValue, undefined, locale, displayFormat);
  const defaultMonth = startOfMonth(selectedValue ?? maxDate ?? TODAY);

  const isClearEnabled = enableClear && !disabled;

  const handleReset = () => {
    onValueChange?.(undefined);
    setSelectedValue(undefined);
  };

  return (
    <Popover
      ref={ref}
      as="div"
      className={bellhopTwMerge(
        "relative w-full min-w-[10rem] text-bellhop-default",
        "focus:ring-2 focus:ring-bellhop-brand-muted dark:focus:ring-dark-bellhop-brand-muted",
        className,
      )}
      {...other}
    >
      <PopoverButton
        disabled={disabled}
        className={bellhopTwMerge(
          // common
          "w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-bellhop-default flex flex-nowrap border pl-3 py-2",
          // light
          "border-bellhop-border shadow-bellhop-input text-bellhop-content-emphasis focus:border-bellhop-brand-subtle focus:ring-bellhop-brand-muted",
          // dark
          "dark:border-dark-bellhop-border dark:shadow-dark-bellhop-input dark:text-dark-bellhop-content-emphasis dark:focus:border-dark-bellhop-brand-subtle dark:focus:ring-dark-bellhop-brand-muted",
          isClearEnabled ? "pr-8" : "pr-4",
          getSelectButtonColors(hasValue<Date>(selectedValue), disabled),
        )}
      >
        <CalendarIcon
          className={bellhopTwMerge(
            makeDatePickerClassName("calendarIcon"),
            "flex-none shrink-0 h-5 w-5 mr-2 -ml-0.5",
            // light
            "text-bellhop-content-subtle",
            // light
            "dark:text-dark-bellhop-content-subtle",
          )}
          aria-hidden="true"
        />
        <p className="truncate">{formattedSelection}</p>
      </PopoverButton>
      {isClearEnabled && selectedValue ? (
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
        <PopoverPanel
          anchor="bottom start"
          className={bellhopTwMerge(
            // common
            "z-10 min-w-min divide-y overflow-y-auto outline-none rounded-bellhop-default p-3 border [--anchor-gap:4px]",
            // light
            "bg-bellhop-background border-bellhop-border divide-bellhop-border shadow-bellhop-dropdown",
            // dark
            "dark:bg-dark-bellhop-background dark:border-dark-bellhop-border dark:divide-dark-bellhop-border dark:shadow-dark-bellhop-dropdown",
          )}
        >
          {({ close }) => (
            <Calendar<DayPickerSingleProps>
              showOutsideDays={true}
              mode="single"
              defaultMonth={defaultMonth}
              selected={selectedValue}
              weekStartsOn={weekStartsOn}
              onSelect={
                ((v: Date) => {
                  onValueChange?.(v);
                  setSelectedValue(v);
                  close();
                }) as any
              }
              locale={locale}
              disabled={disabledDays}
              enableYearNavigation={enableYearNavigation}
            />
          )}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
});

DatePicker.displayName = "DatePicker";

export default DatePicker;
