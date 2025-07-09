import React from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { vi } from "vitest"
import { LoginForm } from "../src/examples/LoginForm"

expect.extend(toHaveNoViolations)

describe("LoginForm", () => {
  it("renders correctly", () => {
    render(<LoginForm />)

    expect(screen.getByText("Sign in to your account")).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument()
  })

  it("displays error message when provided", () => {
    const errorMessage = "Invalid credentials"
    render(<LoginForm error={errorMessage} />)

    expect(screen.getByText("Authentication failed")).toBeInTheDocument()
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it("shows loading state", () => {
    render(<LoginForm loading />)

    const submitButton = screen.getByRole("button")
    expect(submitButton).toBeDisabled()
    expect(submitButton).toHaveTextContent("Signing in...")

    // Inputs should also be disabled
    expect(screen.getByLabelText(/email address/i)).toBeDisabled()
    expect(screen.getByLabelText(/password/i)).toBeDisabled()
  })

  it("calls onSubmit with form data", async () => {
    const handleSubmit = vi.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    })

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      })
    })
  })

  it("validates email format", async () => {
    const handleSubmit = vi.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    // Fill in invalid email
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "invalid-email" },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    })

    // Try to submit
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }))

    // Form should not submit due to validation error
    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  it("validates password length", async () => {
    const handleSubmit = vi.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    // Fill in short password
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "short" },
    })

    // Try to submit
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }))

    // Form should not submit due to validation error
    await waitFor(() => {
      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })

  it("handles async onSubmit", async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined)
    render(<LoginForm onSubmit={handleSubmit} />)

    // Fill in valid data
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    })

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }))

    // Button should show loading state
    expect(screen.getByRole("button")).toHaveTextContent("Signing in...")
    expect(screen.getByRole("button")).toBeDisabled()

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled()
    })
  })

  it("includes remember me checkbox", () => {
    render(<LoginForm />)

    const checkbox = screen.getByRole("checkbox", { name: /remember me/i })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    // Should be clickable
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it("includes forgot password link", () => {
    render(<LoginForm />)

    const link = screen.getByText("Forgot password?")
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe("A")
  })

  it("includes sign up link", () => {
    render(<LoginForm />)

    expect(screen.getByText("Don't have an account?")).toBeInTheDocument()

    const link = screen.getByText("Sign up here")
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe("A")
  })

  it("applies custom className", () => {
    const { container } = render(<LoginForm className="custom-form" />)

    expect(container.firstChild).toHaveClass("custom-form")
  })

  it("has proper form accessibility", () => {
    render(<LoginForm />)

    // Check form has proper role
    expect(screen.getByRole("form")).toBeInTheDocument()

    // Check labels are associated with inputs
    const emailInput = screen.getByLabelText(/email address/i)
    const passwordInput = screen.getByLabelText(/password/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()

    // Check required fields are marked
    expect(emailInput).toHaveAttribute("required")
    expect(passwordInput).toHaveAttribute("required")
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(<LoginForm />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it("should have no accessibility violations with error", async () => {
    const { container } = render(<LoginForm error="Invalid credentials" />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it("should have no accessibility violations when loading", async () => {
    const { container } = render(<LoginForm loading />)

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
