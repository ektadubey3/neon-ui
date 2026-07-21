const foundationTokens = {
  radius: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
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
    normal: "220ms ease",
    slow: "320ms ease"
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

export const lightThemeTokens = {
  color: {
    surface: "#F8FAFC",
    surfaceRaised: "#FFFFFF",
    surfaceSubtle: "#EFF6FF",
    surfaceGlass: "rgba(255, 255, 255, 0.88)",

    text: "#0F172A",
    textMuted: "#475569",
    textSubtle: "#64748B",
    textInverse: "#FFFFFF",

    border: "#CBD5E1",
    borderStrong: "#94A3B8",

    brand: "#1D4ED8",
    brandHover: "#1E40AF",
    brandActive: "#1E3A8A",
    brandSoft: "#DBEAFE",
    brandContrast: "#FFFFFF",

    accent: "#0284C7",
    accentSoft: "#E0F2FE",

    success: "#15803D",
    successSoft: "#DCFCE7",
    warning: "#B45309",
    warningSoft: "#FEF3C7",
    danger: "#B91C1C",
    dangerHover: "#991B1B",
    dangerSoft: "#FEE2E2",
    info: "#0369A1",
    infoSoft: "#E0F2FE",
    focus: "#2563EB",
    overlay: "rgba(15, 23, 42, 0.50)"
  },

  gradient: {
    brand: "linear-gradient(135deg, #0F172A 0%, #1D4ED8 58%, #0284C7 100%)",
    surface: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)"
  },

  shadow: {
    xs: "0 1px 2px rgba(15, 23, 42, 0.06)",
    sm: "0 2px 8px rgba(15, 23, 42, 0.08)",
    md: "0 12px 28px rgba(15, 23, 42, 0.12)",
    lg: "0 24px 56px rgba(15, 23, 42, 0.16)",
    glow: "0 0 0 1px rgba(29, 78, 216, 0.16), 0 12px 32px rgba(29, 78, 216, 0.14)",
    brandGlow: "0 12px 28px rgba(29, 78, 216, 0.20)",
    blueGlow: "0 12px 28px rgba(2, 132, 199, 0.18)"
  },

  ...foundationTokens
} as const;

export const darkThemeTokens = {
  color: {
    surface: "#0B1220",
    surfaceRaised: "#111C2E",
    surfaceSubtle: "#17233A",
    surfaceGlass: "rgba(17, 28, 46, 0.88)",

    text: "#F8FAFC",
    textMuted: "#B6C2D2",
    textSubtle: "#94A3B8",
    textInverse: "#0F172A",

    border: "#334155",
    borderStrong: "#475569",

    brand: "#60A5FA",
    brandHover: "#93C5FD",
    brandActive: "#3B82F6",
    brandSoft: "#172554",
    brandContrast: "#0B1220",

    accent: "#38BDF8",
    accentSoft: "#0C4A6E",

    success: "#4ADE80",
    successSoft: "#14532D",
    warning: "#FBBF24",
    warningSoft: "#713F12",
    danger: "#F87171",
    dangerHover: "#FCA5A5",
    dangerSoft: "#7F1D1D",
    info: "#7DD3FC",
    infoSoft: "#0C4A6E",
    focus: "#93C5FD",
    overlay: "rgba(2, 6, 23, 0.72)"
  },

  gradient: {
    brand: "linear-gradient(135deg, #0B1220 0%, #1E3A8A 54%, #0369A1 100%)",
    surface: "linear-gradient(180deg, #111C2E 0%, #0B1220 100%)"
  },

  shadow: {
    xs: "0 1px 2px rgba(2, 6, 23, 0.28)",
    sm: "0 6px 18px rgba(2, 6, 23, 0.32)",
    md: "0 16px 36px rgba(2, 6, 23, 0.42)",
    lg: "0 28px 64px rgba(2, 6, 23, 0.56)",
    glow: "0 0 0 1px rgba(96, 165, 250, 0.20), 0 14px 34px rgba(2, 6, 23, 0.40)",
    brandGlow: "0 14px 30px rgba(96, 165, 250, 0.18)",
    blueGlow: "0 14px 30px rgba(56, 189, 248, 0.16)"
  },

  ...foundationTokens
} as const;

export const themeTokens = {
  light: lightThemeTokens,
  dark: darkThemeTokens
} as const;

export const tokens = lightThemeTokens;

export type ThemeName = keyof typeof themeTokens;
export type ThemeTokens = typeof lightThemeTokens;
export type DesignTokens = typeof tokens;
