<div align="center">

# Neon UI

**A production-oriented React design system built for accessible, consistent, and scalable product interfaces.**

Typed components · Semantic design tokens · Storybook documentation · ESM and CommonJS support

[![npm version](https://img.shields.io/npm/v/neon-ui-lib?logo=npm)](https://www.npmjs.com/package/neon-ui-lib)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)

</div>

---

## Overview

Neon UI is a reusable React component library for teams building professional product interfaces.

It provides:

* Accessible, typed React components
* Semantic design tokens in TypeScript
* CSS custom properties for application styling
* Light and dark TypeScript theme palettes
* Storybook documentation and component playgrounds
* Accessibility checks through Storybook
* ESM and CommonJS library outputs
* Generated TypeScript declarations
* React 19 support

The design system follows the **Sapphire Trust** visual direction: clean blue and slate foundations intended to communicate trust, confidence, precision, and quality.

## Components

| Component    | Purpose                                            |
| ------------ | -------------------------------------------------- |
| `Button`     | Primary, secondary, ghost, and destructive actions |
| `IconButton` | Compact icon-only actions                          |
| `TextField`  | Labelled text input with hint and error states     |
| `Checkbox`   | Boolean form selection                             |
| `Switch`     | On/off preference control                          |
| `Select`     | Native option selection                            |
| `Tabs`       | Navigation between related views                   |
| `Badge`      | Status and metadata display                        |
| `Card`       | Structured content surfaces                        |
| `Dialog`     | Confirmations and focused interactions             |
| `Tooltip`    | Contextual supporting information                  |

## Installation

Install the package with your preferred package manager.

```bash
pnpm add neon-ui-lib
```

```bash
npm install neon-ui-lib
```

```bash
yarn add neon-ui-lib
```

Neon UI expects React and React DOM to be available in the consuming application.

```json
{
  "react": "^18.2.0 || ^19.0.0",
  "react-dom": "^18.2.0 || ^19.0.0"
}
```

## Quick Start

Import the library stylesheet once in your application entry point.

```tsx
import "neon-ui-lib/styles.css";
```

Import and use components from the package root.

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, TextField } from "neon-ui-lib";

export function AccountForm() {
  return (
    <Card elevated>
      <CardHeader>
        <CardTitle>Account details</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <TextField
            label="Email address"
            name="email"
            type="email"
            placeholder="name@company.com"
            hint="We will only use this for account notifications."
            required
          />

          <Button type="submit">Save changes</Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

## Button Example

Buttons support multiple variants, sizes, native button attributes, forwarded refs, disabled states, and loading states.

```tsx
import { Button } from "neon-ui-lib";

export function Actions() {
  return (
    <div>
      <Button variant="primary">Continue</Button>
      <Button variant="secondary">Save draft</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button loading>Saving</Button>
    </div>
  );
}
```

Available variants:

```ts
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
```

Available sizes:

```ts
type ButtonSize = "sm" | "md" | "lg";
```

## Dialog Example

```tsx
import { Button, Dialog } from "neon-ui-lib";
import { useState } from "react";

export function DeleteProjectDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete project
      </Button>

      <Dialog
        open={open}
        title="Delete project?"
        description="This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Keep project"
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
```

## Design Tokens

Neon UI exposes semantic tokens for colors, typography, spacing, radius, shadows, transitions, blur, and stacking order.

### TypeScript tokens

```ts
import {
  darkThemeTokens,
  lightThemeTokens,
  themeTokens,
  tokens,
  type ThemeName,
  type ThemeTokens,
} from "neon-ui-lib";

const primaryColor = tokens.color.brand;
const dialogRadius = tokens.radius.lg;
const cardSpacing = tokens.space[6];

const selectedTheme: ThemeName = "dark";
const selectedTokens: ThemeTokens = themeTokens[selectedTheme];

console.log(lightThemeTokens.color.surface);
console.log(darkThemeTokens.color.surface);
```

The `tokens` export is retained as the default token API for backward compatibility.

### CSS custom properties

Use semantic CSS variables instead of duplicating design values in application styles.

```css
.settings-panel {
  padding: var(--ds-space-6, 24px);
  color: var(--ds-color-text);
  background: var(--ds-color-surface-raised);
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-lg);
  box-shadow: var(--ds-shadow-sm);
}

.settings-panel:focus-within {
  border-color: var(--ds-color-focus);
}
```

Import the stylesheet before consuming these variables:

```tsx
import "neon-ui-lib/styles.css";
```

## Theme Tokens

The TypeScript API provides both light and dark palettes:

```ts
import { themeTokens } from "neon-ui-lib";

const lightBrand = themeTokens.light.color.brand;
const darkBrand = themeTokens.dark.color.brand;
```

Theme-independent foundation tokens are shared across both palettes:

* Spacing
* Border radius
* Typography
* Blur
* Transitions
* Z-index

This keeps dimensions and interaction behavior consistent while allowing visual values to change by theme.

## Accessibility

Neon UI is built with accessibility-conscious patterns, including:

* Native HTML elements where possible
* Keyboard-compatible controls
* Visible focus states
* Connected form labels and descriptions
* Error and hint messaging
* Appropriate ARIA attributes
* Disabled and loading states
* Storybook accessibility checks
* Color-contrast validation in Storybook

Applications should still validate complete user flows with their own accessibility testing process.

## Package Exports

The package provides a root JavaScript and TypeScript API:

```ts
import { Button, tokens } from "neon-ui-lib";
```

It also exposes the compiled stylesheet:

```tsx
import "neon-ui-lib/styles.css";
```

Generated package output includes:

```text
dist/
├── index.js
├── index.cjs
├── index.d.ts
└── style.css
```

## Module Support

Neon UI supports:

* ES modules
* CommonJS
* TypeScript declarations
* React 18
* React 19

Package entry points are configured through the package `exports` field.

## Local Development

### Requirements

* A supported Node.js version
* Corepack
* pnpm

Enable Corepack when necessary:

```bash
corepack enable
```

Install dependencies:

```bash
pnpm install
```

Start Storybook:

```bash
pnpm storybook
```

Storybook runs locally at:

```text
http://localhost:6006
```

## Available Scripts

| Command                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `pnpm dev`              | Start Storybook in development mode               |
| `pnpm storybook`        | Start the Storybook component playground          |
| `pnpm typecheck`        | Run TypeScript validation without emitting files  |
| `pnpm build`            | Build the component library and type declarations |
| `pnpm build-storybook`  | Create a production Storybook build               |
| `pnpm deploy-storybook` | Deploy the generated Storybook documentation      |

## Production Validation

Run the following checks before submitting a change:

```bash
pnpm typecheck
pnpm build
pnpm build-storybook
```

These checks validate:

* TypeScript correctness
* Library compilation
* ESM and CommonJS output
* Declaration generation
* CSS output
* Storybook production compatibility

## Project Structure

```text
neon-ui/
├── .github/
│   └── workflows/          # Package validation and publishing
├── .storybook/             # Storybook manager, preview, and documentation
├── src/
│   ├── components/         # React components, styles, and stories
│   ├── tokens/             # TypeScript design tokens
│   ├── utils/              # Shared internal utilities
│   ├── Introduction.mdx    # Storybook introduction
│   ├── index.ts            # Public package exports
│   └── styles.css          # Global CSS tokens and primitives
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Architecture Principles

Neon UI follows several maintainability principles:

* Components expose small and predictable APIs.
* Native browser behavior is preferred over unnecessary abstraction.
* Component styles consume semantic design tokens.
* Public exports are controlled through a single package entry point.
* Storybook documents component states and variants.
* Development-only Storybook code stays outside the runtime package.
* React and React DOM remain peer dependencies.
* Library builds externalize React and other appropriate dependencies.

## Adding a Component

A component should normally include:

```text
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.css
└── ComponentName.stories.tsx
```

After creating the component:

1. Export it from `src/index.ts`.
2. Use semantic design tokens in its stylesheet.
3. Add stories for important states and variants.
4. Verify keyboard and focus behavior.
5. Run the production validation commands.

## Contributing

Contributions, improvements, and issue reports are welcome.

1. Fork the repository.
2. Create a focused feature branch.
3. Install dependencies with pnpm.
4. Follow the existing component and token conventions.
5. Add or update Storybook stories.
6. Run all relevant validation commands.
7. Open a pull request with a clear description.

Please avoid unrelated refactoring in feature changes.

## Links

* [npm package](https://www.npmjs.com/package/neon-ui-lib)
* [Source code](https://github.com/ektadubey3/neon-ui)
* [Issue tracker](https://github.com/ektadubey3/neon-ui/issues)

## License

Neon UI is available under the [MIT License](./LICENSE).

---

<div align="center">

Built by [Ekta Dubey](https://www.linkedin.com/in/ektadubey3)

If Neon UI is useful to you, consider starring the repository.

</div>
