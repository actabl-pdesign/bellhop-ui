import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarIcon } from "lucide-react";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "components";
import { BaseColors, Color } from "lib";

const meta: Meta = {
  title: "UI/Input/Tabs",
  component: TabGroup,
};

export default meta;
type Story = StoryObj<typeof TabGroup>;

interface MyTabProps {
  variant?: "line" | "pill";
  defaultIndex?: number;
  showText?: boolean;
  args?: any;
}

//Components
function MyTab(props: MyTabProps) {
  const { variant = "line", defaultIndex = 0, showText = true,  args } = props;

  const tabLabels = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <TabGroup defaultIndex={defaultIndex} {...args}>
      <TabList variant={variant}>
        {tabLabels.map((label, index) => (
          <Tab icon={CalendarIcon} key={index}>
            {showText ? label : null}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>Content of tab 1</TabPanel>
        <TabPanel>Content of tab 2</TabPanel>
        <TabPanel>Content of tab 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function TabSet({ showText = true, variant = "line", ...args }) {
  // Only allow "line" or "pill" for variant
  const safeVariant: "line" | "pill" = variant === "pill" ? "pill" : "line";
  return (
    <>
      <div className="space-y-4">
        <MyTab variant={safeVariant} showText={showText} {...args} />
      </div>
    </>
  );
}

// Templates
const TabSetTemplate = {
  render: (args: any) => <TabSet {...args} />, 
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["line", "pill"],
      defaultValue: "line",
      table: {
        type: { summary: '"line" | "pill"' },
        defaultValue: { summary: '"line"' },
      },
    },
  },
};


// Stories

export const Line: Story = {
  ...TabSetTemplate,
  args: { variant: "line" },
};

export const Pill: Story = {
  ...TabSetTemplate,
  args: { variant: "pill" },
};
