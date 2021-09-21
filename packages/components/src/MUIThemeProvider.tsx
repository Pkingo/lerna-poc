import React from "react";
import { ThemeProviderProps } from "@material-ui/system";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MaterialUIThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUIThemeProvider;
