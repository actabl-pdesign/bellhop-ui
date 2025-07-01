"use client";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import { useInternalState } from "hooks";
import {
  Color,
  makeClassName,
  bellhopTwMerge,
  colorPalette,
  getColorClassNames,
  mergeRefs,
} from "lib";
import Tooltip, { useTooltip } from "components/util-elements/Tooltip/Tooltip";

import React, { useState } from "react";

const getSwitchColors = (color?: Color) => {
  return {
    bgColor: color
      ? getColorClassNames(color, colorPalette.background).bgColor
      : "bg-bellhop-brand",
    ringColor: color
      ? getColorClassNames(color, colorPalette.ring).ringColor
      : "ring-bellhop-brand-muted",
  };
};

const makeSwitchClassName = makeClassName("Switch");

export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  color?: Color;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  tooltip?: string;
}

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    checked,
    defaultChecked = false,
    onChange,
    color,
    name,
    error,
    errorMessage,
    disabled,
    required,
    tooltip,
    id,
    ...other
  } = props;
  const switchColorStyles = getSwitchColors(color);

  const [isChecked, setIsChecked] = useInternalState(defaultChecked, checked);
  const [isFocused, setIsFocused] = useState(false);
  const delay = 300;
  const { tooltipProps, getReferenceProps } = useTooltip(delay);

  return (
    <div className="flex flex-row items-center justify-start">
      <Tooltip text={tooltip} {...tooltipProps} />
      <div
        ref={mergeRefs([ref, tooltipProps.refs.setReference])}
        className={bellhopTwMerge(
          makeSwitchClassName("root"),
          "flex flex-row relative h-5",
        )}
        {...other}
        {...getReferenceProps}
      >
        <input
          type="checkbox"
          className={bellhopTwMerge(
            makeSwitchClassName("input"),
            "absolute w-5 h-5 cursor-pointer left-0 top-0 opacity-0",
          )}
          name={name}
          required={required}
          checked={isChecked}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
        <HeadlessSwitch
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e);
            onChange?.(e);
          }}
          disabled={disabled}
          className={bellhopTwMerge(
            makeSwitchClassName("switch"),
            "w-8 h-5 group relative inline-flex shrink-0 cursor-pointer items-center justify-center rounded-bellhop-full",
            "focus:outline-none",
            disabled ? "cursor-not-allowed" : "",
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id={id}
        >
          <span
            className={bellhopTwMerge(
              makeSwitchClassName("sr-only"),
              "sr-only",
            )}
          >
            Switch {isChecked ? "on" : "off"}
          </span>
          <span
            aria-hidden="true"
            className={bellhopTwMerge(
              makeSwitchClassName("background"),
              isChecked ? switchColorStyles.bgColor : "bg-bellhop-border",
              "pointer-events-none absolute mx-auto h-5 w-9 rounded-bellhop-full transition-colors duration-100 ease-in-out",
            )}
          />
          <span
            aria-hidden="true"
            className={bellhopTwMerge(
              makeSwitchClassName("round"),
              isChecked
                ? bellhopTwMerge("translate-x-[calc(100%-0px)] bg-white")
                : "translate-x-0 bg-white border-bellhop-background",
              "pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-bellhop-full border-1 duration-100 ease-in-out transition",
              isFocused
                ? bellhopTwMerge("ring-2", switchColorStyles.ringColor)
                : "",
            )}
          />
        </HeadlessSwitch>
      </div>
      {error && errorMessage ? (
        <p
          className={bellhopTwMerge(
            makeSwitchClassName("errorMessage"),
            "text-sm text-red-500 mt-1 ",
          )}
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
});

Switch.displayName = "Switch";

export default Switch;
