import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Spinner } from "../components/Spinner";

/**
 * Displays a button or a component that looks like a button.
 */

const meta: Meta<typeof Spinner> = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
  parameters: {
    layout: "centered",
  },
  args: {
    size: "small",
    children: "Loading",
    show: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
