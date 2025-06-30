import { getColorClassNames, ButtonVariant, Color, colorPalette } from "lib";

export const iconSizes: {
  [size: string]: {
    height: string;
    width: string;
  };
} = {
  xs: {
    height: "h-4",
    width: "w-4",
  },
  sm: {
    height: "h-5",
    width: "w-5",
  },
  md: {
    height: "h-5",
    width: "w-5",
  },
};

export const getButtonProportions = (variant: ButtonVariant, iconOnly = false) => {
  if (iconOnly) {
    return {
      xs: {
        paddingX: "px-1.5",
        paddingY: "py-1.5",
        fontSize: "text-xs",
      },
      sm: {
        paddingX: "px-2",
        paddingY: "py-2",
        fontSize: "text-sm",
      },
      md: {
        paddingX: "px-2.5",
        paddingY: "py-2.5",
        fontSize: "text-md",
      },
    };
  }
  if (!(variant === "link")) {
    return {
      xs: {
        paddingX: "px-2.5",
        paddingY: "py-1.5",
        fontSize: "text-xs",
      },
      sm: {
        paddingX: "px-4",
        paddingY: "py-2",
        fontSize: "text-sm",
      },
      md: {
        paddingX: "px-4",
        paddingY: "py-2",
        fontSize: "text-md",
      },
    };
  }
  return {
    xs: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-xs",
    },
    sm: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-sm",
    },
    md: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-md",
    },
  };
};

export const getButtonColors = (variant: ButtonVariant, color?: Color) => {
  switch (variant) {
    case "primary":
      return {
        textColor: color
          ? getColorClassNames("white").textColor
          : "text-bellhop-brand-inverted",
        hoverTextColor: color
          ? getColorClassNames("white").textColor
          : "text-bellhop-brand-inverted",
        bgColor: color
          ? getColorClassNames(color, colorPalette.background).bgColor
          : "bg-bellhop-brand",
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.background).hoverBgColor
          : "hover:bg-bellhop-brand-emphasis",
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : "border-bellhop-brand",
        hoverBorderColor: color
          ? getColorClassNames(color, colorPalette.border).hoverBorderColor
          : "hover:border-bellhop-brand-emphasis",
      };
    case "secondary":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-secondary",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "hover:text-bellhop-secondary",
        bgColor: color
          ? getColorClassNames(color, colorPalette.background).bgColor
          : "bg-bellhop-secondary-faint",
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.background).hoverBgColor
          : "hover:bg-bellhop-secondary-muted",
        borderColor: getColorClassNames("transparent").borderColor,
      };
    case "outline":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-secondary",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "hover:text-bellhop-secondary",
        bgColor: getColorClassNames("transparent").bgColor,
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.background).hoverBgColor
          : "hover:bg-bellhop-secondary-muted",
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : "border-secondary-subtle",
      };
    case "ghost":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-secondary",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "hover:text-bellhop-secondary",
        bgColor: getColorClassNames("transparent").bgColor,
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.background).hoverBgColor
          : "hover:bg-bellhop-secondary-faint",
        borderColor: getColorClassNames("transparent").borderColor,
      }; 
      case "destructive":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-white",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "hover:text-white",
        bgColor: color
          ? getColorClassNames(color, colorPalette.background).bgColor
          : "bg-red-600",
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.background).hoverBgColor
          : "hover:bg-red-700",
        borderColor: getColorClassNames("transparent").borderColor,
      }; 
    case "link":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-bellhop-brand dark:text-dark-bellhop-brand",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).hoverTextColor
          : "hover:text-bellhop-brand-emphasis dark:hover:text-dark-bellhop-brand-emphasis",
        bgColor: getColorClassNames("transparent").bgColor,
        borderColor: "",
        hoverBorderColor: "",
      };
  }
};
