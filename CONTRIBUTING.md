# Contributing to @actabl-pdesign/bellhop-ui

Thank you for your interest in contributing to Bellhop UI! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm package manager
- Git

### Getting Started

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/bellhop-ui.git
cd bellhop-ui
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development environment**

```bash
yarn storybook
```

This will start Storybook at `http://localhost:6006` where you can see and interact with all components.

## Development Workflow

### Making Changes

1. **Create a new branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**

- Follow the existing code style and patterns
- Write or update tests for your changes
- Update documentation as needed

3. **Run the test suite**

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run accessibility tests
yarn test:a11y

# Run linting
yarn lint

# Fix linting issues
yarn lint:fix

# Check formatting
yarn prettier:check

# Fix formatting
yarn prettier
```

4. **Build the library**

```bash
yarn build
```

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for our commit messages:

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code refactoring
- `test:` adding or updating tests
- `chore:` maintenance tasks

Examples:

```bash
git commit -m "feat(Button): add loading state"
git commit -m "fix(Input): resolve focus ring color issue"
git commit -m "docs: update installation instructions"
```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type - use proper typing
- Export types from components for consumers

### React Components

- Use functional components with hooks
- Follow the existing component structure
- Use `forwardRef` for input-like components
- Include proper TypeScript props interfaces

### Styling

- Use Tailwind CSS classes
- Follow the existing design tokens
- Use the `cn()` utility for conditional classes
- Maintain responsive design patterns

### Accessibility

- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers when possible
- Write accessibility tests using jest-axe
- Follow WCAG AA guidelines

### Testing

- Write unit tests for all components
- Include accessibility tests
- Test different prop combinations
- Test user interactions
- Maintain high test coverage (80%+)

## Component Development

### Creating a New Component

1. **Create the component file**

```typescript
// src/components/MyComponent.tsx
import React from 'react'
import { cn } from '../utils/cn'

export interface MyComponentProps {
  children: React.ReactNode
  variant?: 'default' | 'special'
  className?: string
}

export const MyComponent: React.FC<MyComponentProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'base-styles',
        variant === 'special' && 'special-styles',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

2. **Add to exports**

```typescript
// src/components/index.ts
export { MyComponent } from "./MyComponent"
```

3. **Create Storybook stories**

```typescript
// src/stories/MyComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { MyComponent } from "../components/MyComponent"

const meta = {
  title: "Components/MyComponent",
  component: MyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "My Component",
  },
}
```

4. **Write tests**

```typescript
// tests/MyComponent.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { MyComponent } from '../src/components/MyComponent'

expect.extend(toHaveNoViolations)

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent>Test</MyComponent>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<MyComponent>Test</MyComponent>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

## Pull Request Process

1. **Ensure all tests pass**

```bash
yarn test
yarn lint
yarn build
```

2. **Update documentation**

- Update README if needed
- Add/update Storybook stories
- Update TypeScript definitions

3. **Create a pull request**

- Use a clear, descriptive title
- Describe what changes you made and why
- Reference any related issues
- Include screenshots for UI changes

4. **Code review**

- Address feedback from reviewers
- Make requested changes
- Ensure CI passes

## Release Process

Releases are automated using semantic-release:

1. Merge to `master` branch triggers release workflow
2. Commits are analyzed for version bump type
3. Changelog is generated automatically
4. Package is published to GitHub Packages
5. GitHub release is created

## Getting Help

- Check existing [issues](https://github.com/actabl-pdesign/bellhop-ui/issues)
- Review [Storybook documentation](https://actabl-pdesign.github.io/bellhop-ui/storybook/)
- Ask questions in GitHub Discussions

## Code of Conduct

Please note that this project has a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

Thank you for contributing! 🎉
