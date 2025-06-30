import { getColorClassNames, bellhopTwMerge, colorPalette, Color, IconVariant } from "lib";

export type WrapperProportionTypes = {
  paddingX: string;
  paddingY: string;
};

export const wrapperProportions: { [size: string]: WrapperProportionTypes } = {
  xs: {
    paddingX: "px-1.5",
    paddingY: "py-1.5",
  },
  sm: {
    paddingX: "px-1.5",
    paddingY: "py-1.5",
  },
  md: {
    paddingX: "px-2",
    paddingY: "py-2",
  },
  lg: {
    paddingX: "px-2",
    paddingY: "py-2",
  },
  xl: {
    paddingX: "px-2.5",
    paddingY: "py-2.5",
  },
};

export const iconSizes: {
  [size: string]: {
    height: string;
    width: string;
  };
} = {
  xs: {
    height: "h-3",
    width: "w-3",
  },
  sm: {
    height: "h-5",
    width: "w-5",
  },
  md: {
    height: "h-5",
    width: "w-5",
  },
  lg: {
    height: "h-7",
    width: "w-7",
  },
  xl: {
    height: "h-9",
    width: "w-9",
  },
};

export type ShapeTypes = {
  rounded: string;
  border: string;
  ring: string;
  shadow: string;
};

export const shape: { [style: string]: ShapeTypes } = {
  simple: {
    rounded: "",
    border: "",
    ring: "",
    shadow: "",
  },
  light: {
    rounded: "rounded-bellhop-default",
    border: "",
    ring: "",
    shadow: "",
  },
  shadow: {
    rounded: "rounded-bellhop-default",
    border: "border",
    ring: "",
    shadow: "shadow-bellhop-card dark:shadow-dark-bellhop-card",
  },
  solid: {
    rounded: "rounded-bellhop-default",
    border: "border-2",
    ring: "ring-1",
    shadow: "",
  },
  outlined: {
    rounded: "rounded-bellhop-default",
    border: "border",
    ring: "ring-2",
    shadow: "",
  },
};

export const getIconColors = (variant: IconVariant, color?: Color) => {
  switch (variant) {
    case "simple":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand dark:text-dark-bellhop-brand",
        bgColor: "",
        borderColor: "",
        ringColor: "",
      };
    case "light":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand dark:text-dark-bellhop-brand",
        bgColor: color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.background).bgColor,
              "bg-opacity-20",
            )
          : "bg-bellhop-brand-muted dark:bg-dark-bellhop-brand-muted",
        borderColor: "",
        ringColor: "",
      };
    case "shadow":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand dark:text-dark-bellhop-brand",
        bgColor: color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.background).bgColor,
              "bg-opacity-20",
            )
          : "bg-bellhop-background dark:bg-dark-bellhop-background",
        borderColor: "border-bellhop-border dark:border-dark-bellhop-border",
        ringColor: "",
      };
    case "solid":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand-inverted dark:text-dark-bellhop-brand-inverted",
        bgColor: color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.background).bgColor,
              "bg-opacity-20",
            )
          : "bg-bellhop-brand dark:bg-dark-bellhop-brand",
        borderColor: "border-bellhop-brand-inverted dark:border-dark-bellhop-brand-inverted",
        ringColor: "ring-bellhop-ring dark:ring-dark-bellhop-ring",
      };
    case "outlined":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand dark:text-dark-bellhop-brand",
        bgColor: color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.background).bgColor,
              "bg-opacity-20",
            )
          : "bg-bellhop-background dark:bg-dark-bellhop-background",
        borderColor: color
          ? getColorClassNames(color, colorPalette.ring).borderColor
          : "border-bellhop-brand-subtle dark:border-dark-bellhop-brand-subtle",
        ringColor: color
          ? bellhopTwMerge(
              getColorClassNames(color, colorPalette.ring).ringColor,
              "ring-opacity-40",
            )
          : "ring-bellhop-brand-muted dark:ring-dark-bellhop-brand-muted",
      };
  }
};
