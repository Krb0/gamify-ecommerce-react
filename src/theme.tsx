import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/ibm-plex-sans";

const breakpoints = createBreakpoints({
  uxs: "300px",
  xs: "420px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

export const fonts = {
  body: "IBM Plex Sans, sans-serif",
};

const theme = extendTheme({
  colors: {
    dark: "#585858",
    green: "rgba(0,80,0,.6)",
  },
  fonts,
  breakpoints,
});

export default theme;
