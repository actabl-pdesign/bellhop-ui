"use client";

import { cx } from "@/utils/cx";

const styles = {
  sm: {
    root: "gap-4",
    label: "text-sm font-medium",
    spinner: "size-8",
  },
  md: {
    root: "gap-4",
    label: "text-sm font-medium",
    spinner: "size-12",
  },
  lg: {
    root: "gap-4",
    label: "text-lg font-medium",
    spinner: "size-14",
  },
  xl: {
    root: "gap-5",
    label: "text-lg font-medium",
    spinner: "size-16",
  },
};

interface LoadingIndicatorProps {
  /**
   * The visual style of the loading indicator.
   * @default 'line-simple'
   */
  type?: "line-simple" | "line-spinner";
  /**
   * The size of the loading indicator.
   * @default 'sm'
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Optional text label displayed below the indicator.
   */
  label?: string;
}

export const LoadingIndicator = ({
  type = "line-simple",
  size = "sm",
  label,
}: LoadingIndicatorProps) => {
  const renderSpinner = () => {
    if (type === "line-spinner") {
      return (
        <svg
          className={cx("animate-spin", styles[size].spinner)}
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle
            className="stroke-fg-brand-primary"
            cx="16"
            cy="16"
            r="14"
            fill="none"
            strokeWidth="4"
            strokeDashoffset="40"
            strokeDasharray="100"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    // Default case: type === "line-simple"
    return (
      <svg
        className={cx("animate-spin", styles[size].spinner)}
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle
          className="text-bg-tertiary"
          cx="16"
          cy="16"
          r="14"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle
          className="stroke-fg-brand-primary"
          cx="16"
          cy="16"
          r="14"
          fill="none"
          strokeWidth="4"
          strokeDashoffset="75"
          strokeDasharray="100"
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center",
        styles[size].root,
      )}
    >
      {renderSpinner()}
      {label && (
        <span className={cx("text-secondary", styles[size].label)}>
          {label}
        </span>
      )}
    </div>
  );
};
