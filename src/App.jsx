import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
const App = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default App;
