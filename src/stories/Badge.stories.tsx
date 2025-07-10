// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { CheckIcon } from "lucide-react"

import { Badge } from "../components/Badge"

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta: Meta<typeof Badge> = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["solid", "soft", "outline"],
      control: { type: "radio" }
    },
    color: {
      options: [
        "brand",
        "indigo",
        "gray",
        "green",
        "red",
        "amber",
        "amber",
        "purple",
        "violet",
        "rose",
        "blue"
      ],
      control: { type: "select" }
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" }
    }
  },
  args: {
    variant: "solid",
    color: "brand",
    size: "medium",
    children: "Badge"
  },
  parameters: {
    layout: "centered"
  }
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * The `solid` form of the badge, to call for urgency,
 * when it needs to be highlighted in tu interface.
 */
export const Solid: Story = {
  args: {
    variant: "solid",
    color: "brand",
    size: "medium"
  }
}

/**
 * Use the `soft` badge to call for less urgent information, blending
 * into the interface while still signaling minor updates or statuses.
 */
export const Soft: Story = {
  args: {
    variant: "soft",
    color: "purple"
  }
}

/**
 * Use the `outline` badge for overlaying without obscuring interface details,
 * emphasizing clarity and subtlety..
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    color: "orange"
  }
}

/**
 * Use the `destructive` badge to  indicate errors, alerts, or the need for
 * immediate attention.
 */
export const Destructive: Story = {
  args: {
    variant: "solid",
    color: "error"
  }
}

/**
 * Use the `success` badge to  indicate completion.
 * It can also have a icon to reinforce the message.
 */
export const WithIcon: Story = {
  render: args => (
    <Badge {...args}>
      <CheckIcon size={16} />
      Success
    </Badge>
  ),
  args: {
    variant: "soft",
    color: "success",
    size: "small"
  }
}

/**
 * Badges can be used within the sizes `small` , `medium` and `large`.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row items-center gap-2">
      <Badge size="small" color="rose">
        Small
      </Badge>
      <Badge size="medium" color="rose">
        Medium
      </Badge>
      <Badge size="large" color="rose">
        Large
      </Badge>
    </div>
  ),
  args: {
    variant: "soft"
  }
}
