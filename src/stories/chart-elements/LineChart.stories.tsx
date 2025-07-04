import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { LineChart } from "components";
import { CustomTooltipProps } from "components/chart-elements/common/CustomTooltipProps";
import { Color, currencyValueFormatter } from "lib";
import {
  simpleBaseChartData as data,
  simpleBaseChartDataWithNulls,
  singleAndMultipleData,
  longBaseChartData,
  longIndexBaseChartData,
  simpleBaseChartWithNegativeValues,
} from "./helpers/testData";
import { valueFormatter } from "./helpers/utils";

const meta: Meta<typeof LineChart> = {
  title: "Visualizations/Chart/LineChart",
  component: LineChart,
  args: {
    categories: ["Sales", "Successful Payments"],
    index: "month",
    data,
    className: "h-72",
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {},
};

export const DefaultNegativeValues: Story = {
  args: {
    data: simpleBaseChartWithNegativeValues,
  },
};

export const ValueFormatter: Story = {
  args: { valueFormatter: valueFormatter, yAxisWidth: 60 },
};

export const AutoMinValue: Story = {
  args: { autoMinValue: true },
};

export const MinValueAndMaxValue: Story = {
  args: { minValue: -1000, maxValue: 4000 },
};

export const OtherColors: Story = {
  args: { colors: ["rose", "purple"] },
};

export const CustomColors: Story = {
  args: {
    colors: ["#32a852", "orange-600"],
  },
};

export const ChangedCategoriesOrder: Story = {
  args: { categories: ["Successful Payments", "Sales"] },
};

export const LongValues: Story = {
  args: { categories: ["This is an edge case"] },
};

export const MultipleCategories: Story = {
  args: {
    categories: ["Sales", "Successful Payments"],
    yAxisWidth: 110,
  },
};

export const NoData: Story = {
  args: { data: [] },
};

export const NoDataText: Story = {
  args: { data: [], noDataText: "No data, try again later." },
};

export const NoCategories: Story = {
  args: { categories: undefined },
};

export const NoIndex: Story = {
  args: { index: undefined },
};
export const CurveTypeNatural: Story = {
  args: { curveType: "natural" },
};

export const ConnectNullsTrue: Story = {
  args: { data: simpleBaseChartDataWithNulls, connectNulls: true },
};

export const ConnectNullsFalse: Story = {
  args: { data: simpleBaseChartDataWithNulls, connectNulls: false },
};

export const Animation: Story = {
  args: { showAnimation: true },
};

export const LongAnimationDuration: Story = {
  args: { showAnimation: true, animationDuration: 5000 },
};

export const OnValueChange: Story = {
  args: { onValueChange: (v: any) => alert(JSON.stringify(v)) },
};

export const OneDataValue: Story = {
  args: { data: data.slice(0, 1) },
};

export const OneDataValueAndOnValueChange: Story = {
  args: {
    data: data.slice(0, 1),
    onValueChange: (v: any) => alert(JSON.stringify(v)),
  },
};

export const SingleAndMultipleData: Story = {
  args: { data: singleAndMultipleData },
};

export const SingleAndMultipleDataAndOnValueChange: Story = {
  args: {
    data: singleAndMultipleData,
    onValueChange: (v: any) => alert(JSON.stringify(v)),
  },
};

export const LegendSlider: Story = {
  args: { enableLegendSlider: true },
};
export const PreserveStartEnd: Story = {
  args: { intervalType: "preserveStartEnd" },
};

export const LongDataInput: Story = {
  args: { data: longBaseChartData },
};

export const LongDataInputAndPreserveStartEnd: Story = {
  args: { data: longBaseChartData, intervalType: "preserveStartEnd" },
};

export const LongIndexName: Story = {
  args: { data: longIndexBaseChartData },
};

export const LongIndexNameAndPreserveStartEnd: Story = {
  args: { data: longIndexBaseChartData, intervalType: "preserveStartEnd" },
};

export const NoAxes: Story = {
  args: { showXAxis: false, showYAxis: false },
};

export const NoYAxisStartEndOnly: Story = {
  args: { showYAxis: false, startEndOnly: true },
};

export const RotateXLabels: Story = {
  args: {
    data: longBaseChartData,
    rotateLabelX: { angle: -45, verticalShift: 15, xAxisHeight: 50 },
  },
};

//Custom tooltips
const customTooltipColors: Color[] = ["indigo"];
const customTooltipIndex = "month";
const getBadgeColor = (percentage: number | undefined) => {
  if (!percentage || percentage === 0) return "neutral";
  else if (percentage > 0) return "green";
  else return "red";
};

export const CustomTooltipSimple: Story = {
  args: {
    yAxisWidth: 65,
    index: customTooltipIndex,
    categories: ["Sales"],
    colors: customTooltipColors,
    valueFormatter: currencyValueFormatter,
    customTooltip: (props: CustomTooltipProps) => {
      const { payload, active, label } = props;
      if (!active || !payload) return null;

      const categoryPayload = payload?.[0];
      if (!categoryPayload) return null;
      return (
        <div className="w-56 rounded-bellhop-default text-bellhop-default bg-bellhop-background p-2 shadow-bellhop-dropdown border border-bellhop-border">
          <div className="flex flex-1 space-x-2.5">
            <div
              className={`w-1.5 flex flex-col bg-${categoryPayload.color}-500 rounded`}
            />
            <div className="w-full">
              <p className="font-medium text-bellhop-content-emphasis">
                {label}
              </p>
              <div className="flex items-center justify-between space-x-8">
                <p className="text-right text-bellhop-content whitespace-nowrap">
                  {categoryPayload.dataKey}
                </p>
                <p className="font-medium text-right whitespace-nowrap text-bellhop-content-emphasis">
                  {currencyValueFormatter(categoryPayload.value as number)}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
};

export const CustomTooltipPreviousDay: Story = {
  args: {
    yAxisWidth: 65,
    index: customTooltipIndex,
    categories: ["Sales"],
    colors: customTooltipColors,
    valueFormatter: currencyValueFormatter,
    customTooltip: (props: CustomTooltipProps) => {
      const { payload, active, label } = props;
      if (!active || !payload) return null;

      const categoryPayload = payload?.[0];
      if (!categoryPayload) return null;
      const value = categoryPayload.value as number;
      const dataKey = categoryPayload.dataKey as number;

      const previousIndex = data.findIndex(
        (e) => e[customTooltipIndex] === label,
      );
      const previousValues: any =
        previousIndex > 0 ? data[previousIndex - 1] : {};
      const prev = previousValues ? previousValues[dataKey] : undefined;
      const percentage = ((value - prev) / prev) * 100;
      const color = getBadgeColor(percentage);

      return (
        <div className="w-56 translate-y-14 flex items-center justify-between rounded-bellhop-default text-bellhop-default bg-bellhop-background p-2 shadow-bellhop-dropdown border border-bellhop-border">
          <span className="text-right text-bellhop-content whitespace-nowrap">
            {dataKey}
          </span>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-right whitespace-nowrap text-bellhop-content-emphasis">
              {currencyValueFormatter(value)}
            </span>
            {percentage ? (
              <span
                className={`inline-flex text-xs px-1.5 py-0.5 bg-${color}-100 text-${color}-600 rounded`}
              >
                {percentage > 0 ? "+" : ""}
                {percentage.toFixed(1)}%
              </span>
            ) : null}
          </div>
        </div>
      );
    },
  },
};

export const CustomTooltipComplex: Story = {
  args: {
    yAxisWidth: 65,
    index: customTooltipIndex,
    categories: ["Sales"],
    colors: customTooltipColors,
    valueFormatter: currencyValueFormatter,
    customTooltip: (props: CustomTooltipProps) => {
      const { payload, active, label } = props;
      if (!active || !payload) return null;

      const categoryPayload = payload?.[0];
      if (!categoryPayload) return null;
      const value = categoryPayload.value as number;
      const dataKey = categoryPayload.dataKey as number;

      const previousIndex = data.findIndex(
        (e) => e[customTooltipIndex] === label,
      );
      const previousValues: any =
        previousIndex > 0 ? data[previousIndex - 1] : {};
      const prev = previousValues ? previousValues[dataKey] : undefined;
      const percentage = ((value - prev) / prev) * 100;
      const badgeColor = getBadgeColor(percentage);

      return (
        <div className="rounded-bellhop-default bg-bellhop-background p-2 shadow-bellhop-dropdown border border-bellhop-border">
          <div className="flex flex-1 space-x-2.5">
            <div
              className={`w-1 flex flex-col bg-${categoryPayload.color}-500 rounded`}
            />
            <div className="w-full">
              <p className="text-bellhop-default font-medium text-bellhop-content-emphasis">
                {dataKey}
              </p>
              <p className="text-bellhop-default text-bellhop-content-subtle">
                {label}
              </p>
              <p className="mt-2 font-medium whitespace-nowrap text-bellhop-content-emphasis">
                {currencyValueFormatter(value)}
              </p>
              {percentage ? (
                <div className="mt-1 flex items-end space-x-2">
                  <div
                    className={`inline-flex text-bellhop-default px-1.5 py-0.5 bg-${badgeColor}-100 text-${badgeColor}-600 rounded`}
                  >
                    {percentage > 0 ? "+" : null}
                    {percentage.toFixed(1)}%
                  </div>
                  <div className="whitespace-nowrap text-bellhop-default text-bellhop-content-subtle">
                    from previous month
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    },
  },
};

export const Padding: Story = {
  args: {
    padding: { left: 0, right: 0 },
  },
};
export const tickGap: Story = {
  args: {
    data: longBaseChartData,
    tickGap: 200,
  },
};

export const AxisLabels: Story = {
  args: {
    xAxisLabel: "Month of Year",
    yAxisLabel: "Amount (USD)",
  },
};
