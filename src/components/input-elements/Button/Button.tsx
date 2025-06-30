"use client";
import Tooltip, { useTooltip } from "components/util-elements/Tooltip/Tooltip";
import React, { useEffect } from "react";
import { useTransition, type TransitionStatus } from "react-transition-state";

import { HorizontalPositions, makeClassName, mergeRefs, Sizes, bellhopTwMerge } from "lib";

import { LoadingSpinner } from "assets";
import { ButtonVariant, HorizontalPosition, Size } from "../../../lib";
import { getButtonColors, getButtonProportions, iconSizes } from "./styles";

const makeButtonClassName = makeClassName("Button");

export interface ButtonIconOrSpinnerProps {
  loading: boolean;
  iconSize: string;
  iconPosition: string;
  Icon: React.ElementType | undefined;
  needMargin: boolean;
  transitionStatus: TransitionStatus;
}

export const ButtonIconOrSpinner = ({
  loading,
  iconSize,
  iconPosition,
  Icon,
  needMargin,
  transitionStatus,
}: ButtonIconOrSpinnerProps) => {
  Icon = Icon!;

  const margin = !needMargin
    ? ""
    : iconPosition === HorizontalPositions.Left
      ? bellhopTwMerge("-ml-1", "mr-1.5")
      : bellhopTwMerge("-mr-1", "ml-1.5");

  const defaultSpinnerSize = bellhopTwMerge("w-0 h-0");
  const spinnerSize: { [key: string]: any } = {
    default: defaultSpinnerSize,
    entering: defaultSpinnerSize,
    entered: iconSize,
    exiting: iconSize,
    exited: defaultSpinnerSize,
  };

  return loading ? (
    <LoadingSpinner
      className={bellhopTwMerge(
        makeButtonClassName("icon"),
        "animate-spin shrink-0",
        margin,
        spinnerSize.default,
        spinnerSize[transitionStatus],
      )}
      style={{ transition: `width 150ms` }}
    />
  ) : (
    <Icon className={bellhopTwMerge(makeButtonClassName("icon"), "shrink-0", iconSize, margin)} />
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  iconPosition?: HorizontalPosition;
  size?: Size;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  tooltip?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    icon,
    iconPosition = HorizontalPositions.Left,
    size = Sizes.SM,
    color,
    variant = "primary",
    disabled,
    loading = false,
    loadingText,
    children,
    tooltip,
    className,
    ...other
  } = props;

  const Icon = icon;

  const isDisabled = loading || disabled;
  const showButtonIconOrSpinner = Icon !== undefined || loading;
  const showLoadingText = loading && loadingText;
  const needIconMargin = children || showLoadingText ? true : false;

  const iconSize = bellhopTwMerge(iconSizes[size].height, iconSizes[size].width);
  const buttonShapeStyles =
    variant !== "link"
      ? bellhopTwMerge(
          // common
          "rounded-bellhop-default border",
        )
      : "";
  const buttonColorStyles = getButtonColors(variant);
  // Icon-only: no children and not showing loadingText
  const iconOnly = !children && !showLoadingText && !!Icon;
  const buttonProportionStyles = getButtonProportions(variant, iconOnly)[size as keyof ReturnType<typeof getButtonProportions>];
  const delay = 300;
  const { tooltipProps, getReferenceProps } = useTooltip(delay);

  const [transitionState, toggleTransition] = useTransition({ timeout: 50 });

  useEffect(() => {
    toggleTransition(loading);
  }, [loading]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={mergeRefs([ref, tooltipProps.refs.setReference])}
      className={bellhopTwMerge(
        makeButtonClassName("root"),
        // common
        "shrink-0 inline-flex justify-center items-center group font-medium outline-none",
        buttonShapeStyles,
        buttonProportionStyles.paddingX,
        buttonProportionStyles.paddingY,
        buttonProportionStyles.fontSize,
        buttonColorStyles.textColor,
        buttonColorStyles.bgColor,
        buttonColorStyles.borderColor,
        buttonColorStyles.hoverBorderColor,
        !isDisabled
          ? bellhopTwMerge(
              getButtonColors(variant).hoverTextColor,
              getButtonColors(variant).hoverBgColor,
              getButtonColors(variant).hoverBorderColor,
            )
          : "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={isDisabled}
      {...getReferenceProps}
      {...other}
    >
      <Tooltip text={tooltip} {...tooltipProps} />
      {showButtonIconOrSpinner && iconPosition !== HorizontalPositions.Right ? (
        <ButtonIconOrSpinner
          loading={loading}
          iconSize={iconSize}
          iconPosition={iconPosition}
          Icon={Icon}
          transitionStatus={transitionState.status}
          needMargin={needIconMargin}
        />
      ) : null}
      {showLoadingText || children ? (
        <span
          className={bellhopTwMerge(
            makeButtonClassName("text"),
            "text-bellhop-default whitespace-nowrap",
          )}
        >
          {showLoadingText ? loadingText : children}
        </span>
      ) : null}
      {showButtonIconOrSpinner && iconPosition === HorizontalPositions.Right ? (
        <ButtonIconOrSpinner
          loading={loading}
          iconSize={iconSize}
          iconPosition={iconPosition}
          Icon={Icon}
          transitionStatus={transitionState.status}
          needMargin={needIconMargin}
        />
      ) : null}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
