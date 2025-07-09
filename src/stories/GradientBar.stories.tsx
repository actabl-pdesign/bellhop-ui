import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GradientBar } from "../components/GradientBar";

const meta = {
  title: "ui/GradientBar",
  component: GradientBar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  excludeStories: ["users"],
} satisfies Meta<typeof GradientBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
