import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { useTheme } from "./hooks/useTheme";

export const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyleProvider />
        <Routes />
      </ThemeProvider>
    </>
  );
};
