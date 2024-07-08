"use client";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { palette } from "./palette";
import { components } from "./compOverrides";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useParams } from "next/navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  const params = useParams();
  const direction = params?.locale === "en" ? "ltr" : "rtl";

  // Create theme options with correct structure
  const themeOptions = {
    direction,
    palette,
    components,
    typography: {
      fontFamily: params?.locale === "en" ? "neueMachina" : "Kalameh",
    },
  };

  // Create the theme using createTheme
  const theme = createTheme(themeOptions as ThemeOptions);

  return (
    <AppRouterCacheProvider
      options={
        direction === "rtl"
          ? {
              key: "muirtl",
              stylisPlugins: [prefixer, rtlPlugin],
            }
          : { key: "mui" }
      }
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Theme;
