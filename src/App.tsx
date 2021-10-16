import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { Layout } from "./Layout";
import { Dashboard } from "./Pages/App/Dashboard";
import { List } from "./Pages/App/List";
import { ThemeProvider } from "styled-components";
// import { useTheme } from "./hooks/useTheme";
import dark from "./global/themes/dark";
import light from "./global/themes/light";

export const App: React.FC = () => {
  // const { theme } = useTheme();
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyleProvider />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
    </>
  );
};
