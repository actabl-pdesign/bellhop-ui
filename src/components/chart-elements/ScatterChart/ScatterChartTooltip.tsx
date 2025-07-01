import React from "react";

import { ScatterChartValueFormatter } from "components/chart-elements/ScatterChart/ScatterChart";
import {
  BaseColors,
  getColorClassNames,
  Color,
  defaultValueFormatter,
  bellhopTwMerge,
  colorPalette,
} from "lib";

export const ChartTooltipFrame = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    className={bellhopTwMerge(
      // common
      "rounded-bellhop-default text-bellhop-default border",
      // light
      "bg-bellhop-background shadow-bellhop-dropdown border-bellhop-border",
      // dark
      "dark:bg-dark-bellhop-background dark:shadow-dark-bellhop-dropdown dark:border-dark-bellhop-border",
    )}
  >
    {children}
  </div>
);

export interface ChartTooltipRowProps {
  value: string;
  name: string;
}

export const ChartTooltipRow = ({ value, name }: ChartTooltipRowProps) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <p
        className={bellhopTwMerge(
          // commmon
          "text-right whitespace-nowrap",
          // light
          "text-bellhop-content",
          // dark
          "dark:text-dark-bellhop-content",
        )}
      >
        {name}
      </p>
    </div>
    <p
      className={bellhopTwMerge(
        // common
        "font-medium tabular-nums text-right whitespace-nowrap",
        // light
        "text-bellhop-content-emphasis",
        // dark
        "dark:text-dark-bellhop-content-emphasis",
      )}
    >
      {value}
    </p>
  </div>
);

export interface ScatterChartTooltipProps {
  label: string;
  categoryColors: Map<string, Color | string>;
  active: boolean | undefined;
  payload: any;
  valueFormatter: ScatterChartValueFormatter;
  axis: any;
  category?: string;
}

const ScatterChartTooltip = ({
  label,
  active,
  payload,
  valueFormatter,
  axis,
  category,
  categoryColors,
}: ScatterChartTooltipProps) => {
  if (active && payload) {
    return (
      <ChartTooltipFrame>
        <div
          className={bellhopTwMerge(
            // common
            "flex items-center space-x-2 border-b px-4 py-2",
            // light
            "border-bellhop-border",
            // dark
            "dark:border-dark-bellhop-border",
          )}
        >
          <span
            className={bellhopTwMerge(
              // common
              "shrink-0 rounded-bellhop-full border-2 h-3 w-3",
              // light
              "border-bellhop-background shadow-bellhop-card",
              // dark
              "dark:border-dark-bellhop-background dark:shadow-dark-bellhop-card",
              getColorClassNames(
                category
                  ? (categoryColors.get(payload?.[0]?.payload[category]) ??
                      BaseColors.Blue)
                  : BaseColors.Blue,
                colorPalette.background,
              ).bgColor,
            )}
          />
          <p
            className={bellhopTwMerge(
              // common
              "font-medium",
              // light
              "text-bellhop-content-emphasis",
              // dark
              "dark:text-dark-bellhop-content-emphasis",
            )}
          >
            {label}
          </p>
        </div>

        <div className={bellhopTwMerge("px-4 py-2 space-y-1")}>
          {payload.map(
            ({ value, name }: { value: number; name: string }, idx: number) => {
              const valueFormatterKey =
                Object.keys(axis).find((key) => axis[key] === name) ?? "";
              const valueFormatterFn =
                valueFormatter[
                  valueFormatterKey as keyof ScatterChartValueFormatter
                ] ?? defaultValueFormatter;
              return (
                <ChartTooltipRow
                  key={`id-${idx}`}
                  value={
                    valueFormatter && valueFormatterFn
                      ? valueFormatterFn(value)
                      : `${value}`
                  }
                  name={name}
                />
              );
            },
          )}
        </div>
      </ChartTooltipFrame>
    );
  }
  return null;
};

export default ScatterChartTooltip;
