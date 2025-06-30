import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "components";
import {
  SimpleSelect,
  SimpleSelectControlled,
  SimpleSelectForm,
  SimpleSelectWithStaticAndDynamicChildren,
} from "./helpers/SimpleSelect";

import { PaintbrushIcon } from "lucide-react";

const meta: Meta<typeof Select> = {
  title: "UI/Input/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const UncontrolledDefault: Story = {
  render: SimpleSelect,
  args: {},
};

export const UncontrolledDefaultWithStaticAndDynamicChildren: Story = {
  render: SimpleSelectWithStaticAndDynamicChildren,
  args: {},
};

export const UncontrolledOnValueChange: Story = {
  render: SimpleSelect,
  args: { onValueChange: (v: string) => alert(v) },
};

export const UncontrolledEnableClear: Story = {
  render: SimpleSelect,
  args: { onValueChange: (v: string) => alert(v), enableClear: true },
};

export const UncontrolledDefaultValue: Story = {
  render: SimpleSelect,
  args: {
    defaultValue: "5",
  },
};

export const Icon: Story = {
  render: SimpleSelect,
  args: {
    defaultValue: "5",
    icon: PaintbrushIcon,
  },
};

export const UncontrolledDisabled: Story = {
  render: SimpleSelect,
  args: {
    icon: PaintbrushIcon,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: SimpleSelectControlled,
};

export const Error: Story = {
  render: SimpleSelect,
  args: {
    error: true,
    errorMessage: "Error message",
  },
};

export const Form: Story = {
  render: SimpleSelectForm,
  args: {
    required: true,
  },
};

export const WithCustomMinWidth: Story = {
  render: SimpleSelect,
  args: {
    className: "min-w-min w-[95px]",
  },
};
