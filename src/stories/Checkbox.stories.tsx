import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "../components/Checkbox"
import { Label } from "../components/Label"

/**
 * A control that allows the user to toggle between checked and not checked.
 */

const meta: Meta<typeof Checkbox> = {
  title: "ui/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

/**
 * The default form of the checkbox.
 */
export const Default: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

/**
 * Use the `indeterminate` prop on parent checkboxes when its nested group is partially checked.
 */
export const Indeterminate: Story = {
  args: {
    checked: "indeterminate",
  },
}

/**
 * Use the `disabled` prop to disable the checkbox.
 */
export const Disabled: Story = {
  render: args => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={true} /> <Label disabled>Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={false} /> <Label disabled>Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked="indeterminate" />
        <Label disabled>Indeterminate</Label>
      </div>
    </div>
  ),
  args: {
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
  ),
}
