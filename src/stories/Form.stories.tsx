import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { z } from "zod";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Label } from "../components/Label";

const meta = {
  title: "pattern/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const BasicForm: Story = {
  render: () => (
    <div className="w-96">
      <Form onSubmit={(data) => console.log("Form submitted:", data)}>
        <div>
          <Label htmlFor="name">Full Name</Label>
          <div className="mt-1">
            <Input id="name" type="text" placeholder="Enter your full name" />
          </div>
        </div>
        <div>
          <Label htmlFor="email" required>
            Email address
          </Label>
          <div className="mt-1">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="w-96">
      <Form
        schema={loginSchema}
        onSubmit={(data) => console.log("Login submitted:", data)}
        defaultValues={{ email: "", password: "" }}
      >
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="mt-1">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="mt-1">
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <div>
          <Button variant="primary" type="submit" className="w-full">
            Sign in
          </Button>
        </div>
      </Form>
    </div>
  ),
};

export const RegisterForm: Story = {
  render: () => (
    <div className="w-96">
      <Form onSubmit={(data) => console.log("Register submitted:", data)}>
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <div className="mt-1">
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <div className="mt-1">
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="mt-1">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="mt-1">
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Button type="submit" variant="primary">
            Create account
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  ),
};
