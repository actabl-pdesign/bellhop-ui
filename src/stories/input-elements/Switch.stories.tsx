import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "components";
import { SimpleSwitch, SimpleIdSwitch } from "./helpers/SimpleSwitch";

const meta: Meta<typeof Switch> = {
  title: "UI/Input/Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Uncontrolled: Story = {
  args: {},
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomColor: Story = {
  args: {
    color: "green",
  },
};

export const Tooltip: Story = {
  args: {
    tooltip: "Action disabled",
  },
};

export const TooltipDisabled: Story = {
  args: {
    tooltip: "Action disabled",
    disabled: true,
  },
};

export const Controlled: Story = {
  render: SimpleSwitch,
};

export const Required: Story = {
  render: SimpleSwitch,
  args: {
    required: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: "Something is wrong",
  },
};

export const Id: Story = {
  render: SimpleIdSwitch,
  args: {
    required: true,
  },
};
