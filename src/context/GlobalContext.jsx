import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const GlobalContext = createContext(null);
export function GlobalState({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <GlobalContext.Provider value={{ theme, setTheme, scrollTo }}>
      {children}
    </GlobalContext.Provider>
  );
}
