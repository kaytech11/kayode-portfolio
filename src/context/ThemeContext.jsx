import { createContext, useContext, useState } from "react";

// All color tokens live here. Change a hex once, it updates everywhere.
const themes = {
  dark: {
    bg: "bg-[#121212]",
    surface: "bg-[#181818]",
    text: "text-white",
    muted: "text-[#B3B3B3]",
    border: "border-[#282828]",
    accent: "text-[#1ED760]",
    accentBg: "bg-[#1ED766]",
    accentBgHover: "hover:bg-[#1FDF64]",
    headerBg: "bg-[#121212]/95",
    pill: "border border-[#282828] text-[#B3B3B3]",
    footerBg: "bg-black",
    hoverText: "hover:text-white",
  },
  light: {
    bg: "bg-white",
    surface: "bg-[#F5F5F5]",
    text: "text-[#121212]",
    muted: "text-[#535353]",
    border: "border-[#E3E3E3]",
    accent: "text-[#1DB954]",
    accentBg: "bg-[#1DB954]",
    accentBgHover: "hover:bg-[#17A94A]",
    headerBg: "bg-white/95",
    pill: "border border-[#E3E3E3] text-[#535353]",
    footerBg: "bg-[#121212]",
    hoverText: "hover:text-[#121212]",
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const isDark = mode === "dark";

  const value = {
    mode,
    isDark,
    toggle: () => setMode(isDark ? "light" : "dark"),
    c: themes[mode], // current color tokens
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Usage in any component: const { c, isDark, toggle } = useTheme();
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
