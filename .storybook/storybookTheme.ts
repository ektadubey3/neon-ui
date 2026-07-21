import { create } from "@storybook/theming/create";

export const storybookTheme = create({
  base: "light",

  brandTitle: "Neon Design System",
  brandUrl: "/",
  brandTarget: "_self",

  colorPrimary: "#1D4ED8",
  colorSecondary: "#0369A1",

  appBg: "#F8FAFC",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#F8FAFC",
  appBorderColor: "#CBD5E1",
  appBorderRadius: 8,

  textColor: "#0F172A",
  textInverseColor: "#F8FAFC",
  textMutedColor: "#64748B",

  barBg: "#FFFFFF",
  barTextColor: "#475569",
  barHoverColor: "#0F172A",
  barSelectedColor: "#1D4ED8",

  inputBg: "#FFFFFF",
  inputBorder: "#CBD5E1",
  inputTextColor: "#0F172A",
  inputBorderRadius: 8,

  fontBase:
    '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

  fontCode: '"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace'
});
