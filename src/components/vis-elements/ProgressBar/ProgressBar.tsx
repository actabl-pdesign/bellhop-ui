import React from "react";
import Tooltip, { useTooltip } from "components/util-elements/Tooltip/Tooltip";
import { getColorClassNames, makeClassName, bellhopTwMerge } from "lib";
import { colorPalette } from "lib/theme";
import { Color } from "../../../lib/inputTypes";

const makeProgressBarClassName = makeClassName("ProgressBar");

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  tooltip?: string;
  showAnimation?: boolean;
  color?: Color;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      value,
      label,
      color,
      tooltip,
      showAnimation = false,
      className,
      ...other
    } = props;
    const { tooltipProps, getReferenceProps } = useTooltip();

    return (
      <>
        <Tooltip text={tooltip} {...tooltipProps} />
        <div
          ref={ref}
          className={bellhopTwMerge(
            makeProgressBarClassName("root"),
            "flex items-center w-full",
            className,
          )}
          {...other}
        >
          <div
            ref={tooltipProps.refs.setReference}
            className={bellhopTwMerge(
              makeProgressBarClassName("progressBarWrapper"),
              "relative flex items-center w-full rounded-bellhop-full bg-opacity-20 h-2",
              color
                ? getColorClassNames(color, colorPalette.background).bgColor
                : "bg-bellhop-brand-muted/50 dark:bg-dark-bellhop-brand-muted",
            )}
            {...getReferenceProps}
          >
            <div
              className={bellhopTwMerge(
                makeProgressBarClassName("progressBar"),
                "flex-col h-full rounded-bellhop-full",
                color
                  ? getColorClassNames(color, colorPalette.background).bgColor
                  : "bg-bellhop-brand dark:bg-dark-bellhop-brand",
                showAnimation ? "transition-all duration-300 ease-in-out" : "",
              )}
              style={{
                width: `${value}%`,
              }}
            />
          </div>
          {label ? (
            <div
              className={bellhopTwMerge(
                makeProgressBarClassName("labelWrapper"),
                "w-16 truncate text-right ml-2",
                "text-bellhop-content-emphasis",
                "dark:text-dark-bellhop-content-emphasis",
              )}
            >
              <p
                className={bellhopTwMerge(
                  makeProgressBarClassName("label"),
                  "shrink-0 whitespace-nowrap truncate text-bellhop-default",
                )}
              >
                {label}
              </p>
            </div>
          ) : null}
        </div>
      </>
    );
  },
);

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
