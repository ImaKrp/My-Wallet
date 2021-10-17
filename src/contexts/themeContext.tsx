import React, { createContext, useState } from "react";

import dark from "../global/themes/dark";
import light from "../global/themes/light";

export interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

export interface ITheme {
  title: string;

  color: {
    success: string;
    info: string;
    warning: string;

    card_success: string;
    card_info: string;
    card_warning: string;

    primary: string;
    secondary: string;
    terciary: string;

    white: string;
    black: string;
    gray: string;

    text: string;

    focus: string;

    card: string;
  };

  image: {
    select: string;
    wallet: string;
  };
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@myWallet:theme");

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@myWallet:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@myWallet:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
