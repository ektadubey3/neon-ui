import { create } from "@storybook/theming/create";

export const neonTheme = create({
  base: "dark",

  // Branding
  brandTitle: "Neon Design System",
  brandUrl: "/",
  brandTarget: "_self",

  // Brand Colors
  colorPrimary: "#7B6DFF",
  colorSecondary: "#333597",

  // App
  appBg: "#0B1020",
  appContentBg: "#131A2E",
  appPreviewBg: "#0F1629",
  appBorderColor: "#28314D",
  appBorderRadius: 14,

  // Typography
  textColor: "#e6e9f7",
  textInverseColor: "#0B1020",
  textMutedColor: "#A5B1C8",

  // Toolbar
  barBg: "#131A2E",
  barTextColor: "#A5B1C8",
  barHoverColor: "#FFFFFF",
  barSelectedColor: "#7B6DFF",

  // Forms
  inputBg: "#1B2440",
  inputBorder: "#404C72",
  inputTextColor: "#F5F7FF",
  inputBorderRadius: 10,

  // Typography
  fontBase:
    '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  fontCode:
    '"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace',
});

// import { create } from "@storybook/theming/create";

// export const neonTheme = create({
//   base: "dark",
//   brandTitle: "Neon Design System",
//   brandUrl: "/",
//   brandTarget: "_self",

//   colorPrimary: "#00e5ff",
//   colorSecondary: "#ff4fd8",

//   appBg: "#080a12",
//   appContentBg: "#101421",
//   appPreviewBg: "#080a12",
//   appBorderColor: "#263149",
//   appBorderRadius: 8,

//   textColor: "#f5f8ff",
//   textInverseColor: "#061018",
//   textMutedColor: "#9aa7bd",

//   barTextColor: "#9aa7bd",
//   barSelectedColor: "#00e5ff",
//   barHoverColor: "#f5f8ff",
//   barBg: "#101421",

//   inputBg: "#080a12",
//   inputBorder: "#263149",
//   inputTextColor: "#f5f8ff",
//   inputBorderRadius: 6,

//   fontBase:
//     "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
//   fontCode: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
// });
