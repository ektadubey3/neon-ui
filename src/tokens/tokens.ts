export const tokens = {
  color: {
    // Backgrounds
    surface: "#0B1020",
    surfaceRaised: "#131A2E",
    surfaceSubtle: "#1B2440",
    surfaceGlass: "rgba(25, 34, 58, 0.72)",

    // Text
    text: "#F5F7FF",
    textMuted: "#A5B1C8",
    textSubtle: "#7E8AA5",

    // Borders
    border: "#28314D",
    borderStrong: "#404C72",

    // Brand
    brand: "#7B6DFF",
    brandHover: "#9488FF",
    brandActive: "#6656F6",
    brandSoft: "#2A2552",

    // Accent
    accent: "#4DA3FF",
    accentSoft: "#1E355D",

    // Semantic
    success: "#3DDC84",
    warning: "#F5B942",
    danger: "#FF5F7A",
    info: "#52B6FF",

    // Focus
    focus: "#9D8CFF",

    // Overlay
    overlay: "rgba(0,0,0,0.55)"
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    pill: "9999px"
  },

  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px"
  },

  shadow: {
    xs: "0 1px 3px rgba(0,0,0,0.25)",

    sm: "0 6px 18px rgba(0,0,0,0.30)",

    md: "0 12px 36px rgba(0,0,0,0.40)",

    lg: "0 24px 64px rgba(0,0,0,0.55)",

    glow: "0 0 0 1px rgba(123,109,255,0.15), 0 0 30px rgba(123,109,255,0.35)",

    brandGlow: "0 0 20px rgba(123,109,255,0.45)",

    blueGlow: "0 0 24px rgba(77,163,255,0.35)"
  },

  font: {
    sans: `"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,

    heading: `"Sora", "Inter", sans-serif`,

    mono: `"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace`
  },

  blur: {
    sm: "4px",
    md: "8px",
    lg: "16px"
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease"
  },

  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1200,
    modal: 1300,
    toast: 1400,
    tooltip: 1500
  }
} as const;

export type DesignTokens = typeof tokens;

// export const tokens = {
//   color: {
//     surface: "#ffffff",
//     surfaceRaised: "#f7f8fa",
//     surfaceSubtle: "#eef1f5",
//     text: "#151922",
//     textMuted: "#5b6575",
//     border: "#d9dee7",
//     borderStrong: "#aab4c3",
//     brand: "#165dff",
//     brandHover: "#0d49d7",
//     brandSoft: "#e8efff",
//     success: "#16803c",
//     warning: "#9a5b00",
//     danger: "#c62828",
//     focus: "#7c3aed"
//   },
//   radius: {
//     sm: "4px",
//     md: "6px",
//     lg: "8px",
//     pill: "999px"
//   },
//   space: {
//     1: "4px",
//     2: "8px",
//     3: "12px",
//     4: "16px",
//     5: "20px",
//     6: "24px",
//     8: "32px"
//   },
//   shadow: {
//     sm: "0 1px 2px rgb(15 23 42 / 0.08)",
//     md: "0 8px 24px rgb(15 23 42 / 0.12)"
//   },
//   font: {
//     sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
//     mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
//   }
// } as const;

// export type DesignTokens = typeof tokens;
