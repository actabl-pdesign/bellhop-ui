import type { Meta, StoryObj } from "@storybook/react-vite";

import { Accordion } from "components";
import { SimpleAccordion } from "./helpers/SimpleAccordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Layout/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: SimpleAccordion,
};

export const DefaultOpen: Story = {
  render: SimpleAccordion,
  args: {
    defaultOpen: true,
  },
};
