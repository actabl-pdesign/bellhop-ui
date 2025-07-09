import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeaturedIcon } from "../components/FeaturedIcon";

const meta = {
  title: "ui/FeaturedIcon",
  component: FeaturedIcon,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  excludeStories: ["users"],
} satisfies Meta<typeof FeaturedIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
