import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { cn } from "../lib/utils"
import { FormProps } from "../types"

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  schema,
  defaultValues,
  className,
  ...props
}) => {
  const methods = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
  })

  const handleSubmit = methods.handleSubmit(onSubmit)

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  )
}

interface FormFieldProps {
  name: string
  children: (field: any) => React.ReactNode
}

export const FormField: React.FC<FormFieldProps> = ({ name, children }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const field = {
    ...register(name),
    error: !!errors[name],
    errorMessage: errors[name]?.message as string,
  }

  return <>{children(field)}</>
}

interface FormErrorProps {
  name: string
  className?: string
}

export const FormError: React.FC<FormErrorProps> = ({ name, className }) => {
  const {
    formState: { errors },
  } = useFormContext()
  const error = errors[name]

  if (!error) return null

  return (
    <p
      className={cn("mt-1 text-sm text-red-600", className)}
      role="alert"
      aria-live="polite"
    >
      {error.message as string}
    </p>
  )
}
