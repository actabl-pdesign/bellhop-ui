"use client";
import React from "react";
import Tooltip, { useTooltip } from "components/util-elements/Tooltip/Tooltip";
import {
  DeltaTypes,
  makeClassName,
  mapInputsToDeltaType,
  bellhopTwMerge,
} from "lib";
import { colors } from "./styles";

const makeDeltaBarClassName = makeClassName("DeltaBar");

const getDeltaType = (value: number) =>
  value >= 0 ? DeltaTypes.Increase : DeltaTypes.Decrease;

export interface DeltaBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  isIncreasePositive?: boolean;
  tooltip?: string;
  showAnimation?: boolean;
}

const DeltaBar = React.forwardRef<HTMLDivElement, DeltaBarProps>(
  (props, ref) => {
    const {
      value,
      isIncreasePositive = true,
      showAnimation = false,
      className,
      tooltip,
      ...other
    } = props;
    const deltaType = mapInputsToDeltaType(
      getDeltaType(value),
      isIncreasePositive,
    );

    const { tooltipProps, getReferenceProps } = useTooltip();

    return (
      <>
        <Tooltip text={tooltip} {...tooltipProps} />
        <div
          ref={ref}
          className={bellhopTwMerge(
            makeDeltaBarClassName("root"),
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
          <div
            className={
              (makeDeltaBarClassName("negativeDeltaBarWrapper"),
              "flex justify-end h-full w-1/2")
            }
          >
            {value < 0 ? (
              <div
                ref={tooltipProps.refs.setReference}
                className={bellhopTwMerge(
                  makeDeltaBarClassName("negativeDeltaBar"),
                  // common
                  "rounded-l-bellhop-full",
                  colors[deltaType].bgColor,
                )}
                style={{
                  width: `${Math.abs(value)}%`,
                  transition: showAnimation ? "all duration-300" : "",
                }}
                {...getReferenceProps}
              />
            ) : null}
          </div>
          <div
            className={bellhopTwMerge(
              makeDeltaBarClassName("separator"),
              // common
              "ring-2 z-10 rounded-bellhop-full h-4 w-1",
              // light
              "ring-bellhop-brand-inverted bg-bellhop-background-emphasis",
              // dark
              "dark:ring-dark-bellhop-brand-inverted dark:bg-dark-bellhop-background-emphasis",
            )}
          />
          <div
            className={bellhopTwMerge(
              makeDeltaBarClassName("positiveDeltaBarWrapper"),
              "flex justify-start h-full w-1/2",
            )}
          >
            {value >= 0 ? (
              <div
                ref={tooltipProps.refs.setReference}
                className={bellhopTwMerge(
                  makeDeltaBarClassName("positiveDeltaBar"),
                  // common
                  "rounded-r-bellhop-full",
                  colors[deltaType].bgColor,
                )}
                style={{
                  width: `${Math.abs(value)}%`,
                  transition: showAnimation ? "all 1s" : "",
                }}
                {...getReferenceProps}
              />
            ) : null}
          </div>
        </div>
      </>
    );
  },
);

DeltaBar.displayName = "DeltaBar";

export default DeltaBar;
