import { fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";
import { vi } from "vitest";
import { Input } from "../src/components/Input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("handles different input types", () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(<Input type="password" />);
    const passwordInput = screen.getByDisplayValue("");
    expect(passwordInput).toHaveAttribute("type", "password");

    rerender(<Input type="number" />);
    expect(screen.getByRole("spinbutton")).toHaveAttribute("type", "number");

    rerender(<Input type="tel" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "tel");
  });

  it("displays placeholder text", () => {
    render(<Input placeholder="Enter your email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("handles controlled value", () => {
    const { rerender } = render(
      <Input value="test value" onChange={() => {}} />,
    );
    expect(screen.getByDisplayValue("test value")).toBeInTheDocument();

    rerender(<Input value="updated value" onChange={() => {}} />);
    expect(screen.getByDisplayValue("updated value")).toBeInTheDocument();
  });

  it("calls onChange when value changes", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur when input loses focus", () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} />);

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
  });

  it("shows error state", () => {
    render(<Input error />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("ring-red-300", "focus:ring-red-500");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("shows required state", () => {
    render(<Input required />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("aria-required", "true");
  });

  it("sets proper aria attributes", () => {
    render(<Input id="test-input" ariaDescribedBy="test-description" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("id", "test-input");
    expect(input).toHaveAttribute("aria-describedby", "test-description");
  });

  it("applies default styling", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("ring-gray-300", "focus:ring-indigo-500");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("custom-class");
  });

  it("maintains base styling with custom className", () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("block", "w-full", "rounded-md", "custom-class");
  });

  it("applies disabled styling", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass(
      "disabled:cursor-not-allowed",
      "disabled:bg-gray-50",
    );
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <label>
          Default Input
          <Input />
        </label>
        <label>
          Email Input
          <Input type="email" placeholder="Email" />
        </label>
        <label>
          Password Input
          <Input type="password" placeholder="Password" />
        </label>
        <label>
          Disabled Input
          <Input disabled placeholder="Disabled" />
        </label>
        <label>
          Error Input
          <Input error placeholder="Error" />
        </label>
        <label>
          Required Input
          <Input required placeholder="Required" />
        </label>
        <label htmlFor="test">
          Test Input
          <Input id="test" name="test" ariaDescribedBy="test-desc" />
        </label>
      </div>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
