import type { FC, ReactNode, Ref } from "react";
import { isValidElement } from "react";
import { cx, sortCx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

const iconsSizes = {
  sm: "*:data-icon:size-4",
  md: "*:data-icon:size-5",
  lg: "*:data-icon:size-6",
  xl: "*:data-icon:size-7",
};

const styles = sortCx({
  light: {
    base: "rounded-full",
    sizes: {
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-14",
    },
    colors: {
      brand: "bg-brand-secondary text-featured-icon-light-fg-brand",
      gray: "bg-tertiary text-featured-icon-light-fg-gray",
      error: "bg-error-secondary text-featured-icon-light-fg-error",
      warning: "bg-warning-secondary text-featured-icon-light-fg-warning",
      success: "bg-success-secondary text-featured-icon-light-fg-success",
    },
  },

  modern: {
    base: "bg-primary shadow-xs-skeumorphic ring-1 ring-inset",
    sizes: {
      sm: "size-8 rounded-md",
      md: "size-10 rounded-lg",
      lg: "size-12 rounded-[10px]",
      xl: "size-14 rounded-xl",
    },
    colors: {
      brand: "",
      gray: "text-fg-secondary ring-primary",
      error: "",
      warning: "",
      success: "",
    },
  },
});

interface FeaturedIconProps {
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
  icon?: FC<{ className?: string }> | ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color: "brand" | "gray" | "success" | "warning" | "error";
  theme?: "light" | "modern";
}

export const FeaturedIcon = (props: FeaturedIconProps) => {
  const {
    size = "sm",
    theme: variant = "light",
    color = "brand",
    icon: Icon,
    ...otherProps
  } = props;

  return (
    <div
      {...otherProps}
      data-featured-icon
      className={cx(
        "relative flex shrink-0 items-center justify-center",

        iconsSizes[size],
        styles[variant].base,
        styles[variant].sizes[size],
        styles[variant].colors[color],

        props.className,
      )}
    >
      {isReactComponent(Icon) && <Icon data-icon className="z-1" />}
      {isValidElement(Icon) && <div className="z-1">{Icon}</div>}

      {props.children}
    </div>
  );
};
