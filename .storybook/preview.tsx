import type { Preview, Renderer } from "@storybook/react";
import * as React from "react";
import { Controls, Description, DocsContext, Primary, Stories, Subtitle } from "@storybook/blocks";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { storybookTheme } from "./storybookTheme";
import "../src/styles.css";

const bannerDescriptions: Record<string, string> = {
  Badge: "Compact status labels for product metadata, state, and priority with readable tone variants in both themes.",
  Button: "Primary, secondary, ghost, danger, and loading actions with stable sizing and visible focus states.",
  Card: "A restrained surface primitive for grouping related product information without decorative noise.",
  Checkbox: "A labeled selection control with optional hint text, keyboard support, and clear checked and disabled states.",
  Dialog: "A focused overlay pattern for confirmations and task interruption with theme-aware surfaces.",
  IconButton: "Accessible icon-only actions with explicit labels, predictable sizing, and button-style variants.",
  Select: "A native select wrapper with labels, hints, error states, and theme-aware form styling.",
  Switch: "A binary setting control with supportive copy and visible checked, focus, and disabled states.",
  Tabs: "A compact navigation pattern for switching between related panels while preserving semantic tab behavior.",
  TextField: "A labeled text input with hint and error messaging for production forms.",
  Tooltip: "A lightweight disclosure pattern for brief contextual help around focused or hovered controls.",
  "Theme Demo": "Representative components shown together to verify Sapphire Trust light and dark theme behavior."
};

function getBannerDetails(title: string) {
  const parts = title.split("/");
  const name = parts.at(-1) ?? "Neon UI";
  const section = parts.length > 1 ? parts.slice(0, -1).join(" / ") : "Neon UI documentation";

  return {
    eyebrow: section,
    title: name,
    description:
      bannerDescriptions[name] ??
      "Production-oriented React components with typed tokens, accessible interactions, and theme-aware styling.",
    tags:
      section === "Components"
        ? ["Theme-aware", "Typed props", "Accessible states"]
        : ["Sapphire Trust", "Light and dark", "Token driven"]
  };
}

function GlobalBanner() {
  const docsContext = React.useContext(DocsContext);
  const meta = docsContext.resolveOf("meta", ["meta"]);
  const banner = getBannerDetails(meta.preparedMeta.title);

  return (
    <header className="storybook-global-banner">
      <div className="storybook-global-banner__content">
        <p className="storybook-global-banner__eyebrow">{banner.eyebrow}</p>
        <h1 className="storybook-global-banner__title">{banner.title}</h1>
        <p className="storybook-global-banner__description">{banner.description}</p>
      </div>
      <div className="storybook-global-banner__meta" aria-label={`${banner.title} qualities`} role="list">
        {banner.tags.map((tag) => (
          <span key={tag} role="listitem">
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<Renderer>({
      themes: {
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light",
      attributeName: "data-theme"
    })
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      config: { rules: [{ id: "color-contrast", enabled: true }] }
    },
    docs: {
      theme: storybookTheme,
      page: () => (
        <>
          <GlobalBanner />
          <div className="doc-content">
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </div>
        </>
      )
    },
    layout: "centered"
  }
};

export default preview;
