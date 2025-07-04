"use client";
import { colorPalette, getColorClassNames, bellhopTwMerge } from "lib";
import React, { useState } from "react";

import {
  Bar,
  BarChart as ReChartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";

import BaseChartProps from "../common/BaseChartProps";
import ChartLegend from "../common/ChartLegend";
import ChartTooltip from "../common/ChartTooltip";
import NoData from "../common/NoData";
import {
  constructCategoryColors,
  deepEqual,
  getYAxisDomain,
} from "../common/utils";

import { BaseColors, defaultValueFormatter, themeColorRange } from "lib";
import { AxisDomain } from "recharts/types/util/types";

const renderShape = (
  props: any,
  activeBar: any | undefined,
  activeLegend: string | undefined,
  layout: string,
) => {
  const { fillOpacity, name, payload, value } = props;
  let { x, width, y, height } = props;

  if (layout === "horizontal" && height < 0) {
    y += height;
    height = Math.abs(height); // height must be a positive number
  } else if (layout === "vertical" && width < 0) {
    x += width;
    width = Math.abs(width); // width must be a positive number
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      opacity={
        activeBar || (activeLegend && activeLegend !== name)
          ? deepEqual(activeBar, { ...payload, value })
            ? fillOpacity
            : 0.3
          : fillOpacity
      }
    />
  );
};

export interface BarChartProps extends BaseChartProps {
  layout?: "vertical" | "horizontal";
  stack?: boolean;
  relative?: boolean;
  barCategoryGap?: string | number;
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (props, ref) => {
    const {
      data = [],
      categories = [],
      index,
      colors = themeColorRange,
      valueFormatter = defaultValueFormatter,
      layout = "horizontal",
      stack = false,
      relative = false,
      startEndOnly = false,
      animationDuration = 900,
      showAnimation = false,
      showXAxis = true,
      showYAxis = true,
      yAxisWidth = 56,
      intervalType = "equidistantPreserveStart",
      showTooltip = true,
      showLegend = true,
      showGridLines = true,
      autoMinValue = false,
      minValue,
      maxValue,
      allowDecimals = true,
      noDataText,
      onValueChange,
      enableLegendSlider = false,
      customTooltip,
      rotateLabelX,
      barCategoryGap,
      tickGap = 5,
      xAxisLabel,
      yAxisLabel,
      className,
      padding = !showXAxis && !showYAxis
        ? { left: 0, right: 0 }
        : { left: 20, right: 20 },
      ...other
    } = props;
    const CustomTooltip = customTooltip;
    const [legendHeight, setLegendHeight] = useState(60);
    const categoryColors = constructCategoryColors(categories, colors);
    const [activeBar, setActiveBar] = React.useState<any | undefined>(
      undefined,
    );
    const [activeLegend, setActiveLegend] = useState<string | undefined>(
      undefined,
    );
    const hasOnValueChange = !!onValueChange;

    function onBarClick(data: any, idx: number, event: React.MouseEvent) {
      event.stopPropagation();
      if (!onValueChange) return;
      if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
        setActiveLegend(undefined);
        setActiveBar(undefined);
        onValueChange?.(null);
      } else {
        setActiveLegend(data.tooltipPayload?.[0]?.dataKey);
        setActiveBar({
          ...data.payload,
          value: data.value,
        });
        onValueChange?.({
          eventType: "bar",
          categoryClicked: data.tooltipPayload?.[0]?.dataKey,
          ...data.payload,
        });
      }
    }

    function onCategoryClick(dataKey: string) {
      if (!hasOnValueChange) return;
      if (dataKey === activeLegend && !activeBar) {
        setActiveLegend(undefined);
        onValueChange?.(null);
      } else {
        setActiveLegend(dataKey);
        onValueChange?.({
          eventType: "category",
          categoryClicked: dataKey,
        });
      }
      setActiveBar(undefined);
    }
    const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);
    return (
      <div
        ref={ref}
        className={bellhopTwMerge("w-full h-80", className)}
        {...other}
      >
        <ResponsiveContainer className="h-full w-full">
          {data?.length ? (
            <ReChartsBarChart
              barCategoryGap={barCategoryGap}
              data={data}
              stackOffset={stack ? "sign" : relative ? "expand" : "none"}
              layout={layout === "vertical" ? "vertical" : "horizontal"}
              onClick={
                hasOnValueChange && (activeLegend || activeBar)
                  ? () => {
                      setActiveBar(undefined);
                      setActiveLegend(undefined);
                      onValueChange?.(null);
                    }
                  : undefined
              }
              margin={{
                bottom: xAxisLabel ? 30 : undefined,
                left: yAxisLabel ? 20 : undefined,
                right: yAxisLabel ? 5 : undefined,
                top: 5,
              }}
            >
              {showGridLines ? (
                <CartesianGrid
                  className={bellhopTwMerge(
                    // common
                    "stroke-1",
                    // light
                    "stroke-bellhop-border",
                    // dark
                    "dark:stroke-dark-bellhop-border",
                  )}
                  horizontal={layout !== "vertical"}
                  vertical={layout === "vertical"}
                />
              ) : null}

              {layout !== "vertical" ? (
                <XAxis
                  padding={padding}
                  hide={!showXAxis}
                  dataKey={index}
                  interval={startEndOnly ? "preserveStartEnd" : intervalType}
                  tick={{ transform: "translate(0, 6)" }}
                  ticks={
                    startEndOnly
                      ? [data[0][index], data[data.length - 1][index]]
                      : undefined
                  }
                  fill=""
                  stroke=""
                  className={bellhopTwMerge(
                    // common
                    "mt-4 text-bellhop-label",
                    // light
                    "fill-bellhop-content",
                    // dark
                    "dark:fill-dark-bellhop-content",
                  )}
                  tickLine={false}
                  axisLine={false}
                  angle={rotateLabelX?.angle}
                  dy={rotateLabelX?.verticalShift}
                  height={rotateLabelX?.xAxisHeight}
                  minTickGap={tickGap}
                >
                  {xAxisLabel && (
                    <Label
                      position="insideBottom"
                      offset={-20}
                      className="fill-bellhop-content-emphasis text-bellhop-default font-medium dark:fill-dark-bellhop-content-emphasis"
                    >
                      {xAxisLabel}
                    </Label>
                  )}
                </XAxis>
              ) : (
                <XAxis
                  hide={!showXAxis}
                  type="number"
                  tick={{ transform: "translate(-3, 0)" }}
                  domain={yAxisDomain as AxisDomain}
                  fill=""
                  stroke=""
                  className={bellhopTwMerge(
                    // common
                    "text-bellhop-label",
                    // light
                    "fill-bellhop-content",
                    // dark
                    "dark:fill-dark-bellhop-content",
                  )}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={valueFormatter}
                  minTickGap={tickGap}
                  allowDecimals={allowDecimals}
                  angle={rotateLabelX?.angle}
                  dy={rotateLabelX?.verticalShift}
                  height={rotateLabelX?.xAxisHeight}
                >
                  {xAxisLabel && (
                    <Label
                      position="insideBottom"
                      offset={-20}
                      className="fill-bellhop-content-emphasis text-bellhop-default font-medium dark:fill-dark-bellhop-content-emphasis"
                    >
                      {xAxisLabel}
                    </Label>
                  )}
                </XAxis>
              )}
              {layout !== "vertical" ? (
                <YAxis
                  width={yAxisWidth}
                  hide={!showYAxis}
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  domain={yAxisDomain as AxisDomain}
                  tick={{ transform: "translate(-3, 0)" }}
                  fill=""
                  stroke=""
                  className={bellhopTwMerge(
                    // common
                    "text-bellhop-label",
                    // light
                    "fill-bellhop-content",
                    // dark
                    "dark:fill-dark-bellhop-content",
                  )}
                  tickFormatter={
                    relative
                      ? (value: number) => `${(value * 100).toString()} %`
                      : valueFormatter
                  }
                  allowDecimals={allowDecimals}
                >
                  {yAxisLabel && (
                    <Label
                      position="insideLeft"
                      style={{ textAnchor: "middle" }}
                      angle={-90}
                      offset={-15}
                      className="fill-bellhop-content-emphasis text-bellhop-default font-medium dark:fill-dark-bellhop-content-emphasis"
                    >
                      {yAxisLabel}
                    </Label>
                  )}
                </YAxis>
              ) : (
                <YAxis
                  width={yAxisWidth}
                  hide={!showYAxis}
                  dataKey={index}
                  axisLine={false}
                  tickLine={false}
                  ticks={
                    startEndOnly
                      ? [data[0][index], data[data.length - 1][index]]
                      : undefined
                  }
                  type="category"
                  interval="preserveStartEnd"
                  tick={{ transform: "translate(0, 6)" }}
                  fill=""
                  stroke=""
                  className={bellhopTwMerge(
                    // common
                    "text-bellhop-label",
                    // light
                    "fill-bellhop-content",
                    // dark
                    "dark:fill-dark-bellhop-content",
                  )}
                >
                  {yAxisLabel && (
                    <Label
                      position="insideLeft"
                      style={{ textAnchor: "middle" }}
                      angle={-90}
                      offset={-15}
                      className="fill-bellhop-content-emphasis text-bellhop-default font-medium dark:fill-dark-bellhop-content-emphasis"
                    >
                      {yAxisLabel}
                    </Label>
                  )}
                </YAxis>
              )}
              <Tooltip
                wrapperStyle={{ outline: "none" }}
                isAnimationActive={false}
                cursor={{ fill: "#d1d5db", opacity: "0.15" }}
                content={
                  showTooltip ? (
                    ({ active, payload, label }) =>
                      CustomTooltip ? (
                        <CustomTooltip
                          payload={payload?.map((payloadItem: any) => ({
                            ...payloadItem,
                            color:
                              categoryColors.get(payloadItem.dataKey) ??
                              BaseColors.Neutral,
                          }))}
                          active={active}
                          label={label}
                        />
                      ) : (
                        <ChartTooltip
                          active={active}
                          payload={payload}
                          label={label}
                          valueFormatter={valueFormatter}
                          categoryColors={categoryColors}
                        />
                      )
                  ) : (
                    <></>
                  )
                }
                position={{ y: 0 }}
              />
              {showLegend ? (
                <Legend
                  verticalAlign="top"
                  height={legendHeight}
                  content={({ payload }) =>
                    ChartLegend(
                      { payload },
                      categoryColors,
                      setLegendHeight,
                      activeLegend,
                      hasOnValueChange
                        ? (clickedLegendItem: string) =>
                            onCategoryClick(clickedLegendItem)
                        : undefined,
                      enableLegendSlider,
                    )
                  }
                />
              ) : null}
              {categories.map((category) => (
                <Bar
                  className={bellhopTwMerge(
                    getColorClassNames(
                      categoryColors.get(category) ?? BaseColors.Neutral,
                      colorPalette.background,
                    ).fillColor,
                    onValueChange ? "cursor-pointer" : "",
                  )}
                  key={category}
                  name={category}
                  type="linear"
                  stackId={stack || relative ? "a" : undefined}
                  dataKey={category}
                  fill=""
                  isAnimationActive={showAnimation}
                  animationDuration={animationDuration}
                  shape={(props: any) =>
                    renderShape(props, activeBar, activeLegend, layout)
                  }
                  onClick={onBarClick}
                />
              ))}
            </ReChartsBarChart>
          ) : (
            <NoData noDataText={noDataText} />
          )}
        </ResponsiveContainer>
      </div>
    );
  },
);

BarChart.displayName = "BarChart";

export default BarChart;
