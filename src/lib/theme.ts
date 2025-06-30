import { BaseColors } from "./constants";
import { Color } from "./inputTypes";

export const DEFAULT_COLOR: Color = "neutral";
export const WHITE = "white";
export const TRANSPARENT = "transparent";

export const colorPalette = {
  canvasBackground: 50,
  lightBackground: 100,
  background: 500,
  darkestBackground: 800,
  lightBorder: 200,
  border: 300,
  lightRing: 200,
  ring: 300,
  iconRing: 500,
  lightText: 400,
  text: 500,
  iconText: 600,
  darkestText: 900,
  icon: 500,
};

export const themeColorRange: Color[] = [
  BaseColors.Blue,
  BaseColors.Indigo,
  BaseColors.Violet,
  BaseColors.Purple,
  BaseColors.Neutral,
  BaseColors.Red,
  BaseColors.Orange,
  BaseColors.Amber,
  BaseColors.Yellow,
  BaseColors.Lime,
  BaseColors.Green,
  BaseColors.Teal,
  BaseColors.Pink,
  BaseColors.Rose,
];
