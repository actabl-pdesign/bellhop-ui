import { ChangeEvent, FocusEvent, ReactNode } from "react"

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link"
export type ButtonSize = "small" | "medium" | "large" | "icon"
export type AvatarGroupSize = "small" | "medium" | "large"
export type CheckboxState = "checked" | "indeterminate" | "unchecked"
export type LabelVariant = "default" | "required" | "optional"
export type InputType = "text" | "email" | "password" | "number" | "tel"

export interface BaseProps {
  className?: string
}

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: ReactNode
  ariaLabel?: string
  type?: "button" | "submit" | "reset"
}

export interface LabelProps extends BaseProps {
  htmlFor?: string
  children: ReactNode
  required?: boolean
  error?: boolean
  variant?: LabelVariant
}

export interface InputProps extends BaseProps {
  type?: InputType
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  error?: boolean
  disabled?: boolean
  required?: boolean
  ariaDescribedBy?: string
  name?: string
  id?: string
}

export interface FormProps extends BaseProps {
  onSubmit: (data: any) => void
  children: ReactNode
  schema?: any
  defaultValues?: any
}
