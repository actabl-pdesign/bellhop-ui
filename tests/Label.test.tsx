import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { Label } from "../src/components/Label"

expect.extend(toHaveNoViolations)

describe("Label", () => {
  it("renders correctly", () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText("Test Label")).toBeInTheDocument()
  })

  it("associates with input via htmlFor", () => {
    render(<Label htmlFor="test-input">Test Label</Label>)
    const label = screen.getByText("Test Label")
    expect(label).toHaveAttribute("for", "test-input")
  })

  it("shows required indicator when required", () => {
    render(<Label required>Required Label</Label>)
    const label = screen.getByText("Required Label")
    expect(label).toHaveClass('after:content-["*"]')
  })

  it("shows optional indicator when variant is optional", () => {
    render(<Label variant="optional">Optional Label</Label>)
    const label = screen.getByText("Optional Label")
    expect(label).toHaveClass('after:content-["(optional)"]')
  })

  it("shows error styling when error is true", () => {
    render(<Label error>Error Label</Label>)
    const label = screen.getByText("Error Label")
    expect(label).toHaveClass("text-red-600")
  })

  it("required prop overrides variant", () => {
    render(
      <Label required variant="optional">
        Label
      </Label>,
    )
    const label = screen.getByText("Label")
    expect(label).toHaveClass('after:content-["*"]')
    expect(label).not.toHaveClass('after:content-["(optional)"]')
  })

  it("applies default styling", () => {
    render(<Label>Default Label</Label>)
    const label = screen.getByText("Default Label")
    expect(label).toHaveClass("text-neutral-700")
  })

  it("applies custom className", () => {
    render(<Label className="custom-class">Label</Label>)
    const label = screen.getByText("Label")
    expect(label).toHaveClass("custom-class")
  })

  it("maintains base styling with custom className", () => {
    render(<Label className="custom-class">Label</Label>)
    const label = screen.getByText("Label")
    expect(label).toHaveClass("block", "text-sm", "font-medium", "custom-class")
  })

  it("combines error and required states", () => {
    render(
      <Label error required>
        Error Required Label
      </Label>,
    )
    const label = screen.getByText("Error Required Label")
    expect(label).toHaveClass("text-red-600")
  })

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <Label htmlFor="input1">Default Label</Label>
        <Label htmlFor="input2" required>
          Required Label
        </Label>
        <Label htmlFor="input3" variant="optional">
          Optional Label
        </Label>
        <Label htmlFor="input4" error>
          Error Label
        </Label>
        <Label htmlFor="input5" error required>
          Error Required Label
        </Label>
      </div>,
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
