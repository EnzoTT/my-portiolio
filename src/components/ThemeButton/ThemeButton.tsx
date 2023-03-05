import { useTheme } from "../../hooks/useTheme";
import "./ThemeButton.css";
function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <>
      {theme === "light" ? (
        <button className="theme-button" onClick={() => changeTheme("dark")}>
          DARK MODE
        </button>
      ) : (
        <button className="theme-button" onClick={() => changeTheme("light")}>
          LIGHT MODE
        </button>
      )}
    </>
  );
}

export default ThemeButton;
