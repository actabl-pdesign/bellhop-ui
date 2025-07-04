import React from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { DonutChart } from "components";

import { CustomTooltipProps } from "components/chart-elements/common/CustomTooltipProps";
import { currencyValueFormatter } from "lib";
import {
  simpleBaseChartData as data2,
  simpleSingleCategoryData as data,
} from "stories/chart-elements/helpers/testData";

const meta: Meta<typeof DonutChart> = {
  title: "Visualizations/Chart/DonutChart",
  component: DonutChart,
  args: { category: "sales", index: "city", data },
};

export default meta;
type Story = StoryObj<typeof DonutChart>;
//   if (args.onValueChange?.length === 0) {
//     args.onValueChange = undefined;
//   }
//   return (
//     <>
//       <Title>Base Layer (Beta)</Title>
//       <div className="w-full mt-4">
//         <Card>
//           <Title>Sales</Title>
//           <DonutChart className="mt-5" {...args} />
//           <div className="mt-6">
//             <List>
//               {data.map((item) => (
//                 <ListItem key={item.city}>
//                   <span> {item.city} </span>
//                   <Flex className="space-x-2" justifyContent="end">
//                     <BadgeDelta
//                       deltaType={item.deltaType as DeltaType}
//                       isIncreasePositive={true}
//                       size="xs"
//                     >
//                       {item.delta}
//                     </BadgeDelta>
//                   </Flex>
//                 </ListItem>
//               ))}
//             </List>
//           </div>
//         </Card>
//       </div>
//     </>
//   );
// };

export const Default: Story = {
  args: {},
};

export const ValueFormatter: Story = {
  args: { valueFormatter: currencyValueFormatter },
};

export const CustomLabel: Story = {
  args: { valueFormatter: currencyValueFormatter, label: "Hello there" },
};

export const LabelDisabled: Story = {
  args: {
    valueFormatter: currencyValueFormatter,
    label: "Hello there",
    showLabel: false,
  },
};

export const OtherColors: Story = {
  args: { colors: ["blue", "amber", "indigo", "gree", "rose", "orange"] },
};

export const CustomColors: Story = {
  args: {
    colors: [
      "#32a852",
      "#fcba03",
      "orange-600",
      "blue-400",
      "violet-400",
      "rose-400",
    ],
  },
};

export const MoreDatapointsThanColors: Story = {
  args: {
    data: [
      // extra long data array
      ...data,
      ...data,
    ],
    colors: ["blue", "amber", "indigo", "green", "rose", "orange"],
  },
};

export const LongValues: Story = {
  args: {
    data: data.map((dataPoint) => ({
      ...dataPoint,
      sales: dataPoint.sales * 10000000,
    })),
    valueFormatter: currencyValueFormatter,
  },
};

export const VariantPie: Story = {
  args: { variant: "pie" },
};

export const NoData: Story = {
  args: { data: [] },
};

export const NoDataText: Story = {
  args: { data: [], noDataText: "No data, try again later." },
};

export const Animation: Story = {
  args: {
    showAnimation: true,
  },
};

export const LongAnimation: Story = {
  args: {
    showAnimation: true,
    animationDuration: 5000,
  },
};

export const OnValueChangeExample: Story = {
  args: { onValueChange: (value) => alert(JSON.stringify(value)) },
};

export const OnValueChangePieExample: Story = {
  args: {
    variant: "pie",
    onValueChange: (value) => alert(JSON.stringify(value)),
  },
};

//Custom tooltips
export const CustomTooltipSimple: Story = {
  args: {
    data: data2,
    index: "month",
    category: "Sales",
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
              className={`w-1.5 flex flex-col bg-${categoryPayload?.color}-500 rounded`}
            />
            <div className="w-full">
              <div className="flex items-center justify-between space-x-8">
                <p className="text-right text-bellhop-content whitespace-nowrap">
                  {categoryPayload.name}
                </p>
                <p className="font-medium text-right whitespace-nowrap text-bellhop-content-emphasis">
                  {currencyValueFormatter(categoryPayload.value as number)}
                </p>
              </div>
              <p>{label}</p>
              <p>{categoryPayload.dataKey}</p>
            </div>
          </div>
        </div>
      );
    },
  },
};
