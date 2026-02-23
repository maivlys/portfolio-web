import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from "react";

export const GlobalContext = createContext(null);
export function GlobalState({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // useEffect(() => {
  //   const root = document.documentElement;

  //   root.classList.add("theme-transition");
  //   root.setAttribute("data-theme", theme);

  //   setTimeout(() => {
  //     root.classList.remove("theme-transition");
  //   }, 400); // match CSS duration
  // }, [theme]);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
