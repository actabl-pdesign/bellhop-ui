import { fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { vi } from "vitest";
import { Button } from "../src/components/Button";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("shows loading state", () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when loading", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} loading>
        Click me
      </Button>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct variant classes", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-indigo-600");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gray-200");

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button")).toHaveClass("border", "bg-white");

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button")).toHaveClass("hover:bg-gray-100");

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-3", "py-2");

    rerender(<Button size="medium">Medium</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-4", "py-2");

    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-6", "py-3");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("supports different button types", () => {
    const { rerender } = render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");

    rerender(<Button type="reset">Reset</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });

  it("has proper aria-label", () => {
    render(<Button ariaLabel="Custom label">Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Custom label",
    );
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <Button>Default Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button loading>Loading Button</Button>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
