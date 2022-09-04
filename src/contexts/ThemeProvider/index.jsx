import * as React from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#df9856",
    },
    secondary: {
      main: "#202020",
    },
    grey: {
      400: "#adabac",
    },
  },
});

export default function ThemeProvider({ children }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
