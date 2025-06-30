import { bellhopTwMerge } from "lib";
import React from "react";

interface NoDataProps {
  noDataText?: string;
  className?: string;
}
const NoData = ({ className, noDataText = "No data" }: NoDataProps) => {
  return (
    <div
      className={bellhopTwMerge(
        // common
        "flex items-center justify-center w-full h-full border border-dashed rounded-bellhop-default",
        // light
        "border-bellhop-border",
        // dark
        "dark:border-dark-bellhop-border",
        className,
      )}
    >
      <p
        className={bellhopTwMerge(
          // light
          "text-bellhop-content text-bellhop-default",
          // dark
          "dark:text-dark-bellhop-content",
        )}
      >
        {noDataText}
      </p>
    </div>
  );
};

export default NoData;
