import React, { useContext } from "react";
import ThemeContext from "./Contexts/ThemeContext";

export const ThemeSetter = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="navbar_themes">
      <div className="lightT" onClick={() => setTheme("light")}></div>
      <div className="darkT" onClick={() => setTheme("dark")}></div>
    </div>
  );
};
