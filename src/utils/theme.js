import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MUIThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    h1: {
      fontSize: "4rem",
      letterSpacing: "0.05em"
    },
    subtitle1: {
      fontFamily: "Roboto Mono"
    },
    subtitle2: {
      fontFamily: "Roboto Mono"
    }
  }
});

export const ThemeProvider = ({ theme, children }) => (
  <MUIThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  </MUIThemeProvider>
);


export default theme;