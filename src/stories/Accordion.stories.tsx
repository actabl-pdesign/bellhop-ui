import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  ArrowLeftIcon,
  CheckSquareIcon,
  PlusCircleIcon,
  TicketIcon
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../components/Accordion"

/**
 * A vertically stacked set of interactive headings that each reveal a section
 * of content.
 */
const meta: Meta<typeof Accordion> = {
  title: "ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    type: "single",
    collapsible: true
  },
  parameters: {
    layout: "centered"
  }
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default behavior of the accordion allows only one item to be open.
 */
export const Default: Story = {
  render: () => (
    <div className="mx-auto mt-3 w-96">
      <Accordion type="single" className="mx-auto mt-3 max-w-sm" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>In the app</AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Tap the Inbox icon and then tap Add receipts.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Tap the + symbol to attach a photo or PDF of the receipt for our
                system to match.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Via browser extension</AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                <span className="underline">Download</span> the browser
                extension for Chrome or Safari. (Firefox support is coming
                soon.)
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Click the extension icon at the top of your browser. Under the
                Receipts tab, upload an image or click Screenshot current tab to
                automatically attach the receipt to the expense.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" disabled>
          <AccordionTrigger>Via email forwarding</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const WithIcons: Story = {
  render: () => (
    <div className="mx-auto mt-3 w-96">
      <h1 className="text-md font-semibold text-gray-800">
        Managing Your Booking Online
      </h1>
      <Accordion type="multiple" className="mt-3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <TicketIcon className="size-4 text-indigo-600" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <ArrowLeftIcon className="size-4 text-indigo-600" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <PlusCircleIcon className="size-4 text-indigo-600" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <CheckSquareIcon className="size-4 text-indigo-600" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
