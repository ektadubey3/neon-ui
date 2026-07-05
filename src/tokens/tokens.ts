export const tokens = {
  color: {
    surface: "#ffffff",
    surfaceRaised: "#f7f8fa",
    surfaceSubtle: "#eef1f5",
    text: "#151922",
    textMuted: "#5b6575",
    border: "#d9dee7",
    borderStrong: "#aab4c3",
    brand: "#165dff",
    brandHover: "#0d49d7",
    brandSoft: "#e8efff",
    success: "#16803c",
    warning: "#9a5b00",
    danger: "#c62828",
    focus: "#7c3aed"
  },
  radius: {
    sm: "4px",
    md: "6px",
    lg: "8px",
    pill: "999px"
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px"
  },
  shadow: {
    sm: "0 1px 2px rgb(15 23 42 / 0.08)",
    md: "0 8px 24px rgb(15 23 42 / 0.12)"
  },
  font: {
    sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  }
} as const;

export type DesignTokens = typeof tokens;
