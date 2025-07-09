import type { Meta, StoryObj } from "@storybook/react-vite"
import { LoginForm } from "../examples/LoginForm"

const meta = {
  title: "Examples/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: "boolean"
    },
    error: {
      control: "text"
    }
  }
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => {
      console.log("Login submitted:", data)
      return new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: data => {
      console.log("Login submitted:", data)
      return new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}

export const WithError: Story = {
  args: {
    error: "Invalid email or password. Please try again.",
    onSubmit: data => {
      console.log("Login submitted:", data)
      return new Promise(resolve => setTimeout(resolve, 1000))
    }
  }
}

export const Styled: Story = {
  parameters: {
    layout: "padded"
  },
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl">
        <LoginForm
          onSubmit={async data => {
            console.log("Login submitted:", data)
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
          }}
          className="rounded-lg bg-white p-8 shadow-lg"
        />
      </div>
    </div>
  )
}

export const WithCustomStyling: Story = {
  parameters: {
    layout: "padded"
  },
  render: () => (
    <div className="flex min-h-96 items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <LoginForm
          onSubmit={async data => {
            console.log("Login submitted:", data)
            await new Promise(resolve => setTimeout(resolve, 1500))
          }}
        />
      </div>
    </div>
  )
}

export const Interactive: Story = {
  render: () => {
    return (
      <div className="mx-auto max-w-md">
        <LoginForm
          onSubmit={async data => {
            console.log("Form data:", data)

            // Simulate different responses
            if (data.email === "error@example.com") {
              throw new Error("Invalid credentials")
            }

            if (
              data.email === "admin@example.com" &&
              data.password === "password123"
            ) {
              alert("Login successful!")
              return
            }

            await new Promise(resolve => setTimeout(resolve, 1000))
            alert(`Welcome ${data.email}!`)
          }}
        />
        <div className="mt-6 rounded-lg bg-neutral-50 p-4 text-sm text-neutral-600">
          <h3 className="mb-2 font-medium">Test accounts:</h3>
          <ul className="space-y-1">
            <li>• admin@example.com / password123 (success)</li>
            <li>• error@example.com / any password (error)</li>
            <li>• Any other valid email/password combination</li>
          </ul>
        </div>
      </div>
    )
  }
}
