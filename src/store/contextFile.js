import React, { useState, createContext } from "react";
export const AAA = createContext();

export default function BBB(props) {
  const [theme, setTheme] = useState("dark");
  const distribution = { theme, setTheme };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}

