import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: true }]
      }
    },
    layout: "centered"
  }
};

export default preview;
