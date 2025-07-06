import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { z } from "zod"
import { Form } from "../src/components/Form"
import { Button } from "../src/components/Button"
import { Input } from "../src/components/Input"
import { Label } from "../src/components/Label"

expect.extend(toHaveNoViolations)

describe("Form", () => {
  it("renders correctly", () => {
    render(
      <Form onSubmit={() => {}}>
        <div>Test Form</div>
      </Form>,
    )
    const form = document.querySelector("form")
    expect(form).toBeInTheDocument()
    expect(screen.getByText("Test Form")).toBeInTheDocument()
  })

  it("calls onSubmit when form is submitted", async () => {
    const handleSubmit = jest.fn()
    render(
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </Form>,
    )

    fireEvent.click(screen.getByRole("button"))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it("applies custom className", () => {
    render(
      <Form onSubmit={() => {}} className="custom-form">
        <div>Test</div>
      </Form>,
    )

    const form = document.querySelector("form")
    expect(form).toHaveClass("custom-form")
  })

  it("maintains base styling with custom className", () => {
    render(
      <Form onSubmit={() => {}} className="custom-form">
        <div>Test</div>
      </Form>,
    )

    const form = document.querySelector("form")
    expect(form).toHaveClass("space-y-6", "custom-form")
  })

  it("works with default values", () => {
    const defaultValues = { email: "test@example.com" }
    render(
      <Form onSubmit={() => {}} defaultValues={defaultValues}>
        <Input name="email" defaultValue="test@example.com" />
      </Form>,
    )

    expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument()
  })

  it("works with validation schema", async () => {
    const schema = z.object({
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password too short"),
    })

    const handleSubmit = jest.fn()

    render(
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" />
        <Input name="password" type="password" />
        <Button type="submit">Submit</Button>
      </Form>,
    )

    // Submit form with invalid data
    fireEvent.click(screen.getByRole("button", { name: /submit/i }))

    // Form should not submit due to validation errors
    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  it("integrates with form inputs", async () => {
    const handleSubmit = jest.fn()

    render(
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>,
    )

    // Fill in form
    fireEvent.change(screen.getByPlaceholderText("Enter email"), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("Enter password"), {
      target: { value: "password123" },
    })

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /submit/i }))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it("handles form submission with complex data", async () => {
    const handleSubmit = jest.fn()

    render(
      <Form onSubmit={handleSubmit}>
        <Input name="firstName" placeholder="First Name" />
        <Input name="lastName" placeholder="Last Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Button type="submit">Submit</Button>
      </Form>,
    )

    // Fill in form
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    })
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    })
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john@example.com" },
    })

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /submit/i }))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      })
    })
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Form onSubmit={() => {}}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>,
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
