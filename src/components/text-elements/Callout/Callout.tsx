import React from "react";
import { getColorClassNames, makeClassName, bellhopTwMerge, Color } from "lib";
import { colorPalette } from "lib/theme";

const makeCalloutClassName = makeClassName("Callout");

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ElementType;
  color?: Color;
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>((props, ref) => {
  const { title, icon, color, className, children, ...other } = props;
  const Icon = icon;
  return (
    <div
      ref={ref}
      className={bellhopTwMerge(
        makeCalloutClassName("root"),
        "flex flex-col overflow-hidden rounded-bellhop-default text-bellhop-default border-l-4 py-3 pr-3 pl-4",
        color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.background).bgColor,
              "bg-opacity-10",
            )
          : bellhopTwMerge(
              // light
              "bg-bellhop-brand-faint border-bellhop-brand-emphasis text-bellhop-brand-emphasis",
            ),
        className,
      )}
      {...other}
    >
      <div
        className={bellhopTwMerge(
          makeCalloutClassName("header"),
          "flex items-start",
        )}
      >
        {Icon ? (
          <Icon
            className={bellhopTwMerge(
              makeCalloutClassName("icon"),
              "flex-none h-5 w-5 mr-1.5",
            )}
          />
        ) : null}
        <h4
          className={bellhopTwMerge(
            makeCalloutClassName("title"),
            "font-semibold",
          )}
        >
          {title}
        </h4>
      </div>
      <p
        className={bellhopTwMerge(
          makeCalloutClassName("body"),
          "overflow-y-auto",
          children ? "mt-2" : "",
        )}
      >
        {children}
      </p>
    </div>
  );
});

Callout.displayName = "Callout";

export default Callout;
