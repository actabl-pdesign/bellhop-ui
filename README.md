# @actabl-pdesign/bellhop-ui

A modern React UI components library built with TypeScript, Tailwind CSS, and accessibility in mind.

[![CI](https://github.com/actabl-pdesign/bellhop-ui/workflows/CI/badge.svg)](https://github.com/actabl-pdesign/bellhop-ui/actions)
[![npm version](https://badge.fury.io/js/%40actabl-pdesign%2Fbellhop-ui.svg)](https://badge.fury.io/js/%40actabl-pdesign%2Fbellhop-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Beautiful Design**: Clean, modern components with the Bellhop design system
- ♿ **Accessible**: WCAG AA compliant with proper ARIA attributes
- 🎯 **TypeScript**: Full TypeScript support with comprehensive type definitions
- 🎭 **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- 📚 **Storybook**: Interactive component documentation and playground
- 🧪 **Well Tested**: Comprehensive unit tests including accessibility testing
- 📦 **Tree Shakeable**: Optimized bundle size with tree shaking support
- 🎨 **Customizable**: Easy to customize with CSS variables and Tailwind

## Installation

```bash
# npm
npm install @actabl-pdesign/bellhop-ui

# yarn
yarn add @actabl-pdesign/bellhop-ui

# pnpm
pnpm add @actabl-pdesign/bellhop-ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom tailwindcss
```

## Setup

### 1. Tailwind CSS Configuration

Add the library path to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your existing content paths
    './node_modules/@actabl-pdesign/bellhop-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
}
```

### 2. Import Styles

Import the component styles in your main CSS file or component:

```css
@import '@actabl-pdesign/bellhop-ui/dist/styles.css';
```

## Quick Start

```tsx
import React from 'react'
import { Button, Input, Label, Form } from '@actabl-pdesign/bellhop-ui'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

function LoginForm() {
  const handleSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log('Form submitted:', data)
  }

  return (
    <Form schema={loginSchema} onSubmit={handleSubmit} className="max-w-md">
      <div>
        <Label htmlFor="email" required>
          Email address
        </Label>
        <div className="mt-2">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password" required>
          Password
        </Label>
        <div className="mt-2">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </Form>
  )
}
```

## Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@actabl-pdesign/bellhop-ui'

<Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
  Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'`
- `size`: `'small' | 'medium' | 'large'`
- `loading`: boolean
- `disabled`: boolean

### Input

Form input component with validation states and accessibility features.

```tsx
import { Input } from '@actabl-pdesign/bellhop-ui'

<Input
  type="email"
  placeholder="Enter your email"
  error={hasError}
  required
/>
```

**Props:**
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel'`
- `error`: boolean
- `disabled`: boolean
- `required`: boolean

### Label

Accessible label component with required/optional indicators.

```tsx
import { Label } from '@actabl-pdesign/bellhop-ui'

<Label htmlFor="email" required>
  Email address
</Label>
```

**Props:**
- `required`: boolean
- `variant`: `'default' | 'required' | 'optional'`
- `error`: boolean

### Form

Form wrapper with React Hook Form and Zod validation integration.

```tsx
import { Form } from '@actabl-pdesign/bellhop-ui'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

<Form schema={schema} onSubmit={handleSubmit}>
  {/* form content */}
</Form>
```

## Examples

Check out our [complete LoginForm example](./src/examples/LoginForm.tsx) that demonstrates all components working together with validation and accessibility features.

## Documentation

Visit our [Storybook documentation](https://actabl-pdesign.github.io/bellhop-ui/storybook/) for:

- Interactive component playground
- Comprehensive API documentation
- Usage examples and best practices
- Accessibility guidelines

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Run linting
pnpm lint

# Build library
pnpm build
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [actabl-pdesign](https://github.com/actabl-pdesign)