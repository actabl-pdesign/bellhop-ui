import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  simpleBaseChartData as data,
  longBaseChartData,
  simpleBaseChartWithNegativeValues,
  singleAndMultipleData,
} from "../chart-elements/helpers/testData";
import { SparkBarChart } from "components/spark-elements";
import ExampleCard from "./helpers/ExampleCard";
import { smallVariantionDatas } from "./helpers/testData";

const meta: Meta<typeof SparkBarChart> = {
  title: "Visualizations/Chart/SparkBarChart",
  component: SparkBarChart,
  args: {
    categories: ["Sales", "Successful Payments"],
    index: "month",
    data,
    colors: ["green", "rose"],
  },
};

export default meta;
type Story = StoryObj<typeof SparkBarChart>;

export const Default: Story = {
  args: { categories: ["Sales"] },
};

export const DefaultNegativeValues: Story = {
  args: {
    data: simpleBaseChartWithNegativeValues,
  },
};

export const Stacked: Story = {
  args: { stack: true },
};

export const Relative: Story = {
  args: { relative: true },
};

export const OtherColors: Story = {
  args: { colors: ["blue", "green"] },
};

export const CustomColors: Story = {
  args: { colors: ["#32a852", "orange-600"] },
};

export const ChangedCategoriesOrder: Story = {
  args: { categories: ["Successful Payments", "Sales"] },
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

export const Animation: Story = {
  args: { showAnimation: true },
};

export const LongAnimationDuration: Story = {
  args: { showAnimation: true, animationDuration: 5000 },
};

export const OneDataValue: Story = {
  args: { data: data.slice(0, 1) },
};

export const SingleAndMultipleData: Story = {
  args: { data: singleAndMultipleData },
};

export const LongDataInput: Story = {
  args: { data: longBaseChartData },
};

export const MultipleZeroValues: Story = {
  args: {
    data: [
      {
        month: "May 21",
        Sales: 2390,
        "Successful Payments": 0,
      },
      {
        month: "Jun 21",
        Sales: 2390,
        "Successful Payments": 0,
      },
      {
        month: "Jul 21",
        Sales: 3490,
        "Successful Payments": 0,
      },
    ],
  },
};

export const WithCard: Story = {
  args: {
    categories: ["Sales"],
  },
  decorators: [
    (Story) => (
      <ExampleCard>
        <Story />
      </ExampleCard>
    ),
  ],
};

export const WithAutoMinValue: Story = {
  args: {
    data: smallVariantionDatas,
    index: "ts",
    categories: ["avg_price"],
    autoMinValue: true,
  },
};
