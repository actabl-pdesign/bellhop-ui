"use client";

import React from "react";
import {
  Color,
  defaultValueFormatter,
  getColorClassNames,
  makeClassName,
  bellhopTwMerge,
  ValueFormatter,
} from "lib";
import { colorPalette } from "lib/theme";

const makeBarListClassName = makeClassName("BarList");

type Bar<T> = T & {
  key?: string;
  value: number;
  name: React.ReactNode;
  icon?: React.JSXElementConstructor<any>;
  href?: string;
  target?: string;
  color?: Color;
};

export interface BarListProps<T = any>
  extends React.HTMLAttributes<HTMLDivElement> {
  data: Bar<T>[];
  valueFormatter?: ValueFormatter;
  color?: Color;
  showAnimation?: boolean;
  onValueChange?: (payload: Bar<T>) => void;
  sortOrder?: "ascending" | "descending" | "none";
}

function BarListInner<T>(
  props: BarListProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const {
    data = [],
    color,
    valueFormatter = defaultValueFormatter,
    showAnimation = false,
    onValueChange,
    sortOrder = "descending",
    className,
    ...other
  } = props;

  const Component = onValueChange ? "button" : "div";
  const sortedData = React.useMemo(() => {
    if (sortOrder === "none") {
      return data;
    }
    return [...data].sort((a, b) => {
      return sortOrder === "ascending" ? a.value - b.value : b.value - a.value;
    });
  }, [data, sortOrder]);

  const widths = React.useMemo(() => {
    const maxValue = Math.max(...sortedData.map((item) => item.value), 0);
    return sortedData.map((item) =>
      item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2),
    );
  }, [sortedData]);

  const rowHeight = "h-8";

  return (
    <div
      ref={ref}
      className={bellhopTwMerge(
        makeBarListClassName("root"),
        "flex justify-between space-x-6",
        className,
      )}
      aria-sort={sortOrder}
      {...other}
    >
      <div
        className={bellhopTwMerge(
          makeBarListClassName("bars"),
          "relative w-full space-y-1.5",
        )}
      >
        {sortedData.map((item, index) => {
          const Icon = item.icon;

          return (
            <Component
              key={item.key ?? index}
              onClick={() => {
                onValueChange?.(item);
              }}
              className={bellhopTwMerge(
                makeBarListClassName("bar"),
                // common
                "group w-full flex items-center rounded-bellhop-small",
                onValueChange
                  ? [
                      "cursor-pointer",
                      // hover
                      "hover:bg-bellhop-background-muted dark:hover:bg-dark-bellhop-background-subtle/40",
                    ]
                  : "",
              )}
            >
              <div
                className={bellhopTwMerge(
                  "flex items-center rounded transition-all bg-opacity-40",
                  rowHeight,
                  item.color || color
                    ? [
                        getColorClassNames(
                          item.color ?? (color as Color),
                          colorPalette.background,
                        ).bgColor,
                        onValueChange ? "group-hover:bg-opacity-30" : "",
                      ]
                    : "bg-bellhop-brand-subtle dark:bg-dark-bellhop-brand-subtle/60",
                  onValueChange && !(item.color || color)
                    ? "group-hover:bg-bellhop-brand-subtle/30 group-hover:dark:bg-dark-bellhop-brand-subtle/70"
                    : "",
                  // margin
                  index === sortedData.length - 1 ? "mb-0" : "",
                  // duration
                  showAnimation ? "duration-500" : "",
                )}
                style={{
                  width: `${widths[index]}%`,
                  transition: showAnimation ? "all 1s" : "",
                }}
              >
                <div
                  className={bellhopTwMerge(
                    "absolute left-2 pr-4 flex max-w-full",
                  )}
                >
                  {Icon ? (
                    <Icon
                      className={bellhopTwMerge(
                        makeBarListClassName("barIcon"),
                        // common
                        "flex-none h-5 w-5 mr-2",
                        // light
                        "text-bellhop-content",
                        // dark
                        "dark:text-dark-bellhop-content",
                      )}
                    />
                  ) : null}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target ?? "_blank"}
                      rel="noreferrer"
                      className={bellhopTwMerge(
                        makeBarListClassName("barLink"),
                        // common
                        "whitespace-nowrap hover:underline truncate text-bellhop-default",
                        onValueChange ? "cursor-pointer" : "",
                        // light
                        "text-bellhop-content-emphasis",
                        // dark
                        "dark:text-dark-bellhop-content-emphasis",
                      )}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <p
                      className={bellhopTwMerge(
                        makeBarListClassName("barText"),
                        // common
                        "whitespace-nowrap truncate text-bellhop-default",
                        // light
                        "text-bellhop-content-emphasis",
                        // dark
                        "dark:text-dark-bellhop-content-emphasis",
                      )}
                    >
                      {item.name}
                    </p>
                  )}
                </div>
              </div>
            </Component>
          );
        })}
      </div>
      <div className={makeBarListClassName("labels")}>
        {sortedData.map((item, index) => (
          <div
            key={item.key ?? index}
            className={bellhopTwMerge(
              makeBarListClassName("labelWrapper"),
              "flex justify-end items-center",
              rowHeight,
              index === sortedData.length - 1 ? "mb-0" : "mb-1.5",
            )}
          >
            <p
              className={bellhopTwMerge(
                makeBarListClassName("labelText"),
                // common
                "whitespace-nowrap leading-none truncate text-bellhop-default",
                // light
                "text-bellhop-content-emphasis",
                // dark
                "dark:text-dark-bellhop-content-emphasis",
              )}
            >
              {valueFormatter(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

BarListInner.displayName = "BarList";

const BarList = React.forwardRef(BarListInner) as <T>(
  p: BarListProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => ReturnType<typeof BarListInner>;

export default BarList;
