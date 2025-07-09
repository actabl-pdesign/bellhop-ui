import { Badge } from "../components/Badge"
import { Button } from "../components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/Card"
import { Input } from "../components/Input"
import { Label } from "../components/Label"

import { TrendingUp } from "lucide-react"

import type { Meta, StoryObj } from "@storybook/nextjs-vite"

/* Displays a card with header, content, and footer.
 */

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card
}

export default meta
type Story = StoryObj<typeof Card>

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Sample title</CardTitle>
      </CardHeader>
      <CardContent>Sample text inside a card. </CardContent>
    </Card>
  )
}

export const CompositeCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardDescription className="flex flex-row justify-between">
          Total Revenue
          <Badge variant="outline" size="small">
            <TrendingUp size={16} />
            +12.5%
          </Badge>
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums lg:text-4xl">
          $1,250.00
        </CardTitle>
        <CardContent></CardContent>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <TrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">
          +10% guests for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}

export const CardWithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <select>
                <option>Next.js</option>
                <option>React</option>
              </select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
