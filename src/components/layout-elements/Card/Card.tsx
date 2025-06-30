import React from "react";
import {
  getColorClassNames,
  makeClassName,
  bellhopTwMerge,
  Color,
  HorizontalPosition,
  VerticalPosition,
} from "lib";
import { HorizontalPositions, VerticalPositions } from "lib/constants";
import { colorPalette } from "lib/theme";

const makeCardClassName = makeClassName("Card");

const parseDecorationAlignment = (decorationAlignment: string) => {
  if (!decorationAlignment) return "";
  switch (decorationAlignment) {
    case HorizontalPositions.Left:
      return "border-l-4";
    case VerticalPositions.Top:
      return "border-t-4";
    case HorizontalPositions.Right:
      return "border-r-4";
    case VerticalPositions.Bottom:
      return "border-b-4";
    default:
      return "";
  }
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  decoration?: HorizontalPosition | VerticalPosition | "";
  decorationColor?: Color;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { decoration = "", decorationColor, children, className, ...other } = props;
  return (
    <div
      ref={ref}
      className={bellhopTwMerge(
        makeCardClassName("root"),
        // common
        "relative w-full text-left ring-1 rounded-bellhop-default p-6",
        // light
        "bg-bellhop-background ring-bellhop-ring shadow-bellhop-card",
        // dark
        "dark:bg-dark-bellhop-background dark:ring-dark-bellhop-ring dark:shadow-dark-bellhop-card",
        // brand
        decorationColor
          ? getColorClassNames(decorationColor, colorPalette.border).borderColor
          : "border-bellhop-brand dark:border-dark-bellhop-brand",
        parseDecorationAlignment(decoration),
        className,
      )}
      {...other}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
