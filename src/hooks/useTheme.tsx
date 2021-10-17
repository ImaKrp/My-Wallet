import { useContext } from "react";
import { ThemeContext, IThemeContext } from "../contexts/themeContext";

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}
