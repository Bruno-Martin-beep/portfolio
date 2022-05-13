import { useEffect, useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");
    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal);
      document.body.className = "theme--" + savedThemeLocal;
    } else {
      setTheme("light");
      document.body.className = "theme--light";
    }
  }, []);

  useEffect(() => {
    document.body.className = "theme--" + theme;
    localStorage.setItem("globalTheme", theme);
  }, [theme]);

  const handleTheme = (value) => {
    setTheme(value);
  };

  return handleTheme;
};

export default useTheme;