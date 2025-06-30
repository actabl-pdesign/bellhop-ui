import { Color, DeltaType, HorizontalPosition, Size, VerticalPosition } from "./inputTypes";

export const DeltaTypes: { [key: string]: DeltaType } = {
  Increase: "increase",
  ModerateIncrease: "moderateIncrease",
  Decrease: "decrease",
  ModerateDecrease: "moderateDecrease",
  Unchanged: "unchanged",
};

export const BaseColors: { [key: string]: Color } = {
  Neutral: "neutral",
  Red: "red",
  Orange: "orange",
  Amber: "amber",
  Yellow: "yellow",
  Lime: "lime",
  Green: "green",
  Teal: "teal",
  Blue: "blue",
  Indigo: "indigo",
  Violet: "violet",
  Purple: "purple",
  Pink: "pink",
  Rose: "rose",
};

export const Sizes: { [key: string]: Size } = {
  XS: "xs",
  SM: "sm",
  MD: "md",
};

export const HorizontalPositions: { [key: string]: HorizontalPosition } = {
  Left: "left",
  Right: "right",
};

export const VerticalPositions: { [key: string]: VerticalPosition } = {
  Top: "top",
  Bottom: "bottom",
};
