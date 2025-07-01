"use client";
import React, { ReactNode, useCallback, useRef, useState } from "react";
import { CircleAlertIcon, EyeIcon, EyeClosedIcon } from "lucide-react";
import {
  getSelectButtonColors,
  hasValue,
} from "components/input-elements/selectUtils";
import { mergeRefs, bellhopTwMerge } from "lib";

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "url" | "number" | "search" | "tel";
  defaultValue?: string | number;
  value?: string | number;
  icon?: React.ElementType | React.JSXElementConstructor<any>;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  stepper?: ReactNode;
  onValueChange?: (value: any) => void;
  makeInputClassName: (className: string) => string;
  pattern?: string;
}

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      type,
      placeholder = "Type...",
      icon,
      error = false,
      errorMessage,
      disabled = false,
      stepper,
      makeInputClassName,
      className,
      onChange,
      onValueChange,
      autoFocus,
      pattern,
      ...other
    } = props;
    const [isFocused, setIsFocused] = useState(autoFocus || false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const toggleIsPasswordVisible = useCallback(
      () => setIsPasswordVisible(!isPasswordVisible),
      [isPasswordVisible, setIsPasswordVisible],
    );

    const Icon = icon;

    const inputRef = useRef<HTMLInputElement>(null);

    const hasSelection = hasValue(value || defaultValue);

    React.useEffect(() => {
      const handleFocus = () => setIsFocused(true);
      const handleBlur = () => setIsFocused(false);

      const node = inputRef.current;
      if (node) {
        node.addEventListener("focus", handleFocus);
        node.addEventListener("blur", handleBlur);

        // Autofocus logic
        if (autoFocus) {
          node.focus();
        }
      }

      return () => {
        if (node) {
          node.removeEventListener("focus", handleFocus);
          node.removeEventListener("blur", handleBlur);
        }
      };
    }, [autoFocus]);

    return (
      <>
        <div
          className={bellhopTwMerge(
            makeInputClassName("root"),
            // common
            "relative w-full flex items-center min-w-[10rem] outline-none rounded-bellhop-default transition duration-100 border",

            getSelectButtonColors(hasSelection, disabled, error),
            isFocused &&
              bellhopTwMerge(
                // common
                "ring-2",
                // light
                "border-bellhop-brand-subtle ring-bellhop-brand",
              ),
            className,
          )}
        >
          {Icon ? (
            <Icon
              className={bellhopTwMerge(
                makeInputClassName("icon"),
                // common
                "shrink-0 h-5 w-5 mx-2.5 absolute left-0 flex items-center",
                // light
                "text-bellhop-content-subtle",
              )}
            />
          ) : null}
          <input
            ref={mergeRefs([inputRef, ref])}
            defaultValue={defaultValue}
            value={value}
            type={isPasswordVisible ? "text" : type}
            className={bellhopTwMerge(
              makeInputClassName("input"),
              // common
              "w-full bg-transparent focus:outline-none focus:ring-0 border-none text-bellhop-default rounded-bellhop-default transition duration-100 py-2",
              // light
              "text-bellhop-content-strong",
              "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              type === "password"
                ? error
                  ? "pr-16"
                  : "pr-12"
                : error
                  ? "pr-8"
                  : "pr-3",
              Icon ? "pl-10" : "pl-3",
              disabled
                ? "placeholder:text-bellhop-content-subtle"
                : "placeholder:text-bellhop-content",
            )}
            placeholder={placeholder}
            disabled={disabled}
            data-testid="base-input"
            onChange={(e) => {
              onChange?.(e);
              onValueChange?.(e.target.value);
            }}
            pattern={pattern}
            {...other}
          />
          {type === "password" && !disabled ? (
            <button
              className={bellhopTwMerge(
                makeInputClassName("toggleButton"),
                "absolute inset-y-0 right-0 flex items-center px-2.5 rounded-lg",
              )}
              type="button"
              onClick={() => toggleIsPasswordVisible()}
              aria-label={isPasswordVisible ? "Hide password" : "Show Password"}
            >
              {isPasswordVisible ? (
                <EyeClosedIcon
                  className={bellhopTwMerge(
                    // common
                    "flex-none h-5 w-5 transition",
                    // light
                    "text-bellhop-content-subtle hover:text-bellhop-content",
                  )}
                  aria-hidden
                />
              ) : (
                <EyeIcon
                  className={bellhopTwMerge(
                    // common
                    "flex-none h-5 w-5 transition",
                    // light
                    "text-bellhop-content-subtle hover:text-bellhop-content",
                  )}
                  aria-hidden
                />
              )}
            </button>
          ) : null}
          {error ? (
            <CircleAlertIcon
              className={bellhopTwMerge(
                makeInputClassName("errorIcon"),
                "text-red-500 shrink-0 h-5 w-5 absolute right-0 flex items-center",
                type === "password"
                  ? "mr-10"
                  : type === "number"
                    ? stepper
                      ? "mr-20"
                      : "mr-3"
                    : "mx-2.5",
              )}
            />
          ) : null}
          {stepper ?? null}
        </div>
        {error && errorMessage ? (
          <p
            className={bellhopTwMerge(
              makeInputClassName("errorMessage"),
              "text-sm text-red-500 mt-1",
            )}
          >
            {errorMessage}
          </p>
        ) : null}
      </>
    );
  },
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
