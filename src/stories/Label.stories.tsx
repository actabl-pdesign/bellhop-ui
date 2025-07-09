import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "../components/Checkbox"
import { Input } from "../components/Input"
import { Label } from "../components/Label"

const meta: Meta<typeof Label> = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      disabled: {
        control: "boolean"
      }
    }
  },
  parameters: {
    layout: "centered"
  }
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Label"
  }
}

export const LabelWithInput: Story = {
  render: () => (
    <form className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input
        placeholder="Enter password"
        id="password"
        name="password"
        type="password"
      />
    </form>
  )
}
export const LabelWithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">Accept terms and conditions</Label>
    </div>
  )
}

export const Disabled: Story = {
  render: () => (
    <Label disabled data-testid="label-disabled" htmlFor="search">
      Search
    </Label>
  )
}
