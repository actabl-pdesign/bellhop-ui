# @actabl-pdesign/bellhop-ui

A modern React UI components library built with TypeScript, Tailwind CSS, and
accessibility in mind.

## WIP - New components coming soon!

> **📦 Package Location**: This package is distributed via
> [npm](https://www.npmjs.com/package/@actabl-pdesign/bellhop-ui).

[![npm version](https://badge.fury.io/js/%40actabl-pdesign%2Fbellhop-ui.svg)](https://badge.fury.io/js/%40actabl-pdesign%2Fbellhop-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Beautiful Design**: Clean, modern components with the Bellhop design
  system
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
npm install react react-dom tailwindcss@^3.0.0 @tailwindcss/forms
```

**Important**: This library requires Tailwind CSS v3.x, not v4. Make sure your
project uses Tailwind CSS version 3.0 or higher, but below version 4.0.

## Setup

### 1. Tailwind CSS Configuration

Add the library path to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your existing content paths
    "./node_modules/@actabl-pdesign/bellhop-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    require("@tailwindcss/forms")
    // ... your other plugins
  ]
  // ... rest of your config
}
```

<details><summary>Click to exapand 'tailwind.config.js'</summary>

```js
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Scale / Secondary
        neutral: {
          50: "#f9f9fb",
          100: "#eff1f5",
          200: "#dcdfea",
          300: "#b9c0d4",
          400: "#7d89b0",
          500: "#5d6b98",
          600: "#4a5578",
          700: "#404968",
          800: "#30374f",
          900: "#111322",
          950: "#0e101b",
        },
        // Map gray to neutral for backwards compatibility + custom additions
        gray: {
          50: "#f9f9fb",
          100: "#eff1f5",
          200: "#dcdfea",
          300: "#b9c0d4",
          400: "#7d89b0",
          500: "#5d6b98",
          600: "#4a5578",
          700: "#404968",
          800: "#30374f",
          900: "#111322",
          925: "#050814", // From planner template
          950: "#0e101b",
        },
        // Indigo Scale / Primary
        indigo: {
          50: "#f1f5fe",
          100: "#e1eafe",
          200: "#bacefc",
          300: "#8daafc",
          400: "#7498fb",
          500: "#5068dd",
          600: "#2642cf",
          700: "#1930a9",
          800: "#1b2192",
          900: "#161b79",
          950: "#141752",
        },
        // Rose Scale / Guava
        rose: {
          50: "#fbf0ee",
          100: "#f5dcdb",
          200: "#efc3c2",
          300: "#e9aaae",
          400: "#e38c91",
          500: "#e47789",
          600: "#d25664",
          700: "#c84656",
          800: "#a52c40",
          900: "#631c28",
          950: "#681d29",
        },
        // Red Scale / Destructive
        red: {
          50: "#feefeb",
          100: "#fce3e3",
          200: "#fbd0d0",
          300: "#f7abab",
          400: "#f87272",
          500: "#f05250",
          600: "#d6341f",
          700: "#bf2b18",
          800: "#992424",
          900: "#701e19",
          950: "#55160c",
        },
        // Amber Scale / Warning
        amber: {
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
          950: "#4e1d09",
        },
        // Green Scale / Success
        green: {
          50: "#ecfdf3",
          100: "#dcfae6",
          200: "#abefc6",
          300: "#75e0a7",
          400: "#47cd89",
          500: "#17b26a",
          600: "#079455",
          700: "#067647",
          800: "#085d3a",
          900: "#074d31",
          950: "#053321",
        },
        // Orange Scale
        orange: {
          50: "#fef6ee",
          100: "#fdead7",
          200: "#f9dbaf",
          300: "#f7b27a",
          400: "#f38744",
          500: "#ef6820",
          600: "#e04f16",
          700: "#b93815",
          800: "#932f19",
          900: "#772917",
          950: "#511c10",
        },
        // Blue Scale
        blue: {
          50: "#eff8ff",
          100: "#d1e9ff",
          200: "#b2ddff",
          300: "#84caff",
          400: "#53b1fd",
          500: "#2e90fa",
          600: "#1570ef",
          700: "#175cd3",
          800: "#1849a9",
          900: "#194185",
          950: "#102a56",
        },
        // Violet Scale
        violet: {
          50: "#f4ebf4",
          100: "#ebdbeb",
          200: "#dbbddb",
          300: "#cfa5ce",
          400: "#bb81ba",
          500: "#a05da8",
          600: "#8e4b9b",
          700: "#7d368c",
          800: "#6c3177",
          900: "#56255f",
          950: "#3d1745",
        },
        // Purple Scale
        purple: {
          50: "#f4f3ff",
          100: "#ebe9fe",
          200: "#d9d6fe",
          300: "#bdb4fe",
          400: "#a28afb",
          500: "#875af8",
          600: "#8438ef",
          700: "#7125dc",
          800: "#5f1fb8",
          900: "#4f1c96",
          950: "#32115f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "bellhop-heading-xl": ["1.75rem", { lineHeight: "2rem" }],
        "bellhop-heading-lg": ["1.5rem", { lineHeight: "1.75rem" }],
        "bellhop-heading-md": ["1.125rem", { lineHeight: "1.5rem" }],
        "bellhop-heading-sm": ["1rem", { lineHeight: "1.25rem" }],
        "bellhop-heading-xs": ["0.875rem", { lineHeight: "1.25rem" }],
        "bellhop-body-sm": ["0.75rem", { lineHeight: "1rem" }],
        "bellhop-body": ["0.875rem", { lineHeight: "1.25rem" }],
        "bellhop-body-lg": ["1rem", { lineHeight: "1.5rem" }],
        "bellhop-metric-lg": ["1.75rem", { lineHeight: "2rem" }],
        "bellhop-metric-md": ["1.5rem", { lineHeight: "1.75rem" }],
        "bellhop-metric-sm": ["1rem", { lineHeight: "1.25rem" }],
      },
      boxShadow: {
        "shadow-xs": "0 0 2px 1px rgb(64 73 104 / 0.06)",
        "shadow-sm":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 3px 4px 0 rgb(64 73 104 / 0.1)",
        "shadow-md":
          "0 0 4px 0 rgb(64 73 104 / 0.1), 0 4px 8px 0 rgb(64 73 104 / 0.1)",
        "shadow-lg":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 12px 16px -2px rgb(64 73 104 / 0.1)",
        "shadow-xl":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 20px 24px -4px rgb(64 73 104 / 0.1)",
        "shadow-2xl":
          "0 0 1px 1px rgb(64 73 104 / 0.1), 0 24px 48px -12px rgb(64 73 104 / 0.18)",
        "shadow-3xl":
          "0 32px 64px -12px rgb(64 73 104 / 0.14), 0 0 1px 1px rgb(64 73 104 / 0.1)",
      },
      borderWidth: {
        DEFAULT: "1.5px",
        0: "0",
        2: "2.5px",
        3: "3.5px",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(50%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-100%)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade:
          "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideLeftAndFade:
          "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
        dialogOverlayShow:
          "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        dialogContentShow:
          "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
        accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

export default config
```

</details>

### 2. Import Styles

**⚠️ CRITICAL:** You must import the component styles for the components to
display correctly.

**Option A - CSS Import (Recommended):** In your main CSS file (e.g.,
`globals.css`, `index.css`, `App.css`):

```css
@import "@actabl-pdesign/bellhop-ui/dist/styles.css";
```

**Option B - JavaScript/TypeScript Import:** In your main JavaScript/TypeScript
file (e.g., `index.tsx`, `App.tsx`, `_app.tsx`):

```javascript
import "@actabl-pdesign/bellhop-ui/dist/styles.css"
```

**For Next.js projects:** Add the import to your `globals.css` file in the `app`
directory.

### 3. Configure Tailwind Content

Make sure your `tailwind.config.js` includes the library path in the content
array so Tailwind can detect and include the necessary styles for the
components.

## Quick Start

```tsx
import React from "react"
import { Button, Input, Label, Form } from "@actabl-pdesign/bellhop-ui"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

function LoginForm() {
  const handleSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Form submitted:", data)
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
import { Button } from "@actabl-pdesign/bellhop-ui"

;<Button
  variant="primary"
  size="medium"
  onClick={() => console.log("Clicked!")}
>
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
import { Input } from "@actabl-pdesign/bellhop-ui"

;<Input type="email" placeholder="Enter your email" error={hasError} required />
```

**Props:**

- `type`: `'text' | 'email' | 'password' | 'number' | 'tel'`
- `error`: boolean
- `disabled`: boolean
- `required`: boolean

### Label

Accessible label component with required/optional indicators.

```tsx
import { Label } from "@actabl-pdesign/bellhop-ui"

;<Label htmlFor="email" required>
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

## For AI Website Builders

If you're using an AI website builder or agent that doesn't have direct terminal
access, you can provide these instructions to set up the components:

### Installation Instructions for AI Agents

1. **Install the package:**

   ```bash
   npm install @actabl-pdesign/bellhop-ui
   ```

2. **Install required peer dependencies:**

   ```bash
   npm install react react-dom tailwindcss@^3.0.0 @tailwindcss/forms
   ```

3. **Update your `tailwind.config.js` file** to include:
   - Add `"./node_modules/@actabl-pdesign/bellhop-ui/dist/**/*.{js,ts,jsx,tsx}"`
     to the `content` array
   - Add `require("@tailwindcss/forms")` to the `plugins` array

4. **Import the styles** (CRITICAL STEP):

   **For Next.js:** Add to your `globals.css` or `app/globals.css`:

   ```css
   @import "@actabl-pdesign/bellhop-ui/dist/styles.css";
   ```

   **For other frameworks:** Import in your main JS/TS file:

   ```javascript
   import "@actabl-pdesign/bellhop-ui/dist/styles.css"
   ```

5. **Import and use components:**
   ```javascript
   import {
     Button,
     Input,
     Label,
     Form,
     Checkbox
   } from "@actabl-pdesign/bellhop-ui"
   ```

### Key Requirements for AI Agents:

- **Tailwind CSS v3.x is required** (not v4)
- **@tailwindcss/forms plugin is mandatory** for proper form styling
- **Component styles must be imported** via the CSS file
- **Tailwind content path must include** the library's dist folder

## Examples

Check out our [complete LoginForm example](./src/examples/LoginForm.tsx) that
demonstrates all components working together with validation and accessibility
features.

## Documentation

Visit our
[Storybook documentation](https://actabl-pdesign.github.io/bellhop-ui/storybook/)
for:

- Interactive component playground
- Comprehensive API documentation
- Usage examples and best practices
- Accessibility guidelines

## Troubleshooting

### Components have no styling/colors

**Problem:** Components appear unstyled or with default browser styling instead
of the designed appearance.

**Solution:** Make sure you've imported the component styles:

```css
/* In your main CSS file */
@import "@actabl-pdesign/bellhop-ui/dist/styles.css";
```

### TypeScript errors with component props

**Problem:** TypeScript errors like
`Type '{ htmlFor: string; }' is not assignable to type 'LabelProps'`

**Solution:**

1. Make sure you're using the latest version:
   `npm install @actabl-pdesign/bellhop-ui@latest`
2. Restart your TypeScript server in your IDE
3. Clear your node_modules and reinstall:
   `rm -rf node_modules package-lock.json && npm install`

### Tailwind classes not working

**Problem:** Custom Tailwind classes from the library aren't applied.

**Solution:** Ensure your `tailwind.config.js` includes the library path in the
content array:

```js
content: [
  // ... your existing paths
  "./node_modules/@actabl-pdesign/bellhop-ui/dist/**/*.{js,ts,jsx,tsx}",
],
```

### Build errors in Next.js

**Problem:** Build fails with module resolution errors.

**Solution:** Make sure you have the correct Tailwind CSS version (v3.x, not
v4):

```bash
npm install tailwindcss@^3.0.0 @tailwindcss/forms
```

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

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md)
for details.

## License

MIT © [actabl-pdesign](https://github.com/actabl-pdesign)
