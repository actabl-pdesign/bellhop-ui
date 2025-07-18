import type { Meta, StoryObj } from "@storybook/react";

// Simple test component
const TestComponent = () => {
  return <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>Hello from Bellhop UI!</div>;
};

const meta: Meta<typeof TestComponent> = {
  title: "Test/Simple Component",
  component: TestComponent,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};