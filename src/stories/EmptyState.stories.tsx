import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "../components/Button"
import { EmptyStateIssue, EmptyStateNotFound } from "../components/EmptyState"

/**
 *  Empty state can be used when there is no data to display indicating what the user can do next. Empty state provides explanation and guidance to help user progress.
 */

const meta = {
  title: "patterns/EmptyState",
  component: EmptyStateIssue,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  },
  excludeStories: ["users"]
} satisfies Meta<typeof EmptyStateIssue>

export default meta

type Story = StoryObj<typeof meta>

export const SomethingWentWrong: Story = {
  render: () => (
    <div className="flex w-96 flex-col items-center justify-center">
      <EmptyStateIssue className="mt-6 h-[140px]" />
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Something Went Wrong
      </h1>
      <p className="mt-2 text-balance text-center text-sm text-gray-600">
        We were unable to connect to the service. Click Retry to try again or
        View log to learn what happened.
      </p>
      <div className="flex flex-row gap-2">
        <Button className="group mt-8" variant="outline">
          View log
        </Button>
        <Button className="group mt-8" variant="primary">
          Retry
        </Button>
      </div>
    </div>
  ),
  args: {}
}

export const NotFound: Story = {
  render: () => (
    <div className="flex w-96 flex-col items-center justify-center">
      <EmptyStateNotFound className="mt-6 h-[140px]" />
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button className="group mt-8" variant="outline">
        Go to the home page
        <ArrowRightIcon className="stroke-gray-900" aria-hidden="true" />
      </Button>
    </div>
  ),
  args: {}
}
