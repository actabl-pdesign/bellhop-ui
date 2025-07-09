import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/Select";

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 */

const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    args: {
      onValueChange: fn(),
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger title="Select" className="w-96">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegetables</SelectGroupLabel>
          <SelectItem value="aubergine">Aubergine</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="carrot">Carrot</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Meat</SelectGroupLabel>
          <SelectItem value="beef">Beef</SelectItem>
          <SelectItem value="chicken">Chicken</SelectItem>
          <SelectItem value="lamb">Lamb</SelectItem>
          <SelectItem value="pork">Pork</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
