import React, { useEffect, useCallback } from "react";

import {
  getColorClassNames,
  makeClassName,
  themeColorRange,
  Color,
  bellhopTwMerge,
} from "lib";
import { colorPalette } from "lib/theme";
import { ChevronLeftFill, ChevronRightFill } from "assets";

const makeLegendClassName = makeClassName("Legend");

export interface LegendItemProps {
  name: string;
  color: Color | string;
  onClick?: (name: string, color: Color | string) => void;
  activeLegend?: string;
}

const LegendItem = ({
  name,
  color,
  onClick,
  activeLegend,
}: LegendItemProps) => {
  const hasOnValueChange = !!onClick;
  return (
    <li
      className={bellhopTwMerge(
        makeLegendClassName("legendItem"),
        // common
        "group inline-flex items-center px-2 py-0.5 rounded-bellhop-small transition whitespace-nowrap",
        hasOnValueChange ? "cursor-pointer" : "cursor-default",
        // light
        "text-bellhop-content",
        hasOnValueChange ? "hover:bg-bellhop-background-subtle" : "",
        // dark
        "dark:text-dark-bellhop-content",
        hasOnValueChange ? "dark:hover:bg-dark-bellhop-background-subtle" : "",
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(name, color);
      }}
    >
      <svg
        className={bellhopTwMerge(
          "flex-none h-2 w-2 mr-1.5",
          getColorClassNames(color, colorPalette.text).textColor,
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
        )}
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={4} />
      </svg>
      <p
        className={bellhopTwMerge(
          // common
          "whitespace-nowrap truncate text-bellhop-default",
          // light
          "text-bellhop-content",
          hasOnValueChange ? "group-hover:text-bellhop-content-emphasis" : "",
          // dark
          "dark:text-dark-bellhop-content",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
          hasOnValueChange
            ? "dark:group-hover:text-dark-bellhop-content-emphasis"
            : "",
        )}
      >
        {name}
      </p>
    </li>
  );
};

export interface ScrollButtonProps {
  icon: React.ElementType;
  onClick?: () => void;
  disabled?: boolean;
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon;
  const [isPressed, setIsPressed] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.();
      }, 300);
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isPressed, onClick]);

  useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setIsPressed(false);
    }
  }, [disabled]);

  return (
    <button
      type="button"
      className={bellhopTwMerge(
        makeLegendClassName("legendSliderButton"),
        // common
        "w-5 group inline-flex items-center truncate rounded-bellhop-small transition",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        // light
        disabled
          ? "text-bellhop-content-subtle"
          : "text-bellhop-content hover:text-bellhop-content-emphasis hover:bg-bellhop-background-subtle",
        // dark
        disabled
          ? "dark:text-dark-bellhop-subtle"
          : "dark:text-dark-bellhop dark:hover:text-bellhop-content-emphasis dark:hover:bg-dark-bellhop-background-subtle",
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        setIsPressed(true);
      }}
      onMouseUp={(e) => {
        e.stopPropagation();
        setIsPressed(false);
      }}
    >
      <Icon className={"w-full"} />
    </button>
  );
};

export interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[];
  colors?: (Color | string)[];
  onClickLegendItem?: (category: string, color: Color | string) => void;
  activeLegend?: string;
  enableLegendSlider?: boolean;
}

type HasScrollProps = {
  left: boolean;
  right: boolean;
};

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = themeColorRange,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props;
  const scrollableRef = React.useRef<HTMLInputElement>(null);
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null);

  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null);
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const checkScroll = useCallback(() => {
    const scrollable = scrollableRef?.current;
    if (!scrollable) return;

    const hasLeftScroll = scrollable.scrollLeft > 0;
    const hasRightScroll =
      scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft;

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll });
  }, [setHasScroll]); // dependencies are listed here in the array

  const scrollToTest = useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current;
      const scrollButtons = scrollButtonsRef?.current;
      const width = element?.clientWidth ?? 0;
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0;

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        });
        setTimeout(() => {
          checkScroll();
        }, 400);
      }
    },
    [enableLegendSlider, checkScroll],
  );

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left");
      } else if (key === "ArrowRight") {
        scrollToTest("right");
      }
    };
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned);
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned);
      }, 300);
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isKeyDowned, scrollToTest]);

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      setIsKeyDowned(e.key);
    }
  };
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation();
    setIsKeyDowned(null);
  };

  React.useEffect(() => {
    const scrollable = scrollableRef?.current;
    if (enableLegendSlider) {
      checkScroll();

      scrollable?.addEventListener("keydown", keyDown);
      scrollable?.addEventListener("keyup", keyUp);
    }

    return () => {
      //   document.removeEventListener("keydown", keyDown);
      //   document.removeEventListener("keyup", keyUp);
      scrollable?.removeEventListener("keydown", keyDown);
      scrollable?.removeEventListener("keyup", keyUp);
    };
  }, [checkScroll, enableLegendSlider]);

  return (
    <ol
      ref={ref}
      className={bellhopTwMerge(
        makeLegendClassName("root"),
        "relative overflow-hidden",
        className,
      )}
      {...other}
    >
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={bellhopTwMerge(
          //common
          "h-full flex",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "pl-4 pr-12  items-center overflow-auto snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
              : ""
            : "flex-wrap",
        )}
      >
        {categories.map((category, idx) => (
          <LegendItem
            key={`item-${idx}`}
            name={category}
            color={colors[idx % colors.length]}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={bellhopTwMerge(
              // light mode
              "bg-bellhop-background",
              // dark mode
              "dark:bg-dark-bellhop-background",
              // common
              "absolute flex top-0 pr-1 bottom-0 right-0 items-center justify-center h-full",
            )}
            ref={scrollButtonsRef}
          >
            <ScrollButton
              icon={ChevronLeftFill}
              onClick={() => {
                setIsKeyDowned(null);
                scrollToTest("left");
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={ChevronRightFill}
              onClick={() => {
                setIsKeyDowned(null);
                scrollToTest("right");
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  );
});

Legend.displayName = "Legend";

export default Legend;
