import React, { useState } from "react"
import { z } from "zod"
import { Button } from "../components/Button"
import { Form } from "../components/Form"
import { Input } from "../components/Input"
import { Label } from "../components/Label"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long")
})

type LoginFormData = z.infer<typeof loginSchema>

export interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void | Promise<void>
  loading?: boolean
  error?: string
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
  className
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: LoginFormData) => {
    if (onSubmit) {
      setIsSubmitting(true)
      try {
        await onSubmit(data)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const isLoading = loading || isSubmitting

  return (
    <div className={className}>
      <div className="space-y-6">
        <div>
          <h2 className="mt-6 text-center text-2xl font-semibold text-neutral-800">
            Sign in to your account
          </h2>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-700">
                  Authentication failed
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Form
          schema={loginSchema}
          onSubmit={handleSubmit}
          defaultValues={{ email: "", password: "" }}
        >
          <div>
            <Label htmlFor="email">Email address</Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                disabled={isLoading}
                aria-describedby="email-error"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                disabled={isLoading}
                aria-describedby="password-error"
              />
            </div>
            <Button variant="link" asChild>
              <a href="#">Forgot password?</a>
            </Button>
          </div>

          <div>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
              className="w-full"
              aria-label={isLoading ? "Signing in..." : "Sign in"}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </Form>

        <div className="text-center text-sm text-neutral-600">
          {"Don't have an account? "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign up here
          </a>
        </div>
      </div>
    </div>
  )
}
