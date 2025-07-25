"use client";

import type { ComponentPropsWithRef, ReactNode } from "react";
import { Fragment, createContext, useContext } from "react";
import type {
  TabListProps as AriaTabListProps,
  TabProps as AriaTabProps,
  TabRenderProps as AriaTabRenderProps,
} from "react-aria-components";
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  TabsContext,
  useSlottedContext,
} from "react-aria-components";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge } from "@/components/base/badges/badges";
import { cx } from "@/utils/cx";

type Orientation = "horizontal" | "vertical";

// Types for different orientations
type HorizontalTypes = "button-brand" | "underline";
type VerticalTypes = "button-brand" | "line";
type TabTypeColors<T> = T extends "horizontal"
  ? HorizontalTypes
  : VerticalTypes;

// Styles for different types of tab
const getTabStyles = ({
  isFocusVisible,
  isSelected,
  isHovered,
}: AriaTabRenderProps) => ({
  "button-brand": cx(
    "outline-focus-ring",
    isFocusVisible && "outline-2 -outline-offset-2",
    (isSelected || isHovered) && "bg-brand-primary_alt text-brand-secondary",
  ),
  underline: cx(
    "rounded-none border-b-2 border-transparent outline-focus-ring",
    (isSelected || isHovered) &&
      "border-fg-brand-primary_alt text-brand-secondary",
    isFocusVisible && "outline-2 -outline-offset-2",
  ),
  line: cx(
    "rounded-none border-l-2 border-transparent outline-focus-ring",
    (isSelected || isHovered) &&
      "border-fg-brand-primary_alt text-brand-secondary",
    isFocusVisible && "outline-2 -outline-offset-2",
  ),
});

const sizes = {
  sm: {
    "button-brand": "text-sm font-semibold py-2 px-3",
    "button-gray": "text-sm font-semibold py-2 px-3",
    "button-border": "text-sm font-semibold py-2 px-3",
    "button-minimal": "text-sm font-semibold py-2 px-3",
    underline: "text-sm font-semibold px-1 pb-2.5 pt-0",
    line: "text-sm font-semibold pl-2.5 pr-3 py-0.5",
  },
};

// Styles for different types of horizontal tabs
const getHorizontalStyles = ({
  size,
  fullwidth,
}: {
  size?: "sm";
  fullwidth?: boolean;
}) => ({
  "button-brand": "gap-1",
  underline: cx("gap-3", fullwidth && "w-full gap-4"),
  line: "gap-2",
});

const getColorStyles = ({
  isSelected,
  isHovered,
}: Partial<AriaTabRenderProps>) => ({
  "button-brand": isSelected || isHovered ? "brand" : "gray",
  underline: isSelected || isHovered ? "brand" : "gray",
  line: isSelected || isHovered ? "brand" : "gray",
});

interface TabListComponentProps<T extends object, K extends Orientation>
  extends AriaTabListProps<T> {
  /** The size of the tab list. */
  size?: keyof typeof sizes;
  /** The type of the tab list. */
  type?: TabTypeColors<K>;
  /** The orientation of the tab list. */
  orientation?: K;
  /** The items of the tab list. */
  items: T[];
  /** Whether the tab list is full width. */
  fullwidth?: boolean;
}

const TabListContext = createContext<
  Omit<TabListComponentProps<TabComponentProps, Orientation>, "items">
>({
  size: "sm",
  type: "button-brand",
});

export const TabList = <T extends Orientation>({
  size = "sm",
  type = "button-brand",
  orientation: orientationProp,
  fullwidth,
  className,
  children,
  ...otherProps
}: TabListComponentProps<TabComponentProps, T>) => {
  const context = useSlottedContext(TabsContext);

  const orientation = orientationProp ?? context?.orientation ?? "horizontal";

  return (
    <TabListContext.Provider value={{ size, type, orientation, fullwidth }}>
      <AriaTabList
        {...otherProps}
        className={(state) =>
          cx(
            "group flex",

            getHorizontalStyles({
              size,
              fullwidth,
            })[type as HorizontalTypes],

            orientation === "vertical" && "w-max flex-col",

            // Only horizontal tabs with underline type have bottom border
            orientation === "horizontal" &&
              type === "underline" &&
              "relative before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border-secondary",

            typeof className === "function" ? className(state) : className,
          )
        }
      >
        {children ?? ((item) => <Tab {...item}>{item.children}</Tab>)}
      </AriaTabList>
    </TabListContext.Provider>
  );
};

export const TabPanel = (props: ComponentPropsWithRef<typeof AriaTabPanel>) => {
  return (
    <AriaTabPanel
      {...props}
      className={(state) =>
        cx(
          "outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
          typeof props.className === "function"
            ? props.className(state)
            : props.className,
        )
      }
    />
  );
};

interface TabComponentProps extends AriaTabProps {
  /** The label of the tab. */
  label?: ReactNode;
  /** The children of the tab. */
  children?: ReactNode | ((props: AriaTabRenderProps) => ReactNode);
  /** The badge displayed next to the label. */
  badge?: number | string;
}

export const Tab = (props: TabComponentProps) => {
  const { label, children, badge, ...otherProps } = props;
  const {
    size = "sm",
    type = "button-brand",
    fullwidth,
  } = useContext(TabListContext);

  return (
    <AriaTab
      {...otherProps}
      className={(prop) =>
        cx(
          "z-10 flex h-max cursor-pointer items-center justify-center gap-2 rounded-md whitespace-nowrap text-quaternary transition duration-100 ease-linear",
          "group-orientation-vertical:justify-start",
          fullwidth && "w-full flex-1",
          sizes[size][type],
          getTabStyles(prop)[type],
          typeof props.className === "function"
            ? props.className(prop)
            : props.className,
        )
      }
    >
      {(state) => (
        <Fragment>
          {typeof children === "function" ? children(state) : children || label}
          {badge && (
            <Badge
              size={size}
              type="pill-color"
              color={getColorStyles(state)[type] as BadgeColors}
              className={cx(
                "hidden transition-inherit-all md:flex",
                size === "sm" && "-my-px",
              )}
            >
              {badge}
            </Badge>
          )}
        </Fragment>
      )}
    </AriaTab>
  );
};

export const Tabs = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof AriaTabs>) => {
  return (
    <AriaTabs
      keyboardActivation="manual"
      {...props}
      className={(state) =>
        cx(
          "flex w-full flex-col",
          typeof className === "function" ? className(state) : className,
        )
      }
    />
  );
};

Tabs.Panel = TabPanel;
Tabs.List = TabList;
Tabs.Item = Tab;
