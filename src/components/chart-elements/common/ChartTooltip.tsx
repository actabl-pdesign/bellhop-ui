import React from "react";
import {
  BaseColors,
  getColorClassNames,
  bellhopTwMerge,
  Color,
  ValueFormatter,
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
  color: Color | string;
}

export const ChartTooltipRow = ({
  value,
  name,
  color,
}: ChartTooltipRowProps) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        className={bellhopTwMerge(
          // common
          "shrink-0 rounded-bellhop-full border-2 h-3 w-3",
          // light
          "border-bellhop-background shadow-bellhop-card",
          // dark
          "dark:border-dark-bellhop-background dark:shadow-dark-bellhop-card",
          getColorClassNames(color, colorPalette.background).bgColor,
        )}
      />
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

export interface ChartTooltipProps {
  active: boolean | undefined;
  payload: any;
  label: string;
  categoryColors: Map<string, Color | string>;
  valueFormatter: ValueFormatter;
}

const ChartTooltip = ({
  active,
  payload,
  label,
  categoryColors,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload) {
    const filteredPayload = payload.filter((item: any) => item.type !== "none");

    return (
      <ChartTooltipFrame>
        <div
          className={bellhopTwMerge(
            // light
            "border-bellhop-border border-b px-4 py-2",
            // dark
            "dark:border-dark-bellhop-border",
          )}
        >
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
          {filteredPayload.map(
            ({ value, name }: { value: number; name: string }, idx: number) => (
              <ChartTooltipRow
                key={`id-${idx}`}
                value={valueFormatter(value)}
                name={name}
                color={categoryColors.get(name) ?? BaseColors.Blue}
              />
            ),
          )}
        </div>
      </ChartTooltipFrame>
    );
  }
  return null;
};

export default ChartTooltip;
