import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";
import "@fontsource/russo-one"; // Defaults to weight 400.

export const theme = createTheme({
  palette: {
    primary: {
      main: "#20EEB0",
      dark: "#2C3060",
      light: "#5078E1",
    },
    secondary: {
      main: "#2C3060",
      dark: "#091B29",
      light: "#4E5A6B",
    },
    background: {
      white: "#FFFFFF",
      grey: "#98A0AC",
    },
  },
  typography: {
    fontFamily: "Inter, Russo-One",

    h1: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h2: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
    },
    h3: {
      fontSize: 24,
      fontWeight: 800,
      // lineHeight: 1.5,
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
});
