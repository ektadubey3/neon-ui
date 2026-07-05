# Neon UI

A React, TypeScript, Vite, and Storybook starter for a product-focused frontend design system.

## What Is Included

- Design tokens in TypeScript and CSS custom properties.
- Global CSS primitives for focus, typography, surfaces, borders, and radius.
- Typed React components with Storybook stories:
  - `Button`
  - `IconButton`
  - `TextField`
  - `Checkbox`
  - `Switch`
  - `Select`
  - `Tabs`
  - `Badge`
  - `Card`
  - `Dialog`
  - `Tooltip`
- Storybook accessibility addon wiring.
- Library build setup with Vite and declaration output.

## Setup

```bash
npm install
npm run storybook
```

Build the package:

```bash
npm run build
```

Use components:

```tsx
import { Button, TextField } from "@neon-ui";

export function AccountForm() {
  return (
    <form>
      <TextField label="Email" placeholder="name@company.com" />
      <Button type="submit">Save changes</Button>
    </form>
  );
}
```

## Token Usage

Use CSS custom properties in app styles:

```css
.panel {
  background: var(--ds-color-surface);
  border: 1px solid var(--ds-color-border);
  border-radius: var(--ds-radius-lg);
}
```

Use TypeScript tokens when generating charts, themes, or config:

```ts
import { tokens } from "@neon-ui";

const focusColor = tokens.color.focus;
```

## Recommended Next Steps

1. Replace `@neon-ui` with your package scope.
2. Add your brand palette and typography decisions in `src/tokens/tokens.ts` and `src/styles.css`.
3. Add visual regression testing once the component API stabilizes.
4. Publish Storybook with CI so designers and engineers share one component reference.
