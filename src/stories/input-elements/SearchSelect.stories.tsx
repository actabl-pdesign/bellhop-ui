import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchSelect } from "components";
import {
  SimpleSearchSelect,
  SimpleSearchSelectControlled,
  SimpleSearchSelectWithStaticAndDynamicChildren,
  SimpleSearchSelectForm,
  SimpleSearchSelectServerSideRendering,
} from "./helpers/SimpleSearchSelect";

import { CalendarIcon } from "assets";

const meta: Meta<typeof SearchSelect> = {
  title: "UI/Input/SearchSelect",
  component: SearchSelect,
};

export default meta;
type Story = StoryObj<typeof SearchSelect>;

export const UncontrolledDefault: Story = {
  render: SimpleSearchSelect,
  args: {},
};

export const UncontrolledDefaultWithStaticAndDynamicChildren: Story = {
  render: SimpleSearchSelectWithStaticAndDynamicChildren,
  args: {},
};

export const UncontrolledOnValueChange: Story = {
  render: SimpleSearchSelect,
  args: { onValueChange: (v: string) => alert(v) },
};

export const UncontrolledEnableClear: Story = {
  render: SimpleSearchSelect,
  args: { onValueChange: (v: string) => alert(v), enableClear: true },
};

export const UncontrolledDefaultValue: Story = {
  render: SimpleSearchSelect,
  args: {
    defaultValue: "5",
  },
};

export const Icon: Story = {
  render: SimpleSearchSelect,
  args: {
    defaultValue: "5",
    icon: CalendarIcon,
  },
};

export const Error: Story = {
  render: SimpleSearchSelect,
  args: {
    error: true,
    errorMessage: "Error message",
  },
};

export const Disabled: Story = {
  render: SimpleSearchSelect,
  args: {
    onValueChange: (v: string) => alert(v),
    disabled: true,
  },
};

export const Controlled: Story = {
  render: SimpleSearchSelectControlled,
  args: {},
};

export const Form: Story = {
  render: SimpleSearchSelectForm,
  args: {
    required: true,
  },
};

export const ServerSideRendering: Story = {
  render: SimpleSearchSelectServerSideRendering,
  args: {
    required: true,
  },
};

export const WithCustomMinWidth: Story = {
  render: SimpleSearchSelect,
  args: {
    className: "min-w-min w-[95px]",
  },
};
