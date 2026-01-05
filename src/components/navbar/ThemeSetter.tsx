import { useTernaryDarkMode } from "usehooks-ts";
import { useLayoutEffect } from "react";

const ThemeSetter = () => {
  const { isDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  useLayoutEffect(() => {
    document.body.className = `theme--${isDarkMode ? "dark" : "light"}`;
  }, [isDarkMode]);

  return (
    <div className="navbar_themes">
      <button
        className="themeButton lightT"
        aria-label="light theme"
        onClick={() => setTernaryDarkMode("light")}
      />
      <button
        className="themeButton darkT"
        aria-label="dark theme"
        onClick={() => setTernaryDarkMode("dark")}
      />
    </div>
  );
};

export default ThemeSetter;
