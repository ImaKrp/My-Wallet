import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
// import { useTheme } from "./hooks/useTheme";
import dark from "./global/themes/dark";
import light from "./global/themes/light";

export const App: React.FC = () => {
  // const { theme } = useTheme();
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyleProvider />
        <Routes />
      </ThemeProvider>
    </>
  );
};
