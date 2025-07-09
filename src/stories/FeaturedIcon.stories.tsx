import { AppleIcon } from "lucide-react"
import { FeaturedIcon } from "../components/FeaturedIcon"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

/* Displays a icon with background decoration.
 */

const meta: Meta<typeof FeaturedIcon> = {
  title: "ui/FeaturedIcon",
  component: FeaturedIcon,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="primary" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Primary</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="neutral" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Neutral</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="danger" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Danger</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon variant="warning" icon={<AppleIcon size={20} />} />
        <span className="text-sm text-gray-500">Warning</span>
      </div>
    </div>
  )
}
