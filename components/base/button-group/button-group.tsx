"use client";

import {
  type FC,
  type PropsWithChildren,
  type ReactNode,
  type RefAttributes,
  createContext,
  isValidElement,
  useContext,
} from "react";
import {
  ToggleButton as AriaToggleButton,
  ToggleButtonGroup as AriaToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";

export const styles = sortCx({
  common: {
    root: [
      "group/button-group inline-flex h-max cursor-pointer items-center bg-primary font-medium whitespace-nowrap text-tertiary transition duration-100 ease-linear ",
      // Hover and focus styles
      "hover:bg-primary_hover hover:text-secondary_hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-",
      // Disabled styles
      "disabled:cursor-not-allowed disabled:bg-primary disabled:text-disabled",
      // Selected styles
      "selected:bg-gray-100 selected:text-secondary_hover selected:disabled:bg-disabled_subtle",
    ].join(" "),
    icon: "fill-fg-tertiary pointer-events-none text-fg-tertiary transition-[inherit] group-hover/button-group:text-fg-tertiary_hover group-hover/button-group:fill-fg-tertiary_hover group-disabled/button-group:text-fg-disabled_subtle",
  },

  sizes: {
    sm: {
      root: "h-8 gap-1.5 px-2.5 py-2 text-sm not-last:pr-[calc(calc(var(--spacing)*2)+1px)] first:rounded-l-lg last:rounded-r-lg data-icon-leading:pl-2 data-icon-only:p-2",
      icon: "size-4",
    },
  },
});

type ButtonSize = keyof typeof styles.sizes;

const ButtonGroupContext = createContext<{ size: ButtonSize }>({ size: "sm" });

interface ButtonGroupItemProps
  extends ToggleButtonProps,
    RefAttributes<HTMLButtonElement> {
  iconLeading?: FC<{ className?: string }> | ReactNode;
  iconTrailing?: FC<{ className?: string }> | ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonGroupItem = ({
  iconLeading: IconLeading,
  iconTrailing: IconTrailing,
  children,
  className,
  ...otherProps
}: PropsWithChildren<ButtonGroupItemProps>) => {
  const context = useContext(ButtonGroupContext);

  if (!context) {
    throw new Error(
      "ButtonGroupItem must be used within a ButtonGroup component",
    );
  }

  const { size } = context;

  const isIcon = (IconLeading || IconTrailing) && !children;

  return (
    <AriaToggleButton
      {...otherProps}
      data-icon-only={isIcon ? true : undefined}
      data-icon-leading={IconLeading ? true : undefined}
      className={cx(styles.common.root, styles.sizes[size].root, className)}
    >
      {isReactComponent(IconLeading) && (
        <IconLeading
          className={cx(styles.common.icon, styles.sizes[size].icon)}
        />
      )}
      {isValidElement(IconLeading) && IconLeading}

      {children}

      {isReactComponent(IconTrailing) && (
        <IconTrailing
          className={cx(styles.common.icon, styles.sizes[size].icon)}
        />
      )}
      {isValidElement(IconTrailing) && IconTrailing}
    </AriaToggleButton>
  );
};

interface ButtonGroupProps
  extends Omit<ToggleButtonGroupProps, "orientation">,
    RefAttributes<HTMLDivElement> {
  size?: ButtonSize;
  className?: string;
}

export const ButtonGroup = ({
  children,
  size = "sm",
  className,
  ...otherProps
}: ButtonGroupProps) => {
  return (
    <ButtonGroupContext.Provider value={{ size }}>
      <AriaToggleButtonGroup
        selectionMode="single"
        className={cx(
          "relative z-0 inline-flex w-max rounded-lg  ring-1 ring-primary divide-x divide-border-primary",
          className,
        )}
        {...otherProps}
      >
        {children}
      </AriaToggleButtonGroup>
    </ButtonGroupContext.Provider>
  );
};
