import React, { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext();
export const useTheme = () => useContext(Ctx);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem("ies-theme");
    return s ? s === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("ies-theme", dark ? "dark" : "light");
  }, [dark]);

  return <Ctx.Provider value={{ dark, toggle: () => setDark(p => !p) }}>{children}</Ctx.Provider>;
};
