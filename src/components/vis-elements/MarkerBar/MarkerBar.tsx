"use client";
import React from "react";

import Tooltip, { useTooltip } from "components/util-elements/Tooltip/Tooltip";
import { getColorClassNames, makeClassName, bellhopTwMerge } from "lib";
import { colorPalette } from "lib/theme";
import { Color } from "../../../lib";

const makeMarkerBarClassName = makeClassName("MarkerBar");

export interface MarkerBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  minValue?: number;
  maxValue?: number;
  markerTooltip?: string;
  rangeTooltip?: string;
  showAnimation?: boolean;
  color?: Color;
}

const MarkerBar = React.forwardRef<HTMLDivElement, MarkerBarProps>((props, ref) => {
  const {
    value,
    minValue,
    maxValue,
    markerTooltip,
    rangeTooltip,
    showAnimation = false,
    color,
    className,
    ...other
  } = props;

  const { tooltipProps: markerTooltipProps, getReferenceProps: getMarkerReferenceProps } =
    useTooltip();
  const { tooltipProps: rangeTooltipProps, getReferenceProps: getRangeReferenceProps } =
    useTooltip();

  return (
    <div
      ref={ref}
      className={bellhopTwMerge(
        makeMarkerBarClassName("root"),
        // common
        "relative flex items-center w-full rounded-bellhop-full h-2",
        // light
        "bg-bellhop-background-subtle",
        // dark
        "dark:bg-dark-bellhop-background-subtle",
        className,
      )}
      {...other}
    >
      {minValue !== undefined && maxValue !== undefined ? (
        <>
          <Tooltip text={rangeTooltip} {...rangeTooltipProps} />
          <div
            ref={rangeTooltipProps.refs.setReference}
            className={bellhopTwMerge(
              makeMarkerBarClassName("rangeBar"),
              // common
              "absolute h-full rounded-bellhop-full",
              // light
              "bg-bellhop-content-subtle",
              // dark
              "dark:bg-dark-bellhop-content-subtle",
            )}
            style={{
              left: `${minValue}%`,
              width: `${maxValue - minValue}%`,
              transition: showAnimation ? "all duration-300" : "",
            }}
            {...getRangeReferenceProps}
          />
        </>
      ) : null}
      <Tooltip text={markerTooltip} {...markerTooltipProps} />
      <div
        ref={markerTooltipProps.refs.setReference}
        className={bellhopTwMerge(
          makeMarkerBarClassName("markerWrapper"),
          "absolute right-1/2 -translate-x-1/2 w-5",
        )}
        style={{
          left: `${value}%`,
          transition: showAnimation ? "all 1s" : "",
        }}
        {...getMarkerReferenceProps}
      >
        <div
          className={bellhopTwMerge(
            makeMarkerBarClassName("marker"),
            "ring-2 mx-auto rounded-bellhop-full h-4 w-1",
            "ring-bellhop-brand-inverted",
            "dark:ring-dark-bellhop-brand-inverted",
            color
              ? getColorClassNames(color, colorPalette.background).bgColor
              : "dark:bg-dark-bellhop-brand bg-bellhop-brand",
          )}
        />
      </div>
    </div>
  );
});

MarkerBar.displayName = "MarkerBar";

export default MarkerBar;
