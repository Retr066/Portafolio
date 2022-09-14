import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleDarkMode: () => {}, isDarkMode: false });

export default function ColorModeProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [isDarkMode, setIsDarkMode] = useState(() => typeof localStorage !== "undefined" && localStorage.getItem("darkMode") === "true");

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("darkMode", next.toString());
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const value = useMemo(() => ({ toggleDarkMode, isDarkMode }), [toggleDarkMode, isDarkMode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}
