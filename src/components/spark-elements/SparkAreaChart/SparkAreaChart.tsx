"use client";
import React from "react";
import {
  Area,
  AreaChart as ReChartsAreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  BaseColors,
  colorPalette,
  getColorClassNames,
  themeColorRange,
  bellhopTwMerge,
} from "lib";
import { CurveType } from "../../../lib/inputTypes";
import BaseSparkChartProps from "../common/BaseSparkChartProps";
import {
  constructCategoryColors,
  getYAxisDomain,
} from "components/chart-elements/common/utils";
import NoData from "components/chart-elements/common/NoData";
import { AxisDomain } from "recharts/types/util/types";

export interface SparkAreaChartProps extends BaseSparkChartProps {
  stack?: boolean;
  curveType?: CurveType;
  connectNulls?: boolean;
  showGradient?: boolean;
}

const AreaChart = React.forwardRef<HTMLDivElement, SparkAreaChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      stack = false,
      colors = themeColorRange,
      showAnimation = false,
      animationDuration = 900,
      showGradient = true,
      curveType = "linear",
      connectNulls = false,
      noDataText,
      autoMinValue = false,
      minValue,
      maxValue,
      className,
      ...other
    } = props;
    const categoryColors = constructCategoryColors(categories, colors);
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);

    return (
      <div
        ref={ref}
        className={bellhopTwMerge("w-28 h-12", className)}
        {...other}
      >
        <ResponsiveContainer className="h-full w-full">
          {data?.length ? (
            <ReChartsAreaChart
              data={data}
              margin={{ top: 1, left: 1, right: 1, bottom: 1 }}
            >
              <YAxis hide domain={yAxisDomain as AxisDomain} />
              <XAxis hide dataKey={index} />
              {categories.map((category) => {
                return (
                  <defs key={category}>
                    {showGradient ? (
                      <linearGradient
                        className={
                          getColorClassNames(
                            categoryColors.get(category) ?? BaseColors.Neutral,
                            colorPalette.text,
                          ).textColor
                        }
                        id={categoryColors.get(category)}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="currentColor"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="currentColor"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    ) : (
                      <linearGradient
                        className={
                          getColorClassNames(
                            categoryColors.get(category) ?? BaseColors.Neutral,
                            colorPalette.text,
                          ).textColor
                        }
                        id={categoryColors.get(category)}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop stopColor="currentColor" stopOpacity={0.3} />
                      </linearGradient>
                    )}
                  </defs>
                );
              })}
              {categories.map((category) => (
                <Area
                  className={
                    getColorClassNames(
                      categoryColors.get(category) ?? BaseColors.Neutral,
                      colorPalette.text,
                    ).strokeColor
                  }
                  strokeOpacity={1}
                  dot={false}
                  key={category}
                  name={category}
                  type={curveType}
                  dataKey={category}
                  stroke=""
                  fill={`url(#${categoryColors.get(category)})`}
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  isAnimationActive={showAnimation}
                  animationDuration={animationDuration}
                  stackId={stack ? "a" : undefined}
                  connectNulls={connectNulls}
                />
              ))}
            </ReChartsAreaChart>
          ) : (
            <NoData noDataText={noDataText} />
          )}
        </ResponsiveContainer>
      </div>
    );
  },
);

AreaChart.displayName = "AreaChart";

export default AreaChart;
