import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { LoginForm } from "../examples/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Examples/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log("Login submitted:", data);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: (data) => {
      console.log("Login submitted:", data);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
};

export const WithError: Story = {
  args: {
    error: "Invalid email or password. Please try again.",
    onSubmit: (data) => {
      console.log("Login submitted:", data);
      return new Promise((resolve) => setTimeout(resolve, 1000));
    },
  },
};

export const Styled: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl">
        <LoginForm
          onSubmit={async (data) => {
            console.log("Login submitted:", data);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }}
          className="rounded-lg bg-white p-8 shadow-lg"
        />
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <LoginForm
          onSubmit={async (data) => {
            console.log("Login submitted:", data);
            await new Promise((resolve) => setTimeout(resolve, 1500));
          }}
        />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | undefined>();

    const handleSubmit = async (data: { email: string; password: string }) => {
      console.log("Form data:", data);
      setError(undefined);
      setSuccessMessage(undefined);
      setLoading(true);

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulate different responses based on email
        if (data.email === "error@example.com") {
          setError("Invalid email or password. Please try again.");
          return;
        }

        if (
          data.email === "admin@example.com" &&
          data.password === "password123"
        ) {
          setSuccessMessage("Login successful! Welcome back, admin!");
          return;
        }

        if (
          data.email === "user@example.com" &&
          data.password === "validpass123"
        ) {
          setSuccessMessage("Login successful! Welcome back, user!");
          return;
        }

        // For any other combination, show error
        setError("Invalid email or password. Please try again.");
      } catch {
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="mx-auto max-w-md">
        <div className="space-y-6">
          <div>
            <h2 className="mt-6 text-center text-2xl font-semibold text-gray-800">
              Sign in to your account
            </h2>
          </div>

          {successMessage && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-700">
                    Success!
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>{successMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <LoginForm
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            showHeading={false}
          />
        </div>

        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          <h3 className="mb-2 font-medium">Test accounts:</h3>
          <ul className="space-y-1">
            <li>• admin@example.com / password123 (success)</li>
            <li>• error@example.com / any password (error)</li>
            <li>• user@example.com / validpass123 (success)</li>
            <li>• Any other combination will show validation errors</li>
          </ul>
        </div>
      </div>
    );
  },
};
