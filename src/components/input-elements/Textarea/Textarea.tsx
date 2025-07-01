"use client";

import {
  getSelectButtonColors,
  hasValue,
} from "components/input-elements/selectUtils";
import { useInternalState } from "hooks";

import { makeClassName, mergeRefs, bellhopTwMerge } from "lib";
import React, { useEffect, useRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string | number;
  value?: string | number;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  autoHeight?: boolean;
  onValueChange?: (value: any) => void;
}

const makeTextareaClassName = makeClassName("Textarea");

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      value,
      defaultValue = "",
      placeholder = "Type...",
      error = false,
      errorMessage,
      disabled = false,
      className,
      onChange,
      onValueChange,
      autoHeight = false,
      ...other
    } = props;
    const [val, setVal] = useInternalState(defaultValue, value);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const hasSelection = hasValue(val);

    useEffect(() => {
      const textAreaHTMLRef = inputRef.current;
      if (autoHeight && textAreaHTMLRef) {
        textAreaHTMLRef.style.height = "60px";
        // Calculates the height dynamically
        const scrollHeight = textAreaHTMLRef.scrollHeight;
        textAreaHTMLRef.style.height = scrollHeight + "px";
      }
    }, [autoHeight, inputRef, val]);
    return (
      <>
        <textarea
          ref={mergeRefs([inputRef, ref])}
          value={val}
          placeholder={placeholder}
          disabled={disabled}
          className={bellhopTwMerge(
            makeTextareaClassName("Textarea"),
            // common
            "w-full flex items-center outline-none rounded-bellhop-default px-3 py-2 text-bellhop-default focus:ring-2 transition duration-100 border",
            // light
            "shadow-bellhop-input focus:border-bellhop-brand-subtle focus:ring-bellhop-brand-muted",
            getSelectButtonColors(hasSelection, disabled, error),
            disabled
              ? "placeholder:text-bellhop-content-subtle"
              : "placeholder:text-bellhop-content",
            className,
          )}
          data-testid="text-area"
          onChange={(e) => {
            onChange?.(e);
            setVal(e.target.value);
            onValueChange?.(e.target.value);
          }}
          {...other}
        />
        {error && errorMessage ? (
          <p
            className={bellhopTwMerge(
              makeTextareaClassName("errorMessage"),
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

Textarea.displayName = "Textarea";

export default Textarea;
